import blueprintImage from '../../assets/sections/documents-record.webp'
import { Eyebrow } from '../Eyebrow'
import { Icon } from '../Icon'

const trail: [string, string][] = [
  ['Document', 'A file is added and linked to its context.'],
  ['Review', 'The right people look it over.'],
  ['Approval', 'A decision is recorded against it.'],
  ['Record', 'It becomes part of the Trust’s record.'],
  ['Audit trail', 'Each step stays traceable later.'],
]

export function DocumentsSection() {
  return (
    <section className="documents section" id="documents" aria-labelledby="documents-heading">
      <div className="container documents-grid">
        <div className="documents-visual" data-reveal="mask">
          <img src={blueprintImage.src} alt="A signed paper lease deed beside a tablet showing it as a document record in ARAM ERP, with approvals, linked records and an audit trail" width="1500" height="1500" loading="lazy" decoding="async"/>
          <div className="paper" aria-hidden="true">
            <div className="paper-brand"><span className="paper-mark">A</span><span>ARAM ERP<small>Trust record</small></span></div>
            <div className="paper-lines"><i/><i/><i/><i/></div>
            <div className="paper-signs"><span>Prepared</span><span>Reviewed</span><span>Approved</span></div>
            <span className="paper-stamp"><Icon name="check" size={13}/> Linked to record</span>
          </div>
        </div>

        <div className="documents-copy" data-reveal>
          <Eyebrow>Documents &amp; records</Eyebrow>
          <h2 id="documents-heading" className="display">Everything has a place. <em>Every step stays traceable.</em></h2>
          <p className="lede">Keep supporting documents close to the records, decisions and activity they belong to.</p>
          <ol className="trail">
            {trail.map(([title, text], index) => (
              <li key={title} style={{ ['--d' as string]: `${150 + index * 90}ms` }}>
                <span className="trail-dot" aria-hidden="true"/>
                <strong>{title}</strong>
                <small>{text}</small>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
