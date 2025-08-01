"use client";

import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface Props {
	testimonials: {
		text: string;
		reviewer: string;
		avatar?: { asset: { url: string } };
	}[];
}

const TestimonialGrids = ({ testimonials }: Props) => {
	return (
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
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.3,
									ease: "easeInOut",
									delay: 0.1 * i,
								}}
								viewport={{ once: true, amount: 0.5 }}
								key={i}
								className={`w-full p-4 sm:flex flex-col justify-between gap-4 group
										not-first:hidden not-first:sm:flex not-first:sm:h-full not-first:h-0
										border border-solid rounded-2xl text-[#454849]
										duration-300 transition-all ${
											colIdx === 0
												? "first:sm:bg-[#707577] not-first:bg-white first:sm:text-white not-first:text-[#18191A]"
												: colIdx === 2
													? "last:bg-[#F8FAFB]"
													: ""
										}`}
							>
								<p className="text-sm lg:text-base xl:text-lg leading-relaxed flex-1">
									{testimonial.text}
								</p>

								<div className="w-full flex items-center justify-between gap-3 mt-6">
									<span
										className={`text-base lg:text-lg font-medium ${
											colIdx === 0 && i === 0
												? "sm:text-white text-[#454849]"
												: "text-[#454849]"
										}`}
									>
										{testimonial.reviewer}
									</span>
									<Avatar
										title={testimonial.reviewer}
										className="rounded-lg h-9 lg:h-12 w-9 lg:w-12"
									>
										<AvatarImage
											src={testimonial.avatar?.asset.url}
											className="object-top object-cover"
											alt={testimonial.reviewer}
										/>
										<AvatarFallback className="bg-[#454849] text-slate-200">
											{testimonial.reviewer.charAt(0)}
										</AvatarFallback>
									</Avatar>
								</div>
							</motion.div>
						))}
				</div>
			))}
		</div>
	);
};

export default TestimonialGrids;
