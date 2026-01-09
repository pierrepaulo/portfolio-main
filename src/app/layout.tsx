import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="pt-BR" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
