import GalleryList from "./GalleryList";
import GalleryView from "./GalleryView";

const CarousalGallery = () => {
	return (
		<section className="bg-[#F8FAFB] w-screen">
			<div className="grid grid-cols-2 gap-16">
				<GalleryList />
				<GalleryView />
			</div>
		</section>
	);
};

export default CarousalGallery;
