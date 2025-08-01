import Hero from "@/Components/HeroSection/Hero";
import FeaturedAccommodation from "@/Components/FeaturedAccommodation/FeaturedAccommodation";
import DestinationInfoSection from "@/Components/DestinationInfoSection/DestinationInfoSection";
import TestimonialSection from "@/Components/TestimonialSection/TestimonialSection";
import PromoBanner from "@/Components/PromoBanner/PromoBanner";

// TODO: make page to be static

export default async function Home() {
	return (
		<main className="p-4">
			<Hero />
			<FeaturedAccommodation />
			<DestinationInfoSection />
			<TestimonialSection />
			<PromoBanner />
		</main>
	);
}
