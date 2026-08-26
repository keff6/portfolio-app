import type { Metadata, Viewport } from "next";
import { Analytics } from '@vercel/analytics/next';
import { Inter } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Kevin Fallas | Software Engineer | 10+ Years Next.js & Node.js",
  description:
    "Software Engineer with 10+ years building scalable systems. Expertise in Next.js, React, Node.js, PostgreSQL, AWS, cloud architecture, and AI tools.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Kevin Fallas | Software Engineer",
    description:
      "Full-stack engineer building scalable systems across the stack",
    url: SITE.url,
    siteName: "Kevin Fallas Portfolio",
    images: [
      {
        url: `${SITE.url}og-image.png`, // Absolute URL required
        width: 1200,
        height: 630,
        alt: "Kevin Fallas - Software Engineer Portfolio",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  keywords: [
    "Kevin Fallas",
    "kevin fallas",
    "software engineer",
    "full-stack developer",
    "front-end developer",
    "Next.js",
    "React",
    "Node.js",
    "PostgreSQL",
    "AI tools",
    "AWS",
    "portfolio",
    "senior software engineer",
    "systems design",
  ],
  applicationName: "Kevin Fallas Portfolio",
  creator: "Kevin Fallas",
  alternates: {
    canonical: SITE.url,
  },
  verification: {
    google: "MDK7mbtqjSnaV3eNn31p8HXn-qIx43Ov0E14W6ggQJg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow",
    nocache: false,
  },
  authors: [
    {
      name: SITE.name,
      url: SITE.url,
    },
  ],
  other: {
    "contact": SITE.email,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f172a",
  colorScheme: "dark",
};

/**
 * Root layout component that provides the HTML document structure.
 * Includes the Inter font and dark theme configuration.
 *
 * @param props - Component props
 * @param props.children - Child components to render
 * @returns The root layout JSX element
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-slate-950`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
