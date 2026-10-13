// Editable site copy. Keep claims grounded in real product capabilities —
// no invented customers, statistics, certifications or testimonials.

export const CONTACT_EMAIL = 'kapplabs@kannanware.com'

export const links = {
  mutts: 'https://mms.kapplabs.com/mms',
  temples: 'https://aram-temple-erp.vercel.app/',
  kapplabs: 'https://kapplabs.com/',
  login: 'https://mms.kapplabs.com/login',
  privacy: 'https://mms.kapplabs.com/privacy',
  terms: 'https://mms.kapplabs.com/terms',
}

export const navItems: [string, string][] = [
  ['Features', '#features'],
  ['How it works', '#donations'],
  ['Solution', '#solutions'],
  ['Resources', '#faq'],
]

export const heroChapters = [
  {
    label: 'Connected',
    title: ['One connected system.', 'Every responsibility.'],
    text: 'Donations, accounts, projects, people and records — brought together for Trust operations.',
  },
  {
    label: 'Accounted',
    title: ['Every contribution.', 'Clearly accounted.'],
    text: 'Connect donors, receipts, accounts and allocations with the work they support.',
  },
  {
    label: 'In view',
    title: ['A clearer view', 'of your Trust.'],
    text: 'Bring daily activity, project progress and reports into one connected workspace.',
  },
]

export const financeFeatures: [string, string][] = [
  ['Income & expense tracking', 'Record what comes in and what goes out, in one place.'],
  ['Budget management', 'Plan budgets and follow spending against them.'],
  ['Automated reports', 'Prepare reports from records already kept in the system.'],
  ['Bank reconciliation', 'Match bank activity with recorded entries.'],
  ['Multi-account support', 'Keep several accounts and funds side by side.'],
  ['Audit trail', 'A history of entries and changes, ready for review.'],
]

// Approved client testimonial (an ARAM ERP customer). Use only real, approved quotes here.
export const testimonial = {
  quote: 'Daily collections, sevas, and reports are clear at a glance now. What used to take a full day of reconciliation takes minutes.',
  name: 'Sri Raghavendra Mutt',
  place: 'Nanganallur, Chennai',
  initials: 'SR',
  before: '1 day',
  after: 'Minutes',
}

export const donationSteps = ['Donor', 'Donation', 'Receipt', 'Allocation', 'Project', 'Report']

export const faqItems: [string, string][] = [
  ['Can ARAM ERP manage different Trust activities?', 'The platform brings finance, donations, projects, people, documents and reporting into one connected workspace. The right configuration depends on your Trust’s operating model.'],
  ['Can donations and expenses be tracked together?', 'Donation records, accounts and project expenses can be organized together, so the relationship between contributions and activity is easier to review.'],
  ['Can different teams have different access?', 'Role-based access and branch-level controls help organize access around responsibilities — trustees, accounts, project teams, administrators, staff and auditors.'],
  ['Can projects be tracked against budgets?', 'Projects and activities can be tracked alongside budgets, expenses and utilisation records.'],
  ['Can documents and approvals be organized?', 'Document records and approval workflows keep supporting information connected to the operational activity it belongs to.'],
  ['How does reporting work?', 'Reports draw on the records already kept in the system, so finance, donations and project activity can be reviewed together.'],
  ['How does implementation work?', 'The process starts by understanding your Trust’s structure and reporting needs, then configuring the relevant workflows and records with your team.'],
]
