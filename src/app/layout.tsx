import type { Metadata } from "next";
import { Inter, Orbitron, Rajdhani } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PerformanceClassProvider } from "@/components/providers/PerformanceClassProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-orbitron",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "optional",
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: "Pierre Paulo | FullStack Developer",
  description:
    "Building high-performance digital products with Next.js and React. Specialized in modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`h-full ${inter.variable} ${orbitron.variable} ${rajdhani.variable}`}
    >
      <body
        className={`min-h-full antialiased bg-background text-foreground font-sans`}
      >
        <PerformanceClassProvider />
        <div className="scanlines" aria-hidden="true" />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
