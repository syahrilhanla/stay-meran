import { getHeroBanner } from "@/lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const PromoBanner = async () => {
	const heroData = await getHeroBanner();

	return (
		<section className="relative my-40 mx-0 max-h-[82dvh] overflow-hidden rounded-2xl lg:mx-32">
			<div className="aspect-[4/3] w-full h-auto relative rounded-2xl">
				{/* Banner */}
				<Image
					src={heroData.image.asset.url}
					alt={"Promo Banner Image"}
					fill
					className="object-right object-none z-0 scale-140 pointer-events-none rounded-2xl backdrop-blur-3xl"
					quality={75}
					loading="lazy"
				/>

				{/* Overlay */}
				<div className="absolute inset-0 bg-black/40 z-10 pointer-events-none p-8" />
			</div>

			{/* Content Centered */}
			<div className="absolute inset-0 z-20 mx-40 flex flex-col justify-center items-center text-center gap-4 p-8">
				<h2 className="text-5xl text-[#F8FAFB] leading-[120%]">
					Find Your Stay Plan
				</h2>
				<h2 className="text-5xl text-[#F8FAFB] leading-[120%]">
					Your Perfect Getaway
				</h2>
				<p className=" mt-8 lg:text-base text-sm mx-auto text-[#F8FAFB] font-light leading-[200%]">
					{`Ready to experience Merano's charm? Discover availability and
            book your ideal accommodation today. Whether you're looking
            for a romantic escape, a cultural adventure, or a relaxing
            retreat, StayMeran has the perfect place for you.`}
				</p>

				<Button
					className="mt-6 w-48 h-14 text-base font-medium cursor-pointer rounded-full bg-white/80 text-[#18191A]"
					variant="outline"
				>
					Find Your Stay <ArrowRight className="!size-6 text-[#18191A]" />
				</Button>
			</div>
		</section>
	);
};

export default PromoBanner;
