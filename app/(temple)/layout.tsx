import type { Metadata, Viewport } from "next";
import "./temple/_site/styles/tokens.css";
import "./temple/_site/styles/base.css";

const title = "Temple Management Software | ARAM ERP for Temples";
const description =
  "Manage sevas, devotees, donations, annadhanam, panchangam, cashbook and banking in one temple ERP. Clear records, role-based access, audit-ready reports.";
const shareDescription =
  "Devotees, sevas, panchangam, annadhanam, cashbook, banking, finance, assets and governance — managed from one integrated platform built for temples.";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "temple management software, temple ERP, seva booking software, archana booking system, temple donation software, panchangam software, annadhanam management, temple accounting software, devotee management, ARAM ERP",
  icons: {
    icon: [
      { url: "/aram/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/aram/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/aram/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "ARAM ERP",
    title,
    description: shareDescription,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: shareDescription,
  },
  other: {
    "google-site-verification": "Pp4PpLCcCgL5lwqPahGkXtoH9uASwL-8sphTHOUtMJ0",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#14110f",
};

export default function TempleRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Geist:wght@300;400;500;600&family=Noto+Serif+Tamil:wght@500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
