"use client";

import Image from "next/image";
import { GalleryItem } from "./CarousalGallery";

const images = [
	"/gallery-4.jpg",
	"/gallery-2.jpg",
	"/gallery-1.jpg",
	"/gallery-3.jpg",
];

interface Props {
	setActiveInfo: (info: GalleryItem) => void;
	activeInfo: GalleryItem;
	galleryItems: GalleryItem[];
}

const GalleryView = ({ setActiveInfo, activeInfo, galleryItems }: Props) => {
	return (
		<div className="max-w-xl rounded-3xl overflow-hidden relative bg-white">
			<div className="aspect-[4/3] w-full relative">
				<Image
					src={images[galleryItems.indexOf(activeInfo)]}
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
						className={`h-2 w-10 rounded-full cursor-pointer transition-all duration-200 ${
							idx === galleryItems.indexOf(activeInfo)
								? "bg-white"
								: "bg-white/30"
						}`}
						onClick={() => setActiveInfo(galleryItems[idx])}
					/>
				))}
			</div>
		</div>
	);
};

export default GalleryView;
