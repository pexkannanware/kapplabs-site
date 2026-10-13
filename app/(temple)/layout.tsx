import type { Metadata, Viewport } from "next";
import "./temple/_site/styles/tokens.css";
import "./temple/_site/styles/base.css";

const description =
  "ARAM ERP is an integrated ERP platform for temples: devotees, sevas, panchangam, annadhanam, cashbook, banking, finance, projects and events, assets, and role-based security and governance in one place.";
const shareDescription =
  "Devotees, sevas, panchangam, annadhanam, cashbook, banking, finance, assets and governance — managed from one integrated platform built for temples.";

export const metadata: Metadata = {
  title: "ARAM ERP | Temple Management ERP Software",
  description,
  icons: { icon: "/temple/favicon.png", apple: "/temple/apple-touch-icon.png" },
  openGraph: {
    type: "website",
    siteName: "ARAM ERP",
    title: "ARAM ERP | Temple Management ERP Software",
    description: shareDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "ARAM ERP | Temple Management ERP Software",
    description: shareDescription,
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
