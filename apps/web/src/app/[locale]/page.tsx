import Hero from "@/Components/HeroSection/Hero";
import FeaturedAccommodation from "@/Components/FeaturedAccommodation/FeaturedAccommodation";
import DestinationInfoSection from "@/Components/DestinationInfoSection/DestinationInfoSection";
import TestimonialSection from "@/Components/TestimonialSection/TestimonialSection";
import PromoBanner from "@/Components/PromoBanner/PromoBanner";
import FooterSection from "@/Components/FooterSection/FooterSection";

// TODO: make page to be static

export default async function Home() {
	return (
		<div>
			<main className="p-4">
				<Hero />
				<FeaturedAccommodation />
				<DestinationInfoSection />
				<TestimonialSection />
				<PromoBanner />
			</main>
			<FooterSection />
		</div>
	);
}
