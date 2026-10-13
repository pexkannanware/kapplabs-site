import Link from "next/link";

import { MODEL_DEPTH } from "@/app/(kapplabs)/kapplabs/content";
import KapplabsShell from "@/app/(kapplabs)/kapplabs/KapplabsShell";
import styles from "@/app/(kapplabs)/kapplabs/KapplabsClientPage.module.css";

export default function ModelPage() {
  return (
    <KapplabsShell>
      <section className={styles.pageIntro}>
        <p className={styles.pageEyebrow}>Model</p>
        <h1>How Kapplabs turns operations into product velocity</h1>
        <p>{MODEL_DEPTH.intro}</p>
      </section>

      <section className={styles.detailBlock}>
        <h2 className={styles.detailHeading}>Four-step operating loop</h2>
        <div className={styles.detailSteps}>
          {MODEL_DEPTH.steps.map((item) => (
            <article key={item.step} className={styles.detailStepCard}>
              <div className={styles.stepNumber}>{item.step}</div>
              <div>
                <h3>{item.title}</h3>
                <p className={styles.detailSummary}>{item.body}</p>
                <ul className={styles.detailList}>
                  {item.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.detailBlock}>
        <h2 className={styles.detailHeading}>Studio credibility pillars</h2>
        <div className={styles.detailGrid}>
          {MODEL_DEPTH.pillars.map((item) => (
            <article key={item.title} className={styles.detailCard}>
              <div className={styles.studioIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p className={styles.detailSummary}>{item.body}</p>
              <p className={styles.detailNote}>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.detailBlock}>
        <h2 className={styles.detailHeading}>Delivery principles</h2>
        <ul className={styles.principleList}>
          {MODEL_DEPTH.principles.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </section>

      <div className={styles.detailCtaRow}>
        <Link className={styles.btnPrimary} href="/edge">
          Why we win in production →
        </Link>
        <Link className={styles.btnSecondary} href="/">
          Back to home
        </Link>
      </div>
    </KapplabsShell>
  );
}
