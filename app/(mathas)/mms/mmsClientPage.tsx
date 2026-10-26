"use client";

import type React from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { initAramMms } from "./aramMmsEffects";
import { APP_URL } from "@/lib/site";

export default function MmsClientPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    return initAramMms(root);
  }, []);

  return (
    <div ref={rootRef} className="aram-mms">
      <header className="site-nav" aria-label="Primary navigation">
        <div className="nav-shell">
          <a href="#overview" className="brand-block aram-brand" data-scroll aria-label="ARAM ERP for Mathas — back to top">
            <span
              className="aram-brand__mark"
              style={{ maskImage: "url(/mms/aram-mark.png)", WebkitMaskImage: "url(/mms/aram-mark.png)" }}
              aria-hidden="true"
            />
            <span className="aram-brand__word">
              ARAM ERP
              <span className="aram-brand__tag">For Mathas</span>
            </span>
          </a>
          <button className="menu-toggle" aria-expanded="false" aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className="nav-links" id="site-menu">
            <a href="#modules" data-scroll>
              Features
            </a>
            <a href="#experience" data-scroll>
              Compare
            </a>
            <a href="#how-we-work" data-scroll>
              How
            </a>
            <a href="#faq" data-scroll>
              FAQ
            </a>
            <a href="#testimonial" data-scroll>
              Reviews
            </a>
            <a href="#contact" className="nav-demo-link" data-scroll>
              Request Demo
            </a>
          </nav>
          <a className="nav-cta" href="#contact" data-scroll>
            Request a Demo
          </a>
        </div>
      </header>

      <section
        className="intro-section"
        id="intro"
        aria-label="Opening experience"
        style={{ height: "480vh" }}
      >
        <div className="intro-sticky">
          <img
            id="hero-poster"
            className="intro-frame intro-poster is-active"
            src="/mms/merp-hero/ezgif-frame-001.jpg"
            alt="Aram ERP opening experience"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
          />
          <canvas
            id="hero-canvas"
            className="intro-frame intro-canvas"
            width={1920}
            height={1080}
            aria-hidden="true"
          ></canvas>
          <div className="intro-overlay"></div>
          <div className="intro-content">
            <div className="intro-beats" id="intro-beats">
              <div className="intro-beat is-active">
                <h1 className="intro-title">One Secure System. Every Responsibility.</h1>
                <p className="intro-subtitle">
                  Donations, payments, banking, sevas, people, and committee-ready reports in one
                  calm cloud workspace.
                </p>
              </div>
              <div className="intro-beat">
                <h1 className="intro-title">Every Rupee. Every Record. Accountable.</h1>
                <p className="intro-subtitle">
                  Connect cash, UPI, cheque, and bank activity with the people, projects, and
                  purpose behind every entry.
                </p>
              </div>
              <div className="intro-beat">
                <h1 className="intro-title">Preserve the Sacred. Simplify the Rest.</h1>
                <p className="intro-subtitle">
                  Go live with in-person implementation in two days, role-based controls, and
                  responsive support when your team needs it.
                </p>
              </div>
            </div>
            <div className="intro-cue" id="intro-cue">
              Scroll to enter
            </div>
            <div className="intro-progress" id="intro-progress" aria-hidden="true">
              <span className="is-active"></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="intro-fallback" className="intro-fallback" aria-hidden="true">
            <div className="intro-fallback-card">
              <h2>Opening experience is loading</h2>
              <p>Add your JPG frames to the configured folder to activate the cinematic intro.</p>
            </div>
          </div>
        </div>
      </section>

      <main className="site-content">
        <section className="story-section section-shell" id="overview">
          <div className="story-grid reveal">
            <div
              className="story-visual"
              style={
                { ["--section-image"]: "url('/mms/priest-portrait.jpg')" } as React.CSSProperties
              }
              aria-label="A senior priest in saffron robes, representing the institutions Aram ERP serves"
            ></div>
            <div className="story-copy">
              <span className="impact-kicker">A system built around service</span>
              <h2>
                Honoring the Eternal.
                <br />
                Embracing the Future.
              </h2>
              <p>
                Behind every Matha is a small circle of people carrying receipts, approvals,
                payments, records, and committee questions—often across notebooks, spreadsheets, and
                message threads.
              </p>
              <p>
                Aram ERP brings those responsibilities into one structured, access-controlled
                workspace, so clarity becomes the daily default rather than a last-minute exercise.
              </p>
              <div className="signature">For Seva, Forever</div>
            </div>
          </div>
        </section>

        <section className="mutt-flow-section" id="modules">
          <div className="feature-section-heading">
            <div className="mutt-flow-title-row">
              <span className="temple-kicker">The complete office, connected</span>
              <h2>Everything Your Matha Needs, in One Flow</h2>
              <p className="lede">
                Daily work moves through one secure system—from the first receipt to the final
                committee report.
              </p>
              <span className="swipe-hint">Swipe to explore →</span>
            </div>
          </div>

          <div className="mutt-flow-cards">
            <article
              className="mutt-flow-card reveal"
              style={
                { ["--card-image"]: "url('/mms/feature-donations-v2.jpg')" } as React.CSSProperties
              }
            >
              <span className="book-pages" aria-hidden="true"></span>
              <span className="gold-dust" aria-hidden="true"></span>
              <div className="card-content">
                <h3>Donations & Receipts</h3>
                <p>
                  Record cash, UPI, cheque, and bank offerings once, with donor history and
                  printable receipts.
                </p>
              </div>
            </article>

            <article
              className="mutt-flow-card reveal"
              style={
                { ["--card-image"]: "url('/mms/feature-finance-v2.jpg')" } as React.CSSProperties
              }
            >
              <span className="book-pages" aria-hidden="true"></span>
              <span className="gold-dust" aria-hidden="true"></span>
              <div className="card-content">
                <h3>Cash & Banking</h3>
                <p>
                  Connect ledgers, bank entries, day closing, denominations, and variance checks
                  without double entry.
                </p>
              </div>
            </article>

            <article
              className="mutt-flow-card reveal"
              style={
                { ["--card-image"]: "url('/mms/feature-sevas-v2.jpg')" } as React.CSSProperties
              }
            >
              <span className="book-pages" aria-hidden="true"></span>
              <span className="gold-dust" aria-hidden="true"></span>
              <div className="card-content">
                <h3>Sevas & Projects</h3>
                <p>
                  Manage the seva catalog, Panchangam, schedules, utsavam budgets, and project
                  spending in context.
                </p>
              </div>
            </article>

            <article
              className="mutt-flow-card reveal"
              style={
                { ["--card-image"]: "url('/mms/feature-reports-v2.jpg')" } as React.CSSProperties
              }
            >
              <span className="book-pages" aria-hidden="true"></span>
              <span className="gold-dust" aria-hidden="true"></span>
              <div className="card-content">
                <h3>Reports & Compliance</h3>
                <p>
                  Prepare donor, project, category, cash-flow, 80G, and vendor records for
                  committees and auditors.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="comparison-section section-shell" id="experience">
          <div className="section-heading reveal">
            <span className="impact-kicker">The shift your office will feel</span>
            <h2>Before and After</h2>
            <p className="lede">
              You do not need more software. You need one dependable place for money in, money out,
              and answers before the meeting.
            </p>
          </div>
          <div className="comparison-grid reveal">
            <article className="comparison-panel">
              <div
                className="comparison-panel-visual"
                role="img"
                aria-label="A priest recording Matha activity in a handwritten ledger"
              ></div>
              <span className="comparison-label">Before · Scattered tools</span>
              <h3>Too much depends on memory</h3>
              <ul className="comparison-list">
                <li>
                  Receipts are split between folders, message forwards, notebooks, and a fragile
                  spreadsheet.
                </li>
                <li>
                  Festival and project spending is unclear until someone reconstructs it manually.
                </li>
                <li>Committee reports become a stressful, last-minute reconciliation exercise.</li>
              </ul>
            </article>
            <div className="comparison-pivot" aria-hidden="true">
              ➜
            </div>
            <article className="comparison-panel">
              <div
                className="comparison-panel-visual"
                role="img"
                aria-label="A Matha administrator working with a laptop and connected digital tools"
              ></div>
              <span className="comparison-label">After · One connected system</span>
              <h3>Every answer has a place</h3>
              <ul className="comparison-list">
                <li>
                  Cash, UPI, cheque, and bank entries stay connected in one structured ledger.
                </li>
                <li>
                  Projects and utsavam budgets show actual spending against plan in a few clicks.
                </li>
                <li>
                  Current, printable summaries are ready for trustees, committees, and auditors.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="work-section" id="how-we-work">
          <div className="work-inner">
            <div className="section-heading reveal">
              <span className="temple-emblem" aria-hidden="true">
                <svg viewBox="0 0 64 64" role="presentation">
                  <path
                    d="M32 45C21 38 20 26 32 12c12 14 11 26 0 33Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M30 45C19 44 12 37 12 25c11 3 17 10 18 20ZM34 45c11-1 18-8 18-20-11 3-17 10-18 20Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M32 47C20 52 10 47 6 39c12-2 20 1 26 8ZM32 47c12 5 22 0 26-8-12-2-20 1-26 8Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 54h28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="temple-kicker">How It Works</span>
              <h2>A Sacred Process, Simplified</h2>
              <p className="lede">
                A focused, in-person path designed to move your office into daily use—not into a
                months-long implementation.
              </p>
            </div>
            <div className="temple-process reveal">
              <span className="temple-finial" aria-hidden="true"></span>
              <span className="ritual-path" aria-hidden="true"></span>
              <span className="ritual-lotus" aria-hidden="true">
                <img src="/mms/natural-lotus.png" alt="" />
              </span>
              <span className="petal-stream" aria-hidden="true">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </span>
              <ol className="flow-path" aria-label="Our four-step implementation process">
                <li className="flow-step">
                  <span className="flow-lotus-crown" aria-hidden="true">
                    <img src="/mms/lotus-stage-1.png" alt="" />
                  </span>
                  <div className="flow-arch">
                    <div className="flow-icon">01</div>
                    <h3>Map the Office</h3>
                    <p>
                      We understand your funds, roles, approvals, registers, reports, and busiest
                      operating rhythms.
                    </p>
                  </div>
                </li>
                <li className="flow-step">
                  <span className="flow-lotus-crown" aria-hidden="true">
                    <img src="/mms/lotus-stage-2.png" alt="" />
                  </span>
                  <div className="flow-arch">
                    <div className="flow-icon">02</div>
                    <h3>Prepare the Data</h3>
                    <p>
                      Masters, opening balances, seva catalogs, people, and essential records are
                      prepared carefully.
                    </p>
                  </div>
                </li>
                <li className="flow-step">
                  <span className="flow-lotus-crown" aria-hidden="true">
                    <img src="/mms/lotus-stage-3.png" alt="" />
                  </span>
                  <div className="flow-arch">
                    <div className="flow-icon">03</div>
                    <h3>Configure On-Site</h3>
                    <p>
                      Our team configures access, workflows, receipts, and reports alongside the
                      people who will use them.
                    </p>
                  </div>
                </li>
                <li className="flow-step">
                  <span className="flow-lotus-crown" aria-hidden="true">
                    <img src="/mms/lotus-stage-4.png" alt="" />
                  </span>
                  <div className="flow-arch">
                    <div className="flow-icon">04</div>
                    <h3>Go Live in 2 Days</h3>
                    <p>
                      Your team begins daily entries with guided training and responsive after-sales
                      support.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <div className="proof-story">
          <video
            className="stats-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/mms/why-manuscript-bg.mp4" type="video/mp4" />
          </video>
          <section className="stats-section section-shell" id="security">
            <div className="section-heading reveal">
              <span className="impact-kicker">Concrete product commitments</span>
              <h2>Built for Adoption and Accountability</h2>
              <p className="lede">
                Clear commitments your committee can evaluate before choosing the system.
              </p>
            </div>
            <div className="impact-temple reveal">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  </div>
                  <div className="stat-number">
                    <span className="stat-count" data-target="9">
                      0
                    </span>
                  </div>
                  <p className="stat-label">
                    Core capability zones across finance, people, operations, and reporting.
                  </p>
                </div>
                <div className="stat-item">
                  <div className="stat-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M13.5 2 5 13h6l-1 9 8.5-12h-6l1-8Z" />
                    </svg>
                  </div>
                  <div className="stat-number">
                    <span className="stat-count" data-target="2">
                      0
                    </span>
                    <span className="stat-suffix"> days</span>
                  </div>
                  <p className="stat-label">
                    In-person implementation designed to get the office into daily use quickly.
                  </p>
                </div>
                <div className="stat-item">
                  <div className="stat-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <rect x="2.5" y="5" width="19" height="14" rx="2" />
                      <path d="M2.5 10h19M7 15h3" />
                    </svg>
                  </div>
                  <div className="stat-number">
                    <span className="stat-count" data-target="4">
                      0
                    </span>
                    <span className="stat-suffix"> modes</span>
                  </div>
                  <p className="stat-label">
                    Cash, UPI, cheque, and bank receipts handled in one guided flow.
                  </p>
                </div>
                <div className="stat-item">
                  <div className="stat-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
                      <path d="M4 12H2.5v5H6v-5H4ZM20 12h1.5v5H18v-5h2ZM18 18c-1 2-3 3-6 3" />
                    </svg>
                  </div>
                  <div className="stat-number">
                    <span className="stat-count" data-target="24">
                      0
                    </span>
                    <span className="stat-suffix">/7</span>
                  </div>
                  <p className="stat-label">
                    After-sales support for real operations, including peak festival periods.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="why-section" id="why-us">
            <div className="why-carving" aria-hidden="true"></div>
            <div className="section-shell">
              <div className="section-heading reveal center-heading">
                <span className="impact-kicker">Six foundations of a dependable system</span>
                <h2>Why Mathas Choose Us</h2>
                <p className="lede">
                  Turn the manuscript to explore the operational details that make daily adoption
                  easier.
                </p>
              </div>

              <div className="manuscript reveal">
                <div className="manuscript-stage">
                  <button
                    className="manuscript-nav manuscript-prev"
                    type="button"
                    aria-label="Previous page"
                  >
                    ‹
                  </button>

                  <div
                    className="manuscript-book"
                    id="manuscript-book"
                    role="group"
                    aria-roledescription="carousel"
                    aria-label="Why Mathas choose us — palm-leaf manuscript"
                  >
                    <article className="palm-leaf" data-index="0">
                      <span className="palm-leaf-numeral">Page 01</span>
                      <h3>Purpose-Built for Mathas</h3>
                      <span className="palm-leaf-rule" aria-hidden="true"></span>
                      <p>
                        Donation-first workflows reflect how Matha offices receive funds, manage
                        sevas, spend, close the day, and report.
                      </p>
                    </article>
                    <article className="palm-leaf" data-index="1">
                      <span className="palm-leaf-numeral">Page 02</span>
                      <h3>Cash Journal Discipline</h3>
                      <span className="palm-leaf-rule" aria-hidden="true"></span>
                      <p>
                        Opening cash, receipts, payments, denomination counts, variance reasons, and
                        controlled reopening stay structured.
                      </p>
                    </article>
                    <article className="palm-leaf" data-index="2">
                      <span className="palm-leaf-numeral">Page 03</span>
                      <h3>Access with Accountability</h3>
                      <span className="palm-leaf-rule" aria-hidden="true"></span>
                      <p>
                        Role-based access, controlled visibility, and audit trails protect sensitive
                        donation and payment records.
                      </p>
                    </article>
                    <article className="palm-leaf" data-index="3">
                      <span className="palm-leaf-numeral">Page 04</span>
                      <h3>People in One Place</h3>
                      <span className="palm-leaf-rule" aria-hidden="true"></span>
                      <p>
                        Donors, vendors, contractors, and employees have unified profiles, while
                        payroll status and payouts remain connected.
                      </p>
                    </article>
                    <article className="palm-leaf" data-index="4">
                      <span className="palm-leaf-numeral">Page 05</span>
                      <h3>Matha Operations Context</h3>
                      <span className="palm-leaf-rule" aria-hidden="true"></span>
                      <p>
                        Seva catalog, Panchangam reference, scheduled activities, projects, and
                        reminders remain connected to administration.
                      </p>
                    </article>
                    <article className="palm-leaf" data-index="5">
                      <span className="palm-leaf-numeral">Page 06</span>
                      <h3>Committee-Ready Reports</h3>
                      <span className="palm-leaf-rule" aria-hidden="true"></span>
                      <p>
                        Income, expense, donor, project, category, and cash-flow summaries stay
                        filterable, printable, and export-ready.
                      </p>
                    </article>
                  </div>

                  <button
                    className="manuscript-nav manuscript-next"
                    type="button"
                    aria-label="Next page"
                  >
                    ›
                  </button>
                </div>

                <div className="manuscript-footer">
                  <div className="manuscript-beads" role="tablist" aria-label="Jump to page">
                    <button
                      className="manuscript-bead is-active"
                      type="button"
                      role="tab"
                      aria-selected="true"
                      aria-label="Page 1"
                    ></button>
                    <button
                      className="manuscript-bead"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      aria-label="Page 2"
                    ></button>
                    <button
                      className="manuscript-bead"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      aria-label="Page 3"
                    ></button>
                    <button
                      className="manuscript-bead"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      aria-label="Page 4"
                    ></button>
                    <button
                      className="manuscript-bead"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      aria-label="Page 5"
                    ></button>
                    <button
                      className="manuscript-bead"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      aria-label="Page 6"
                    ></button>
                  </div>
                  <p className="manuscript-counter" aria-live="polite">
                    <span id="manuscript-current">1</span>
                    <span className="manuscript-counter-sep">/</span>
                    <span id="manuscript-total">6</span>
                  </p>
                  <p className="manuscript-swipe">Swipe the leaf to turn the page</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="audience-section section-shell" id="people">
          <div className="section-heading reveal center-heading">
            <span className="impact-kicker">Built around real responsibilities</span>
            <h2>One System for the People Carrying the Work</h2>
            <p className="lede">
              Each person sees what they need to act with confidence—without exposing information
              they should not access.
            </p>
          </div>
          <div
            className="audience-visual reveal"
            role="img"
            aria-label="Trustees, accountants, and office volunteers working together in a Matha office"
          ></div>
          <div className="audience-grid">
            <article className="audience-card reveal">
              <div className="audience-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32">
                  <path d="M5 26h22M8 26V14h16v12M6 14h20L16 5 6 14Z" />
                  <path d="M12 26v-7h8v7M10 14h12" />
                </svg>
              </div>
              <h3>Trustees & Office Bearers</h3>
              <p className="audience-role">Leadership</p>
              <p>
                Current dashboards, project visibility, and committee-ready summaries provide
                answers before the meeting begins.
              </p>
            </article>
            <article className="audience-card reveal">
              <div className="audience-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32">
                  <path d="M8 5h16v22H8zM12 10h8M12 15h8M12 20h5" />
                  <path d="M5 9V3h15" />
                </svg>
              </div>
              <h3>Accounts & Auditors</h3>
              <p className="audience-role">Finance</p>
              <p>
                Linked cash and bank entries, traceable records, filters, and exports reduce
                reconciliation effort during reviews.
              </p>
            </article>
            <article className="audience-card reveal">
              <div className="audience-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32">
                  <path d="M10 24h12M12 24v-5h8v5M9 19h14l-3-6h-8l-3 6Z" />
                  <path d="M13 13c0-3 1-6 3-9 2 3 3 6 3 9M6 28h20" />
                </svg>
              </div>
              <h3>Office Teams & Volunteers</h3>
              <p className="audience-role">Daily Operations</p>
              <p>
                Guided entry, searchable records, quick receipts, and clear workflows reduce “which
                register was it?” moments.
              </p>
            </article>
          </div>
        </section>

        <section className="faq-section section-shell" id="faq">
          <div className="section-heading reveal">
            <span className="impact-kicker">Straight answers for committees</span>
            <h2>Questions Worth Asking Early</h2>
            <p className="lede">
              Clear expectations make implementation easier for trustees, accountants, and office
              teams.
            </p>
          </div>
          <div className="faq-list reveal">
            <details className="faq-item" open>
              <summary>Is the system only suitable for very large Mathas?</summary>
              <p>
                No. The same core problems—mixed payment modes, scattered records, festival peaks,
                and committee reporting—appear at different scales. The system can begin with the
                capabilities your office needs.
              </p>
            </details>
            <details className="faq-item">
              <summary>Will our office team require heavy ERP training?</summary>
              <p>
                No. Implementation is conducted in person, with workflows configured around the
                people doing daily entry. Guided forms, search, filters, and clear role-based
                screens reduce the training burden.
              </p>
            </details>
            <details className="faq-item">
              <summary>Can we continue working with our existing auditor or CA?</summary>
              <p>
                Yes. Printable and export-ready reports help your existing auditor review income,
                expenses, donors, projects, categories, banking, and cash flow without changing your
                professional relationship.
              </p>
            </details>
            <details className="faq-item">
              <summary>How quickly can we begin using it?</summary>
              <p>
                The implementation is designed for an in-person go-live in two days once required
                masters, roles, and opening information are available.
              </p>
            </details>
            <details className="faq-item">
              <summary>How is sensitive donation and payment information protected?</summary>
              <p>
                Role-based access, controlled visibility, and audit trails help ensure each user
                sees the information required for their responsibility while sensitive actions
                remain traceable.
              </p>
            </details>
            <details className="faq-item">
              <summary>What support is available after launch?</summary>
              <p>
                After-sales support is available 24/7 for real operational needs, including the
                high-pressure periods around festivals and committee reporting.
              </p>
            </details>
          </div>
        </section>

        <section className="cta-section section-shell">
          <div className="cta-content reveal">
            <span className="impact-kicker">For your next committee conversation</span>
            <h2>Ready to Show Your Committee?</h2>
            <p>
              Book a calm, practical walkthrough mapped to your Matha's funds, people, approvals,
              daily entries, and reporting questions.
            </p>
            <a className="cta-btn" href="#contact">
              Request a Demo →
            </a>
            <div className="cta-points">
              <span className="cta-pill">No Commitment</span>
              <span className="cta-pill">Personalized Demo</span>
              <span className="cta-pill">In-Person Go-Live</span>
            </div>
          </div>

          <figure className="dashboard-showcase reveal">
            <div className="dashboard-stage">
              <div className="dashboard-float dashboard-float--sync" aria-hidden="true">
                <span className="dashboard-live-dot"></span>
                <span className="dashboard-float-copy">
                  <strong>Records in sync</strong>
                  <span>One trusted view</span>
                </span>
              </div>

              <div className="dashboard-laptop">
                <div className="dashboard-frame">
                  <div className="dashboard-bar" aria-hidden="true">
                    <span className="dashboard-dot"></span>
                    <span className="dashboard-dot"></span>
                    <span className="dashboard-dot"></span>
                    <span className="dashboard-bar-label">Aram ERP · Product view</span>
                  </div>
                  <div className="dashboard-viewport">
                    <Image
                      src="/mms/Aram%20ERP%20Dashboard%20Image.png"
                      alt="Aram ERP dashboard showing collections, projects, seva activity, and upcoming events"
                      width={1600}
                      height={900}
                      loading="lazy"
                    />
                    <span className="screen-glass" aria-hidden="true"></span>
                  </div>
                </div>
                <div className="laptop-base" aria-hidden="true"></div>
              </div>

              <div className="dashboard-float dashboard-float--report" aria-hidden="true">
                <span className="dashboard-float-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 3h9l4 4v14H6z"></path>
                    <path d="M14 3v5h5M9 13h6M9 17h4"></path>
                  </svg>
                </span>
                <span className="dashboard-float-copy">
                  <strong>Committee-ready</strong>
                  <span>Reports on demand</span>
                </span>
              </div>
            </div>
            <figcaption className="dashboard-caption">
              A real product view: collections, sevas, projects, and upcoming events in one
              controlled workspace.
            </figcaption>
          </figure>
        </section>

        <section className="field-proof-section section-shell" id="field-proof">
          <div className="section-heading reveal">
            <span className="impact-kicker">Evidence from implementation and daily use</span>
            <h2>Proof Beyond the Product Screen</h2>
            <p className="lede">
              A practical record of adoption, transaction scale, implementation speed, and
              continuing operational support.
            </p>
          </div>

          <div className="field-proof-grid">
            <article className="field-proof-card reveal">
              <span className="field-proof-value">₹2 Cr+</span>
              <h3>Donations Recorded</h3>
              <p>Contributions are receipted, tracked, and available for review.</p>
            </article>
            <article className="field-proof-card reveal">
              <span className="field-proof-value">10,000+</span>
              <h3>Devotee Records Managed</h3>
              <p>Devotee, family, seva, and donor data stays organized.</p>
            </article>
            <article className="field-proof-card reveal">
              <span className="field-proof-value">5,000+</span>
              <h3>Receipts Generated</h3>
              <p>Donations, sevas, and project receipts are created digitally.</p>
            </article>
            <article className="field-proof-card reveal">
              <span className="field-proof-value">1,200+</span>
              <h3>Sevas Scheduled</h3>
              <p>Ritual bookings and sankalpam details are planned clearly.</p>
            </article>
            <article className="field-proof-card reveal">
              <span className="field-proof-value">300+</span>
              <h3>Expense Entries Organized</h3>
              <p>Payments, expenses, and cashbook records stay structured.</p>
            </article>
            <article className="field-proof-card reveal">
              <span className="field-proof-value">50+</span>
              <h3>Reports Reviewed</h3>
              <p>Trustees get usable summaries for finance and operations.</p>
            </article>
          </div>
        </section>

        <section className="testimonial-section section-shell" id="testimonial">
          <div className="section-heading reveal">
            <span className="impact-kicker">From the people using the system</span>
            <h2>What Daily Clarity Feels Like</h2>
            <p className="lede">
              A verified client voice should carry more weight than another product claim.
            </p>
          </div>

          <figure className="voice reveal">
            <span className="voice-mark" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className="voice-quote">
              <p>
                Daily collections, sevas, and reports are clear at a glance now. What used to take a
                full day of reconciliation takes minutes.
              </p>
            </blockquote>
            <figcaption className="voice-author">
              <span className="voice-avatar" aria-hidden="true">
                SR
              </span>
              <span className="voice-person">
                <strong>Sri Raghavendra Mutt</strong>
                <span>Nanganallur, Chennai &middot; Client deployment</span>
              </span>
            </figcaption>
            <div className="voice-shift" aria-label="Reconciliation reduced from one day to minutes">
              <div className="voice-shift-step">
                <small>Before</small>
                <strong>1 full day</strong>
                <span>Manual reconciliation</span>
              </div>
              <div className="voice-shift-line" aria-hidden="true">
                <i />
              </div>
              <div className="voice-shift-step voice-shift-step--after">
                <small>With Aram ERP</small>
                <strong>Minutes</strong>
                <span>Clear at a glance</span>
              </div>
            </div>
          </figure>
        </section>

        <section className="contact-section section-shell" id="contact">
          <div className="contact-card reveal">
            <div className="contact-info">
              <h2>Plan a Practical Walkthrough</h2>
              <p className="contact-intro">
                Tell us how your office currently handles donations, payments, banking, people, and
                reports. We will map the walkthrough to the questions your team actually carries.
              </p>
              <ul className="contact-methods">
                <li>
                  <span className="contact-icon" aria-hidden="true">
                    ✉
                  </span>
                  <div>
                    <strong>Email</strong>
                    <span>
                      <a href="mailto:kapplabs@kannanware.com">kapplabs@kannanware.com</a>
                    </span>
                  </div>
                </li>
                <li>
                  <span className="contact-icon" aria-hidden="true">
                    ↗
                  </span>
                  <div>
                    <strong>Existing Customer</strong>
                    <span>
                      <a href={`${APP_URL}/login`}>Open secure login</a>
                    </span>
                  </div>
                </li>
                <li>
                  <span className="contact-icon" aria-hidden="true">
                    ◎
                  </span>
                  <div>
                    <strong>Product</strong>
                    <span><a className="footer-product-credit" href="https://kapplabs.com/">Aram ERP · A product of Kapplabs</a></span>
                  </div>
                </li>
              </ul>
            </div>
            <form className="contact-form" id="contact-form" noValidate>
              <div className="form-fields">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cf-name">Full Name</label>
                    <input type="text" id="cf-name" name="name" required autoComplete="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-matha">Matha / Institution</label>
                    <input type="text" id="cf-matha" name="matha" autoComplete="organization" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cf-email">Email</label>
                    <input type="email" id="cf-email" name="email" required autoComplete="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-phone">Phone</label>
                    <input type="tel" id="cf-phone" name="phone" autoComplete="tel" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="cf-message">Message</label>
                  <textarea id="cf-message" name="message" rows={4} required></textarea>
                </div>
                <button type="submit" className="form-submit">
                  {" "}
                  Email →
                </button>
              </div>
              <p className="form-success" id="form-success" role="status">
                Your email app has been opened with the enquiry details. Please review and send the
                message to complete your request.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-column footer-brand">
            <h3 className="footer-title">Aram ERP</h3>
            <p className="footer-desc">
              Secure donation, ledger, people, and operational management for Matha institutions.
            </p>
            <p className="footer-contact">
              <strong>Email:</strong>{" "}
              <a href="mailto:kapplabs@kannanware.com">kapplabs@kannanware.com</a>
            </p>
            <p className="footer-contact"><a className="footer-product-credit" href="https://kapplabs.com/">Aram ERP - A Kapplabs Product</a></p>
          </div>

          <div className="footer-column">
            <h4 className="footer-section-title">Product</h4>
            <ul className="footer-links">
              <li>
                <a href="#modules" data-scroll>
                  Features
                </a>
              </li>
              <li>
                <a href="#experience" data-scroll>
                  Compare
                </a>
              </li>
              <li>
                <a href="#how-we-work" data-scroll>
                  How
                </a>
              </li>
              <li>
                <a href="#faq" data-scroll>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#testimonial" data-scroll>
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-section-title">Access</h4>
            <ul className="footer-links">
              <li>
                <a href={`${APP_URL}/login`}>Customer Login</a>
              </li>
              <li>
                <a href="/">Kapplabs</a>
              </li>
              <li>
                <a href="#contact" data-scroll>
                  Request Demo
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-section-title">Legal</h4>
            <ul className="footer-links">
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <a href="#contact" data-scroll>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; 2026 Kapplabs Aram ERP is <a className="footer-product-credit" href="https://kapplabs.com/">a Kapplabs product</a>.</p>
          <p className="footer-tagline">Unified ERP for Faith, Service & Trust Management</p>
        </div>
      </footer>
    </div>
  );
}
