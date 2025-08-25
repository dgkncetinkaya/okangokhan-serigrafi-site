"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
	id: string;
	name: string;
	description: string;
	image: string;
	category: string;
	features: string[];
}

const ProductCard = ({
	id,
	name,
	description,
	image,
	category,
	features,
}: ProductCardProps) => {
	const handleWhatsAppClick = () => {
		const message = `Merhaba, ${name} ürünü hakkında bilgi almak istiyorum.`;
		const whatsappUrl = `https://wa.me/905425094758?text=${encodeURIComponent(message)}`;
		window.open(whatsappUrl, '_blank');
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			whileHover={{ y: -5 }}
			className="group"
		>
			<Card className="h-full overflow-hidden border-0 transition-all duration-500 rounded-3xl hover:shadow-lg hover:shadow-gray-200/50 flex flex-col product-card-bg">
				{/* Ürün Görseli - Tıklanabilir */}
				<div className="relative rounded-t-3xl overflow-hidden product-card-bg">
					<Link href={`/urunler/${id}`} className="block">
						<motion.div
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.3 }}
							className="h-96 max-w-[280px] w-full flex items-center justify-center p-2 mx-auto cursor-pointer"
						>
							<img
								src={image}
								alt={name}
								className="max-w-full max-h-full object-contain"
							/>
						</motion.div>
					</Link>

					{/* Kategori Badge */}
					<div className="absolute top-4 right-4">
						<Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-foreground/80 px-3 py-1 rounded-full text-xs font-medium shadow-sm border-0">
							{category}
						</Badge>
					</div>
				</div>

				<div className="flex-1 flex flex-col">
					{/* Ürün Bilgileri */}
					<CardHeader className="pb-2 px-4 pt-3 product-card-bg">
						<div className="flex-1">
							{/* Ürün İsmi - Tıklanabilir */}
							<Link href={`/urunler/${id}`}>
								<CardTitle className="text-lg font-semibold text-foreground line-clamp-2 hover:text-primary transition-colors cursor-pointer mb-1">
									{name}
								</CardTitle>
							</Link>
							<CardDescription className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
								{description}
							</CardDescription>
						</div>
					</CardHeader>

					{/* Özellikler */}
					<CardContent className="pb-2 px-4 product-card-bg">
						<div className="space-y-1.5">
							{features.slice(0, 3).map((feature, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -10 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: index * 0.1 }}
									className="flex items-center space-x-3 text-sm text-muted-foreground"
								>
									<div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
									<span className="leading-relaxed">{feature}</span>
								</motion.div>
							))}
						</div>
					</CardContent>
				</div>

				{/* Footer */}
				<CardFooter className="pt-0 px-4 pb-4 mt-auto product-card-bg">
					<div className="w-full space-y-2">
						<Button 
							className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md" 
							onClick={handleWhatsAppClick}
						>
							<MessageCircle className="mr-2 h-4 w-4" />
							Teklif Al
						</Button>
						<Button 
							className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md" 
							asChild
						>
							<Link href={`/urunler/${id}`}>
								Detayları Gör
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>
				</CardFooter>
			</Card>
		</motion.div>
	);
};

export default ProductCard;