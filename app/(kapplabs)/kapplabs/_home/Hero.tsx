import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { TRUST_POINTS } from "../showcase";
import HeroBot from "./HeroBot";
import styles from "./Home.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.heroBackdrop} aria-hidden="true" />
      <div className={`${styles.wrap} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>
            <span>SaaS &amp; AI solutions</span>
            <span className={styles.kickerRule} aria-hidden="true" />
            <span>A Kannanware company</span>
          </p>
          <h1 className={styles.heroTitle}>
            AI-powered SaaS, <span className={styles.heroAccent}>built for how you work.</span>
          </h1>
          <p className={styles.heroLead}>
            Kapplabs builds intelligent software products, AI agents and custom platforms that help businesses work faster, decide better and
            grow without the busywork.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.btnPrimary} href="/contact">
              Book a call <ArrowRight size={16} />
            </Link>
            <Link className={styles.btnSecondary} href="#products">
              Explore our products
            </Link>
          </div>
          <ul className={styles.trust}>
            {TRUST_POINTS.map((point) => (
              <li key={point}>
                <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.heroVisual}>
          <HeroBot />
        </div>
      </div>
    </section>
  );
}
