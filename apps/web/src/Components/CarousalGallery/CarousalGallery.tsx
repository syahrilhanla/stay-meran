"use client";

import { useState } from "react";

import GalleryList from "./GalleryList";
import GalleryView from "./GalleryView";
import DotsPagination from "./DotsPagination";

export type GalleryData = {
	title: string;
	description: string;
	images: {
		asset: {
			_id: string;
			url: string;
		};
	};
};

interface Props {
	galleryData: GalleryData[];
}

const CarousalGallery = ({ galleryData }: Props) => {
	const [activeInfo, setActiveInfo] = useState<GalleryData>(galleryData[0]);

	return (
		<section className="bg-[#F8FAFB] lg:w-screen">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-4 xl:mx-0">
				<GalleryList
					setActiveInfo={setActiveInfo}
					activeInfo={activeInfo}
					galleryData={galleryData}
				/>

				<GalleryView
					setActiveInfo={setActiveInfo}
					activeInfo={activeInfo}
					galleryData={galleryData}
				/>

				<span className="order-3 lg:hidden -mt-4">
					<DotsPagination
						activeInfo={activeInfo}
						setActiveInfo={setActiveInfo}
						galleryData={galleryData}
					/>
				</span>
			</div>
		</section>
	);
};

export default CarousalGallery;
