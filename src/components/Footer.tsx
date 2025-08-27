"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const [openSections, setOpenSections] = useState<{[key: string]: boolean}>({});

	const toggleSection = (section: string) => {
		setOpenSections(prev => ({
			...prev,
			[section]: !prev[section]
		}));
	};

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
		{ name: "Facebook", icon: Facebook, href: "https://www.facebook.com/okangokhanserigrafimakinalar" },
		{ name: "Instagram", icon: Instagram, href: "#" },
		{ name: "LinkedIn", icon: Linkedin, href: "#" },
		{ name: "YouTube", icon: Youtube, href: "https://www.youtube.com/channel/UC3KMuVqwx4MKN2jRMnIzy5A" },
	];

	return (
		<footer className="bg-foreground text-white">
			{/* Ana Footer İçeriği */}
			<div className="container mx-auto px-4 py-6 md:py-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
								<p className="text-sm text-white/80">Serigrafi Makineleri</p>
							</div>
						</div>
						<p className="text-white text-sm leading-relaxed">
							45 yıllık deneyimimizle Türkiye&apos;nin önde gelen serigrafi makinesi üreticisi olarak, 
							kaliteli ve güvenilir ekipmanlar ile sektörün ihtiyaçlarını karşılıyoruz.
						</p>
						<div className="flex space-x-4">
							{socialLinks.map((social) => (
								<motion.a
									key={social.name}
									href={social.href}
									whileHover={{ scale: 1.1, y: -2 }}
									className="bg-white/10 p-2 rounded-lg hover:bg-white hover:text-black transition-colors text-white"
								>
									<social.icon className="h-5 w-5" />
								</motion.a>
							))}
						</div>
					</div>

					{/* Hızlı Linkler */}
					<div className="space-y-4 md:block">
						{/* Mobile Collapsible Header */}
						<button 
							onClick={() => toggleSection('quickLinks')}
							className="md:hidden w-full flex items-center justify-between text-lg font-semibold py-2 touch-manipulation"
						>
							Hızlı Linkler
							<ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openSections.quickLinks ? 'rotate-180' : ''}`} />
						</button>
						{/* Desktop Header */}
						<h4 className="hidden md:block text-lg font-semibold">Hızlı Linkler</h4>
						
						<ul className={`space-y-2 md:block ${openSections.quickLinks ? 'block' : 'hidden md:block'}`}>
							{quickLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-white hover:text-white/80 transition-colors text-sm md:text-base py-1 block touch-manipulation"
									>
										{link.name}
										</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Ürünler */}
					<div className="space-y-4 md:block">
						{/* Mobile Collapsible Header */}
						<button 
							onClick={() => toggleSection('products')}
							className="md:hidden w-full flex items-center justify-between text-lg font-semibold py-2 touch-manipulation"
						>
							Ürünler
							<ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openSections.products ? 'rotate-180' : ''}`} />
						</button>
						{/* Desktop Header */}
						<h4 className="hidden md:block text-lg font-semibold">Ürünler</h4>
						
						<ul className={`space-y-2 md:block ${openSections.products ? 'block' : 'hidden md:block'}`}>
							{productLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-white hover:text-white/80 transition-colors text-sm md:text-base py-1 block touch-manipulation"
									>
										{link.name}
										</Link>
								</li>
							))}
						</ul>
					</div>

					{/* İletişim Bilgileri */}
					<div className="space-y-4 md:block">
						{/* Mobile Collapsible Header */}
						<button 
							onClick={() => toggleSection('contact')}
							className="md:hidden w-full flex items-center justify-between text-lg font-semibold py-2 touch-manipulation"
						>
							İletişim
							<ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openSections.contact ? 'rotate-180' : ''}`} />
						</button>
						{/* Desktop Header */}
						<h4 className="hidden md:block text-lg font-semibold">İletişim</h4>
						<div className={`space-y-3 md:block ${openSections.contact ? 'block' : 'hidden md:block'}`}>
							<a 
								href="https://maps.google.com/?q=OkanGökhan+Serigrafi+Makinaları+Maltepe+Mah.+Akınsal+San.+Sit.+D+Blok+No:37/38+Cevizlibağ/Zeytinburnu+İstanbul" 
								target="_blank" 
								rel="noopener noreferrer" 
								className="flex items-start space-x-3 text-white hover:text-white/80 transition-colors group p-2 rounded-lg hover:bg-white/10 touch-manipulation"
							>
								<MapPin className="h-4 w-4 md:h-5 md:w-5 text-white mt-1 flex-shrink-0" />
								<div>
									<p className="text-xs md:text-sm text-white leading-relaxed">
										Maltepe Mah. Akınsal San. Sit.<br />
										D Blok No:37/38<br />
										Cevizlibağ/Zeytinburnu
									</p>
								</div>
							</a>
							<a 
								href="tel:+905425094758" 
								className="flex items-center space-x-3 text-white hover:text-white/80 transition-colors group p-2 rounded-lg hover:bg-white/10 touch-manipulation"
							>
								<Phone className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
								<span className="text-xs md:text-sm text-white font-medium">+90 (542) 509 47 58</span>
							</a>
							<a 
								href="mailto:dogukancetinkaya@okangokhan.com" 
								className="flex items-center space-x-3 text-white hover:text-white/80 transition-colors group p-2 rounded-lg hover:bg-white/10 touch-manipulation"
							>
								<Mail className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
								<span className="text-xs md:text-sm text-white font-medium break-all">dogukancetinkaya@okangokhan.com</span>
							</a>
							<div className="flex items-start space-x-3">
								<Clock className="h-4 w-4 md:h-5 md:w-5 text-white mt-1" />
								<div>
									<p className="text-xs md:text-sm text-white leading-relaxed">
										Pazartesi - Cuma: 08:00 - 18:00<br />
										Cumartesi: 09:00 - 14:00
									</p>
								</div>
							</div>
						</div>
					</div>

				</div>

				{/* Alt Footer */}
				<div className="bg-black/20 py-3 md:py-4">
					<div className="container mx-auto px-4">
						<div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
							<a 
								href="https://www.adnbilisim.com.tr/" 
								target="_blank" 
								rel="noopener noreferrer"
								className="text-xs md:text-sm text-white hover:text-white/80 transition-colors touch-manipulation"
							>
								© {currentYear} ADN Bilişim. Tüm hakları saklıdır.
							</a>
							<div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 text-xs md:text-sm text-white">
								<Link href="/gizlilik" className="hover:text-white transition-colors py-1 touch-manipulation">
									Gizlilik Politikası
								</Link>
								<Link href="/kullanim-kosullari" className="hover:text-white transition-colors py-1 touch-manipulation">
									Kullanım Koşulları
								</Link>
								<Link href="/cerez-politikasi" className="hover:text-white transition-colors py-1 touch-manipulation">
									Çerez Politikası
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;