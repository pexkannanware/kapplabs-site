/*
 * Content for the Kapplabs home page.
 * Images live in /public/showcase/. To swap one, replace the file or change `src`.
 */

export const TRUST_POINTS = ["Part of Kannanware", "Products live in production", "AI at the core"] as const;

export const STATEMENT =
  "Most businesses still run on Excel sheets, WhatsApp messages and approvals that live in someone's head. We replace that with simple software that fits how you work, and AI that handles the repetitive tasks.";

export const STATEMENT_HIGHLIGHT_FROM = "We replace";

export const SERVICES = [
  {
    id: "custom",
    title: "Custom software",
    body: "Web platforms, business applications, portals, mobile-friendly apps and websites, built around how you work.",
    tags: ["Web apps", "Mobile-friendly", "Integrations", "Websites"],
  },
  {
    id: "ai",
    title: "AI solutions",
    body: "AI that reads documents, answers customers and automates repetitive work inside the tools you already use.",
    tags: ["Document reading", "AI assistants", "Automation", "Insights"],
  },
  {
    id: "saas",
    title: "SaaS products",
    body: "Ready-to-use platforms you can subscribe to and start using quickly, built and run by us.",
    tags: ["ARAM ERP", "Office of the CFO AI Agents"],
  },
] as const;

/* "If this is you, here is what we build." General problems, not tied to any one niche. */
export const SOLUTIONS = [
  {
    area: "Repetitive work",
    problem: "Your team spends hours on the same manual tasks every day.",
    solution: "AI agents and automation that handle routine work, so people focus on what matters.",
  },
  {
    area: "Disconnected tools",
    problem: "Data is scattered across spreadsheets, emails and apps that don't talk to each other.",
    solution: "One connected system, integrated with the tools you already use.",
  },
  {
    area: "No clear visibility",
    problem: "Decisions wait on reports that someone has to put together by hand.",
    solution: "Live dashboards and AI insights, so you see what is happening as it happens.",
  },
  {
    area: "A product idea",
    problem: "You have an idea for a software product but no team to build it.",
    solution: "We design, build and launch your SaaS product, and help you scale it.",
  },
  {
    area: "Outdated software",
    problem: "Old systems are slow, hard to change and holding the business back.",
    solution: "Modern, cloud-based software that is fast, secure and easy to extend.",
  },
  {
    area: "Customer experience",
    problem: "Customers wait too long for answers, updates and support.",
    solution: "Customer portals, mobile-friendly apps and AI assistants that respond instantly.",
  },
] as const;

/* Industry explorer. KPIs and insights are illustrative examples of what we could build, not client data. */
export const INDUSTRIES = [
  {
    icon: "factory",
    name: "Manufacturing",
    tone: "#d97706",
    app: "Production control",
    kpis: [
      { label: "Units today", value: "1,240" },
      { label: "Line efficiency", value: "92%" },
      { label: "Quality flags", value: "3" },
    ],
    bars: [62, 70, 66, 78, 84, 80, 92],
    insight: "Line 3 output is dipping. Maintenance check suggested before the next shift.",
  },
  {
    icon: "store",
    name: "Retail and e-commerce",
    tone: "#e11d48",
    app: "Store operations",
    kpis: [
      { label: "Orders today", value: "318" },
      { label: "Conversion", value: "3.4%" },
      { label: "Low stock", value: "12" },
    ],
    bars: [40, 55, 48, 62, 75, 88, 81],
    insight: "Weekend demand is up 18%. Reorder top sellers by Thursday.",
  },
  {
    icon: "health",
    name: "Healthcare",
    tone: "#0d9488",
    app: "Clinic dashboard",
    kpis: [
      { label: "Appointments", value: "46" },
      { label: "Avg. wait", value: "12 min" },
      { label: "Follow-ups due", value: "9" },
    ],
    bars: [55, 60, 72, 68, 74, 70, 77],
    insight: "Tuesday mornings are overbooked. Two extra slots would cut waiting time.",
  },
  {
    icon: "education",
    name: "Education",
    tone: "#7c3aed",
    app: "Campus portal",
    kpis: [
      { label: "Applications", value: "210" },
      { label: "Fees collected", value: "86%" },
      { label: "Attendance", value: "94%" },
    ],
    bars: [30, 42, 58, 65, 72, 80, 86],
    insight: "34 families haven't paid term fees. Reminders scheduled for tomorrow.",
  },
  {
    icon: "finance",
    name: "Finance",
    tone: "#1470ff",
    app: "Office of the CFO",
    kpis: [
      { label: "Close progress", value: "72%" },
      { label: "Variances", value: "7" },
      { label: "Briefs ready", value: "3" },
    ],
    bars: [20, 34, 45, 52, 61, 68, 72],
    insight: "Two variances exceed policy. Routed to the controller with full context.",
  },
  {
    icon: "logistics",
    name: "Logistics",
    tone: "#ea580c",
    app: "Fleet tracker",
    kpis: [
      { label: "Shipments", value: "128" },
      { label: "On time", value: "96%" },
      { label: "Delayed", value: "4" },
    ],
    bars: [70, 74, 69, 80, 86, 90, 96],
    insight: "Route 7 is congested. A faster alternative saves around 25 minutes.",
  },
  {
    icon: "services",
    name: "Professional services",
    tone: "#334155",
    app: "Client workspace",
    kpis: [
      { label: "Active projects", value: "14" },
      { label: "Billable time", value: "78%" },
      { label: "Invoices due", value: "6" },
    ],
    bars: [58, 62, 66, 64, 71, 75, 78],
    insight: "Project Atlas is 80% through its budget at 60% progress. Worth a review.",
  },
] as const;

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  status: string;
  features: readonly string[];
  image: { src: string; label: string };
};

