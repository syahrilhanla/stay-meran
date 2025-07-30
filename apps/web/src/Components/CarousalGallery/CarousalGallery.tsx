"use client";

import { useState } from "react";

import GalleryList from "./GalleryList";
import GalleryView from "./GalleryView";

export type GalleryItem = {
	title: string;
	description: string;
	image: string;
};

const galleryItems = [
	{
		title: "Breathtaking Nature",
		description:
			"Surrounded by majestic mountains, rolling vineyards, and scenic walking trails.",
		image: "/gallery-4.jpg",
	},
	{
		title: "Rich Culture",
		description:
			"Experience the rich history and vibrant culture of Merano through its museums, art galleries, and local festivals.",
		image: "/gallery-2.jpg",
	},
	{
		title: "Culinary Delights",
		description:
			"Indulge in the culinary delights of Merano, from traditional South Tyrolean dishes to innovative gourmet cuisine.",

		image: "/gallery-1.jpg",
	},
	{
		title: "Wellness Relaxation",
		description:
			"Unwind and rejuvenate in the serene wellness centers and spas of Merano, offering a range of treatments and therapies.",
		image: "/gallery-3.jpg",
	},
];

const CarousalGallery = () => {
	const [activeInfo, setActiveInfo] = useState<GalleryItem>(galleryItems[0]);

	return (
		<section className="bg-[#F8FAFB] w-screen">
			<div className="grid grid-cols-2 gap-16">
				<GalleryList
					setActiveInfo={setActiveInfo}
					activeInfo={activeInfo}
					galleryItems={galleryItems}
				/>
				<GalleryView
					setActiveInfo={setActiveInfo}
					activeInfo={activeInfo}
					galleryItems={galleryItems}
				/>
			</div>
		</section>
	);
};

export default CarousalGallery;
