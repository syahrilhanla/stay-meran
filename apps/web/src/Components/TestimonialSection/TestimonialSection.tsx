import { getLocale } from "next-intl/server";
import { getTestimonialData } from "@/lib/sanity";

import TestimonialGrids from "./TestimonialGrids";

const TestimonialSection = async () => {
	const locale = await getLocale();
	const { sectionHeader, testimonials } = await getTestimonialData(locale);

	return (
		<section className="my-16 mx-0 md:mx-10 lg:mx-28 xl:mx-32 flex flex-col justify-center items-center">
			<div className="w-full">
				<h3 className="mb-5 text-4xl lg:text-5xl text-[#18191A] leading-[150%] font-medium text-center">
					{sectionHeader.title}
				</h3>
				<p className="text-lg lg:text-xl text-[#454849] leading-[150%] text-center font-light">
					{sectionHeader.description}
				</p>
			</div>

			{/* Responsive grid: 1 col on mobile, 3 on md+. Cards fill container height. */}
			<TestimonialGrids testimonials={testimonials} />
		</section>
	);
};

export default TestimonialSection;
