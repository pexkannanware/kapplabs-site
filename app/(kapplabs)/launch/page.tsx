import Link from "next/link";

import { LAUNCH_DEPTH } from "@/app/(kapplabs)/kapplabs/content";
import KapplabsShell from "@/app/(kapplabs)/kapplabs/KapplabsShell";
import styles from "@/app/(kapplabs)/kapplabs/KapplabsClientPage.module.css";

export default function LaunchPage() {
  return (
    <KapplabsShell>
      <section className={`${styles.ctaSection} ${styles.ctaSectionStandalone}`}>
        <p className={styles.pageEyebrowLight}>Launch</p>
        <h1>Move from fragmented operations to AI-native velocity</h1>
        <p>{LAUNCH_DEPTH.intro}</p>
        <div className={styles.ctaButtons}>
          <Link className={styles.btnPrimaryWhite} href="/aram">
            View ARAM ERP →
          </Link>
          <Link className={styles.btnOutlineWhite} href="/contact">
            Talk to founders
          </Link>
        </div>
      </section>

      <section className={styles.detailBlock}>
        <h2 className={styles.detailHeading}>Who early access is for</h2>
        <div className={styles.detailGrid}>
          {LAUNCH_DEPTH.audiences.map((item) => (
            <article key={item.title} className={styles.detailCard}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.detailBlock}>
        <h2 className={styles.detailHeading}>What you get</h2>
        <ul className={styles.principleList}>
          {LAUNCH_DEPTH.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </section>

      <section className={styles.detailBlock}>
        <h2 className={styles.detailHeading}>Onboarding path</h2>
        <div className={styles.detailSteps}>
          {LAUNCH_DEPTH.onboarding.map((item) => (
            <article key={item.step} className={styles.detailStepCard}>
              <div className={styles.stepNumber}>{item.step}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className={styles.detailCtaRow}>
        <Link className={styles.btnPrimary} href="/contact">
          Request briefing →
        </Link>
        <Link className={styles.btnSecondary} href="/">
          Back to home
        </Link>
      </div>
    </KapplabsShell>
  );
}
