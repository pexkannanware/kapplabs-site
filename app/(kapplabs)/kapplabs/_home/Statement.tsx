"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

import { STATEMENT, STATEMENT_HIGHLIGHT_FROM } from "../showcase";
import styles from "./Home.module.css";

function Word({ word, progress, range, accent }: { word: string; progress: MotionValue<number>; range: [number, number]; accent: boolean }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className={accent ? styles.statementAccent : undefined}>
      {word}{" "}
    </motion.span>
  );
}

/* Words light up one by one as the paragraph scrolls through the viewport. */
export default function Statement() {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });

  const words = STATEMENT.split(" ");
  const accentStart = STATEMENT.slice(0, STATEMENT.indexOf(STATEMENT_HIGHLIGHT_FROM)).split(" ").length - 1;

  return (
    <section className={styles.statement} aria-label="Why Kapplabs exists">
      <div className={styles.wrap}>
        <p className={styles.statementLabel}>
          <span>01</span>The problem
        </p>
        <p ref={ref} className={styles.statementText}>
          {words.map((word, i) => (
            <Word key={i} word={word} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} accent={i >= accentStart} />
          ))}
        </p>
      </div>
    </section>
  );
}
