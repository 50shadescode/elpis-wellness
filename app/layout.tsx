import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // 1. Imported the Footer
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Elpis Wellness Africa | With Elpis, Find Mental Bliss", //
  description: "Compassionate, accessible, and evidence-based mental health care empowering individuals and organizations.", //
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth"> 
      <body
        className={`${inter.variable} font-sans antialiased bg-muted text-ink`}
      >
        <Navbar />
        
        {/* Main page content renders here */}
        {children}
        
        {/* 2. Added the Footer at the bottom of the layout */}
        <Footer />
      </body>
    </html>
  );
}