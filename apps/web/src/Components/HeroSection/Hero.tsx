import HeroSection from "./HeroSection";

import { getLocale } from "next-intl/server";
import { getHeroData } from "@/lib/sanity";

// TODO:
// - Make this page static

const Hero = async () => {
	const locale = await getLocale();

	const heroData = await getHeroData(locale);

	return <HeroSection heroData={heroData} />;
};

export default Hero;
