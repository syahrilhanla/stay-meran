"use client";

import { GalleryItem } from "./CarousalGallery";

interface Props {
	setActiveInfo: (info: GalleryItem) => void;
	activeInfo: GalleryItem;
	galleryItems: GalleryItem[];
}

const GalleryList = ({ setActiveInfo, activeInfo, galleryItems }: Props) => {
	return (
		<ul className="list-none grid lg:order-1 order-2 -mt-8 lg:-mt-0">
			{galleryItems.map((item, idx) => (
				<li
					key={item.title}
					onClick={() => setActiveInfo(item)}
					className={`h-fit p-4 flex flex-col justify-end items-end
					   cursor-pointer rounded-2xl
					   ${activeInfo === item ? "bg-white" : "bg-none"}
					   ${activeInfo !== item ? "lg:flex hidden" : "flex"}`}
				>
					{/* fixed width */}
					<div
						className="xl:w-138 lg:w-100 w-full duration-300
			  flex flex-col gap-2 justify-end items-start"
					>
						<h5 className="text-xl lg:text-2xl font-medium text-[#18191A]">
							{item.title}
						</h5>
						{/* only shown when active, animate later with framer motion */}
						<p
							className={`font-light text-sm text-[#454849] leading-[150%] ${activeInfo === item ? "block" : "hidden"} lg:block lg:leading-[150%] ${activeInfo === item ? "" : "lg:hidden"}`}
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
