"use client";

import Image from "next/image";
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
			<div className="aspect-[4/3] w-full relative">
				<Image
					src={imageSrc || "/gallery-4.jpg"}
					alt={activeInfo.title}
					fill
					className="w-auto h-auto object-cover object-center rounded-3xl"
					priority
				/>
			</div>

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
