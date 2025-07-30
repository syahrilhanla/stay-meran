"use client";

import Image from "next/image";
import { GalleryItem } from "./CarousalGallery";
import DotsPagination from "./DotsPagination";

interface Props {
	setActiveInfo: (info: GalleryItem) => void;
	activeInfo: GalleryItem;
	galleryItems: GalleryItem[];
}

const GalleryView = ({ setActiveInfo, activeInfo, galleryItems }: Props) => {
	const imageSrc = galleryItems[galleryItems.indexOf(activeInfo)]?.image;

	return (
		<div className="lg:order-2 order-1 max-w-full lg:max-w-xl flex justify-start rounded-3xl overflow-hidden relative ">
			<div className="aspect-[4/3] w-full relative">
				<Image
					src={imageSrc || "/gallery-4.jpg"}
					alt={activeInfo.title}
					fill
					className="w-auto h-auto object-cover object-center rounded-3xl"
					priority
				/>
			</div>

			<DotsPagination
				activeInfo={activeInfo}
				setActiveInfo={setActiveInfo}
				galleryItems={galleryItems}
			/>
		</div>
	);
};

export default GalleryView;
