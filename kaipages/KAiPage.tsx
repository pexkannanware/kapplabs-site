"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  ChevronDown,
  Clock3,
  Orbit,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import styles from "./KAiPage.module.css";

const TRUST_STRIP = [
  "Org-aware login routing",
  "Clean admin UX",
  "Security-first design",
  "Fast QA deployment",
  "Built for real operations",
] as const;

const INFLECTIONS = [
  {
    from: "Spreadsheets + WhatsApp",
    to: "One system of record",
    note: "We are moving teams from fragmented admin tools into a single, audit-friendly system that stays usable during busy weeks.",
  },
  {
    from: "Manual approvals",
    to: "Governed workflows",
    note: "We are shifting from ad-hoc approvals into controlled, traceable workflows where roles, visibility, and evidence are built-in.",
  },
  {
    from: "Reporting after the fact",
    to: "Real-time clarity",
    note: "This is the foundation for faster decisions: receipts, payments, banking, stakeholders, and reports with always-current summaries.",
  },
] as const;

const STUDIO_SIGNALS = [
  {
    icon: BrainCircuit,
    title: "Ops-first product design",
    body: "We design for the people who do the daily work: fast entry, fewer clicks, clear validations, and print-ready outputs.",
  },
  {
    icon: Target,
    title: "First-hand pain point access",
    body: "We build from real org workflows: receipts, payments, approvals, and reporting — not abstract feature checklists.",
  },
  {
    icon: Sparkles,
    title: "Modern admin UX",
    body: "Cleaner screens than typical admin tools: searchable selects, quick actions, drawers, and calm layouts.",
  },
  {
    icon: ShieldCheck,
    title: "Security from sprint one",
    body: "Role-based access, audit trails, and safe-by-default workflows are part of the product itself.",
  },
] as const;

const BUILD_LOOP = [
  {
    step: "01",
    title: "Map the workflow",
    body: "Capture the exact daily workflow (receipts, payments, approvals, reports) and define the system-of-record boundaries.",
  },
  {
    step: "02",
    title: "Ship the beta",
    body: "Launch a usable beta quickly with the depth teams need, not a shallow demo flow.",
  },
  {
    step: "03",
    title: "Harden in-market",
    body: "Refine UX, controls, and auditability using real user feedback and real edge cases.",
  },
  {
    step: "04",
    title: "Scale the platform",
    body: "Expand workflows across organizations while keeping security and clarity as the default.",
  },
] as const;

const DIFFERENTIATORS = [
  "Workflow-first design for daily admin operations",
  "Org-aware login and tenant-safe routing",
  "Security + auditability built-in, not bolted on",
  "Faster adoption because UX is calm and predictable",
  "Roadmap shaped by real usage, not slides",
] as const;


