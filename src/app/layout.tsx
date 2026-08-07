import type { Metadata } from "next";
import {
  Bebas_Neue,
  Caveat,
  Inter
} from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap"
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Bruno Castelo — Portfólio",
  description:
    "Portfólio artístico de Bruno Castelo, com pinturas e histórias em quadrinhos."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${bebas.variable} ${caveat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}