"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
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
		{ name: "Facebook", icon: Facebook, href: "https://www.facebook.com/okangokhanserigrafimakinalar" },
		{ name: "Instagram", icon: Instagram, href: "#" },
		{ name: "LinkedIn", icon: Linkedin, href: "#" },
		{ name: "YouTube", icon: Youtube, href: "https://www.youtube.com/channel/UC3KMuVqwx4MKN2jRMnIzy5A" },
	];

	return (
		<footer className="bg-foreground text-white">
			{/* Ana Footer İçeriği */}
			<div className="container mx-auto px-4 py-8">
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
					<div className="space-y-4">
						<h4 className="text-lg font-semibold">Hızlı Linkler</h4>
						<ul className="space-y-2">
							{quickLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-white hover:text-white/80 transition-colors text-sm"
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
										className="text-white hover:text-white/80 transition-colors text-sm"
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
							<a 
								href="https://maps.google.com/?q=OkanGökhan+Serigrafi+Makinaları+Maltepe+Mah.+Akınsal+San.+Sit.+D+Blok+No:37/38+Cevizlibağ/Zeytinburnu+İstanbul" 
								target="_blank" 
								rel="noopener noreferrer" 
								className="flex items-start space-x-3 text-white hover:text-white/80 transition-colors group p-2 rounded-lg hover:bg-white/10"
							>
								<MapPin className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
								<div>
									<p className="text-sm text-white leading-relaxed">
										Maltepe Mah. Akınsal San. Sit.<br />
										D Blok No:37/38<br />
										Cevizlibağ/Zeytinburnu
									</p>
								</div>
							</a>
							<a 
								href="tel:+905425094758" 
								className="flex items-center space-x-3 text-white hover:text-white/80 transition-colors group p-2 rounded-lg hover:bg-white/10"
							>
								<Phone className="h-5 w-5 text-white flex-shrink-0" />
								<span className="text-sm text-white font-medium">+90 (542) 509 47 58</span>
							</a>
							<a 
								href="mailto:dogukancetinkaya@okangokhan.com" 
								className="flex items-center space-x-3 text-white hover:text-white/80 transition-colors group p-2 rounded-lg hover:bg-white/10"
							>
								<Mail className="h-5 w-5 text-white flex-shrink-0" />
								<span className="text-sm text-white font-medium">dogukancetinkaya@okangokhan.com</span>
							</a>
							<div className="flex items-center space-x-3">
								<Clock className="h-5 w-5 text-white" />
								<div>
									<p className="text-sm text-white">
										Pazartesi - Cuma: 08:00 - 18:00<br />
										Cumartesi: 09:00 - 14:00
									</p>
								</div>
							</div>
						</div>
					</div>

				</div>

				{/* Alt Footer */}
				<div className="bg-black/20 py-4">
					<div className="container mx-auto px-4">
						<div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
							<a 
								href="https://www.adnbilisim.com.tr/" 
								target="_blank" 
								rel="noopener noreferrer"
								className="text-sm text-white hover:text-white/80 transition-colors"
							>
								© {currentYear} ADN Bilişim. Tüm hakları saklıdır.
							</a>
							<div className="flex space-x-6 text-sm text-white">
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
			</div>
		</footer>
	);
};

export default Footer;