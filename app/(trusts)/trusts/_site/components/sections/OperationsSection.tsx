import systemImage from '../../assets/sections/operations-system.webp'
import { Eyebrow } from '../Eyebrow'
import { Icon, type IconName } from '../Icon'

const areas: [string, IconName, string][] = [
  ['Finance', 'bank', 'Accounts, budgets and reconciliation'],
  ['Donations', 'donation', 'Donors, receipts and allocations'],
  ['People', 'people', 'Trustees, staff and their roles'],
  ['Projects', 'project', 'Programmes, budgets and progress'],
  ['Documents', 'file', 'Records and supporting files'],
  ['Compliance', 'shield', 'Approvals and audit trails'],
  ['Reports', 'report', 'Views for trustees and reviewers'],
]

export function OperationsSection() {
  return (
    <section className="operations section" id="solutions" aria-labelledby="operations-heading">
      <span id="about" className="anchor" aria-hidden="true"/>
      <div className="container operations-grid">
        <div className="operations-copy" data-reveal>
          <Eyebrow>The Trust, connected</Eyebrow>
          <h2 id="operations-heading" className="display">One institution. <em>Many responsibilities.</em></h2>
          <p className="lede">A Trust manages much more than donations. It manages people, projects, documents, approvals and accountability. ARAM ERP brings those responsibilities into one connected workspace — each area stays clear while information moves between them.</p>
        </div>

        <figure className="operations-figure" data-reveal="mask">
          <img src={systemImage.src} alt="A cash book, receipt book, staff register, minutes book and document, approval and project files arranged around a tablet running the ARAM ERP dashboard" width="1299" height="1625" loading="lazy" decoding="async"/>
          <figcaption><span>ARAM ERP</span>Seven areas. One system.</figcaption>
        </figure>

        <ul className="areas" aria-label="Areas of Trust operations">
          {areas.map(([name, icon, text], index) => (
            <li key={name} data-reveal style={{ ['--d' as string]: `${index * 60}ms` }}>
              <span className="area-icon"><Icon name={icon} size={19}/></span>
              <strong>{name}</strong>
              <small>{text}</small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
