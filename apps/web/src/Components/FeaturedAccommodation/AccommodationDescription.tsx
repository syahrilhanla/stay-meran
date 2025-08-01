"use client";
import { domAnimation, LazyMotion, motion } from "motion/react";

const letterAnimation = {
	hidden: { opacity: 0, y: 20 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.015,
			duration: 0.001,
		},
	}),
};

const AccommodationDescription = ({ description }: { description: string }) => {
	return (
		<LazyMotion features={domAnimation}>
			<motion.h2
				className="lg:pr-8 text-left text-3xl lg:text-5xl text-[#18191A] font-medium leading-[150%]"
				initial={{ scaleX: 0.3, opacity: 0.1, y: 150 }}
				animate={{ scaleX: 1, opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeInOut" }}
				whileInView={{
					opacity: 1,
					scaleX: 1,
					y: 0,
				}}
				viewport={{ once: true, amount: 0.5 }}
			>
				{description}
			</motion.h2>
		</LazyMotion>
	);
};

export default AccommodationDescription;
