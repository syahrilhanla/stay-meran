import { getLocale } from "next-intl/server";

import { getGalleryData } from "@/lib/sanity";

import CarousalGallery from "../CarousalGallery/CarousalGallery";
import DestinationInfoSectionText from "./DestinationInfoSectionText";

const DestinationInfoSection = async () => {
	const locale = await getLocale();

	const { galleryData, sectionHeader } = await getGalleryData(locale);

	return (
		<section
			className="lg:w-screen relative lg:left-1/2 lg:right-1/2
		 lg:-mx-[50.5dvw] py-10 bg-[#F8FAFB] grid gap-14"
		>
			<div className="mx-4 lg:mx-38 flex flex-col gap-12 justify-center items-center">
				<div className="w-full grid gap-5">
					<DestinationInfoSectionText sectionHeader={sectionHeader} />
				</div>
			</div>

			<CarousalGallery galleryData={galleryData} />
		</section>
	);
};

export default DestinationInfoSection;
