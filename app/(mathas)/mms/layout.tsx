import type { Metadata } from "next";
import "./aram-mms.css";

const title = "Matha Management Software | ARAM ERP for Mathas";
const description =
  "ARAM ERP brings a matha's donations, sevas, payments, banking, people and committee-ready reports into one secure cloud workspace.";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "matha management software, mutt management software, math ERP, matha donation management, seva management software, matha accounting software, mutt software India, ARAM ERP",
  openGraph: { type: "website", siteName: "ARAM ERP", title, description },
  twitter: { card: "summary_large_image", title, description },
  icons: {
    icon: [
      { url: "/aram/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/aram/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/aram/apple-touch-icon.png",
  },
  other: {
    "google-site-verification": "Pp4PpLCcCgL5lwqPahGkXtoH9uASwL-8sphTHOUtMJ0",
  },
};

export default function MmsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Fallback static stylesheet so images/animations work even if CSS chunking fails */}
      <link rel="stylesheet" href="/mms/aram.css" />
      {children}
    </>
  );
}
