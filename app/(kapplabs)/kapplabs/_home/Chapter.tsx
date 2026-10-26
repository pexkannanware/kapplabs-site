import Reveal from "./Reveal";
import styles from "./Home.module.css";

type ChapterProps = {
  index: string;
  label: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: "light" | "dark";
};

/* Shared section header: a mono chapter label on the left, title and lead on the right. */
export default function Chapter({ index, label, title, lead, tone = "light" }: ChapterProps) {
  return (
    <Reveal className={`${styles.chapter} ${tone === "dark" ? styles.chapterDark : ""}`}>
      <p className={styles.chapterLabel}>
        <span>{index}</span>
        {label}
      </p>
      <div>
        <h2 className={styles.chapterTitle}>{title}</h2>
        {lead && <p className={styles.chapterLead}>{lead}</p>}
      </div>
    </Reveal>
  );
}