const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export default function KAiPage() {
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!productsOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [productsOpen]);

  return (
    <div className={styles.page}>
      <nav className={styles.subnav} aria-label="kapplabs sections">
        <div className={styles.subnavInner}>
          <a className={styles.brand} href="#top" onClick={() => setProductsOpen(false)}>
            <span className={styles.brandCopy}>
              <span className={styles.brandWord}>kapplabs</span>
              <span className={styles.brandTagline}>Intelligence Inbuilt</span>
            </span>
          </a>

          <div className={styles.navLinks}>
            <a href="#thesis" onClick={() => setProductsOpen(false)}>Platform thesis</a>
            <a href="#story" onClick={() => setProductsOpen(false)}>Why now</a>
            <div className={styles.navDropdown} ref={dropdownRef}>
              <button
                type="button"
                className={styles.navDropdownTrigger}
                aria-expanded={productsOpen}
                onClick={() => setProductsOpen((open) => !open)}
              >
                Products <ChevronDown size={16} className={`${styles.chevron} ${productsOpen ? styles.chevronOpen : ""}`} />
              </button>
              {productsOpen && (
                <div className={styles.navDropdownMenu}>
                  <Link href="/mms" target="_blank" rel="noreferrer" onClick={() => setProductsOpen(false)}>
                    Aram ERP
                  </Link>
                  <Link href="/kapplabs/cv-optimizer" target="_blank" rel="noreferrer" onClick={() => setProductsOpen(false)}>
                    CV Optimizer
                  </Link>
                  <Link
                    href="/kapplabs/office-of-the-cfo-ai-agents"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setProductsOpen(false)}
                  >
                    Office of the CFO AI Agents
                  </Link>
                </div>
              )}
            </div>
            <a href="#model" onClick={() => setProductsOpen(false)}>Model</a>
            <a href="#edge" onClick={() => setProductsOpen(false)}>Edge</a>
            <a href="#launch" onClick={() => setProductsOpen(false)}>Launch</a>
          </div>

          <Link className={styles.navCta} href="/contact" onClick={() => setProductsOpen(false)}>
            Request briefing
          </Link>
        </div>
      </nav>
      <div className={styles.subnavSpacer} aria-hidden="true" />

      <main id="top">
        <section className={styles.hero}>
          <motion.div
            className={styles.heroGlowA}
            aria-hidden="true"
            animate={{ x: [0, 14, 0], y: [0, 18, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className={styles.heroGlowB}
            aria-hidden="true"
            animate={{ x: [0, -16, 0], y: [0, -12, 0], opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className={styles.gridGlow} aria-hidden="true" />

          <motion.div className={styles.wrap} initial="hidden" animate="visible" variants={stagger}>
            <motion.div className={styles.heroIntro} variants={fadeUp}>
              <h1>
                Your AI-powered SaaS
                <br />
                <span>partner for day-to-day, real-time challenges.</span>
              </h1>
              <p className={styles.lead}>
                <strong>kapplabs</strong> helps teams save time, respond faster, and stay ahead of growth pressure with AI-enabled products designed for
                real operating challenges, not slide-deck scenarios.
              </p>

              <div className={styles.heroActions}>
                <Link className={styles.primaryBtn} href="/mms">
                  View Aram ERP <ArrowRight size={16} />
                </Link>
                <Link className={styles.secondaryBtn} href="/contact">
                  Talk to our founders
                </Link>
              </div>
            </motion.div>

            <motion.div className={styles.trustRow} variants={fadeUp}>
              <p>Built with direct customer insight from transformation work</p>
              <motion.div className={styles.trustStrip} variants={stagger}>
                {TRUST_STRIP.map((item) => (
                  <motion.span key={item} variants={fadeUp}>
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section className={`${styles.section} ${styles.sectionTint}`} id="thesis">
          <div className={styles.wrap}>
            <motion.div
              className={`${styles.heroPlatform} ${styles.platformSectionCard}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className={styles.windowDots}>
                <span />
                <span />
                <span />
              </div>

              <div className={styles.platformHeader}>
                <div>
                  <p className={styles.panelBadge}>Platform thesis</p>
                  <h2>From services-led growth to IP-led differentiation.</h2>
                </div>
                <div className={styles.platformPills}>
                  <span>Multi-tenant SaaS</span>
                  <span>Audit-ready workflows</span>
                </div>
              </div>

              <div className={styles.platformCards}>
                <motion.article className={styles.platformCard} whileHover={{ y: -3 }}>
                  <div className={styles.signalTitle}>
                    <Orbit size={18} />
                    Market signal
                  </div>
                  <p>Customers need complex solutions, quick implementation, automation, stronger UX, and stronger security.</p>
                </motion.article>
                <motion.article className={styles.platformCard} whileHover={{ y: -3 }}>
                  <div className={styles.signalTitle}>
                    <Rocket size={18} />
                    Product response
                  </div>
                  <p>We spin out an IP-based product company that builds the exact workflows customers expect with faster rollout velocity.</p>
                </motion.article>
                <motion.article className={styles.platformCard} whileHover={{ y: -3 }}>
                  <div className={styles.signalTitle}>
                    <BrainCircuit size={18} />
                    Operating advantage
                  </div>
                  <p>We can beta with customers early, then improve the product with actual live input instead of theory.</p>
                </motion.article>
              </div>

              <div className={styles.metricRow}>
                <div className={styles.metricCard}>
                  <span>3</span>
                  <p>products already in motion</p>
                </div>
                <div className={styles.metricCard}>
                  <span>AI + domain</span>
                  <p>engineering paired with transformation expertise</p>
                </div>
                <div className={styles.metricCard}>
                  <span>Beta-first</span>
                  <p>ship, learn, harden, scale</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className={styles.section} id="story">
          <div className={styles.wrap}>
            <motion.div
              className={`${styles.sectionIntro} ${styles.centerIntro} ${styles.storyIntro}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
            >
              <p className={styles.sectionEyebrow}>Why now</p>
              <h2>The inflection point is real.</h2>
              <p>
                We are now at an inflection point. kapplabs exists because workflow gaps repeat across organizations — and product IP can compound
                clarity, controls, and speed with every release.
              </p>
            </motion.div>

            <motion.div
              className={`${styles.inflectionGrid} ${styles.storyGrid}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              {INFLECTIONS.map((item) => (
                <motion.article key={item.from} className={styles.inflectionCard} variants={fadeUp} whileHover={{ y: -4 }}>
                  <p className={styles.inflectionFrom}>From {item.from}</p>
                  <p className={styles.inflectionArrow}>to</p>
                  <h3>{item.to}</h3>
                  <p>{item.note}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionTint}`}>
          <div className={styles.wrap}>
            <motion.div
              className={`${styles.sectionIntro} ${styles.centerIntro}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
            >
              <p className={styles.sectionEyebrow}>Studio thesis</p>
              <h2>What makes this product division credible.</h2>
            </motion.div>

            <motion.div
              className={styles.signalGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              {STUDIO_SIGNALS.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.article key={item.title} className={styles.featureCard} variants={fadeUp} whileHover={{ y: -4 }}>
                    <span className={styles.featureIcon}>
                      <Icon size={20} />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionTint}`} id="model">
          <div className={styles.wrap}>
            <motion.div
              className={`${styles.sectionIntro} ${styles.centerIntro}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
            >
              <p className={styles.sectionEyebrow}>Operating model</p>
              <h2>How kapplabs turns real operations into product velocity.</h2>
            </motion.div>

            <motion.div
              className={styles.timeline}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              {BUILD_LOOP.map((item) => (
                <motion.article key={item.step} className={styles.timelineCard} variants={fadeUp} whileHover={{ y: -4 }}>
                  <p className={styles.timelineStep}>{item.step}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className={styles.section} id="edge">
          <div className={styles.wrap}>
            <div className={styles.edgeLayout}>
              <motion.div
                className={styles.edgeCopy}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
              >
                <p className={styles.sectionEyebrow}>Why we can win</p>
                <h2>We are not guessing our way into product-market fit.</h2>
                <p>
                  kapplabs is differentiated because the product team stays close to implementation reality. That lets us design faster, validate sooner,
                  and improve with actual customer input.
                </p>
              </motion.div>

              <motion.div
                className={styles.edgeList}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={stagger}
              >
                {DIFFERENTIATORS.map((item) => (
                  <motion.div key={item} className={styles.edgeItem} variants={fadeUp} whileHover={{ x: 4 }}>
                    <span className={styles.edgeBullet} />
                    <p>{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className={styles.launchSection} id="launch">
          <div className={styles.wrap}>
            <motion.div
              className={styles.launchCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div className={styles.launchCopy} variants={fadeUp}>
                <p className={styles.sectionEyebrow}>Launch posture</p>
                <h2>kapplabs is where Kannanware’s next chapter becomes product IP.</h2>
                <p>
                  We are building AI products for customers who want exact workflow fit, stronger security, better UX, and faster deployment than
                  enterprise software usually gives them.
                </p>
              </motion.div>

              <motion.div className={styles.launchActions} variants={fadeUp}>
                <motion.div className={styles.launchPill} whileHover={{ y: -2 }}>
                  <Clock3 size={16} />
                  Beta-friendly delivery motion
                </motion.div>
                <motion.div className={styles.launchPill} whileHover={{ y: -2 }}>
                  <ShieldCheck size={16} />
                  Secure-by-default product design
                </motion.div>
                <motion.div className={styles.launchPill} whileHover={{ y: -2 }}>
                  <BrainCircuit size={16} />
                  AI startup speed with domain depth
                </motion.div>

                <Link className={styles.primaryBtn} href="/contact">
                  Start a conversation <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
