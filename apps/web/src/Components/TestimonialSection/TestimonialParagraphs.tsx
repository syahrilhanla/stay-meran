"use client";

import { motion } from "motion/react";

interface Props {
	sectionHeader: {
		title: string;
		description: string;
	};
}

const TestimonialParagraphs = ({ sectionHeader }: Props) => {
	return (
		<motion.div
			className="w-full"
			initial={{ opacity: 0, y: 20, width: 0 }}
			whileInView={{ opacity: 1, y: 0, width: "100%" }}
			transition={{ duration: 0.5, ease: "linear" }}
		>
			<h3 className="mb-5 text-4xl lg:text-5xl text-[#18191A] leading-[150%] font-medium text-center">
				{sectionHeader.title}
			</h3>
			<p className="text-lg lg:text-xl text-[#454849] leading-[150%] text-center font-light">
				{sectionHeader.description}
			</p>
		</motion.div>
	);
};

export default TestimonialParagraphs;
