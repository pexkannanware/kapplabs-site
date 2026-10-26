export const FEATURE_PILLARS = [
  { icon: "⚡", title: "AI-native from day one", body: "Intelligence woven into every workflow, not retrofitted" },
  { icon: "📐", title: "Workflow-fit design", body: "Interfaces that mirror actual ops, not generic dashboards" },
  { icon: "🔒", title: "Security-first architecture", body: "Role-aware controls and full audit trails by default" },
  { icon: "🚀", title: "Fast deployment", body: "Beta-ready in weeks, not quarters" },
  { icon: "🏭", title: "Built for real operations", body: "Every feature originates from live customer friction" },
] as const;

export const TRANSFORMATIONS = [
  {
    icon: "⎋",
    title: "Unified data layer",
    body: "Spreadsheets + messaging apps become a structured, AI-indexed repository. Every receipt, approval, and vendor interaction is queryable.",
    link: "Explore architecture →",
  },
  {
    icon: "⤚",
    title: "Exception-based governance",
    body: "Manual approvals move to AI-governed workflows. Routine requests auto-resolve, policy violations flag instantly.",
    link: "See governance →",
  },
  {
    icon: "◷",
    title: "Live operational intelligence",
    body: "Dashboards update with every transaction. AI summaries replace after-the-fact reporting.",
    link: "View live insights →",
  },
] as const;

export const THESIS_CARDS = [
  {
    number: "01",
    title: "Market signal",
    body: "Organizations need complex solutions, rapid implementation, automation, stronger UX, and stronger security — legacy vendors fail to deliver all five.",
  },
  {
    number: "02",
    title: "Product response",
    body: "We spin out IP-based products that embed exact workflow logic. Faster rollout velocity, continuous hardening from production usage.",
  },
  {
    number: "03",
    title: "Beta-first method",
    body: "Ship with early customers, improve with live operational input. No abstract theory — real users shape every release.",
  },
] as const;

export const STUDIO_PILLARS = [
  { icon: "◇", title: "AI-first product design", body: "Intelligence built into every workflow — entry assistance, anomaly flags, live summarization. Not added later." },
  { icon: "⊚", title: "Domain-deep AI", body: "Trained on receipts, approvals, vendor docs, and org-specific policies. Context generic tools lack." },
  { icon: "◌", title: "Calm, smart UX", body: "AI reduces clicks, pre-fills decisions, and guides users while interface remains minimal." },
  { icon: "⌘", title: "Secure by default", body: "Audit trails on every action, role-aware access, and safe outputs that earn trust." },
] as const;

export const OPERATING_STEPS = [
  { step: "01", title: "Map the workflow", body: "Capture exact daily friction, policy rules, and decision bottlenecks." },
  { step: "02", title: "Ship with AI embedded", body: "Every beta release includes intelligence as core — not a bolt-on." },
  { step: "03", title: "Learn & sharpen", body: "Refine AI outputs, controls, and audit trails from production edge cases." },
  { step: "04", title: "Scale intelligence", body: "Each new customer makes the platform smarter and faster to deploy." },
] as const;

export const WIN_CARDS = [
  {
    title: "AI at workflow level, not chat",
    body: "No superficial chatbot. Intelligence lives inside approval routing, anomaly detection, and audit trails.",
  },
  {
    title: "Trained on real organizational workflows",
    body: "Expense chains, procurement, vendor approvals — domain context generic AI tools miss.",
  },
  {
    title: "Security + auditability by default",
    body: "Role-aware AI, immutable logs, and safe outputs that compliance teams trust.",
  },
  {
    title: "Clean UX reduces training burden",
    body: "AI pre-fills, guides, and reduces cognitive load — interface stays minimal even with deep intelligence.",
  },
  {
    title: "Usage-driven roadmap",
    body: "Roadmap built on live signals, not market slides. Real operational data drives every feature.",
  },
] as const;

export const KAPPLABS_NAV_BEFORE_PRODUCTS = [
  { href: "/platform-thesis", label: "Platform thesis" },
  { href: "/why-now", label: "Why now" },
] as const;

export const KAPPLABS_NAV_AFTER_PRODUCTS = [
  { href: "/model", label: "Model" },
  { href: "/edge", label: "Edge" },
  { href: "/launch", label: "Launch" },
] as const;

/* ── In-depth page content ── */

