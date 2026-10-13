"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, BrainCircuit, ShieldCheck, Sparkles, Workflow, Zap } from "lucide-react";
import Link from "next/link";
import styles from "./KAiProductPage.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const features = [
  { icon: BrainCircuit, title: "Agentic finance workflows", body: "AI agents help finance teams move from dashboards to guided action." },
  { icon: ShieldCheck, title: "Governed automation", body: "The product is designed for finance control, approval logic, and auditable action trails." },
  { icon: Sparkles, title: "CxO platform trajectory", body: "This is the starting wedge toward broader executive workflow products." },
];

const steps = [
  { step: "01", title: "Listen to the close", body: "Monitor close, variance, and control pressure points across finance operations." },
  { step: "02", title: "Trigger the agent", body: "Generate actionable briefs, escalations, and structured follow-ups." },
  { step: "03", title: "Route with context", body: "Send the right action to the right approver with the right supporting context." },
  { step: "04", title: "Strengthen decisions", body: "Shorten the loop between finance insight and next-step execution." },
];

const workflows = [
  { title: "Close monitoring", body: "Watch variance, blockers, and completion state across active close cycles." },
  { title: "Executive brief generation", body: "Prepare decision-ready summaries for CFO operating cadence." },
  { title: "Policy-safe escalation", body: "Route threshold breaches and controls issues without breaking governance." },
];

