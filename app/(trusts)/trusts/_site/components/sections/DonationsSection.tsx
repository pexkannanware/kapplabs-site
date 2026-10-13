import donationImage from '../../assets/sections/donation-donor.webp'
import receiptImage from '../../assets/sections/donation-receipt.webp'
import allocationImage from '../../assets/sections/donation-project.webp'
import { donationSteps } from '../../content'
import { Eyebrow } from '../Eyebrow'

const stages = [
  { image: donationImage, steps: 'Donor · Donation', title: 'A contribution arrives.', text: 'Record each donor and contribution in one place, with a clear view of collections.', alt: 'A handwritten donor register beside a tablet showing the same donor’s profile and donation history in ARAM ERP', focus: '50% 50%' },
  { image: receiptImage, steps: 'Receipt · Allocation', title: 'It is receipted and assigned.', text: 'Issue a receipt and connect the contribution to the purpose it was given for.', alt: 'A paper donation receipt book beside a tablet showing the digital receipt in ARAM ERP, with the amount allocated to two funds', focus: '50% 50%' },
  { image: allocationImage, steps: 'Project · Report', title: 'It reaches the work.', text: 'Follow allocations through to the projects they support and the reports that show progress.', alt: 'A project file and handwritten budget sheet beside a tablet showing the project’s funding and utilisation in ARAM ERP', focus: '50% 50%' },
]

export function DonationsSection() {
  return (
    <section className="donations section" id="donations" aria-labelledby="donations-heading">
      <div className="container">
        <div className="split-heading" data-reveal>
          <div>
            <Eyebrow>Donations, with purpose</Eyebrow>
            <h2 id="donations-heading" className="display">Every contribution <em>carries a purpose.</em></h2>
          </div>
          <p className="lede">Keep donor records and receipts connected to accounts, allocations and the projects a contribution supports — one continuous trail instead of six separate files.</p>
        </div>

        <ol className="journey-line" aria-label={donationSteps.join(', then ')} data-reveal="line">
          {donationSteps.map((step, index) => <li key={step} style={{ ['--d' as string]: `${200 + index * 110}ms` }}><i aria-hidden="true"/><span>{step}</span></li>)}
        </ol>

        <div className="journey-stages">
          {stages.map((stage, index) => (
            <article className="journey-stage" key={stage.steps} data-reveal style={{ ['--d' as string]: `${index * 120}ms` }}>
              <div className="journey-image"><img src={stage.image.src} alt={stage.alt} style={{ objectPosition: stage.focus }} width="1200" height="1380" loading="lazy" decoding="async"/></div>
              <span className="journey-steps">{stage.steps}</span>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
