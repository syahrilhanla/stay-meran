"use client";

import { motion } from "framer-motion";
import { GalleryData } from "./CarousalGallery";

interface Props {
	setActiveInfo: (info: GalleryData) => void;
	activeInfo: GalleryData;
	galleryData: GalleryData[];
}

const GalleryList = ({ setActiveInfo, activeInfo, galleryData }: Props) => {
	return (
		<ul className="list-none grid lg:order-1 order-2 -mt-8 lg:-mt-0">
			{galleryData.map((item, index) => (
				<motion.li
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 * index }}
					viewport={{ once: true, amount: 0.5 }}
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
						<h4
							className={`text-xl lg:text-2xl font-medium 
                ${activeInfo === item ? "text-[#18191A]" : "text-[#B4BCBE]"}`}
						>
							{item.title}
						</h4>
						{/* only shown when active, animate later with framer motion */}
						<p
							className={`font-light text-sm text-[#454849] leading-[150%] ${activeInfo === item ? "block" : "hidden"} lg:block lg:leading-[150%] ${activeInfo === item ? "" : "lg:hidden"}`}
						>
							{item.description}
						</p>
					</div>
				</motion.li>
			))}
		</ul>
	);
};

export default GalleryList;
