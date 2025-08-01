import { getLocale } from "next-intl/server";
import AccommodationCard from "./AccommodationCard";

import { getAccommodationData } from "@/lib/sanity";

const FeaturedAccommodation = async () => {
	const locale = await getLocale();

	const { accommodationList, sectionText } = await getAccommodationData(locale);

	return (
		<section className="my-16 mx-0 lg:mx-32 flex flex-col gap-12 justify-center items-center">
			{/* Section Description */}
			<h2
				className="lg:pr-8 text-left text-3xl lg:text-5xl text-[#18191A] 
        font-medium leading-[150%]"
			>
				{sectionText.description}
			</h2>

			{/* Accommodation Cards */}
			<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
				{accommodationList.map((accommodation) => (
					<AccommodationCard
						key={accommodation.image.asset._id}
						accommodation={accommodation}
					/>
				))}
			</div>
		</section>
	);
};

export default FeaturedAccommodation;
