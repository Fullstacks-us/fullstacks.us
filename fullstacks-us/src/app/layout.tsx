import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FullStacks US | AI Powered Web Solutions for Business",
  description: "We provide expert custom full stack web development, including front-end and back-end solutions, tailored for startups and businesses.",
  keywords: "Full stack development, web development, AI solutions, business technology, startup development",
  authors: [{ name: "FullStacks US" }],
  openGraph: {
    title: "FullStacks US | AI Powered Web Solutions for Business",
    description: "We provide expert custom full stack web development, including front-end and back-end solutions, tailored for startups and businesses.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FullStacks US | AI Powered Web Solutions for Business",
    description: "Expert custom full stack web development for startups and businesses.",
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
