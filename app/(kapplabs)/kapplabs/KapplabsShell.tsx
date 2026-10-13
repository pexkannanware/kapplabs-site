import KapplabsFooter from "./KapplabsFooter";
import KapplabsNav from "./KapplabsNav";
import styles from "./KapplabsClientPage.module.css";

export default function KapplabsShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.page}>
      <KapplabsNav />
      <main className={styles.container}>{children}</main>
      <KapplabsFooter />
    </div>
  );
}
