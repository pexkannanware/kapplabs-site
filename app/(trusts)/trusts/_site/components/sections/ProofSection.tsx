import { testimonial } from '../../content'
import { Eyebrow } from '../Eyebrow'
import { Icon } from '../Icon'

// Qualitative proof only — no customer counts, statistics or certifications until verified.
const points: [string, string][] = [
  ['One connected platform', 'Finance, donations, people, projects and records share one system.'],
  ['Part of the ARAM ERP family', 'A sibling of ARAM ERP for Mutts, from the same team at Kapplabs.'],
  ['Role-based access', 'Visibility shaped around each person’s responsibilities.'],
  ['Traceable records', 'Information stays connected for review and audit.'],
]

export function ProofSection() {
  return (
    <section className="proof section" id="proof" aria-labelledby="proof-heading">
      <div className="container proof-grid">
        <div data-reveal>
          <Eyebrow>Why ARAM ERP</Eyebrow>
          <h2 id="proof-heading" className="display">Every responsibility, <em>held together.</em></h2>
        </div>
        <ul className="proof-list">
          {points.map(([title, text], index) => (
            <li key={title} data-reveal style={{ ['--d' as string]: `${index * 80}ms` }}>
              <span>0{index + 1}</span>
              <strong>{title}</strong>
              <small>{text}</small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Testimonial() {
  return (
    <section className="testimonial section" id="reviews" aria-labelledby="testimonial-heading">
      <div className="container">
        <div className="testimonial-heading" data-reveal>
          <Eyebrow>Reviews</Eyebrow>
          <h2 id="testimonial-heading" className="display">Already in <em>daily use.</em></h2>
        </div>
        <figure className="testimonial-card" data-reveal="rise">
          <span className="quote-mark" aria-hidden="true">“</span>
          <blockquote className="testimonial-quote"><p>{testimonial.quote}</p></blockquote>
          <figcaption className="testimonial-foot">
            <span className="testimonial-person">
              <span className="testimonial-avatar" aria-hidden="true">{testimonial.initials}</span>
              <span><strong>{testimonial.name}</strong><small>{testimonial.place}</small></span>
            </span>
            <span className="testimonial-shift" aria-label={`Reconciliation: ${testimonial.before} before, ${testimonial.after} with ARAM ERP`}>
              <span><small>Before</small><b>{testimonial.before}</b></span>
              <Icon name="arrow" size={20}/>
              <span><small>With ARAM ERP</small><b className="is-after">{testimonial.after}</b></span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
