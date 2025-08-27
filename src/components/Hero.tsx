"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	// Hero slider verileri - yeni serigrafi görselleri
	const slides = [
		{
			id: 1,
			backgroundImage: "/images/serigrafi-1.jpeg",
			title: "Profesyonel Serigrafi",
			subtitle: "Kaliteli Baskı Çözümleri",
			description: "Modern serigrafi teknikleri ile yüksek kaliteli baskı hizmetleri sunuyoruz. Deneyimli ekibimizle her türlü baskı ihtiyacınızı karşılıyoruz.",
			buttonText: "Ürünlerimizi İncele",
			buttonLink: "/urunler"
		},
		{
			id: 2,
			backgroundImage: "/images/serigrafi-2.jpeg",
			title: "Uzman Ekip",
			subtitle: "40 Yıllık Deneyim",
			description: "Serigrafi alanında uzman ekibimiz ve kaliteli malzemelerimizle size en iyi hizmeti sunmak için çalışıyoruz.",
			buttonText: "Hakkımızda",
			buttonLink: "/hakkimizda"
		},
		{
			id: 3,
			backgroundImage: "/images/serigrafi-3.jpeg",
			title: "Gelişmiş Teknoloji",
			subtitle: "Modern Ekipmanlar",
			description: "En son teknoloji ekipmanlarımız ile hızlı ve kaliteli üretim yapıyoruz. Müşteri memnuniyeti bizim önceliğimizdir.",
			buttonText: "İletişime Geç",
			buttonLink: "/iletisim"
		}
	];

	// Otomatik slayt geçişi
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 6000); // 6 saniyede bir geçiş

		return () => clearInterval(interval);
	}, [slides.length]);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

	const currentSlideData = slides[currentSlide];

	return (
		<section className="relative min-h-screen overflow-hidden">
			{/* Arka Plan Görseli */}
			<AnimatePresence mode="wait">
				<motion.div
					key={currentSlide}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1 }}
					className="absolute inset-0"
				>
					<Image
						src={currentSlideData.backgroundImage}
						alt={currentSlideData.title}
						fill
						className="object-cover"
						priority
						sizes="100vw"
					/>
					{/* Overlay */}
					<div className="absolute inset-0 bg-black/40" />
				</motion.div>
			</AnimatePresence>

			{/* Slayt Kontrol Butonları */}
			<button
				onClick={prevSlide}
				className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
			>
				<ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
			</button>
			<button
				onClick={nextSlide}
				className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
			>
				<ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
			</button>

			{/* Slayt İndikatörleri */}
			<div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2 md:space-x-3">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
							index === currentSlide 
								? 'bg-white scale-125' 
								: 'bg-white/50 hover:bg-white/80'
						}`}
					/>
				))}
			</div>

			{/* Merkezi İçerik */}
			<div className="absolute inset-0 flex items-center justify-center z-20">
				<div className="container mx-auto px-4 md:px-6">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentSlide}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -50 }}
							transition={{ duration: 0.8 }}
							className="text-center text-white max-w-4xl mx-auto"
						>
							{/* Ana Başlık */}
							<motion.h1
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
								className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight px-2"
							>
								{currentSlideData.title}
							</motion.h1>

							{/* Alt Başlık */}
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.4 }}
								className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-6 text-white/90 leading-relaxed px-2"
							>
								{currentSlideData.subtitle}
							</motion.p>

							{/* Açıklama */}
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.6 }}
								className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 lg:mb-10 text-white/80 max-w-2xl mx-auto px-4 leading-relaxed"
							>
								{currentSlideData.description}
							</motion.p>

							{/* CTA Butonu */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.8 }}
								className="px-4"
							>
								<Button 
									size="lg" 
									className="bg-white text-black hover:bg-white/90 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
									asChild
								>
									<Link href={currentSlideData.buttonLink}>
										{currentSlideData.buttonText}
										<ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
									</Link>
								</Button>
							</motion.div>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>


		</section>
	);
};

export default Hero;