import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kevin Fallas | Full Stack Developer",
  description: "Portfolio of a passionate full stack developer",
  icons: {
    icon: "/favicon.ico",
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
      </body>
    </html>
  );
}
