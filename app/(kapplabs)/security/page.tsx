import Link from "next/link";

import { SECURITY_DEPTH } from "@/app/(kapplabs)/kapplabs/content";
import KapplabsShell from "@/app/(kapplabs)/kapplabs/KapplabsShell";
import styles from "@/app/(kapplabs)/kapplabs/KapplabsClientPage.module.css";

export const metadata = {
  title: "Security · Kapplabs",
  description: "Security-first architecture, audit trails, and safe AI by default.",
};

export default function SecurityPage() {
  return (
    <KapplabsShell>
      <section className={styles.pageIntro}>
        <p className={styles.pageEyebrow}>Security</p>
        <h1>Security-first architecture</h1>
        <p>{SECURITY_DEPTH.intro}</p>
      </section>

      <section className={styles.detailBlock}>
        <div className={styles.detailGrid}>
          {SECURITY_DEPTH.pillars.map((item) => (
            <article key={item.title} className={styles.detailCard}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.detailBlock}>
        <h2 className={styles.detailHeading}>Security practices</h2>
        <ul className={styles.principleList}>
          {SECURITY_DEPTH.practices.map((practice) => (
            <li key={practice}>{practice}</li>
          ))}
        </ul>
      </section>

      <div className={styles.detailCtaRow}>
        <Link className={styles.btnPrimary} href="/contact">
          Discuss security requirements →
        </Link>
        <Link className={styles.btnSecondary} href="/edge">
          Why we win in production →
        </Link>
      </div>
    </KapplabsShell>
  );
}