export const WHY_NOW_DEPTH = {
  intro:
    "Organizations are hitting the same operational ceiling at the same time: more transactions, tighter compliance, and teams still coordinating across spreadsheets, messaging apps, and manual approvals. The inflection point is not theoretical — it is visible in every audit prep cycle and every month-end close.",
  narrative: [
    "Kapplabs exists because workflow gaps repeat across organizations. The same friction shows up in expense chains, vendor onboarding, ritual scheduling, and executive reporting — different domains, identical pattern: fragmented tools, delayed visibility, and controls applied after the fact.",
    "Product IP can compound clarity, controls, and speed with every release. A unified AI system of record does not just store data — it understands workflow context, flags exceptions early, and gives operators confidence that every action is traceable.",
  ],
  signals: [
    "Legacy ERP and SaaS suites are too slow to configure for niche operational workflows",
    "Generic AI assistants lack domain policy context and audit-grade outputs",
    "Teams want automation without sacrificing human oversight on exceptions",
    "Security and role-aware access are now table stakes, not premium add-ons",
  ],
  transformations: [
    {
      icon: "⎋",
      title: "Unified data layer",
      summary: "Spreadsheets + messaging apps become a structured, AI-indexed repository.",
      details: [
        "Every receipt, approval, and vendor interaction becomes queryable in one auditable layer",
        "AI indexes unstructured inputs — photos, PDFs, chat confirmations — into structured records",
        "Cross-functional search replaces hunting through folders and message threads",
        "Historical context travels with each record for faster dispute resolution and audits",
      ],
    },
    {
      icon: "⤚",
      title: "Exception-based governance",
      summary: "Manual approvals move to AI-governed workflows with policy-aware routing.",
      details: [
        "Routine requests auto-resolve when they match defined policy thresholds",
        "Policy violations and anomalies flag instantly to the right approver",
        "Approval chains mirror org hierarchy without custom code per customer",
        "Every decision is logged with who approved, when, and under which rule",
      ],
    },
    {
      icon: "◷",
      title: "Live operational intelligence",
      summary: "Dashboards and AI summaries update with every transaction — not after month-end.",
      details: [
        "Real-time KPIs replace after-the-fact reporting packs",
        "AI-generated summaries highlight what changed and what needs attention",
        "Operators see exceptions before they become escalations",
        "Leadership gets current-state clarity without waiting for analyst cycles",
      ],
    },
  ],
} as const;

export const PLATFORM_THESIS_DEPTH = {
  intro:
    "Kapplabs is the product division born from transformation work — where services teams saw the same workflow pain repeat, and the answer was not another consulting engagement but durable product IP.",
  cards: [
    {
      number: "01",
      title: "Market signal",
      body: "Organizations need complex solutions, rapid implementation, automation, stronger UX, and stronger security — legacy vendors fail to deliver all five at once.",
      points: [
        "Enterprise suites optimize for breadth, not workflow-fit for specific operations",
        "Point solutions solve one step but break audit continuity across the chain",
        "Buyers increasingly expect AI-native behavior, not retrofitted chat widgets",
        "Security teams demand role-aware AI with immutable audit trails from day one",
      ],
    },
    {
      number: "02",
      title: "Product response",
      body: "We spin out IP-based products that embed exact workflow logic — faster rollout velocity and continuous hardening from production usage.",
      points: [
        "Each product encodes domain logic learned from live customer operations",
        "Multi-tenant architecture lets new customers onboard without bespoke builds",
        "Shared platform primitives — auth, audit, AI guardrails — compound across products",
        "Release velocity stays high because features originate from observed friction, not roadmaps alone",
      ],
    },
    {
      number: "03",
      title: "Beta-first method",
      body: "Ship with early customers, improve with live operational input. No abstract theory — real users shape every release.",
      points: [
        "Beta cohorts run production workloads, not sandbox demos",
        "Edge cases from live usage drive control hardening and UX refinement",
        "Customer feedback loops directly into sprint priorities",
        "Each release cycle follows ship → learn → harden → scale",
      ],
    },
  ],
  contrasts: [
    { label: "Services-led", desc: "Revenue scales with headcount; knowledge stays in engagements" },
    { label: "IP-led", desc: "Revenue scales with product adoption; knowledge compounds in the platform" },
  ],
  products: [
    { name: "ARAM ERP", href: "/aram", note: "Trust and temple operations" },
    { name: "Office of the CFO AI Agents", href: "/kapplabs/office-of-the-cfo-ai-agents", note: "Executive finance workflows" },
  ],
} as const;