export default function KAiCfoAgentsPage() {
  return (
    <div className={styles.page} style={{ ["--accent" as string]: "#79b9ff", ["--accent-soft" as string]: "rgba(121, 185, 255, 0.18)" }}>
      <nav className={styles.subnav}>
        <div className={styles.subnavInner}>
          <Link className={styles.brand} href="/kapplabs">
            <span className={styles.brandWord}>kapplabs</span>
          </Link>

          <div className={styles.navLinks}>
            <Link href="/kapplabs">Division</Link>
            <Link href="/mms" target="_blank" rel="noreferrer">Aram ERP</Link>
            <Link href="/kapplabs/cv-optimizer" target="_blank" rel="noreferrer">CV Optimizer</Link>
            <Link href="/kapplabs/office-of-the-cfo-ai-agents" target="_blank" rel="noreferrer">CFO AI Agents</Link>
          </div>

          <Link className={styles.cta} href="/contact">
            Request briefing
          </Link>
        </div>
      </nav>

      <main>
        <section className={styles.hero}>
          <motion.div className={styles.heroGlowA} animate={{ x: [0, 14, 0], y: [0, 16, 0] }} transition={{ duration: 10, repeat: Infinity }} />
          <motion.div className={styles.heroGlowB} animate={{ x: [0, -12, 0], y: [0, -10, 0] }} transition={{ duration: 12, repeat: Infinity }} />

          <motion.div className={styles.wrap} initial="hidden" animate="visible" variants={stagger}>
            <motion.div className={styles.heroIntro} variants={fadeUp}>
              <p className={styles.eyebrow}>kapplabs product</p>
              <h1>Office of the CFO AI Agents for faster finance action.</h1>
              <p className={styles.lead}>
                A new-age finance AI product that helps leaders monitor close pressure, variance risk, and decision bottlenecks with governed,
                action-oriented agents.
              </p>

              <div className={styles.heroActions}>
                <Link className={styles.primaryBtn} href="/contact">
                  Book a walkthrough <ArrowRight size={16} />
                </Link>
                <Link className={styles.secondaryBtn} href="/kapplabs">
                  Back to kapplabs
                </Link>
              </div>

              <div className={styles.heroMetrics}>
                <div className={styles.heroMetric}>
                  <strong>Finance-first wedge</strong>
                  <span>The product starts with CFO workflows where speed and control matter most.</span>
                </div>
                <div className={styles.heroMetric}>
                  <strong>Agentic execution</strong>
                  <span>Move from passive reporting to active, guided operational follow-through.</span>
                </div>
                <div className={styles.heroMetric}>
                  <strong>Control-safe design</strong>
                  <span>Automation sits inside governance, not outside it.</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <motion.div className={styles.sectionIntro} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
              <p className={styles.sectionEyebrow}>Product value</p>
              <h2>Built for real finance pressure, not abstract AI theater.</h2>
              <p>The Office of the CFO AI Agents product is designed to support real-time finance work with better clarity, speed, and control.</p>
            </motion.div>

            <motion.div className={styles.featureGrid} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <motion.article key={feature.title} className={styles.featureCard} variants={fadeUp} whileHover={{ y: -4 }}>
                    <span className={styles.featureIcon}>
                      <Icon size={20} />
                    </span>
                    <h3>{feature.title}</h3>
                    <p>{feature.body}</p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.sectionTint}`}>
          <div className={styles.wrap}>
            <motion.div className={styles.surfacePanel} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <div className={styles.windowDots}><span /><span /><span /></div>
              <div className={styles.surfaceHeader}>
                <div>
                  <p className={styles.sectionEyebrow}>Live product surface</p>
                  <h2>One operating view for close, controls, and escalations.</h2>
                  <p>The experience is designed to feel premium, executive-ready, and operationally useful from the first interaction.</p>
                </div>
                <div className={styles.surfacePills}>
                  <span>Close monitor</span>
                  <span>Variance brief</span>
                </div>
              </div>

              <div className={styles.surfaceBody}>
                <div className={styles.appShell}>
                  <div className={styles.toolbar}>
                    <div className={styles.search}>Search close tasks, variances, and escalation paths</div>
                    <span className={styles.toolbarPill}>Agentic close live</span>
                  </div>

                  <div className={styles.kpiRow}>
                    <div className={styles.kpiCard}><p>Close tasks</p><strong>36</strong><span>running</span></div>
                    <div className={styles.kpiCard}><p>Exceptions</p><strong>7</strong><span>tracked</span></div>
                    <div className={styles.kpiCard}><p>Agents active</p><strong>4</strong><span>working</span></div>
                    <div className={styles.kpiCard}><p>Policy pass</p><strong>99%</strong><span>safe</span></div>
                  </div>

                  <div className={styles.queue}>
                    <div className={styles.queueRow}>
                      <div>
                        <strong>Variance brief</strong>
                        <p>Prepared summary for CFO morning review</p>
                      </div>
                      <span className={styles.statusGood}>Ready</span>
                    </div>
                    <div className={styles.queueRow}>
                      <div>
                        <strong>Treasury action</strong>
                        <p>Waiting on treasury confirmation with full trace</p>
                      </div>
                      <span className={styles.statusNeutral}>Tracked</span>
                    </div>
                  </div>
                </div>

                <div className={styles.rail}>
                  {workflows.map((item) => (
                    <div key={item.title} className={styles.railCard}>
                      <strong>{item.title}</strong>
                      <p>{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <motion.div className={styles.sectionIntro} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
              <p className={styles.sectionEyebrow}>How it works</p>
              <h2>A premium workflow built for finance action, not passive reporting.</h2>
            </motion.div>

            <motion.div className={styles.stepGrid} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
              {steps.map((step) => (
                <motion.article key={step.step} className={styles.stepCard} variants={fadeUp} whileHover={{ y: -4 }}>
                  <p className={styles.stepIndex}>{step.step}</p>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <motion.div className={styles.ctaPanel} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <p className={styles.sectionEyebrow}>Platform trajectory</p>
              <h2>This is the finance wedge for a broader CxO product future.</h2>
              <p>The Office of the CFO AI Agents product is how kapplabs begins building category depth in executive workflow software.</p>
              <div className={styles.ctaActions}>
                <Link className={styles.primaryBtn} href="/contact">
                  Talk to the team <ArrowRight size={16} />
                </Link>
                <Link className={styles.secondaryBtn} href="/kapplabs">
                  View kapplabs division
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
