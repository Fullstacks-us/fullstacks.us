import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FullStacks US | Fractional CTO Services for Startups",
  description: "Expert Fractional CTO services for startups and growing businesses. Get strategic technology leadership, technical architecture, and development oversight without the full-time cost.",
  keywords: "Fractional CTO, CTO services, startup technology, technical leadership, technology strategy",
  authors: [{ name: "FullStacks US" }],
  openGraph: {
    title: "FullStacks US | Fractional CTO Services for Startups",
    description: "Expert Fractional CTO services for startups and growing businesses. Get strategic technology leadership, technical architecture, and development oversight without the full-time cost.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FullStacks US | Fractional CTO Services for Startups",
    description: "Expert Fractional CTO services for startups and growing businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
