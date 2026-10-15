import "./globals.css";
import type { Viewport } from "next";
import { Cinzel, Geist, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Shared ARAM wordmark fonts (same as the Temples and Trusts logos).
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel", weight: ["600"], display: "swap" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", weight: ["400"], display: "swap" });

export const metadata = {
  title: "Matha Management Software | ARAM ERP for Mathas",
  description:
    "ARAM ERP brings a matha's donations, sevas, payments, banking, people and committee-ready reports into one secure cloud workspace.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} ${geist.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
