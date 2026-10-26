"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, BrainCircuit, ChevronDown, Landmark, Menu, X } from "lucide-react";

import { PRODUCT_MENU } from "./showcase";
import styles from "./Chrome.module.css";

const LINKS = [
  { href: "/#solutions", label: "Solutions" },
  { href: "/#industries", label: "Industries" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#approach", label: "How we work" },
  { href: "/contact", label: "Contact" },
] as const;

const ICONS = { aram: Landmark, cfo: BrainCircuit } as const;

export default function KapplabsNav() {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [section, setSection] = useState<string | null>(null);
  const progressRef = useRef<HTMLSpanElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // On the home page, highlight the nav link for the section currently in view.
  useEffect(() => {
    if (pathname !== "/") return;
    const ids = LINKS.filter((item) => item.href.startsWith("/#")).map((item) => item.href.slice(2));
    const nodes = ids.map((id) => document.getElementById(id)).filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!productsOpen && !mobileOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (productsOpen && !dropdownRef.current?.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProductsOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [productsOpen, mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openProducts = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };

  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setProductsOpen(false), 140);
  };

  const closeAll = () => {
    setProductsOpen(false);
    setMobileOpen(false);
  };

  return (
    <>
      <header className={`${styles.bar} ${scrolled || mobileOpen ? styles.barScrolled : ""}`}>
        <div className={styles.barInner}>
          <Link className={styles.brand} href="/" onClick={closeAll} aria-label="Kapplabs home">
            <img src="/kapplabs-logo.png" alt="Kapplabs" />
          </Link>

          <nav className={styles.links} aria-label="Primary">
            <div className={styles.dropdown} ref={dropdownRef} onMouseEnter={openProducts} onMouseLeave={scheduleClose}>
              <button
                type="button"
                className={`${styles.link} ${productsOpen ? styles.linkActive : ""}`}
                aria-expanded={productsOpen}
                aria-controls="products-menu"
                onClick={() => setProductsOpen((open) => !open)}
              >
                Products
                <ChevronDown size={14} className={`${styles.chevron} ${productsOpen ? styles.chevronOpen : ""}`} />
              </button>

              <div id="products-menu" className={`${styles.panel} ${productsOpen ? styles.panelOpen : ""}`}>
                <div className={styles.panelInner}>
                  {PRODUCT_MENU.map((item) => {
                    const Icon = ICONS[item.icon];
                    return (
                      <Link key={item.href} href={item.href} className={styles.panelItem} onClick={closeAll}>
                        <span className={styles.panelIcon}>
                          <Icon size={18} strokeWidth={1.75} />
                        </span>
                        <span>
                          <strong>{item.name}</strong>
                          <small>{item.body}</small>
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <Link href="/#products" className={styles.panelFoot} onClick={closeAll}>
                  Compare products <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.link} ${pathname === item.href || item.href === `/#${section}` ? styles.linkActive : ""}`}
                onClick={closeAll}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <Link className={styles.cta} href="/contact" onClick={closeAll}>
              Book a call
            </Link>
            <button
              type="button"
              className={styles.burger}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div id="mobile-menu" className={`${styles.mobile} ${mobileOpen ? styles.mobileOpen : ""}`}>
          <p className={styles.mobileLabel}>Products</p>
          {PRODUCT_MENU.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <Link key={item.href} href={item.href} className={styles.panelItem} onClick={closeAll}>
                <span className={styles.panelIcon}>
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.body}</small>
                </span>
              </Link>
            );
          })}
          <div className={styles.mobileLinks}>
            {LINKS.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeAll}>
                {item.label}
              </Link>
            ))}
          </div>
          <Link className={styles.mobileCta} href="/contact" onClick={closeAll}>
            Book a call
          </Link>
        </div>
        <span className={styles.progress} aria-hidden="true">
          <span ref={progressRef} />
        </span>
      </header>
      <div className={styles.barSpacer} aria-hidden="true" />
    </>
  );
}