export const MODEL_DEPTH = {
  intro:
    "Kapplabs does not treat AI as a feature layer on top of legacy forms. The operating model maps real daily friction first, embeds intelligence at the workflow level, and compounds learning across every customer deployment.",
  steps: [
    {
      step: "01",
      title: "Map the workflow",
      body: "Capture exact daily friction, policy rules, and decision bottlenecks before writing product specs.",
      deliverables: ["Workflow diagrams from live operations", "Policy rule inventory", "Exception and escalation paths", "Data sources and handoff points"],
    },
    {
      step: "02",
      title: "Ship with AI embedded",
      body: "Every beta release includes intelligence as core — entry assistance, routing logic, and anomaly detection from v1.",
      deliverables: ["AI-assisted data entry and validation", "Policy-aware routing engine", "Role-scoped views and actions", "Audit log on every state change"],
    },
    {
      step: "03",
      title: "Learn & sharpen",
      body: "Refine AI outputs, controls, and audit trails from production edge cases — not lab scenarios.",
      deliverables: ["Feedback loops from operator actions", "False-positive tuning on anomaly flags", "Control hardening from compliance review", "UX simplification from usage telemetry"],
    },
    {
      step: "04",
      title: "Scale intelligence",
      body: "Each new customer makes the platform smarter and faster to deploy through shared primitives and domain patterns.",
      deliverables: ["Reusable workflow templates", "Cross-tenant learning on safe aggregates", "Faster onboarding per new vertical", "Compound advantage on every release"],
    },
  ],
  pillars: [
    {
      icon: "◇",
      title: "AI-first product design",
      body: "Intelligence built into every workflow — entry assistance, anomaly flags, live summarization. Not added later.",
      detail: "Design starts from the decision the operator needs to make, then works backward to what AI should surface, pre-fill, or flag — keeping the interface calm even when the logic runs deep.",
    },
    {
      icon: "⊚",
      title: "Domain-deep AI",
      body: "Trained on receipts, approvals, vendor docs, and org-specific policies. Context generic tools lack.",
      detail: "Models and rules understand domain vocabulary — seva types, approval hierarchies, fiscal periods — so outputs are actionable without constant human correction.",
    },
    {
      icon: "◌",
      title: "Calm, smart UX",
      body: "AI reduces clicks, pre-fills decisions, and guides users while interface remains minimal.",
      detail: "Progressive disclosure keeps routine paths fast; complexity appears only when the workflow genuinely requires human judgment.",
    },
    {
      icon: "⌘",
      title: "Secure by default",
      body: "Audit trails on every action, role-aware access, and safe outputs that earn trust.",
      detail: "Security is architectural — tenant isolation, scoped AI context, and immutable logs are not optional modules.",
    },
  ],
  principles: [
    "No feature ships without an audit trail",
    "AI suggestions are always explainable and overridable",
    "Workflow-fit beats feature breadth",
    "Beta customers influence the next sprint, not just the roadmap deck",
  ],
} as const;

export const EDGE_DEPTH = {
  intro:
    "Kapplabs wins in production because the team stays close to implementation reality. That proximity shows up in faster validation, stronger controls, and AI that understands the workflow — not just the document.",
  advantages: [
    {
      title: "AI at workflow level, not chat",
      body: "No superficial chatbot. Intelligence lives inside approval routing, anomaly detection, and audit trails.",
      example: "When a vendor payment exceeds policy threshold, the system routes to the right approver with context — not a generic chat response suggesting you check policy.",
    },
    {
      title: "Trained on real organizational workflows",
      body: "Expense chains, procurement, vendor approvals — domain context generic AI tools miss.",
      example: "Kapplabs products understand multi-step seva booking, trust fund segregation, and role-based temple operations — not just generic form fields.",
    },
    {
      title: "Security + auditability by default",
      body: "Role-aware AI, immutable logs, and safe outputs that compliance teams trust.",
      example: "Every AI-assisted action records what was suggested, what was accepted, and who overrode it — ready for audit without retroactive reconstruction.",
    },
    {
      title: "Clean UX reduces training burden",
      body: "AI pre-fills, guides, and reduces cognitive load — interface stays minimal even with deep intelligence.",
      example: "New staff reach productive workflows in days because the product guides decisions inline — not through training manuals.",
    },
    {
      title: "Usage-driven roadmap",
      body: "Roadmap built on live signals, not market slides. Real operational data drives every feature.",
      example: "Feature priorities come from observed friction in production — repeated manual steps, approval delays, and support patterns — not competitor feature matrices.",
    },
  ],
  vsGeneric: [
    { generic: "Chat overlay on existing forms", kapplabs: "AI embedded in routing, validation, and state transitions" },
    { generic: "One-size-fits-all templates", kapplabs: "Workflow-fit design from live customer operations" },
    { generic: "Security as add-on module", kapplabs: "Role-aware AI and audit trails from architecture" },
    { generic: "Quarterly roadmap from analysts", kapplabs: "Sprint priorities from production usage signals" },
  ],
} as const;

