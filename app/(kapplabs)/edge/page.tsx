import Link from "next/link";

import { EDGE_DEPTH } from "@/app/(kapplabs)/kapplabs/content";
import KapplabsShell from "@/app/(kapplabs)/kapplabs/KapplabsShell";
import styles from "@/app/(kapplabs)/kapplabs/KapplabsClientPage.module.css";

export default function EdgePage() {
  return (
    <KapplabsShell>
      <section className={styles.pageIntro}>
        <p className={styles.pageEyebrow}>Edge</p>
        <h1>Why Kapplabs wins in production environments</h1>
        <p>{EDGE_DEPTH.intro}</p>
      </section>

      <section className={styles.detailBlock}>
        <h2 className={styles.detailHeading}>Production advantages</h2>
        <div className={styles.detailAdvantages}>
          {EDGE_DEPTH.advantages.map((item) => (
            <article key={item.title} className={styles.detailAdvantageCard}>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
              <p className={styles.detailExample}>
                <span>Example: </span>
                {item.example}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.detailBlock}>
        <h2 className={styles.detailHeading}>Kapplabs vs generic AI tooling</h2>
        <div className={styles.compareTable}>
          <div className={styles.compareHeader}>
            <span>Generic approach</span>
            <span>Kapplabs approach</span>
          </div>
          {EDGE_DEPTH.vsGeneric.map((row) => (
            <div key={row.generic} className={styles.compareRow}>
              <span>{row.generic}</span>
              <span>{row.kapplabs}</span>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.detailCtaRow}>
        <Link className={styles.btnPrimary} href="/launch">
          Explore early access →
        </Link>
        <Link className={styles.btnSecondary} href="/">
          Back to home
        </Link>
      </div>
    </KapplabsShell>
  );
}
