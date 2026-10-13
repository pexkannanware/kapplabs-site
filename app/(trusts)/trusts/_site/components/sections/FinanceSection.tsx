import financeImage from '../../assets/sections/finance-cashbook.webp'
import { financeFeatures } from '../../content'
import { Eyebrow } from '../Eyebrow'

export function FinanceSection() {
  return (
    <section className="finance section" id="features" aria-labelledby="finance-heading">
      <div className="container">
        <div className="split-heading" data-reveal>
          <div>
            <Eyebrow>Financial clarity</Eyebrow>
            <h2 id="finance-heading" className="display">Financial clarity <em>for greater impact.</em></h2>
          </div>
          <p className="lede">Trusts manage funds across donations, expenses, projects, accounts and reporting. ARAM ERP keeps every one of those records in the same place — so the full path of a rupee stays visible.</p>
        </div>

        <div className="finance-stage">
          <figure className="finance-figure" data-reveal="mask">
            <img src={financeImage.src} alt="A handwritten cash book open on a desk beside a tablet showing the same entries in the ARAM ERP cashbook, balanced and closed for the day" width="1800" height="1238" loading="lazy" decoding="async"/>
            <figcaption>Every rupee, from arrival to report.</figcaption>
          </figure>

          <div className="ledger" data-reveal>
            <div className="ledger-head">
              <span>Trust ledger</span>
              <span>Capabilities</span>
            </div>
            <ol className="ledger-rows">
              {financeFeatures.map(([title, text], index) => (
                <li key={title} style={{ ['--d' as string]: `${index * 70}ms` }}>
                  <span className="ledger-num">0{index + 1}</span>
                  <span className="ledger-body"><strong>{title}</strong><small>{text}</small></span>
                </li>
              ))}
            </ol>
            <div className="ledger-foot"><span>One record of every entry</span><span className="ledger-seal" aria-hidden="true">A</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
