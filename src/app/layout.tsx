import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OkanGökhan Serigrafi Makineleri - Kaliteli Serigrafi Ekipmanları",
  description: "Türkiye'nin önde gelen serigrafi makinesi üreticisi. Manuel ve otomatik serigrafi makineleri, aksesuarlar ve teknik destek.",
  keywords: "serigrafi makinesi, serigrafi ekipmanları, baskı makinesi, otomatik serigrafi, manuel serigrafi",
  authors: [{ name: "OkanGökhan Serigrafi Makineleri" }],
  openGraph: {
    title: "OkanGökhan Serigrafi Makineleri",
    description: "Kaliteli serigrafi ekipmanları ve makineleri",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