export const LAUNCH_DEPTH = {
  intro:
    "Kapplabs is opening early access for teams that need real-time governance, auditable intelligence, and workflow-fit products — not another generic SaaS suite that takes quarters to configure.",
  audiences: [
    { title: "Trust & temple operations", body: "ARAM ERP, seva scheduling, donations, and compliance-ready reporting." },
    { title: "Finance & executive teams", body: "CFO workflow agents, approvals, and live operational clarity." },
    { title: "Transformation leaders", body: "Organizations replacing spreadsheet chains with AI-native systems of record." },
  ],
  benefits: [
    "Beta-ready deployment in weeks, not quarters",
    "Direct access to founders and product engineering",
    "Workflow mapping session included in onboarding",
    "Influence on roadmap through live production feedback",
    "Security and audit posture reviewed before go-live",
  ],
  onboarding: [
    { step: "01", title: "Discovery briefing", body: "Map your current workflow, pain points, and policy rules with the Kapplabs team." },
    { step: "02", title: "Fit assessment", body: "Identify which product — or combination — matches your operational profile." },
    { step: "03", title: "Beta onboarding", body: "Deploy with AI embedded from day one, with role setup and audit configuration." },
    { step: "04", title: "Live iteration", body: "Refine controls, UX, and intelligence from real usage — ship → learn → harden → scale." },
  ],
} as const;

export const SECURITY_DEPTH = {
  intro:
    "Kapplabs products are built security-first — role-aware access, immutable audit trails, and safe AI outputs are architectural defaults, not optional modules.",
  pillars: [
    {
      title: "Role-aware access",
      body: "Every view, action, and AI suggestion respects tenant boundaries and user roles. Operators see only what their role permits.",
    },
    {
      title: "Immutable audit trails",
      body: "Every state change, approval, override, and AI-assisted decision is logged with who acted, when, and under which policy.",
    },
    {
      title: "Safe AI outputs",
      body: "AI suggestions are scoped to authorized context, explainable, and always overridable by a human operator.",
    },
    {
      title: "Tenant isolation",
      body: "Multi-tenant architecture keeps organizational data separated at the platform layer — not just at the UI.",
    },
  ],
  practices: [
    "Least-privilege defaults for new users and roles",
    "Audit logs retained for compliance and dispute resolution",
    "Human override required on policy exceptions",
    "Security review included in beta onboarding",
  ],
} as const;

export const PRIVACY_SECTIONS = [
  {
    title: "What we collect",
    body: "We collect information you provide when requesting a briefing, using our products, or contacting us — including name, email, organization details, and operational data entered into Kapplabs applications.",
  },
  {
    title: "How we use data",
    body: "Data is used to deliver and improve Kapplabs products, respond to support requests, maintain security and audit integrity, and communicate about your account or early-access program.",
  },
  {
    title: "AI and your data",
    body: "AI features operate within your authorized scope and tenant boundary. We do not use your operational data to train public models. Product improvements use aggregated, anonymized signals where applicable.",
  },
  {
    title: "Data retention",
    body: "Operational records follow your organization's retention needs and applicable regulations. Contact us to discuss data export or deletion requests for your tenant.",
  },
  {
    title: "Contact",
    body: "Privacy questions can be directed to kapplabs@kannanware.com.",
  },
] as const;

export const TERMS_SECTIONS = [
  {
    title: "Use of products",
    body: "Kapplabs products are provided for authorized organizational use. You are responsible for accounts, credentials, and ensuring users comply with your internal policies.",
  },
  {
    title: "Early access & beta",
    body: "Beta and early-access features may change as we learn from production usage. We aim for stability and audit integrity, but beta services are provided as-is during the evaluation period.",
  },
  {
    title: "Acceptable use",
    body: "You may not misuse Kapplabs services to violate law, attempt unauthorized access, interfere with platform operation, or submit malicious content.",
  },
  {
    title: "Intellectual property",
    body: "Kapplabs retains rights to its platform, product IP, and branding. Your operational data remains yours, subject to the license needed to operate the service.",
  },
  {
    title: "Limitation of liability",
    body: "Kapplabs is provided with commercially reasonable care. For beta deployments, liability is limited to the extent permitted by applicable law. Contact us for enterprise terms.",
  },
  {
    title: "Contact",
    body: "Terms questions can be directed to kapplabs@kannanware.com.",
  },
] as const;

export const FOOTER_LINKS = {
  products: [
    { href: "/aram", label: "ARAM ERP" },
    { href: "/kapplabs/office-of-the-cfo-ai-agents", label: "CFO AI Agents" },
  ],
  platform: [
    { href: "/why-now", label: "Why now" },
    { href: "/platform-thesis", label: "Platform thesis" },
    { href: "/launch", label: "Launch" },
  ],
  company: [{ href: "/contact", label: "Contact" }],
  legal: [
    { href: "/security", label: "Security" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
} as const;
