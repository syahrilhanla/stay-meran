import { GalleryItem } from "./CarousalGallery";

interface Props {
	activeInfo: GalleryItem;
	setActiveInfo: (info: GalleryItem) => void;
	galleryItems: GalleryItem[];
}

const DotsPagination = ({ activeInfo, setActiveInfo, galleryItems }: Props) => {
	return (
		<div className="absolute left-0 right-0 bottom-6 flex justify-center gap-2 z-10">
			{galleryItems.map((_, idx) => (
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
	);
};

export default DotsPagination;
