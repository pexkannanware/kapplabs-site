import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SERVICES } from "../showcase";
import Chapter from "./Chapter";
import Reveal from "./Reveal";
import styles from "./Home.module.css";

const TARGETS: Record<(typeof SERVICES)[number]["id"], string> = {
  custom: "#solutions",
  ai: "#solutions",
  saas: "#products",
};

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.wrap}>
        <Chapter
          index="02"
          label="What we do"
          title="Three ways we help your business"
          lead="Software made for you, AI that does the repetitive work, or a ready product you can start using quickly. Often, a mix of all three."
        />

        <Reveal className={styles.services}>
          {SERVICES.map((service, index) => (
            <Link key={service.id} href={TARGETS[service.id]} className={styles.service}>
              <span className={styles.serviceNo}>{String(index + 1).padStart(2, "0")}</span>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceBody}>{service.body}</p>
              <span className={styles.serviceTags}>
                {service.tags.map((tag) => (
                  <em key={tag}>{tag}</em>
                ))}
              </span>
              <ArrowUpRight className={styles.serviceArrow} size={22} aria-hidden="true" />
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
