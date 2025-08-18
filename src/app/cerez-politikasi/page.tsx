"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cookie, Settings, BarChart, Shield } from "lucide-react";

const CookiePolicyPage = () => {
	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="py-20 bg-gradient-to-br from-primary to-primary/80">
				<div className="container mx-auto px-4 text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="max-w-3xl mx-auto space-y-6"
					>
						<Cookie className="h-16 w-16 mx-auto text-white" />
						<h1 className="text-4xl md:text-5xl font-bold text-white">
							Çerez Politikası
						</h1>
						<p className="text-xl text-white/90">
							Web sitemizde çerez kullanımı hakkında bilgiler
						</p>
					</motion.div>
				</div>
			</section>

			{/* Content Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto space-y-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<Card>
								<CardHeader>
									<CardTitle className="flex items-center gap-3">
										<Cookie className="h-6 w-6 text-primary" />
										Çerez Nedir?
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<p className="text-muted-foreground leading-relaxed">
										Çerezler, web sitelerinin ziyaretçilerin bilgisayarlarında veya mobil cihazlarında sakladığı küçük metin dosyalarıdır. Bu dosyalar, web sitesinin daha iyi çalışmasını sağlar ve kullanıcı deneyimini geliştirir.
									</p>
									<p className="text-muted-foreground leading-relaxed">
										OkanGökhan Serigrafi Makineleri web sitesi, size daha iyi hizmet sunabilmek için çerezleri kullanmaktadır.
									</p>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							<Card>
								<CardHeader>
									<CardTitle className="flex items-center gap-3">
										<Settings className="h-6 w-6 text-primary" />
										Çerez Türleri
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="space-y-4">
										<div>
											<h4 className="font-semibold mb-2">Zorunlu Çerezler</h4>
											<p className="text-muted-foreground text-sm">
												Web sitesinin temel işlevlerini yerine getirmesi için gerekli olan çerezlerdir. Bu çerezler olmadan site düzgün çalışmaz.
											</p>
										</div>
										<div>
											<h4 className="font-semibold mb-2">Performans Çerezleri</h4>
											<p className="text-muted-foreground text-sm">
												Web sitesinin performansını ölçmek ve iyileştirmek için kullanılan çerezlerdir. Hangi sayfaların popüler olduğunu anlamamıza yardımcı olur.
											</p>
										</div>
										<div>
											<h4 className="font-semibold mb-2">İşlevsellik Çerezleri</h4>
											<p className="text-muted-foreground text-sm">
												Tercihlerinizi hatırlayarak size kişiselleştirilmiş bir deneyim sunmak için kullanılan çerezlerdir.
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<Card>
								<CardHeader>
									<CardTitle className="flex items-center gap-3">
										<BarChart className="h-6 w-6 text-primary" />
										Çerez Kullanım Amaçları
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground leading-relaxed mb-4">
										Web sitemizde çerezleri aşağıdaki amaçlarla kullanmaktayız:
									</p>
									<ul className="list-disc list-inside space-y-2 text-muted-foreground">
										<li>Web sitesinin güvenli ve düzgün çalışmasını sağlamak</li>
										<li>Kullanıcı tercihlerini hatırlamak</li>
										<li>Site performansını analiz etmek ve iyileştirmek</li>
										<li>Kullanıcı deneyimini kişiselleştirmek</li>
										<li>İstatistiksel analizler yapmak</li>
									</ul>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							<Card>
								<CardHeader>
									<CardTitle className="flex items-center gap-3">
										<Shield className="h-6 w-6 text-primary" />
										Çerez Kontrolü
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<p className="text-muted-foreground leading-relaxed">
										Tarayıcınızın ayarlarından çerezleri kontrol edebilir, silebilir veya engelleyebilirsiniz. Ancak çerezleri devre dışı bırakmanız durumunda web sitesinin bazı özellikleri düzgün çalışmayabilir.
									</p>
									<p className="text-muted-foreground leading-relaxed">
										Çerez ayarlarınızı değiştirmek için tarayıcınızın yardım bölümüne bakabilir veya aşağıdaki bağlantıları kullanabilirsiniz:
									</p>
									<ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
											<li>Chrome: Ayarlar &gt; Gizlilik ve güvenlik &gt; Çerezler</li>
											<li>Firefox: Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler</li>
											<li>Safari: Tercihler &gt; Gizlilik &gt; Çerezler</li>
											<li>Edge: Ayarlar &gt; Çerezler ve site izinleri</li>
										</ul>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
						>
							<Card>
								<CardHeader>
									<CardTitle>İletişim ve Güncellemeler</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground leading-relaxed">
										Çerez politikamız hakkında sorularınız varsa bizimle iletişime geçebilirsiniz:
									</p>
									<div className="mt-4 space-y-2">
										<p><strong>E-posta:</strong> dogukancetinkaya@okangokhan.com</p>
										<p><strong>Telefon:</strong> +90 (542) 509 47 58</p>
										<p><strong>Adres:</strong> Maltepe Mah. Akınsal San. Sit. D Blok No:37/38 Cevizlibağ/Zeytinburnu</p>
									</div>
									<p className="text-sm text-muted-foreground mt-4">
										Bu çerez politikası son olarak 1 Ocak 2025 tarihinde güncellenmiştir. Politikamızda yapılacak değişiklikler web sitesinde yayınlanacaktır.
									</p>
								</CardContent>
							</Card>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CookiePolicyPage;