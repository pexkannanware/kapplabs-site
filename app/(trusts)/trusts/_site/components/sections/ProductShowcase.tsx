import dashboardImage from '../../assets/sections/product-dashboard.webp'
import { Eyebrow } from '../Eyebrow'
import { Icon } from '../Icon'

// Annotations describe only what is visible in the real dashboard screenshot.
const notes: [string, string][] = [
  ['Collections at a glance', 'Today’s and this month’s collections on the home screen.'],
  ['Active projects', 'Ongoing projects visible alongside daily activity.'],
  ['Everything in one sidebar', 'Receipts, payments, journal, banking, people, operations and reports.'],
]

export function ProductShowcase() {
  return (
    <section className="product section" id="product" aria-labelledby="product-heading">
      <div className="container">
        <div className="product-heading" data-reveal>
          <Eyebrow>The product</Eyebrow>
          <h2 id="product-heading" className="display">One calm view of <em>daily Trust operations.</em></h2>
          <p className="lede">This is the real ARAM ERP dashboard — donations, accounts, projects, people, documents and reports in a single operational view.</p>
        </div>

        <figure className="product-stage" data-reveal="rise">
          <img src={dashboardImage.src} alt="The ARAM ERP dashboard on a laptop, showing today’s date panel, collections today and this month, active projects, and a sidebar with receipts, payments, journal, cashbook, banking, people, operations and reports" width="1659" height="948" loading="lazy" decoding="async"/>
        </figure>

        <ul className="product-notes">
          {notes.map(([title, text], index) => (
            <li key={title} data-reveal style={{ ['--d' as string]: `${index * 100}ms` }}>
              <span className="note-num">0{index + 1}</span>
              <strong>{title}</strong>
              <small>{text}</small>
            </li>
          ))}
        </ul>

        <div className="product-cta" data-reveal>
          <a className="button button-large" href="#contact">Request a Demo <Icon name="arrow" size={17}/></a>
          <span>See it configured for your Trust.</span>
        </div>
      </div>
    </section>
  )
}
