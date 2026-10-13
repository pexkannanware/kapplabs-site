import Link from "next/link";

import {
  FEATURE_PILLARS,
  OPERATING_STEPS,
  STUDIO_PILLARS,
  THESIS_CARDS,
  TRANSFORMATIONS,
  WIN_CARDS,
} from "./content";
import KapplabsShell from "./KapplabsShell";
import styles from "./KapplabsClientPage.module.css";

export default function KapplabsHomePage() {
  return (
    <KapplabsShell>
      <section className={styles.hero} id="top">
        <h1>
          Your AI-powered SaaS partner for{" "}
          <span className={styles.highlight}>day-to-day, real-time challenges</span>
        </h1>
        <p className={styles.heroDescription}>
          Kapplabs helps teams save time, respond faster, and stay ahead of growth pressure with AI-enabled products designed for real operating
          challenges, not slide-deck scenarios.
        </p>
        <div className={styles.heroButtons}>
          <Link className={styles.btnPrimary} href="/aram">
            View Aram ERP →
          </Link>
          <Link className={styles.btnSecondary} href="/contact">
            Talk to our founders
          </Link>
        </div>
        <div className={styles.insightBadge}>
          <span aria-hidden="true">✓</span>
          Built with direct customer insight from transformation work
        </div>
      </section>

      <div className={styles.featureGrid}>
        {FEATURE_PILLARS.map((item) => (
          <article key={item.title} className={styles.featureCard}>
            <div className={styles.featureIcon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>

      <section id="story">
        <div className={styles.sectionHeader}>
          <h2>From fragmented workflows to AI system of record</h2>
          <p>We replace spreadsheets, approvals, and manual reconciliation with a single auditable layer</p>
          <Link className={styles.sectionDeepLink} href="/why-now">
            Explore in depth →
          </Link>
        </div>
        <div className={styles.grid3}>
          {TRANSFORMATIONS.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <Link className={styles.cardLink} href="/why-now">
                {item.link}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.thesisSection} id="thesis">
        <span className={styles.thesisBadge}>Platform thesis</span>
        <h2 className={styles.thesisTitle}>From services-led growth to IP-led differentiation</h2>
        <div className={styles.thesisGrid}>
          {THESIS_CARDS.map((item) => (
            <article key={item.number} className={styles.thesisCard}>
              <div className={styles.thesisNumber}>{item.number}</div>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className={styles.thesisFooter}>
          <span className={styles.pillBadge}>2 AI + domain products in motion</span>
          <Link className={styles.sectionDeepLinkInline} href="/platform-thesis">
            Explore in depth →
          </Link>
          <span className={styles.thesisCycle}>ship → learn → harden → scale</span>
        </div>
      </section>

      <section>
        <div className={styles.sectionHeader}>
          <h2>What makes this product division credible</h2>
          <p>Four pillars of enterprise-grade AI workflow infrastructure</p>
        </div>
        <div className={styles.studioGrid}>
          {STUDIO_PILLARS.map((item) => (
            <article key={item.title} className={styles.studioCard}>
              <div className={styles.studioIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="model">
        <div className={styles.sectionHeader}>
          <h2>How Kapplabs turns operations into product velocity</h2>
          <Link className={styles.sectionDeepLink} href="/model">
            Explore in depth →
          </Link>
        </div>
        <div className={styles.stepsGrid}>
          {OPERATING_STEPS.map((item) => (
            <article key={item.step} className={styles.stepCard}>
              <div className={styles.stepNumber}>{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="edge">
        <div className={styles.sectionHeader}>
          <h2>Why Kapplabs wins in production environments</h2>
          <Link className={styles.sectionDeepLink} href="/edge">
            Explore in depth →
          </Link>
        </div>
        <div className={styles.winGrid}>
          {WIN_CARDS.map((item) => (
            <article key={item.title} className={styles.winCard}>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
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

      <section className={styles.ctaSection} id="launch">
        <h2>Move from fragmented operations to AI-native velocity</h2>
        <p>Early access for teams that need real-time governance and auditable intelligence.</p>
        <div className={styles.ctaButtons}>
          <Link className={styles.btnPrimaryWhite} href="/aram">
            View Aram ERP →
          </Link>
          <Link className={styles.btnOutlineWhite} href="/contact">
            Talk to founders
          </Link>
        </div>
        <Link className={styles.sectionDeepLinkLight} href="/launch">
          See launch details →
        </Link>
      </section>
    </KapplabsShell>
  );
}
