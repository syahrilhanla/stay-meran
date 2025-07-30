"use client";

import { useState } from "react";

const galleryItems = [
	{
		title: "Breathtaking Nature",
		description:
			"Surrounded by majestic mountains, rolling vineyards, and scenic walking trails.",
	},
	{
		title: "Rich Culture",
		description:
			"Experience the rich history and vibrant culture of Merano through its museums, art galleries, and local festivals.",
	},
	{
		title: "Culinary Delights",
		description:
			"Indulge in the culinary delights of Merano, from traditional South Tyrolean dishes to innovative gourmet cuisine.",
	},
	{
		title: "Wellness Relaxation",
		description:
			"Unwind and rejuvenate in the serene wellness centers and spas of Merano, offering a range of treatments and therapies.",
	},
];

const GalleryList = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<ul className="list-none grid">
			{galleryItems.map((item, idx) => (
				<li
					key={item.title}
					onClick={() => setActiveIndex(idx)}
					className={`flex flex-col justify-end items-end cursor-pointer rounded-2xl p-4 ${activeIndex === idx ? "bg-white" : "bg-none"}`}
				>
					{/* fixed width */}
					<div className="w-138 flex flex-col gap-2 justify-end items-start">
						<h5 className="text-xl lg:text-2xl font-medium text-[#18191A]">
							{item.title}
						</h5>
						{/* only shown when active, animate later with framer motion */}
						<p
							className={`font-light text-sm text-[#454849] leading-[150%] ${activeIndex === idx ? "block" : "hidden"}`}
						>
							{item.description}
						</p>
					</div>
				</li>
			))}
		</ul>
	);
};

export default GalleryList;
