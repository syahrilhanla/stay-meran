"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { GalleryData } from "./CarousalGallery";
import DotsPagination from "./DotsPagination";

interface Props {
	setActiveInfo: (info: GalleryData) => void;
	activeInfo: GalleryData;
	galleryData: GalleryData[];
}

const GalleryView = ({ setActiveInfo, activeInfo, galleryData }: Props) => {
	const imageSrc = activeInfo.images?.asset?.url;

	return (
		<div className="lg:order-2 order-1 max-w-full lg:max-w-xl flex justify-start rounded-3xl overflow-hidden relative ">
			<motion.div
				className="aspect-[4/3] w-full relative"
				initial={{ opacity: 0, scaleX: 0, scaleY: 0, x: -100 }}
				whileInView={{
					opacity: 1,
					scaleX: 1,
					scaleY: 1,
					x: 1,
				}}
				transition={{ duration: 0.6, ease: "easeInOut" }}
				viewport={{ once: true, amount: 0.1 }}
			>
				<Image
					src={imageSrc}
					alt={activeInfo.title}
					fill
					className="w-auto h-auto object-cover object-center rounded-3xl"
					priority
					quality={50}
					loading="eager"
				/>
			</motion.div>

			<span className="lg:absolute hidden lg:block left-0 right-0 bottom-6 ">
				<DotsPagination
					activeInfo={activeInfo}
					setActiveInfo={setActiveInfo}
					galleryData={galleryData}
				/>
			</span>
		</div>
	);
};

export default GalleryView;
