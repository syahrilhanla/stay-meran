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
	return (
		<div className="max-w-xl rounded-3xl overflow-hidden relative bg-white">
			<div className="aspect-[4/3] w-full relative">
				<Image
					src={galleryItems[galleryItems.indexOf(activeInfo)].image}
					alt={activeInfo.title}
					fill
					className="object-cover object-center rounded-3xl"
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
