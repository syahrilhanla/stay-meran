import { getPromoBannerData } from "@/lib/sanity";

import { getLocale } from "next-intl/server";
import PromoBannerSection from "./PromoBannerSection";

const PromoBanner = async () => {
	const locale = await getLocale();

	const { firstHeading, secondHeading, description, image } =
		await getPromoBannerData(locale);

	return (
		<PromoBannerSection
			promoBannerData={{
				firstHeading,
				secondHeading,
				description,
				image,
			}}
		/>
	);
};

export default PromoBanner;
