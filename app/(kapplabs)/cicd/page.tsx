import Link from "next/link";

import KapplabsShell from "@/app/(kapplabs)/kapplabs/KapplabsShell";
import styles from "@/app/(kapplabs)/kapplabs/KapplabsClientPage.module.css";

export const metadata = {
  title: "CI/CD verification · Kapplabs",
  description: "A test page for verifying the Kapplabs deployment pipeline.",
  robots: { index: false, follow: false },
};

export default function CicdPage() {
  return (
    <KapplabsShell>
      <section className={styles.pageIntro}>
        <p className={styles.pageEyebrow}>Deployment verification</p>
        <h1>CI/CD verification</h1>
        <p>
          This dummy page verifies automatic deployment from the main branch
          through GitHub Actions to the DigitalOcean Droplet.
        </p>
        <p>Verification marker: kapplabs-cicd-check-001</p>
      </section>
      <div className={styles.detailCtaRow}>
        <Link className={styles.btnSecondary} href="/">
          Back to home
        </Link>
      </div>
    </KapplabsShell>
  );
}
