import Link from "next/link";

import { FOOTER_LINKS } from "./content";
import styles from "./Chrome.module.css";

function FooterColumn({ title, links }: { title: string; links: readonly { href: string; label: string }[] }) {
  return (
    <div className={styles.footCol}>
      <strong>{title}</strong>
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default function KapplabsFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footInner}>
        <div className={styles.footTop}>
          <div className={styles.footBrand}>
            <Link href="/" aria-label="Kapplabs home">
              <img src="/kapplabs-logo.png" alt="Kapplabs" />
            </Link>
            <p>SaaS products, AI solutions and custom software. A Kannanware company.</p>
            <a href="mailto:kapplabs@kannanware.com">kapplabs@kannanware.com</a>
          </div>
          <div className={styles.footCols}>
            <FooterColumn title="Products" links={FOOTER_LINKS.products} />
            <FooterColumn title="Platform" links={FOOTER_LINKS.platform} />
            <FooterColumn title="Company" links={FOOTER_LINKS.company} />
            <FooterColumn title="Legal" links={FOOTER_LINKS.legal} />
          </div>
        </div>
        <div className={styles.footBottom}>
          <span>© {new Date().getFullYear()} Kapplabs. All rights reserved.</span>
          <span className={styles.footMade}>
            Built in India <span aria-hidden="true">🇮🇳</span> for businesses everywhere
          </span>
          <span>
            A product of <strong>Kannanware</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
