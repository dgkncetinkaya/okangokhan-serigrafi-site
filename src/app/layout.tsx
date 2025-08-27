import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";
import { LanguageProvider } from "@/contexts/LanguageContext";

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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "any", type: "image/png" }
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <LanguageProvider>
          <Header />
          <main className="flex-1 pb-14 md:pb-0">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <MobileCTA />
        </LanguageProvider>
      </body>
    </html>
  );
}
