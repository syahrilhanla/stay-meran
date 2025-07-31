import { GalleryData } from "./CarousalGallery";

interface Props {
	activeInfo: GalleryData;
	setActiveInfo: (info: GalleryData) => void;
	galleryData: GalleryData[];
}

const DotsPagination = ({ activeInfo, setActiveInfo, galleryData }: Props) => {
	return (
		<div className="flex justify-center gap-2 z-10">
			{galleryData.map((_, idx) => (
				<span
					key={idx}
					className={`h-2 w-10 rounded-full cursor-pointer transition-all duration-200 ${
						idx === galleryData.indexOf(activeInfo)
							? "bg-[#18191A] lg:bg-white"
							: "bg-[#45484980] lg:bg-white/30"
					}`}
					onClick={() => setActiveInfo(galleryData[idx])}
				/>
			))}
		</div>
	);
};

export default DotsPagination;
