import type { FormEvent } from 'react'
import { CONTACT_EMAIL } from '../../content'
import { Eyebrow } from '../Eyebrow'
import { Icon } from '../Icon'

// No backend is connected: submitting prepares an email to the team in the visitor's mail app.
export function Contact() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`ARAM ERP Trusts demo request — ${form.get('trust')}`)
    const body = encodeURIComponent(`Name: ${form.get('name')}\nTrust / Institution: ${form.get('trust')}\nEmail: ${form.get('email')}\nPhone: ${form.get('phone') || 'Not provided'}\n\nMessage:\n${form.get('message') || 'I would like to see ARAM ERP for Trusts.'}`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section className="contact section" id="contact" aria-labelledby="contact-heading">
      <div className="container contact-grid">
        <div className="contact-copy" data-reveal>
          <Eyebrow light>Request a demo</Eyebrow>
          <h2 id="contact-heading" className="display">Bring every responsibility <em>together.</em></h2>
          <p className="lede">See how ARAM ERP can bring your Trust’s finance, donations, people, projects and reporting into one connected system.</p>
          <div className="contact-direct">
            <span>Prefer email?</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit} data-reveal>
          <div className="field">
            <label htmlFor="demo-name">Full name</label>
            <input id="demo-name" name="name" autoComplete="name" required/>
          </div>
          <div className="field">
            <label htmlFor="demo-trust">Trust / Institution</label>
            <input id="demo-trust" name="trust" autoComplete="organization" required/>
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="demo-email">Email</label>
              <input id="demo-email" name="email" type="email" autoComplete="email" required/>
            </div>
            <div className="field">
              <label htmlFor="demo-phone">Phone <span className="optional">(optional)</span></label>
              <input id="demo-phone" name="phone" type="tel" autoComplete="tel"/>
            </div>
          </div>
          <div className="field">
            <label htmlFor="demo-message">Message</label>
            <textarea id="demo-message" name="message" rows={3} placeholder="What would you like to see?"/>
          </div>
          <button className="button button-large button-block" type="submit">Request a Demo <Icon name="arrow" size={17}/></button>
          <small className="form-note">Opens your email app with these details, addressed to {CONTACT_EMAIL}.</small>
        </form>
      </div>
    </section>
  )
}
