import { useState } from 'react'
import { CONTACT_EMAIL, faqItems } from '../../content'
import { Eyebrow } from '../Eyebrow'
import { Icon } from '../Icon'

export function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="faq section" id="faq" aria-labelledby="faq-heading">
      <div className="container faq-grid">
        <div className="faq-intro" data-reveal>
          <Eyebrow>Resources · FAQ</Eyebrow>
          <h2 id="faq-heading" className="display">Good questions, <em>clear answers.</em></h2>
          <p className="lede">How ARAM ERP supports a Trust’s daily work. Something else on your mind?</p>
          <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL} <Icon name="arrow" size={15}/></a>
        </div>
        <div className="faq-list" data-reveal>
          {faqItems.map(([question, answer], index) => {
            const isOpen = open === index
            return (
              <div className={`faq-item${isOpen ? ' is-open' : ''}`} key={question}>
                <h3>
                  <button type="button" id={`faq-q-${index}`} aria-expanded={isOpen} aria-controls={`faq-a-${index}`} onClick={() => setOpen(isOpen ? -1 : index)}>
                    <span>{question}</span>
                    <span className="faq-icon" aria-hidden="true"/>
                  </button>
                </h3>
                <div className="faq-answer" id={`faq-a-${index}`} role="region" aria-labelledby={`faq-q-${index}`}>
                  <div><p>{answer}</p></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