export const PRODUCTS: readonly Product[] = [
  {
    id: "aram",
    name: "ARAM ERP",
    tagline: "ERP for trusts, temples and mathas",
    description:
      "One platform for donations, sevas, accounts, people and compliance. Built with the teams who run these institutions every day.",
    href: "/aram",
    status: "Live",
    features: [
      "Seva bookings, receipts and the daily panchangam in one view",
      "Donations traced from receipt to fund, with audit-ready reports",
      "Cashbook, banking and journals with role-based access",
    ],
    image: { src: "/showcase/aram-trust-dashboard.jpg", label: "Dashboard" },
  },
  {
    id: "cfo",
    name: "Office of the CFO AI Agents",
    tagline: "Governed AI agents for finance leaders",
    description:
      "Agents that monitor the close, flag variance risk and route escalations with full context, so finance leaders act sooner without losing control.",
    href: "/kapplabs/office-of-the-cfo-ai-agents",
    status: "Early access",
    features: [
      "Live close monitoring across tasks, blockers and exceptions",
      "Decision-ready executive briefs for every operating cadence",
      "Policy-safe escalation with a full audit trail",
    ],
    image: { src: "/showcase/cfo-close-monitor.jpg", label: "Close monitor" },
  },
];

export const PRODUCT_MENU = [
  { href: "/aram", name: "ARAM ERP", body: "ERP for trusts, temples and mathas", icon: "aram" },
  { href: "/kapplabs/office-of-the-cfo-ai-agents", name: "Office of the CFO AI Agents", body: "Governed AI agents for finance teams", icon: "cfo" },
] as const;

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  summary: string;
  href: string;
  src: string;
};

/* Selected client and product work. Each item opens the live site in a new tab. */
export const PORTFOLIO: readonly PortfolioItem[] = [
  {
    id: "kannanware",
    title: "Kannanware",
    category: "Enterprise · Corporate site",
    summary: "The corporate site for an AI-first SAP consultancy, covering products, industries, capabilities and insights.",
    href: "https://www.kannanware.com/in",
    src: "/showcase/site-kannanware.jpg",
  },
  {
    id: "keaas",
    title: "KEAAS Global Services",
    category: "Enterprise · Corporate site",
    summary: "A site for a provider of vetted SAP consultants, expert pods and rapid-response teams for system integrators.",
    href: "https://keaasglobal.com/",
    src: "/showcase/site-keaas.jpg",
  },
  {
    id: "divinewill",
    title: "The Divine Will",
    category: "Healthcare · Website",
    summary: "A calm, confidential site for a counselling practice, with services, self-assessments, workshops and appointment booking.",
    href: "https://thedivinewill.in/",
    src: "/showcase/site-divinewill.jpg",
  },
  {
    id: "aram-app",
    title: "ARAM ERP",
    category: "SaaS · Web application",
    summary: "Our ERP for trusts, temples and mathas: donations, sevas, accounts and compliance in one secure web app.",
    href: "https://mms.kapplabs.com/login",
    src: "/showcase/aram-trust-dashboard.jpg",
  },
];

export const APPROACH = [
  { step: "01", when: "Day 1", title: "A conversation", body: "Tell us how your business runs today and what slows it down. No technical jargon." },
  { step: "02", when: "Week 1", title: "A clear plan", body: "We recommend the right solution and share scope, timeline and cost before work starts." },
  { step: "03", when: "Every 2 weeks", title: "Build and review", body: "You see working software regularly and give feedback as we go." },
  { step: "04", when: "Go-live and beyond", title: "Launch and support", body: "We train your team, go live, and stay on to support and improve the software." },
] as const;

export const COMMITMENTS = [
  "Clear scope and cost before we start",
  "Regular demos, no surprises",
  "Your data stays yours",
  "Support after go-live",
] as const;

export const FAQ = [
  {
    q: "What does Kapplabs do?",
    a: "We build custom software, AI solutions and ready-to-use SaaS products for businesses. Our products include ARAM ERP and the Office of the CFO AI Agents.",
  },
  {
    q: "Do you work with small and medium businesses?",
    a: "Yes. Many of the problems we solve, like billing, approvals, reports and data entry, matter most to growing businesses. We size the solution to your needs and budget.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on what you need. After a first conversation we share a clear proposal with scope, timeline and cost, so you know exactly what you are paying for before work begins.",
  },
  {
    q: "Can you work with the software we already use?",
    a: "Usually, yes. We connect with existing systems wherever they allow it, such as accounting software, payment gateways, email and messaging, so your team does not have to start over.",
  },
  {
    q: "How long does it take?",
    a: "Our products can be ready for a pilot in weeks. Custom builds are planned in phases, so you start using working software early instead of waiting months.",
  },
  {
    q: "Is our data safe, and is it used to train AI?",
    a: "Your data stays yours. We use role-based access and audit logs, and your business data is not used to train public AI models.",
  },
  {
    q: "How is Kapplabs related to Kannanware?",
    a: "Kapplabs is the product and AI division of Kannanware, an AI-first SAP consultancy.",
  },
] as const;
