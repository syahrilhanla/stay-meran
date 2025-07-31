import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const testimonials = [
	{
		text: "Absolutely great accommodation in one of the most beautiful villas! Spacious, spacious, quiet and very clean. Dorothea is such a gracious and friendly host. Thanks for that. The location is unbeatable. We felt more than comfortable and would come back any time.",
		name: "Sab",
		avatar: null,
		highlight: true,
	},
	{
		text: "Super nice hostess, perfect location, cozy place to stay in a great property - we will be happy to come back😊",
		name: "Wibke",
		avatar: null,
	},
	{
		text: "One of the most beautiful apartments we have experienced on airbnb in 10 years. Dorothea is also a very lovely hostess. Full score!!!",
		name: "Dieter",
		avatar: "/testimonials/dieter.jpg",
	},
	{
		text: "Very charming and beautiful place to stay just a few minutes from the center. We will be happy to come back.",
		name: "Michael",
		avatar: "/testimonials/michael.jpg",
	},
	{
		text: "Beautiful little apartment in an old villa. I didn't miss anything. You can walk quickly to the city and also fix the mountains thanks to the good public transport. Despite the heat, it was pleasantly cool in the apartment.",
		name: "Katja",
		avatar: null,
	},
	{
		text: "I have been in the apartment for the second time. I feel very comfortable there, great starting point for hikes around Merano and in Ulten. Very quiet and yet very centrally located. I'd love to come back :)",
		name: "Michael",
		avatar: null,
	},
	{
		text: "Dorothea's house is beautiful and clean, original and very well-kept in every detail, the villa where it is charming and surrounded by greenery, the neighborhood is quiet and feels like walking in a forest but at the same time it is very close to the center and the magnificent paths and gardens of Merano. The owners are attentive, thoughtful, and kind! A great stay!",
		name: "Laura",
		avatar: "/testimonials/laura.jpg",
	},
];

const TestimonialSection = () => {
	return (
		<section className="my-16 mx-0 lg:mx-32 flex flex-col justify-center items-center">
			<div className="w-full">
				<h3 className="mb-5 text-4xl lg:text-5xl text-[#18191A] leading-[150%] font-medium text-center">
					What Our Guests Say At StayMeran
				</h3>
				<p className="text-lg lg:text-xl text-[#454849] leading-[150%] text-center font-light">
					We take pride in providing an exceptional stay for our guests. See
					what they have to say about their experiences and why they choose to
					return.
				</p>
			</div>

			{/* Responsive grid: 1 col on mobile, 3 on md+. Cards fill container height. */}
			<div className="mt-10 w-full flex flex-col gap-4 sm:flex-row sm:gap-6">
				{Array.from({ length: 3 }).map((_, colIdx) => (
					<div
						key={colIdx}
						className={`flex-1 flex flex-col gap-4 ${
							colIdx === 0 ? "" : "hidden sm:flex"
						}`}
					>
						{testimonials
							.filter((_, i) => i % 3 === colIdx)
							.map((testimonial, i) => (
								<div
									key={i}
									className={`h-full w-full p-4 flex flex-col justify-between gap-4 group
									border border-solid rounded-2xl text-[#454849] ${
										colIdx === 0
											? "first:bg-[#707577] first:text-white"
											: colIdx === 2
											? "last:bg-[#F8FAFB]"
											: ""
									}`}
								>
									<p className="text-base lg:text-lg leading-relaxed flex-1">
										{testimonial.text}
									</p>

									<div className="w-full flex items-center justify-between gap-3 mt-auto">
										<span
											className={`text-base lg:text-lg text-[#454849] font-medium ${
												colIdx === 0 && i === 0 ? "text-white" : ""
											}`}
										>
											{testimonial.name}
										</span>
										<Avatar className="rounded-lg h-9 lg:h-12 w-9 lg:w-12">
											<AvatarImage src="https://github.com/shadcn.png" />
											<AvatarFallback>
												{testimonial.name.charAt(0)}
											</AvatarFallback>
										</Avatar>
									</div>
								</div>
							))}
					</div>
				))}
			</div>
		</section>
	);
};

export default TestimonialSection;
