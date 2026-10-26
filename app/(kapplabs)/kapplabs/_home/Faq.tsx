import { Plus } from "lucide-react";

import { FAQ } from "../showcase";
import Chapter from "./Chapter";
import Reveal from "./Reveal";
import styles from "./Home.module.css";

export default function Faq() {
  return (
    <section className={`${styles.section} ${styles.sectionMuted}`} id="faq">
      <div className={styles.wrap}>
        <Chapter
          index="08"
          label="Questions"
          title="Questions business owners ask us"
          lead={
            <>
              Anything else? Write to{" "}
              <a href="mailto:kapplabs@kannanware.com" className={styles.inlineLink}>
                kapplabs@kannanware.com
              </a>
            </>
          }
        />

        <Reveal className={styles.faqList}>
          {FAQ.map((item, index) => (
            <details key={item.q} className={styles.faqItem} open={index === 0}>
              <summary>
                <span className={styles.faqNo}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.faqQ}>{item.q}</span>
                <Plus size={18} aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
