import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

import { SOLUTIONS } from "../showcase";
import Chapter from "./Chapter";
import Reveal from "./Reveal";
import styles from "./Home.module.css";

export default function Solutions() {
  return (
    <section className={`${styles.section} ${styles.sectionMuted}`} id="solutions">
      <div className={styles.wrap}>
        <Chapter
          index="03"
          label="Problems we solve"
          title="Sound familiar? We can fix that."
          lead={
            <>
              Common problems we solve for businesses of every kind and size, with software and AI built around them. Don&rsquo;t see yours?{" "}
              <Link href="/contact" className={styles.inlineLink}>
                Tell us about it
              </Link>
            </>
          }
        />

        <div className={styles.solutions}>
          {SOLUTIONS.map((item, index) => (
            <Reveal key={item.area} delay={(index % 3) * 0.06} className={styles.solution}>
              <div className={styles.solutionProblem}>
                <span className={styles.solutionArea}>{item.area}</span>
                <p>&ldquo;{item.problem}&rdquo;</p>
              </div>
              <span className={styles.solutionArrow} aria-hidden="true">
                <ArrowDown size={14} />
              </span>
              <div className={styles.solutionFix}>
                <span className={styles.solutionLabel}>What we build</span>
                <p>{item.solution}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.solutionsCta}>
          <p>Every business is different. We start by understanding yours.</p>
          <Link className={styles.btnPrimary} href="/contact">
            Book a call <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
