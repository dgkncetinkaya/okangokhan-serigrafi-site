"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Ürünlerimiz", href: "/urunler" },
    { name: "Hizmetlerimiz", href: "/hizmetler" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Blog", href: "/blog" },
    { name: "İletişim", href: "/iletisim" },
  ];

  const productCategories = [
    { name: "Baskı Makineleri", href: "/urunler?category=baski-makineleri" },
    { name: "Kurutma Rafları", href: "/urunler?category=kurutma-raflari" },
    { name: "Serigrafi Boyaları", href: "/urunler?category=serigrafi-boyalari" },
    { name: "Baskı Kalıpları", href: "/urunler?category=baski-kaliplari" },
    { name: "Serigrafi Yardımcı Malzemeleri", href: "/urunler?category=yardimci-malzemeler" },
    { name: "Yedek Parçalar", href: "/urunler?category=yedek-parcalar" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* Üst Bilgi Çubuğu */}
      <div className="bg-[#F25C05] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+90 (542) 509 47 58</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>dogukancetinkaya@okangokhan.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Pazartesi - Cuma: 08:00 - 18:00</span>
          </div>
        </div>
      </div>

      {/* Ana Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
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
              <h1 className="text-xl font-bold text-[#1A1A1A]">OkanGökhan</h1>
              <p className="text-sm text-[#4B4B4B]">Serigrafi Makineleri</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.name === "Ürünlerimiz" ? (
                      <>
                        <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {productCategories.map((category) => (
                              <Link
                                key={category.name}
                                href={category.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F2F2F2] hover:text-[#1A1A1A] focus:bg-[#F2F2F2] focus:text-[#1A1A1A]"
                              >
                                <div className="text-sm font-medium leading-none">{category.name}</div>
                              </Link>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link href={item.href} className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-[#F2F2F2] hover:text-[#1A1A1A] focus:bg-[#F2F2F2] focus:text-[#1A1A1A] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#F2F2F2]/50 data-[state=open]:bg-[#F2F2F2]/50">
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => {
                const message = "Merhaba, serigrafi makinesi hakkında bilgi almak istiyorum.";
                const whatsappUrl = `https://wa.me/905425094758?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Teklif Al
            </Button>
            <Button asChild>
              <Link href="/iletisim">İletişim</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium hover:text-[#F25C05] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <h3 className="font-medium mb-2">Ürün Kategorileri</h3>
                  {productCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block py-2 text-sm text-[#4B4B4B] hover:text-[#F25C05] transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header; 