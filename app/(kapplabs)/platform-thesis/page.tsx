import Link from "next/link";

import { PLATFORM_THESIS_DEPTH } from "@/app/(kapplabs)/kapplabs/content";
import KapplabsShell from "@/app/(kapplabs)/kapplabs/KapplabsShell";
import styles from "@/app/(kapplabs)/kapplabs/KapplabsClientPage.module.css";

export default function PlatformThesisPage() {
  return (
    <KapplabsShell>
      <section className={styles.pageIntro}>
        <p className={styles.pageEyebrow}>Platform thesis</p>
        <h1>From services-led growth to IP-led differentiation</h1>
        <p>{PLATFORM_THESIS_DEPTH.intro}</p>
      </section>

      <section className={`${styles.thesisSection} ${styles.thesisSectionStandalone}`}>
        <div className={styles.thesisGrid}>
          {PLATFORM_THESIS_DEPTH.cards.map((item) => (
            <article key={item.number} className={styles.detailCard}>
              <div className={styles.thesisNumber}>{item.number}</div>
              <h3>{item.title}</h3>
              <p className={styles.detailSummary}>{item.body}</p>
              <ul className={styles.detailList}>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.detailBlock}>
        <h2 className={styles.detailHeading}>Services-led vs IP-led</h2>
        <div className={styles.contrastGrid}>
          {PLATFORM_THESIS_DEPTH.contrasts.map((item) => (
            <article key={item.label} className={styles.contrastCard}>
              <span className={styles.contrastLabel}>{item.label}</span>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.detailBlock}>
        <h2 className={styles.detailHeading}>Products in motion</h2>
        <div className={styles.productList}>
          {PLATFORM_THESIS_DEPTH.products.map((product) => (
            <Link key={product.name} className={styles.productRow} href={product.href}>
              <span className={styles.productName}>{product.name}</span>
              <span className={styles.productNote}>{product.note}</span>
              <span className={styles.cardLink}>View product →</span>
            </Link>
          ))}
        </div>
        <div className={styles.thesisFooter}>
          <span className={styles.pillBadge}>2 AI + domain products in motion</span>
          <span className={styles.thesisCycle}>ship → learn → harden → scale</span>
        </div>
      </section>

      <div className={styles.detailCtaRow}>
        <Link className={styles.btnPrimary} href="/model">
          See operating model →
        </Link>
        <Link className={styles.btnSecondary} href="/">
          Back to home
        </Link>
      </div>
    </KapplabsShell>
  );
}
