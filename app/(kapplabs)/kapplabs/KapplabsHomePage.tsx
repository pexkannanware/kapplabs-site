import Approach from "./_home/Approach";
import Cta from "./_home/Cta";
import Faq from "./_home/Faq";
import Hero from "./_home/Hero";
import Industries from "./_home/Industries";
import Portfolio from "./_home/Portfolio";
import Products from "./_home/Products";
import Services from "./_home/Services";
import Solutions from "./_home/Solutions";
import Statement from "./_home/Statement";
import KapplabsFooter from "./KapplabsFooter";
import KapplabsNav from "./KapplabsNav";
import styles from "./_home/Home.module.css";

export default function KapplabsHomePage() {
  return (
    <div className={styles.page}>
      <KapplabsNav />
      <main>
        <Hero />
        <Statement />
        <Services />
        <Solutions />
        <Industries />
        <Products />
        <Portfolio />
        <Approach />
        <Faq />
        <Cta />
      </main>
      <KapplabsFooter />
    </div>
  );
}
