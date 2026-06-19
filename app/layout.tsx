import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Ensures the layout matches browser preload rendering requests perfectly
});

export const metadata: Metadata = {
  title: "Elpis Wellness Africa | With Elpis, Find Mental Bliss", 
  description: "Compassionate, accessible, and evidence-based mental health care empowering individuals and organizations.", 
  /* Injected Google Search Console Verification Token */
  verification: {
    google: "dMkP36YM47-j3kulzcBcMel6PMa0cuOxo72LtgxsDA4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth"> 
      <body
        /* Injected inter.className to align the preloaded font directly with text rendering */
        className={`${inter.variable} ${inter.className} font-sans antialiased bg-muted text-ink`}
      >
        <Navbar />
        
        {/* Main page content renders here */}
        {children}
        
        {/* Added the Footer at the bottom of the layout */}
        <Footer />
      </body>
    </html>
  );
}