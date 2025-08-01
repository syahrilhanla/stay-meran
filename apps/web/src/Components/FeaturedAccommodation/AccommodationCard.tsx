"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { motion, LazyMotion, domAnimation } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

type Accommodation = {
	title: string;
	description: string;
	price: number;
	image: {
		asset: {
			_id: string;
			url: string;
		};
	};
};

interface Props {
	accommodation: Accommodation;
}

const AccommodationCard = ({ accommodation }: Props) => {
	const t = useTranslations("Accommodation");

	return (
		<LazyMotion features={domAnimation}>
			<motion.span
				initial={{ opacity: 0, y: 100 }}
				transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0 }}
			>
				<Card className="w-full py-3 px-0 border-none shadow-none rounded-2xl">
					<CardHeader className="px-0">
						<CardTitle className="text-sm px-0 relative">
							<Image
								src={accommodation.image.asset.url}
								alt="Accommodation Image"
								width={500}
								height={300}
								quality={50}
								loading="lazy"
								className="w-full h-100 rounded-2xl object-center object-cover"
							/>
							<Button className="absolute bottom-3 left-3 bg-white/80 text-[#18191A] backdrop-blur-xs pointer-events-none">
								{t("cardPrice", { price: accommodation.price })}
							</Button>
						</CardTitle>
						<CardContent className="mt-4 grid gap-4 p-0">
							<h3 className="text-[#18191A] font-semibold lg:text-xl text-lg">
								{accommodation.title}
							</h3>
							<p className="text-[#454849] text-xs lg:text-sm font-light">
								{accommodation.description}
							</p>

							<Button
								className="w-42 h-12 p-4 text-sm cursor-pointer active:scale-125 duration-300 hover:scale-105
									rounded-full border border-[#18191A] bg-white/80 text-[#18191A]"
								variant="outline"
							>
								{t("cardAction")} <ArrowRight className="ml-1 h-6 w-6" />
							</Button>
						</CardContent>
					</CardHeader>
				</Card>
			</motion.span>
		</LazyMotion>
	);
};

export default AccommodationCard;
