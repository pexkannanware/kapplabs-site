import type { Metadata } from "next";
import "./aram-mms.css";

export const metadata: Metadata = {
  title: "Aram ERP | Secure Mutt Operations",
  description:
    "Aram ERP securely connects donations, payments, banking, sevas, people, and committee-ready reports in one calm cloud workspace.",
  icons: {
    icon: "/mms/logo-aram.png",
    apple: "/mms/logo-aram.png",
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
