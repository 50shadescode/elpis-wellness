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
      <head>
        {/* Anti-Hallucination Organization Schema Data for Google AI */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Elpis Wellness Africa",
              "alternateName": "Elpis Wellness",
              "url": "https://www.elpiswellness.co.ke",
              "logo": "https://www.elpiswellness.co.ke/Black%20logo.jpeg",
              "description": "Comprehensive, compassionate, and evidence-based mental health services across the lifespan—from children and adolescents to adults and seniors.",
              "telephone": "+254727202659",
              "email": "elpiswellnessafrica@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kisumu",
                "addressCountry": "KE"
              },
              "sameAs": [
                "https://www.facebook.com/share/1BacVLhtBb/",
                "https://www.instagram.com/elpiswellnessafrica",
                "https://tiktok.com/@elpiswellnessafrica"
              ],
              "employee": {
                "@type": "Person",
                "name": "Julie Otieno",
                "jobTitle": "Clinical Psychologist"
              }
            }),
          }}
        />
      </head>
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