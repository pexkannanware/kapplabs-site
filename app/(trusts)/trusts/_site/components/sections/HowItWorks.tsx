import { Eyebrow } from '../Eyebrow'

const steps: [string, string][] = [
  ['Understand', 'We map your Trust’s funds, people, projects, workflows and reporting needs.'],
  ['Configure', 'Roles, financial structures, approvals and records are set up around how you work.'],
  ['Connect', 'Donations, projects, people and documents are brought together in one system.'],
  ['Go Live', 'Daily Trust operations move into one connected workspace, with your team alongside.'],
]

export function HowItWorks() {
  return (
    <section className="how section" id="how-it-works" aria-labelledby="how-heading">
      <div className="container">
        <div className="split-heading" data-reveal>
          <div>
            <Eyebrow>How it works</Eyebrow>
            <h2 id="how-heading" className="display">A thoughtful start, <em>shaped around your Trust.</em></h2>
          </div>
          <p className="lede">A guided process to understand your institution and bring its day-to-day work into one system.</p>
        </div>

        <ol className="timeline" data-reveal="line">
          {steps.map(([title, text], index) => (
            <li key={title} style={{ ['--d' as string]: `${250 + index * 220}ms` }}>
              <span className="timeline-num">0{index + 1}</span>
              <span className="timeline-node" aria-hidden="true"/>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
