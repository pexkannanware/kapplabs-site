"""Exercise deployment and recovery without Docker or network access.

Run with: python3 -m unittest discover -s tests -v
"""
import json
import os
from pathlib import Path
import subprocess
import tempfile
import unittest


ROOT = Path(__file__).resolve().parents[1]
REVISION = "a" * 40
MOCK = r'''#!/usr/bin/env python3
import json, os, pathlib, sys
args = sys.argv[1:]
name = pathlib.Path(sys.argv[0]).name
state = pathlib.Path(os.environ["MOCK_STATE"])
with (state / "calls").open("a") as log:
    log.write(json.dumps([name, *args]) + "\n")
mode = os.environ["MOCK_MODE"]
if name == "docker":
    if args[0] == "inspect":
        if mode == "first-failure":
            sys.exit(1)
        if args[2] == "{{.Image}}":
            print("sha256:previous")
        else:
            print("/some/other/project" if mode == "wrong-owner" else os.environ["MOCK_APP"])
    if mode == "bad-proxy" and args[-2:] == ["nginx", "-t"]:
        sys.exit(1)
    if "up" in args and mode in ("unhealthy", "first-failure"):
        marker = state / "up-failed"
        if not marker.exists():
            marker.touch()
            sys.exit(1)
if name == "curl" and mode == "public-failure":
    sys.exit(22)
'''


class DeploymentTests(unittest.TestCase):
    def run_deploy(self, mode):
        temp = tempfile.TemporaryDirectory()
        self.addCleanup(temp.cleanup)
        base = Path(temp.name).resolve()
        app, proxy, release, bin_dir = [base / name for name in ("app", "proxy", "release", "bin")]
        for directory in (app, proxy, release, bin_dir):
            directory.mkdir()
        (app / "docker-compose.yml").write_text("previous compose\n")
        (app / ".deployed-revision").write_text("previous revision\n")
        (release / "docker-compose.production.yml").write_text("new compose\n")
        (release / "image.tar.gz").touch()
        for command in ("docker", "curl", "flock"):
            path = bin_dir / command
            path.write_text(MOCK)
            path.chmod(0o755)
        env = dict(os.environ, PATH=f"{bin_dir}:{os.environ['PATH']}",
                   MOCK_STATE=str(base), MOCK_APP=str(app), MOCK_MODE=mode)
        result = subprocess.run(
            ["bash", str(ROOT / "scripts/deploy-digitalocean.sh"),
             str(release), str(app), str(proxy), REVISION],
            env=env, capture_output=True, text=True, timeout=10,
        )
        calls = [json.loads(line) for line in (base / "calls").read_text().splitlines()]
        return result, app, release, calls

    def test_success_records_revision_and_cleans_release(self):
        result, app, release, calls = self.run_deploy("success")
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual((app / ".deployed-revision").read_text().strip(), REVISION)
        self.assertEqual((app / "docker-compose.yml").read_text(), "new compose\n")
        self.assertFalse(release.exists())
        self.assertTrue(any(call[-3:] == ["nginx", "-s", "reload"] for call in calls))

    def test_container_failure_restores_previous_release(self):
        self.assert_rollback("unhealthy")

    def test_public_failure_restores_previous_release(self):
        self.assert_rollback("public-failure")

    def assert_rollback(self, mode):
        result, app, release, calls = self.run_deploy(mode)
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual((app / "docker-compose.yml").read_text(), "previous compose\n")
        self.assertEqual((app / ".deployed-revision").read_text(), "previous revision\n")
        self.assertIn(["docker", "tag", "sha256:previous", "kapplabs-web:latest"], calls)
        self.assertEqual(sum("up" in call for call in calls), 2)
        self.assertFalse((release / "image.tar.gz").exists())

    def test_first_failure_removes_failed_container(self):
        result, app, release, calls = self.run_deploy("first-failure")
        self.assertNotEqual(result.returncode, 0)
        self.assertTrue(any(call[-4:] == ["rm", "--stop", "--force", "web"] for call in calls))
        self.assertFalse((release / "image.tar.gz").exists())

    def test_foreign_container_is_not_replaced(self):
        self.assert_preflight_refusal("wrong-owner")

    def test_invalid_proxy_is_not_replaced(self):
        self.assert_preflight_refusal("bad-proxy")

    def assert_preflight_refusal(self, mode):
        result, app, release, calls = self.run_deploy(mode)
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual((app / "docker-compose.yml").read_text(), "previous compose\n")
        self.assertFalse(any("up" in call or "load" in call for call in calls))
        self.assertFalse((release / "image.tar.gz").exists())


if __name__ == "__main__":
    unittest.main()
