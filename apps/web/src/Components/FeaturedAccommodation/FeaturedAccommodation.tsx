import AccommodationCard from "./AccommodationCard";

const FeaturedAccommodation = () => {
	return (
		<section className="my-16 mx-32 flex flex-col gap-12 justify-center items-center">
			{/* Section Description */}
			<h3 className="pr-8 text-left text-4xl lg:text-5xl text-[#18191A] font-medium leading-[150%]">
				StayMeran offers a curated selection of three unique accommodations,
				each designed to provide an unforgettable stay in Merano.
			</h3>

			{/* Accommodation Cards */}
			<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
				<AccommodationCard />
				<AccommodationCard />
				<AccommodationCard />
			</div>
		</section>
	);
};

export default FeaturedAccommodation;
