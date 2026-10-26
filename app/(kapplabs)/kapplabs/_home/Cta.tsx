import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Reveal from "./Reveal";
import styles from "./Home.module.css";

export default function Cta() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaGlow} aria-hidden="true" />
      <div className={`${styles.wrap} ${styles.ctaInner}`}>
        <Reveal>
          <p className={styles.ctaLabel}>
            <span>09</span>Next step
          </p>
          <h2 className={styles.ctaTitle}>Tell us what slows your business down.</h2>
          <p className={styles.ctaLead}>Book a call with our team. We will understand how you work today and suggest the simplest way to fix it, with no obligation.</p>
          <div className={styles.ctaActions}>
            <Link className={styles.btnLight} href="/contact">
              Book a call <ArrowRight size={16} />
            </Link>
            <a className={styles.btnGhostLight} href="mailto:kapplabs@kannanware.com">
              kapplabs@kannanware.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
