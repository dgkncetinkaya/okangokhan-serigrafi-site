"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
	const { translations } = useLanguage();

	const menuItems = [
		{ name: translations.header.home, href: "/" },
		{ name: translations.header.products, href: "/urunler" },
		{ name: translations.header.services, href: "/hizmetler" },
		{ name: translations.header.about, href: "/hakkimizda" },
		{ name: translations.header.blog, href: "/blog" },
		{ name: translations.header.contact, href: "/iletisim" },
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
			{/* Üst Bilgi Çubuğu - Sadece Desktop */}
			<div className="hidden md:block bg-primary text-primary-foreground py-2">
				<div className="container mx-auto px-4 flex justify-between items-center text-sm">
					<div className="flex items-center space-x-4">
					<a href="tel:+905425094758" className="flex items-center space-x-2 hover:text-gray-200 transition-colors">
						<Phone className="h-4 w-4" />
						<span>+90 (542) 509 47 58</span>
					</a>
					<a href="mailto:dogukancetinkaya@okangokhan.com" className="flex items-center space-x-2 hover:text-gray-200 transition-colors">
						<Mail className="h-4 w-4" />
						<span>dogukancetinkaya@okangokhan.com</span>
					</a>
				</div>
					<div className="flex items-center space-x-4">
						<span>{translations.header.workingHours}</span>
						<LanguageToggle />
					</div>
				</div>
			</div>

			{/* Ana Header */}
			<div className="container mx-auto px-4 py-3 md:py-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2 md:space-x-3">
						<motion.div
							whileHover={{ scale: 1.05 }}
							className="relative w-10 h-10 md:w-12 md:h-12"
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
							<h1 className="text-lg md:text-xl font-bold text-foreground">OkanGökhan</h1>
							<p className="text-xs md:text-sm text-muted-foreground">Serigrafi Makineleri</p>
						</div>
					</Link>

					{/* Mobil Dil Seçici ve Menü */}
					<div className="flex items-center space-x-2 md:hidden">
						<LanguageToggle />
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center space-x-8">
						{menuItems.map((item) => (
							<div key={item.name} className="relative">
								{item.name === "Ürünlerimiz" ? (
									<div className="relative">
										<button
											className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none"
											onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
											onMouseEnter={() => setIsProductDropdownOpen(true)}
											onMouseLeave={() => setIsProductDropdownOpen(false)}
										>
											{item.name}
											<ChevronDown 
												className={`ml-1 h-3 w-3 transition-transform duration-200 ${isProductDropdownOpen ? 'rotate-180' : ''}`} 
											/>
										</button>

										<AnimatePresence>
											{isProductDropdownOpen && (
												<motion.div
													initial={{ opacity: 0, y: -10, scale: 0.95 }}
													animate={{ opacity: 1, y: 0, scale: 1 }}
													exit={{ opacity: 0, y: -10, scale: 0.95 }}
													transition={{ duration: 0.2, ease: "easeOut" }}
													className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg dropdown-shadow border border-gray-200 z-50"
													onMouseEnter={() => setIsProductDropdownOpen(true)}
													onMouseLeave={() => setIsProductDropdownOpen(false)}
												>
													<div className="grid grid-cols-2 gap-2 p-6">
														{productCategories.map((category, index) => (
															<motion.div
																key={category.name}
																initial={{ opacity: 0, x: -20 }}
																animate={{ opacity: 1, x: 0 }}
																transition={{ duration: 0.3, delay: index * 0.1 }}
															>
																<Link
																	href={category.href}
																	className="group block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-200 hover:bg-primary/5 hover:text-primary border border-transparent hover:border-primary/20"
																	onClick={() => setIsProductDropdownOpen(false)}
																>
																	<div className="text-sm font-medium leading-none group-hover:translate-x-1 transition-transform duration-200">
																		{category.name}
																	</div>
																	<div className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
																				{translations.header.goToCategory}
																			</div>
																</Link>
															</motion.div>
														))}
													</div>
													
													{/* Tüm Ürünler Butonu */}
													<motion.div 
														initial={{ opacity: 0, y: 20 }}
														animate={{ opacity: 1, y: 0 }}
														transition={{ duration: 0.3, delay: 0.4 }}
														className="border-t border-gray-100 p-4"
													>
														<Link
															href="/urunler"
															className="flex items-center justify-center w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
															onClick={() => setIsProductDropdownOpen(false)}
														>
															{translations.header.viewAllProducts}
														</Link>
													</motion.div>
												</motion.div>
										)}
									</AnimatePresence>
								</div>
							) : (
								<Link 
									href={item.href} 
									className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none"
								>
									{item.name}
								</Link>
							)}
						</div>
						))}
					</nav>

					{/* CTA Button */}
					<div className="hidden md:flex items-center space-x-4">
						<Button 
						variant="outline" 
						onClick={() => {
							const message = translations.header.whatsappMessage;
							const whatsappUrl = `https://wa.me/905425094758?text=${encodeURIComponent(message)}`;
							window.open(whatsappUrl, '_blank');
						}}
					>
						{translations.header.getQuote}
					</Button>
						<Button asChild>
						<Link href="/iletisim">{translations.header.contact}</Link>
					</Button>
					</div>

					{/* Mobile Menu */}
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="lg:hidden">
								<Menu className="h-5 w-5" />
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-[280px] sm:w-[320px] bg-white border-l border-gray-200 p-0 flex flex-col max-h-screen overflow-hidden">
							<SheetTitle className="sr-only">Menü</SheetTitle>
							
							{/* Mobil Header */}
							<div className="bg-primary text-white p-4 mb-4 flex-shrink-0">
								<div className="flex items-center space-x-3">
									<div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
										<Image
											src="/images/logo.png"
											alt="Logo"
											width={24}
											height={24}
											className="rounded"
										/>
									</div>
									<div>
										<h3 className="font-bold text-sm">OkanGökhan</h3>
										<p className="text-xs text-white/80">Serigrafi Makineleri</p>
									</div>
								</div>
							</div>



							<div className="border-t border-gray-100 pt-4 flex-1 flex flex-col overflow-hidden">
								<nav className="px-4 space-y-1 flex-1 overflow-y-auto">
									{menuItems.map((item) => (
										<div key={item.name}>
											{item.name === translations.header.products ? (
												<div>
													<button
														className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
														onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
													>
														<span className="font-medium text-gray-900">{item.name}</span>
														<ChevronDown 
															className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${isProductDropdownOpen ? 'rotate-180' : ''}`} 
														/>
													</button>
													<AnimatePresence>
														{isProductDropdownOpen && (
															<motion.div
																initial={{ opacity: 0, height: 0 }}
																animate={{ opacity: 1, height: "auto" }}
																exit={{ opacity: 0, height: 0 }}
																transition={{ duration: 0.2 }}
																className="overflow-hidden ml-4 mt-1"
															>
																{productCategories.map((category) => (
																	<Link
																		key={category.name}
																		href={category.href}
																		className="block py-2 px-3 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded transition-colors"
																		onClick={() => setIsOpen(false)}
																	>
																		{category.name}
																	</Link>
																))}
																<Link
																	href="/urunler"
																	className="block py-2 px-3 mt-2 text-sm font-medium text-primary hover:bg-primary/5 rounded transition-colors"
																	onClick={() => setIsOpen(false)}
																>
																	{translations.header.viewAllProducts}
																</Link>
															</motion.div>
														)}
													</AnimatePresence>
												</div>
											) : (
												<Link
													href={item.href}
													className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
													onClick={() => setIsOpen(false)}
												>
													<span className="font-medium text-gray-900">{item.name}</span>
												</Link>
											)}
										</div>
									))}
								</nav>

								{/* CTA Buttons */}
								<div className="px-4 pt-4 pb-6 space-y-2 border-t border-gray-100 mt-4 flex-shrink-0">
									<Button 
										className="w-full" 
										onClick={() => {
											const message = translations.header.whatsappMessage;
											const whatsappUrl = `https://wa.me/905425094758?text=${encodeURIComponent(message)}`;
											window.open(whatsappUrl, '_blank');
											setIsOpen(false);
										}}
									>
										{translations.header.getQuote}
									</Button>
									<Button 
										variant="outline" 
										className="w-full"
										asChild
									>
										<Link href="/iletisim" onClick={() => setIsOpen(false)}>
											{translations.header.contact}
										</Link>
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
};

export default Header;