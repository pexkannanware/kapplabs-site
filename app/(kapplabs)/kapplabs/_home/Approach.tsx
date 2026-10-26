"use client";

import { motion } from "framer-motion";
import { Check, FileText, MessagesSquare, Rocket, Wrench } from "lucide-react";

import { APPROACH, COMMITMENTS } from "../showcase";
import Chapter from "./Chapter";
import Reveal from "./Reveal";
import styles from "./Home.module.css";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const ICONS = [MessagesSquare, FileText, Wrench, Rocket];

/* A journey of four cards on a path, with a pulse of light travelling along it. */
export default function Approach() {
  return (
    <section className={`${styles.section} ${styles.journeySection}`} id="approach">
      <div className={styles.wrap}>
        <Chapter
          index="07"
          label="How we work"
          title="Simple, transparent, built around you"
          lead="You don't need to be technical to work with us. Here is what happens after you get in touch."
        />

        <div className={styles.journey}>
          <span className={styles.journeyPath} aria-hidden="true">
            <i />
          </span>
          <ol className={styles.journeyList}>
            {APPROACH.map((step, index) => {
              const Icon = ICONS[index];
              return (
                <motion.li
                  key={step.step}
                  className={styles.journeyCard}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: EASE }}
                >
                  <span className={styles.journeyNode} aria-hidden="true">
                    <Icon size={24} strokeWidth={1.75} />
                  </span>
                  <span className={styles.journeyWhen}>{step.when}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <span className={styles.journeyNo} aria-hidden="true">
                    {step.step}
                  </span>
                </motion.li>
              );
            })}
          </ol>
        </div>

        <Reveal className={styles.commitments}>
          <p className={styles.commitmentsTitle}>What you can expect from us</p>
          <ul>
            {COMMITMENTS.map((item) => (
              <li key={item}>
                <span aria-hidden="true">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
