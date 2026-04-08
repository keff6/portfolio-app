import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kevin-fallas.vercel.app/"),
  title: "Kevin Fallas | Software Engineer | 10+ Years Next.js & Node.js",
  description:
    "Software Engineer with 10+ years building scalable systems. Expertise in Next.js, React, Node.js, PostgreSQL AWS, cloud architecture, and AI tools.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Kevin Fallas | Software Engineer",
    description:
      "Full-stack engineer building scalable systems across the stack",
    url: "https://kevin-fallas.vercel.app/",
    siteName: "Kevin Fallas Portfolio",
    images: [
      {
        url: "https://kevin-fallas.vercel.app/og-image.png", // Absolute URL required
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
    "Kevin Fallas",
  ],
  applicationName: "Kevin Fallas Portfolio",
  creator: "Kevin Fallas",
  alternates: {
    canonical: "https://kevin-fallas.vercel.app/",
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
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#0f172a", 
  colorScheme: "dark",
  authors: [
    {
      name: "Kevin Fallas",
      url: "https://kevin-fallas.vercel.app/",
    },
  ],
  other: {
    "contact": "kev.fallas@gmail.com",
  },
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
