import type { Metadata, Viewport } from "next";
import "./trusts/_site/index.css";

const title = "Trust Management Software | ARAM ERP for Trusts";
const shareDescription =
  "Manage donations, finance, people, projects, documents, compliance and reporting in one connected system.";

export const metadata: Metadata = {
  title,
  description:
    "Manage donations, fund accounting, projects, people, documents and compliance for your trust in one connected system with audit trails.",
  keywords:
    "trust management software, trust ERP, charitable trust software, trust accounting software, NGO fund management, donor management software, project tracking for trusts, trust compliance software, ARAM ERP",
  icons: {
    icon: [
      { url: "/aram/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/aram/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/aram/apple-touch-icon.png",
  },
  openGraph: { type: "website", siteName: "ARAM ERP", title, description: shareDescription },
  twitter: { card: "summary_large_image", title, description: shareDescription },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f3ec",
};

export default function TrustsRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Geist:wght@400&family=Hanken+Grotesk:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400;1,6..72,500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
