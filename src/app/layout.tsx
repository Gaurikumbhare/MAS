import type { Metadata } from "next";
import { Quicksand, Caveat } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miles Along Smiles - Nurturing Little Minds",
  description: "A nurturing early-learning and childcare space designed to make a child's early years joyful, meaningful, and full of discovery.",
};

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${caveat.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
