import type { Metadata } from "next";
import { Inter, Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
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
        <div className="scanlines" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
