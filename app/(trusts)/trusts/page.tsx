import App from "./_site/App";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Aram ERP for Trusts",
  applicationCategory: "BusinessApplication",
  description:
    "Aram ERP is a purpose-built ERP platform for Trusts, helping manage donations, finance, people, projects, documents, compliance and reporting in one connected system.",
  publisher: { "@type": "Organization", name: "Kapplabs", url: "https://kapplabs.com/" },
};

export default function TrustsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <App />
    </>
  );
}
