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
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
