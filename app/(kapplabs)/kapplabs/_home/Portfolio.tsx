"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { PORTFOLIO } from "../showcase";
import Chapter from "./Chapter";
import Reveal from "./Reveal";
import styles from "./Home.module.css";

/* Panels widen on hover or focus; each opens the live site in a new tab. */
export default function Portfolio() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.wrap}>
        <Chapter
          index="06"
          label="Portfolio"
          title="Selected work"
          lead="Sites and platforms we have designed and built for clients and for ourselves. Hover to explore, click to visit the live site."
        />

        <Reveal className={styles.family}>
          {PORTFOLIO.map((item, index) => {
            const open = active === index;
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                aria-label={`${item.title}: ${item.summary} Opens in a new tab.`}
              >
                <img src={item.src} alt="" loading="lazy" decoding="async" />
                <span className={styles.panelShade} aria-hidden="true" />
                <span className={styles.panelIndex}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.panelSide} aria-hidden="true">
                  {item.title}
                </span>
                <span className={styles.panelContent}>
                  <span className={styles.panelAudience}>{item.category}</span>
                  <strong>{item.title}</strong>
                  <span className={styles.panelSummary}>{item.summary}</span>
                  <span className={styles.panelCta}>
                    Visit site <ArrowUpRight size={16} />
                  </span>
                </span>
              </a>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
