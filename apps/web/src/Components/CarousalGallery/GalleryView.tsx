"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
	"/gallery-4.jpg",
	"/gallery-2.jpg",
	"/gallery-1.jpg",
	"/gallery-3.jpg",
];

const GalleryView = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="max-w-xl rounded-3xl overflow-hidden relative bg-white">
			<div className="aspect-[4/3] w-full relative">
				<Image
					src={images[activeIndex]}
					alt="Merano view"
					fill
					className="object-cover object-center rounded-3xl"
					priority
				/>
			</div>
			{/* Indicator dots */}
			<div className="absolute left-0 right-0 bottom-6 flex justify-center gap-2 z-10">
				{images.map((_, idx) => (
					<span
						key={idx}
						className={`h-2 w-10 rounded-full transition-all duration-200 ${
							idx === activeIndex ? "bg-white" : "bg-white/30"
						}`}
						onClick={() => setActiveIndex(idx)}
					/>
				))}
			</div>
		</div>
	);
};

export default GalleryView;
