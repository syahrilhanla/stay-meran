import Hero from "@/Components/HeroSection/Hero";
import FeaturedAccommodation from "@/Components/FeaturedAccommodation/FeaturedAccommodation";

// TODO: make page to be static

export default async function Home() {
	return (
		<main className="p-4">
			<Hero />
			<FeaturedAccommodation />
		</main>
	);
}
