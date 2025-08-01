"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Button } from "../ui/button";

interface Props {
	promoBannerData: {
		firstHeading: string;
		secondHeading: string;
		description: string;
		image: {
			asset: {
				_id: string;
				url: string;
			};
		};
	};
}

const PromoBannerSection = ({ promoBannerData }: Props) => {
	const { firstHeading, secondHeading, description, image } = promoBannerData;

	return (
		<motion.section
			className="relative lg:mt-40 mt-30 mx-0 lg:mx-32 h-[75dvh] overflow-hidden rounded-2xl duration-300"
			initial={{ opacity: 0, scale: 0.4 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3, ease: "backIn" }}
			viewport={{ once: true, amount: 0.5 }}
		>
			{/* Banner */}
			<Image
				src={promoBannerData.image.asset.url}
				alt={"Promo Banner Image"}
				fill
				className="object-right object-cover lg:object-none z-0 scale-140 pointer-events-none rounded-2xl backdrop-blur-3xl"
				quality={75}
				loading="lazy"
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/40 z-10 pointer-events-none p-8" />

			{/* Content Centered */}
			<div className="absolute inset-0 z-20 lg:p-8 mx-4 md:mx-10 lg:mx-20 xl:mx-40 flex flex-col justify-center items-center text-center gap-4">
				<h2 className="text-3xl md:text-4xl lg:text-5xl text-[#F8FAFB] lg:leading-[120%]">
					{firstHeading}
				</h2>
				<h2 className="text-3xl md:text-4xl lg:text-5xl text-[#F8FAFB] lg:leading-[120%]">
					{secondHeading}
				</h2>
				<p className="mt-8 text-base mx-auto text-[#F8FAFB] font-light leading-[200%]">
					{description}
				</p>

				<Button
					className="mt-6 w-full md:w-48 h-14 text-base font-medium cursor-pointer rounded-full bg-white text-[#18191A]"
					variant="outline"
				>
					Find Your Stay <ArrowRight className="!size-6 text-[#18191A]" />
				</Button>
			</div>
		</motion.section>
	);
};

export default PromoBannerSection;
