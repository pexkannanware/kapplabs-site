import type { Metadata } from "next";
import { Logo } from "../_site/AramHome";

export const metadata: Metadata = {
  title: "Privacy Policy | ARAM ERP",
  description:
    "How ARAM ERP collects, uses and protects information for temples, mathas, trusts and website visitors.",
  keywords: null,
};

const EMAIL = "kapplabs@kannanware.com";

export default function AramPrivacyPage() {
  return (
    <>
      <header>
        <div className="nav-wrap">
          <Logo href="/aram/" />
          <a className="button" href="/aram/">Back to home</a>
        </div>
      </header>
      <main className="policy">
        <div className="container policy-inner">
          <div className="eyebrow">Legal<span /></div>
          <h1>Privacy Policy</h1>
          <p className="policy-updated">Last updated: 15 October 2026</p>

          <p>
            ARAM ERP (&ldquo;ARAM&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides software for Mathas,
            Temples and Trusts. This policy explains what information we collect, how we use it and the
            choices you have. We keep it simple: we collect only what we need, and we never sell your data.
          </p>

          <h2>Information we collect</h2>
          <ul>
            <li><b>Details you share with us</b> &mdash; such as your name, email address, organisation and message when you contact us or request a demo.</li>
            <li><b>Institution data</b> &mdash; records your institution stores in ARAM, such as donations, sevas, devotees, accounts and staff details.</li>
            <li><b>Basic technical data</b> &mdash; such as browser type, device and access logs, used to keep the service secure and working.</li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>To provide, maintain and improve ARAM.</li>
            <li>To respond to enquiries and support requests.</li>
            <li>To keep accounts, records and the platform secure.</li>
            <li>To meet legal and regulatory obligations.</li>
          </ul>

          <h2>Your institution&rsquo;s data</h2>
          <p>
            Data your institution stores in ARAM belongs to your institution. We process it only to deliver
            the service on your behalf, and we do not use it for advertising.
          </p>

          <h2>Sharing</h2>
          <p>
            We do not sell or rent personal information. We share it only with trusted service providers who
            help us run ARAM (such as hosting), under confidentiality obligations, or when required by law.
          </p>

          <h2>Security and retention</h2>
          <p>
            We use access controls, encryption and audit trails to protect your information. We keep data only
            as long as needed to provide the service or meet legal requirements, then delete or anonymise it.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask to access, correct or delete your personal information at any time by writing to us.
            Institution administrators can manage most records directly within ARAM.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The latest version will always be available on this
            page, with the date it was last updated.
          </p>

          <h2>Contact us</h2>
          <p>
            Questions about privacy? Email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </div>
      </main>
      <footer>
        <div className="container copyright">
          <span>&copy; {new Date().getFullYear()} ARAM ERP. All rights reserved.</span>
          <span>One Platform. Every Faith.</span>
        </div>
      </footer>
    </>
  );
}
