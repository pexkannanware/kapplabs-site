import Link from "next/link";

import { TERMS_SECTIONS } from "@/app/(kapplabs)/kapplabs/content";
import KapplabsShell from "@/app/(kapplabs)/kapplabs/KapplabsShell";
import styles from "@/app/(kapplabs)/kapplabs/KapplabsClientPage.module.css";

export const metadata = {
  title: "Terms · Kapplabs",
  description: "Terms of use for Kapplabs products and services.",
};

export default function TermsPage() {
  return (
    <KapplabsShell>
      <section className={styles.pageIntro}>
        <p className={styles.pageEyebrow}>Legal</p>
        <h1>Terms of use</h1>
        <p>Terms governing use of Kapplabs products, beta programs, and related services.</p>
      </section>

      <div className={styles.staticSections}>
        {TERMS_SECTIONS.map((section) => (
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
