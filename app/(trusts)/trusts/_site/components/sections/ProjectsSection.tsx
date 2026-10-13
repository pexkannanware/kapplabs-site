import fundingImage from '../../assets/sections/projects-tracking.webp'
import { Eyebrow } from '../Eyebrow'
import { Icon } from '../Icon'

const stages: [string, string][] = [
  ['Funding', 'Sources and budget recorded'],
  ['Project', 'Programme and team defined'],
  ['Execution', 'Activities, expenses and utilisation'],
  ['Beneficiaries', 'Who the work reaches'],
  ['Reporting', 'Progress ready for review'],
]

export function ProjectsSection() {
  return (
    <section className="projects section" id="impact" aria-labelledby="projects-heading">
      <div className="container">
        <div className="split-heading" data-reveal>
          <div>
            <Eyebrow>Projects &amp; impact</Eyebrow>
            <h2 id="projects-heading" className="display">Trusts exist to create impact. <em>Make it visible.</em></h2>
          </div>
          <p className="lede">Connect project funding with execution, expenses, beneficiaries and reporting — so trustees and teams can follow the work from the first rupee to the final report.</p>
        </div>

        <div className="projects-stage">
          <figure className="projects-figure" data-reveal="mask">
            <img src={fundingImage.src} alt="A handwritten project notebook beside a tablet listing the Trust’s projects, their stage and budget utilisation in ARAM ERP" width="1800" height="1013" loading="lazy" decoding="async"/>
          </figure>

          <div className="project-card" data-reveal>
            <div className="project-card-head">
              <span>Project record</span>
              <Icon name="project" size={17}/>
            </div>
            <ol className="project-path">
              {stages.map(([title, text], index) => (
                <li key={title} style={{ ['--d' as string]: `${200 + index * 100}ms` }}>
                  <span className="path-index">0{index + 1}</span>
                  <span><strong>{title}</strong><small>{text}</small></span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
