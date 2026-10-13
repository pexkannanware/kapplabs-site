import { App } from "./_site/App";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ARAM ERP for Temples",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Integrated ERP for temples covering devotee, seva, panchangam and annadhanam management, cashbook, banking, financial management, projects and events, assets, and role-based security and governance.",
  publisher: { "@type": "Organization", name: "Kapplabs", url: "https://www.kapplabs.com/" },
};

export default function TemplePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <App />
    </>
  );
}
