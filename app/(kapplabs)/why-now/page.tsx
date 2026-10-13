import Link from "next/link";

import { WHY_NOW_DEPTH } from "@/app/(kapplabs)/kapplabs/content";
import KapplabsShell from "@/app/(kapplabs)/kapplabs/KapplabsShell";
import styles from "@/app/(kapplabs)/kapplabs/KapplabsClientPage.module.css";

export default function WhyNowPage() {
  return (
    <KapplabsShell>
      <section className={styles.pageIntro}>
        <p className={styles.pageEyebrow}>Why now</p>
        <h1>From fragmented workflows to AI system of record</h1>
        <p>{WHY_NOW_DEPTH.intro}</p>
      </section>

      <div className={styles.detailProse}>
        {WHY_NOW_DEPTH.narrative.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <section className={styles.detailBlock}>
        <h2 className={styles.detailHeading}>Market signals we see in every engagement</h2>
        <ul className={styles.detailList}>
          {WHY_NOW_DEPTH.signals.map((signal) => (
            <li key={signal}>{signal}</li>
          ))}
        </ul>
      </section>

      <section className={styles.detailBlock}>
        <h2 className={styles.detailHeading}>Three transformations, in depth</h2>
        <div className={styles.detailGrid}>
          {WHY_NOW_DEPTH.transformations.map((item) => (
            <article key={item.title} className={styles.detailCard}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p className={styles.detailSummary}>{item.summary}</p>
              <ul className={styles.detailList}>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <blockquote className={styles.quoteBlock}>
        <p className={styles.quoteText}>
          &ldquo;The inflection point is real. Workflow gaps repeat across organizations — product IP can compound clarity, controls, and speed with
          every release.&rdquo;
        </p>
        <footer className={styles.quoteAttribution}>— Kapplabs · product &amp; engineering</footer>
      </blockquote>

      <div className={styles.detailCtaRow}>
        <Link className={styles.btnPrimary} href="/platform-thesis">
          Read platform thesis →
        </Link>
        <Link className={styles.btnSecondary} href="/">
          Back to home
        </Link>
      </div>
    </KapplabsShell>
  );
}
