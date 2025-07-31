import { getLocale } from "next-intl/server";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getTestimonialData } from "@/lib/sanity";

const TestimonialSection = async () => {
	const locale = await getLocale();
	const { sectionHeader, testimonials } = await getTestimonialData(locale);

	return (
		<section className="my-16 mx-0 lg:mx-32 flex flex-col justify-center items-center">
			<div className="w-full">
				<h3 className="mb-5 text-4xl lg:text-5xl text-[#18191A] leading-[150%] font-medium text-center">
					{sectionHeader.title}
				</h3>
				<p className="text-lg lg:text-xl text-[#454849] leading-[150%] text-center font-light">
					{sectionHeader.description}
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
											{testimonial.reviewer}
										</span>
										<Avatar className="rounded-lg h-9 lg:h-12 w-9 lg:w-12">
											<AvatarImage
												src={testimonial.avatar?.asset.url}
												className="object-top object-cover"
											/>
											<AvatarFallback>
												{testimonial.reviewer.charAt(0)}
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
