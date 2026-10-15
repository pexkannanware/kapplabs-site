import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "ARAM ERP – Management Software for Temples, Mathas & Trusts",
  description:
    "One platform for temples, mathas and trusts to manage donations, sevas, accounts, people and reports—clear, secure and built for faith institutions.",
  keywords:
    "ARAM ERP, temple management software, matha management software, trust management software, religious institution ERP, donation management software, seva management, devasthanam software India",
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
    title: "ARAM ERP – Management Software for Temples, Mathas & Trusts",
    description:
      "One platform for temples, mathas and trusts to manage donations, sevas, accounts, people and reports.",
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
        <meta
          name="google-site-verification"
          content="Pp4PpLCcCgL5lwqPahGkXtoH9uASwL-8sphTHOUtMJ0"
        />
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
