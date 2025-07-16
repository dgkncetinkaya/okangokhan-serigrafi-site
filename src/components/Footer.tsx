"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Ürünlerimiz", href: "/urunler" },
    { name: "Hizmetlerimiz", href: "/hizmetler" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Blog", href: "/blog" },
    { name: "İletişim", href: "/iletisim" },
  ];

  const productLinks = [
    { name: "Baskı Makineleri", href: "/urunler?category=baski-makineleri" },
    { name: "Kurutma Rafları", href: "/urunler?category=kurutma-raflari" },
    { name: "Serigrafi Boyaları", href: "/urunler?category=serigrafi-boyalari" },
    { name: "Baskı Kalıpları", href: "/urunler?category=baski-kaliplari" },
    { name: "Serigrafi Yardımcı Malzemeleri", href: "/urunler?category=yardimci-malzemeler" },
    { name: "Yedek Parçalar", href: "/urunler?category=yedek-parcalar" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Ana Footer İçeriği */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Şirket Bilgileri */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-12 h-12"
              >
                <Image
                  src="/images/logo.png"
                  alt="OkanGökhan Serigrafi Makineleri Logo"
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold">OkanGökhan</h3>
                <p className="text-sm text-[#F2F2F2]">Serigrafi Makineleri</p>
              </div>
            </div>
            <p className="text-[#F2F2F2] text-sm leading-relaxed">
              40 yıllık deneyimimizle Türkiye'nin önde gelen serigrafi makinesi üreticisi olarak, 
              kaliteli ve güvenilir ekipmanlar ile sektörün ihtiyaçlarını karşılıyoruz.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-[#4B4B4B] p-2 rounded-lg hover:bg-[#F25C05] transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Hızlı Linkler</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#F2F2F2] hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ürünler */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Ürünler</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#F2F2F2] hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">İletişim</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#F25C05]" />
                <div>
                  <p className="text-sm text-[#F2F2F2]">
                    Maltepe Mah. Akınsal San. Sit.<br />
                    D Blok No:37/38<br />
                    Cevizlibağ/Zeytinburnu
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#F25C05]" />
                <span className="text-sm text-[#F2F2F2]">+90 (542) 509 47 58</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#F25C05]" />
                <span className="text-sm text-[#F2F2F2]">dogukancetinkaya@okangokhan.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-[#F25C05]" />
                <div>
                  <p className="text-sm text-[#F2F2F2]">
                    Pazartesi - Cuma: 08:00 - 18:00<br />
                    Cumartesi: 09:00 - 14:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-[#4B4B4B]">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-2">Bültenimize Katılın</h4>
            <p className="text-[#F2F2F2] text-sm mb-4">
              Yeni ürünler ve güncellemeler için bültenimize abone olun
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-2 rounded-lg bg-[#4B4B4B] border border-[#4B4B4B] text-white placeholder-[#F2F2F2] focus:outline-none focus:border-[#F25C05]"
              />
              <Button className="bg-[#F25C05] hover:bg-[#F25C05]/90">
                Abone Ol
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Footer */}
      <div className="bg-[#4B4B4B] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-[#F2F2F2]">
              © {currentYear} OkanGökhan Serigrafi Makineleri. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 text-sm text-[#F2F2F2]">
              <Link href="/gizlilik" className="hover:text-white transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-kosullari" className="hover:text-white transition-colors">
                Kullanım Koşulları
              </Link>
              <Link href="/cerez-politikasi" className="hover:text-white transition-colors">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 