import { CONTACT_EMAIL, links } from '../content'
import { Brand } from './Brand'
import { Icon } from './Icon'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <p className="footer-tagline">One Platform. <em>Every Faith.</em></p>
          <a className="button button-light button-large" href="#contact">Request a Demo <Icon name="arrow" size={17}/></a>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <Brand light/>
            <p>ERP software for Trusts — donations, finance, people, projects, documents and reporting in one connected system.</p>
          </div>
          <nav className="footer-col" aria-label="Solutions">
            <strong>Solutions</strong>
            <a href={links.mutts}>Mathas</a>
            <a href={links.temples}>Temples</a>
            <a href="#home" aria-current="page">Trusts</a>
          </nav>
          <nav className="footer-col" aria-label="Product">
            <strong>Product</strong>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#faq">Resources</a>
            <a href={links.login}>Customer Login</a>
          </nav>
          <nav className="footer-col" aria-label="Company">
            <strong>Company</strong>
            <a href={links.kapplabs}>About Kapplabs</a>
            <a href="#contact">Contact</a>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© {YEAR} ARAM ERP · <a className="footer-product-credit" href={links.kapplabs}>A Kapplabs product</a></span>
          <span className="footer-legal"><a href={links.privacy}>Privacy</a><a href={links.terms}>Terms</a><a href="#home">Back to top ↑</a></span>
        </div>
      </div>
    </footer>
  )
}
