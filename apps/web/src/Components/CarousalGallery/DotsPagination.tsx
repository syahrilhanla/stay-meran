import { GalleryItem } from "./CarousalGallery";

interface Props {
	activeInfo: GalleryItem;
	setActiveInfo: (info: GalleryItem) => void;
	galleryItems: GalleryItem[];
}

const DotsPagination = ({ activeInfo, setActiveInfo, galleryItems }: Props) => {
	return (
		<div className="flex justify-center gap-2 z-10">
			{galleryItems.map((_, idx) => (
				<span
					key={idx}
					className={`h-2 w-10 rounded-full cursor-pointer transition-all duration-200 ${
						idx === galleryItems.indexOf(activeInfo)
							? "bg-[#18191A] lg:bg-white"
							: "bg-[#45484980] lg:bg-white/30"
					}`}
					onClick={() => setActiveInfo(galleryItems[idx])}
				/>
			))}
		</div>
	);
};

export default DotsPagination;
