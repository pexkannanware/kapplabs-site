import Link from "next/link";

import KapplabsShell from "@/app/(kapplabs)/kapplabs/KapplabsShell";
import styles from "@/app/(kapplabs)/kapplabs/KapplabsClientPage.module.css";

export const metadata = {
  title: "Contact · Kapplabs",
  description: "Request a briefing with the Kapplabs team.",
};

export default function ContactPage() {
  return (
    <KapplabsShell>
      <section className={styles.pageIntro}>
        <p className={styles.pageEyebrow}>Contact</p>
        <h1>Talk to our founders</h1>
        <p>For demos, pilots, and early-access discussions, reach out and we will respond quickly.</p>
      </section>

      <section className={styles.contactPanel}>
        <div className={styles.contactCard}>
          <h2>Request a briefing</h2>
          <p>Share your workflow context and we will help identify the right Kapplabs product fit.</p>
          <a
            className={styles.btnPrimary}
            href="mailto:kapplabs@kannanware.com?subject=Kapplabs%20%E2%80%94%20Request%20briefing"
          >
            Email kapplabs@kannanware.com
          </a>
        </div>
        <div className={styles.contactCard}>
          <h2>Explore products</h2>
          <p>See live Kapplabs products or review the platform story before you reach out.</p>
          <div className={styles.contactLinks}>
            <Link className={styles.cardLink} href="/aram">
              ARAM ERP →
            </Link>
            <Link className={styles.cardLink} href="/platform-thesis">
              Platform thesis →
            </Link>
            <Link className={styles.cardLink} href="/launch">
              Early access →
            </Link>
          </div>
        </div>
      </section>

      <div className={styles.detailCtaRow}>
        <Link className={styles.btnSecondary} href="/">
          Back to home
        </Link>
      </div>
    </KapplabsShell>
  );
}
