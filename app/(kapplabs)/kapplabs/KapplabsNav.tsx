"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { KAPPLABS_NAV_AFTER_PRODUCTS, KAPPLABS_NAV_BEFORE_PRODUCTS } from "./content";
import styles from "./KapplabsClientPage.module.css";

export default function KapplabsNav() {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!productsOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [productsOpen]);

  const closeNav = () => setProductsOpen(false);

  return (
    <>
      <nav className={styles.subnav} aria-label="kapplabs sections">
        <div className={styles.subnavInner}>
          <Link className={styles.brand} href="/" onClick={closeNav}>
            <img className={styles.brandLogo} src="/kapplabs-logo.png" alt="Kapplabs" />
          </Link>

          <div className={styles.navLinks}>
            {KAPPLABS_NAV_BEFORE_PRODUCTS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? styles.navActive : undefined}
                onClick={closeNav}
              >
                {item.label}
              </Link>
            ))}
            <div className={styles.navDropdown} ref={dropdownRef}>
              <button
                type="button"
                className={styles.navDropdownTrigger}
                aria-expanded={productsOpen}
                onClick={() => setProductsOpen((open) => !open)}
              >
                Products{" "}
                <ChevronDown size={16} className={`${styles.chevron} ${productsOpen ? styles.chevronOpen : ""}`} />
              </button>
              {productsOpen && (
                <div className={styles.navDropdownMenu}>
                  <Link href="/aram" target="_blank" rel="noreferrer" onClick={closeNav}>
                    Aram ERP
                  </Link>
                  <Link href="/kapplabs/office-of-the-cfo-ai-agents" target="_blank" rel="noreferrer" onClick={closeNav}>
                    Office of the CFO AI Agents
                  </Link>
                </div>
              )}
            </div>
            {KAPPLABS_NAV_AFTER_PRODUCTS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? styles.navActive : undefined}
                onClick={closeNav}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link className={styles.navCta} href="/contact" onClick={closeNav}>
            Request briefing
          </Link>
        </div>
      </nav>
      <div className={styles.subnavSpacer} aria-hidden="true" />
    </>
  );
}
