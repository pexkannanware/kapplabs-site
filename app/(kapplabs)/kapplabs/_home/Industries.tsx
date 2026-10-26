"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Factory, GraduationCap, Landmark, ShoppingBag, Sparkles, Stethoscope, Truck } from "lucide-react";

import { INDUSTRIES } from "../showcase";
import Chapter from "./Chapter";
import Reveal from "./Reveal";
import styles from "./Home.module.css";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const ICONS = {
  factory: Factory,
  store: ShoppingBag,
  health: Stethoscope,
  education: GraduationCap,
  finance: Landmark,
  logistics: Truck,
  services: BriefcaseBusiness,
} as const;

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

/* Pick an industry on the left; the right shows an example dashboard we could build for it. Auto-cycles until touched. */
export default function Industries() {
  const [active, setActive] = useState(0);
  const [touched, setTouched] = useState(false);
  const industry = INDUSTRIES[active];
  const Icon = ICONS[industry.icon];

  useEffect(() => {
    if (touched || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((i) => (i + 1) % INDUSTRIES.length), 3800);
    return () => window.clearInterval(timer);
  }, [touched]);

  const pick = (index: number) => {
    setTouched(true);
    setActive(index);
  };

  return (
    <section className={styles.section} id="industries">
      <div className={styles.wrap}>
        <Chapter
          index="04"
          label="Industries"
          title="Built for any business"
          lead="We have no single niche. Pick an industry to see the kind of software we could build for it."
        />

        <Reveal className={styles.explorer}>
          <div className={styles.explorerList} role="tablist" aria-label="Industries">
            {INDUSTRIES.map((item, index) => {
              const ItemIcon = ICONS[item.icon];
              const on = index === active;
              return (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  className={`${styles.explorerItem} ${on ? styles.explorerItemOn : ""}`}
                  style={{ "--tone": item.tone } as React.CSSProperties}
                  onMouseEnter={() => pick(index)}
                  onFocus={() => pick(index)}
                  onClick={() => pick(index)}
                >
                  <span className={styles.explorerIcon}>
                    <ItemIcon size={18} strokeWidth={1.8} />
                  </span>
                  <span className={styles.explorerName}>{item.name}</span>
                  {on && !touched && (
                    <motion.span
                      key={`t${active}`}
                      className={styles.explorerTimer}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 3.8, ease: "linear" }}
                    />
                  )}
                </button>
              );
            })}
            <Link href="/contact" className={styles.explorerAny}>
              Your industry? We build for any business <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className={styles.explorerStage} style={{ "--tone": industry.tone } as React.CSSProperties}>
            <span className={styles.explorerGlow} aria-hidden="true" />
            <AnimatePresence mode="wait">
              <motion.div
                key={industry.name}
                className={styles.dash}
                initial={{ opacity: 0, y: 24, rotateX: 8 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -16, rotateX: -6 }}
                transition={{ duration: 0.5, ease: EASE }}
                aria-label={`Example ${industry.app} dashboard for ${industry.name}`}
                role="img"
              >
                <div className={styles.dashTop}>
                  <span className={styles.dashBadge}>
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <div>
                    <strong>{industry.app}</strong>
                    <small>{industry.name}</small>
                  </div>
                  <span className={styles.dashExample}>Example</span>
                </div>

                <div className={styles.dashKpis}>
                  {industry.kpis.map((kpi, i) => (
                    <motion.div
                      key={kpi.label}
                      className={styles.dashKpi}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: EASE }}
                    >
                      <small>{kpi.label}</small>
                      <strong>{kpi.value}</strong>
                    </motion.div>
                  ))}
                </div>

                <div className={styles.dashChart}>
                  <small>This week</small>
                  <div className={styles.dashBars}>
                    {industry.bars.map((value, i) => (
                      <span key={i}>
                        <motion.i
                          initial={{ height: 0 }}
                          animate={{ height: `${value}%` }}
                          transition={{ duration: 0.6, delay: 0.25 + i * 0.05, ease: EASE }}
                        />
                        <em>{DAYS[i]}</em>
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  className={styles.dashInsight}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.7, ease: EASE }}
                >
                  <span>
                    <Sparkles size={14} />
                  </span>
                  <p>
                    <strong>AI insight</strong>
                    {industry.insight}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
