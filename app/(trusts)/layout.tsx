import type { Metadata, Viewport } from "next";
import "./trusts/_site/index.css";

const title = "Aram ERP | ERP Software for Trusts";
const shareDescription =
  "Manage donations, finance, people, projects, documents, compliance and reporting in one connected system.";

export const metadata: Metadata = {
  title,
  description:
    "Aram ERP is a purpose-built ERP platform for Trusts, helping manage donations, finance, people, projects, documents, compliance and reporting in one connected system.",
  keywords:
    "ERP software for Trusts, Trust management software, Trust ERP, donation management, Trust accounting, fund management, project tracking, role-based access, audit trail, Aram ERP",
  icons: { icon: { url: "/trusts/favicon.svg", type: "image/svg+xml" } },
  openGraph: { type: "website", siteName: "Aram ERP", title, description: shareDescription },
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
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400;1,6..72,500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
