import "./globals.css";
import type { Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata = {
  title: "Kapplabs · SaaS & AI solutions by Kannanware",
  description: "Kapplabs is a SaaS and AI solutions company. We build our own products, including ARAM ERP and the Office of the CFO AI Agents, and custom software and AI for clients. A Kannanware company.",
  applicationName: "Kapplabs",
  openGraph: {
    type: "website",
    siteName: "Kapplabs",
    title: "Kapplabs · AI-powered SaaS, built for how you work",
    description: "SaaS products, AI solutions and custom software for growing businesses. A Kannanware company.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Kapplabs · AI-powered SaaS, built for how you work",
    description: "SaaS products, AI solutions and custom software for growing businesses. A Kannanware company.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
