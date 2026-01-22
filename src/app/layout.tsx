import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pierre Paulo - Desenvolvedor FullStack",
  description:
    "Portfólio profissional de Pierre Paulo, desenvolvedor FullStack especializado em produtos digitais modernos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`h-full ${inter.variable}`}>
      <body className={`min-h-full antialiased ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
