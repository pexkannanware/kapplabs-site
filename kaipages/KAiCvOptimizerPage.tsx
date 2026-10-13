"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, FileText, SearchCheck, ShieldCheck, Sparkles, Target, Workflow } from "lucide-react";
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
  { icon: SearchCheck, title: "JD fit analysis", body: "Maps resumes against role requirements and reveals the exact fit gaps that matter." },
  { icon: Sparkles, title: "Rewrite intelligence", body: "Improves phrasing, structure, and recruiter clarity without losing candidate context." },
  { icon: ShieldCheck, title: "Profile-safe workflow", body: "Versioning and controlled review keep edits trustworthy and easy to compare." },
];

const steps = [
  { step: "01", title: "Import the profile", body: "Bring in the resume and target role in one clean flow." },
  { step: "02", title: "Run fit analysis", body: "Compare wording, gaps, strengths, and scoring against the role." },
  { step: "03", title: "Rewrite with intent", body: "Improve impact statements and position the strongest proof first." },
  { step: "04", title: "Export with confidence", body: "Generate recruiter-ready versions without manual rework." },
];

const workflows = [
  { title: "Resume scoring", body: "Live ATS-fit cues and confidence scoring per role." },
  { title: "Keyword optimization", body: "Targeted language upgrades that stay readable and human." },
  { title: "Version control", body: "Track different role variants without losing previous drafts." },
];

export default function KAiCvOptimizerPage() {
  return (
    <div className={styles.page} style={{ ["--accent" as string]: "#46ccb3", ["--accent-soft" as string]: "rgba(70, 204, 179, 0.18)" }}>
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
          <motion.div className={styles.heroGlowA} animate={{ x: [0, 12, 0], y: [0, 16, 0] }} transition={{ duration: 10, repeat: Infinity }} />
          <motion.div className={styles.heroGlowB} animate={{ x: [0, -14, 0], y: [0, -10, 0] }} transition={{ duration: 12, repeat: Infinity }} />

          <motion.div className={styles.wrap} initial="hidden" animate="visible" variants={stagger}>
            <motion.div className={styles.heroIntro} variants={fadeUp}>
              <p className={styles.eyebrow}>kapplabs product</p>
              <h1>CV Optimizer for high-intent career workflows.</h1>
              <p className={styles.lead}>
                A sharper AI product for resume optimization, role-fit improvement, and recruiter-ready output with better UX than candidates usually
                get from hiring tools.
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
                  <strong>Role-fit</strong>
                  <span>Optimizes resumes for the specific role, not generic polish.</span>
                </div>
                <div className={styles.heroMetric}>
                  <strong>Faster iteration</strong>
                  <span>Shortens rewrite cycles for candidates, recruiters, and talent teams.</span>
                </div>
                <div className={styles.heroMetric}>
                  <strong>Cleaner UX</strong>
                  <span>Built to feel like a product people actually enjoy using.</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <motion.div className={styles.sectionIntro} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
              <p className={styles.sectionEyebrow}>Product value</p>
              <h2>A focused AI workflow for better career outcomes.</h2>
              <p>CV Optimizer turns a messy, repetitive task into a guided product flow that is faster, clearer, and easier to trust.</p>
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
                  <h2>See the workflow in one clear screen.</h2>
                  <p>The product is designed to feel quick, legible, and confidence-building from import to export.</p>
                </div>
                <div className={styles.surfacePills}>
                  <span>ATS scoring</span>
                  <span>Rewrite engine</span>
                </div>
              </div>

              <div className={styles.surfaceBody}>
                <div className={styles.appShell}>
                  <div className={styles.toolbar}>
                    <div className={styles.search}>Search resumes, roles, and export packs</div>
                    <span className={styles.toolbarPill}>Rewrite mode live</span>
                  </div>

                  <div className={styles.kpiRow}>
                    <div className={styles.kpiCard}><p>Match score</p><strong>91%</strong><span>role fit</span></div>
                    <div className={styles.kpiCard}><p>Rewrite cues</p><strong>8</strong><span>high value</span></div>
                    <div className={styles.kpiCard}><p>Drafts live</p><strong>5</strong><span>tracked</span></div>
                    <div className={styles.kpiCard}><p>ATS fit</p><strong>96%</strong><span>optimized</span></div>
                  </div>

                  <div className={styles.queue}>
                    <div className={styles.queueRow}>
                      <div>
                        <strong>CV rewrite pack</strong>
                        <p>Role-fit summary and recruiter-ready bullet improvements</p>
                      </div>
                      <span className={styles.statusGood}>Ready</span>
                    </div>
                    <div className={styles.queueRow}>
                      <div>
                        <strong>Keyword adjustment</strong>
                        <p>Final pass on skill emphasis and title alignment</p>
                      </div>
                      <span className={styles.statusWarn}>Review</span>
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
              <h2>A simple workflow with premium clarity.</h2>
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
              <p className={styles.sectionEyebrow}>Launch path</p>
              <h2>Built to move fast, validate early, and improve with real users.</h2>
              <p>CV Optimizer is part of the kapplabs product suite focused on solving repeated, monetisable workflow pain with premium product design.</p>
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
