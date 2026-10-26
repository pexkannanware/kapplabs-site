"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PRODUCTS } from "../showcase";
import BrowserFrame from "./BrowserFrame";
import Chapter from "./Chapter";
import styles from "./Home.module.css";

/* Text chapters scroll on the left while the product screen stays pinned on the right and swaps with them. */
export default function Products() {
  const [active, setActive] = useState(0);
  const chapterRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // The active chapter is the one whose centre is closest to the middle of the viewport.
    let frame = 0;
    const update = () => {
      frame = 0;
      const middle = window.innerHeight / 2;
      let best = 0;
      let bestDistance = Infinity;
      chapterRefs.current.forEach((node, index) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - middle);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = index;
        }
      });
      setActive(best);
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

  return (
    <section
      className={styles.products}
      id="products"
      onPointerMove={(event) => {
        // A soft light follows the cursor across the dark section.
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
      }}
    >
      <span className={styles.productsSpot} aria-hidden="true" />
      <div className={styles.wrap}>
        <Chapter
          tone="dark"
          index="05"
          label="Our products"
          title="Our own SaaS, built from real operations."
          lead="Each product starts with a workflow we have seen up close, and ships with AI built in from the first release."
        />

        <div className={styles.productsStage}>
          <div className={styles.productsText}>
            {PRODUCTS.map((product, index) => (
              <article
                key={product.id}
                ref={(node) => {
                  chapterRefs.current[index] = node;
                }}
                data-index={index}
                className={`${styles.productChapter} ${active === index ? styles.productChapterActive : ""}`}
              >
                <p className={styles.productIndex}>
                  {String(index + 1).padStart(2, "0")} <span>/ {String(PRODUCTS.length).padStart(2, "0")}</span>
                  <em>{product.status}</em>
                </p>
                <h3>{product.name}</h3>
                <p className={styles.productTagline}>{product.tagline}</p>
                <p className={styles.productDescription}>{product.description}</p>
                <ul className={styles.productFeatures}>
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link className={styles.productLink} href={product.href}>
                  Explore {product.name} <ArrowRight size={16} />
                </Link>
                <div className={styles.productInlineShot}>
                  <BrowserFrame src={product.image.src} alt={`${product.name}: ${product.image.label}`} address={`${product.name} · ${product.image.label}`} />
                </div>
              </article>
            ))}
          </div>

          <div className={styles.productsPin} aria-hidden="true">
            <div className={styles.productsScreens}>
              {PRODUCTS.map((product, index) => (
                <div key={product.id} className={`${styles.productScreen} ${active === index ? styles.productScreenActive : ""}`}>
                  <BrowserFrame src={product.image.src} alt="" address={`${product.name} · ${product.image.label}`} />
                </div>
              ))}
            </div>
            <div className={styles.productsDots}>
              {PRODUCTS.map((product, index) => (
                <span key={product.id} className={active === index ? styles.productsDotActive : undefined}>
                  {product.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
