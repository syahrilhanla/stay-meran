"use client";

import { motion } from "motion/react";

interface Props {
	sectionHeader: {
		sectionTitle: string;
		description: string;
	};
}

const DestinationInfoSectionText = ({ sectionHeader }: Props) => {
	return (
		<>
			<motion.h3
				className="text-left text-3xl lg:text-5xl text-[#18191A] 
          font-medium leading-[150%]"
				initial={{ scaleX: 0.3, opacity: 0.1 }}
				whileInView={{ scaleX: 1, opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeInOut" }}
				viewport={{ once: true, amount: 0.5 }}
			>
				{sectionHeader.sectionTitle}
			</motion.h3>
			<motion.p
				className="text-[#454849] text-sm md:text-lg lg:text-xl font-light leading-[200%]"
				initial={{ opacity: 0, width: 0 }}
				whileInView={{ opacity: 1, width: "100%" }}
				transition={{ duration: 0.5, ease: "easeInOut" }}
				viewport={{ once: true, amount: 0.5 }}
			>
				{sectionHeader.description}
			</motion.p>
		</>
	);
};

export default DestinationInfoSectionText;
