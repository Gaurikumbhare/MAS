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
  title: "Best Preschool & Daycare in Nagpur | Miles Along Smiles",
  description: "Looking for the best preschool in Nagpur? Miles Along Smiles provides a premium early-learning, kindergarten, and daycare environment. Experience joyful, play-based education.",
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
