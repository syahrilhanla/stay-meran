import CarousalGallery from "../CarousalGallery/CarousalGallery";

const DestinationInfoSection = () => {
	return (
		<section
			className="lg:w-screen relative lg:left-1/2 lg:right-1/2
		 lg:-mx-[50.5dvw] py-10 bg-[#F8FAFB] grid gap-14"
		>
			<div className="mx-4 lg:mx-38 flex flex-col gap-12 justify-center items-center">
				<div className="w-full grid gap-5">
					<h3
						className="text-left text-3xl lg:text-5xl text-[#18191A] 
							font-medium leading-[150%]"
					>
						Why Stay in Merano?
					</h3>
					<p className="text-[#454849] text-sm md:text-lg lg:text-xl font-light leading-[200%]">
						{`Where Nature, Culture, and Relaxation Meet Nestled in the heart of
						the Alps, Merano is a captivating town known for its picturesque
						landscapes, vibrant cultural scene, and renowned wellness
						experiences. Whether you're exploring historic streets, indulging in
						world-class cuisine, or unwinding in thermal spas, Merano has
						something for every traveler.`}
					</p>
				</div>
			</div>

			<CarousalGallery />
		</section>
	);
};

export default DestinationInfoSection;
