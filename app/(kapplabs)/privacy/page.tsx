import Link from "next/link";

import { PRIVACY_SECTIONS } from "@/app/(kapplabs)/kapplabs/content";
import KapplabsShell from "@/app/(kapplabs)/kapplabs/KapplabsShell";
import styles from "@/app/(kapplabs)/kapplabs/KapplabsClientPage.module.css";

export const metadata = {
  title: "Privacy · Kapplabs",
  description: "How Kapplabs handles your data and privacy.",
};

export default function PrivacyPage() {
  return (
    <KapplabsShell>
      <section className={styles.pageIntro}>
        <p className={styles.pageEyebrow}>Legal</p>
        <h1>Privacy policy</h1>
        <p>How Kapplabs collects, uses, and protects information across our products and early-access programs.</p>
      </section>

      <div className={styles.staticSections}>
        {PRIVACY_SECTIONS.map((section) => (
          <section key={section.title} className={styles.staticSection}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>

      <div className={styles.detailCtaRow}>
        <Link className={styles.btnSecondary} href="/">
          Back to home
        </Link>
      </div>
    </KapplabsShell>
  );
}
