import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "ARAM ERP | One Platform. Every Faith.",
  description:
    "ARAM ERP is one unified platform for Mutts, Temples and Trusts—bringing finances, donations, people, assets and daily operations together.",
  keywords:
    "ARAM ERP, ERP for temples, ERP for trusts, ERP for mutts, donation management, institution management",
  icons: { icon: "/aram/assets/aram-logo.png" },
  openGraph: {
    type: "website",
    title: "ARAM ERP — One Platform. Every Faith.",
    description: "Simplifying operations for Mutts, Temples and Trusts.",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8f0718",
};

export default function AramRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Libre+Caslon+Text:wght@400;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
