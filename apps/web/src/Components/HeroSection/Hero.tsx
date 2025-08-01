import Image from "next/image";
import { getLocale } from "next-intl/server";

import Navbar from "../Navbar/Navbar";
import SearchFilter from "../SearchFilter/SearchFilter";
import MobileSearchFilter from "../SearchFilter/MobileSearchFilter";

import { getHeroData } from "@/lib/sanity";

// TODO:
// - Make this page static

const Hero = async () => {
	const locale = await getLocale();

	const heroData = await getHeroData(locale);

	return (
		<section className="relative w-full h-[95dvh] flex justify-center items-center rounded-2xl overflow-hidden shadow-lg">
			<Navbar />

			{/* Background image */}
			<Image
				src={heroData.image.asset.url}
				alt={heroData.title}
				fill
				className="object-cover object-center z-0 pointer-events-none"
				priority
				quality={50}
				loading="eager"
			/>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

			{/* Content */}
			<div className="relative z-20 w-full h-full flex flex-col justify-center items-center px-4">
				{/* Headings */}
				<div className="-mt-44 lg:-mt-0 text-center max-w-2xl flex flex-col gap-8">
					<h2 className="text-white font-light tracking-[.25em]">
						{heroData.title}
					</h2>

					<h1 className="text-4xl lg:text-6xl mx-auto text-white leading-tight font-medium xl:font-semibold">
						{heroData.subtitle}
					</h1>
				</div>

				{/* Search Bar */}
				<div className="w-full hidden lg:block">
					<SearchFilter />
				</div>

				{/* Mobile Search Bar at bottom of section */}
				<div className="block lg:hidden w-full absolute left-0 right-0 bottom-0 z-20 px-4 pb-4">
					<MobileSearchFilter />
				</div>
			</div>
		</section>
	);
};

export default Hero;
