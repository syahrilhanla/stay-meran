import { getLocale } from "next-intl/server";
import { getTestimonialData } from "@/lib/sanity";

import TestimonialGrids from "./TestimonialGrids";
import TestimonialParagraphs from "./TestimonialParagraphs";

const TestimonialSection = async () => {
	const locale = await getLocale();
	const { sectionHeader, testimonials } = await getTestimonialData(locale);

	return (
		<section className="my-16 mx-0 md:mx-10 lg:mx-28 xl:mx-32 flex flex-col justify-center items-center">
			<TestimonialParagraphs sectionHeader={sectionHeader} />

			{/* Responsive grid: 1 col on mobile, 3 on md+. Cards fill container height. */}
			<TestimonialGrids testimonials={testimonials} />
		</section>
	);
};

export default TestimonialSection;
