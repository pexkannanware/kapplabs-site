import Link from "next/link";

import { FOOTER_LINKS } from "./content";
import styles from "./KapplabsClientPage.module.css";

function FooterColumn({ title, links }: { title: string; links: readonly { href: string; label: string }[] }) {
  return (
    <div>
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
      <div>
        <Link className={styles.footerLogoLink} href="/">
          <img className={styles.brandLogo} src="/kapplabs-logo.jpg" alt="Kapplabs" />
        </Link>
        <p className={styles.footerTagline}>AI infrastructure for real-time operations</p>
      </div>
      <div className={styles.footerColumns}>
        <FooterColumn title="Products" links={FOOTER_LINKS.products} />
        <FooterColumn title="Platform" links={FOOTER_LINKS.platform} />
        <FooterColumn title="Company" links={FOOTER_LINKS.company} />
        <FooterColumn title="Legal" links={FOOTER_LINKS.legal} />
      </div>
    </footer>
  );
}
