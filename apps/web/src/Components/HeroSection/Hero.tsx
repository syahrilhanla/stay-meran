import Image from "next/image";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
	return (
		<section className="relative w-full h-[90dvh] flex justify-center items-center rounded-2xl overflow-hidden shadow-lg">
			<Navbar />

			{/* Background image */}
			<Image
				src="/hero-bg.jpg"
				alt="Merano city view"
				fill
				className="object-cover object-center z-0 pointer-events-none"
				priority
			/>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

			{/* Content */}
			<div className="relative z-20 w-full h-full flex flex-col justify-center items-center px-4">
				{/* Headings */}
				<div className="text-center max-w-2xl flex flex-col gap-8">
					<h2 className="text-white font-light tracking-[.25em]">STAY MERAN</h2>

					<h1 className="text-4xl md:text-6xl mx-auto text-white leading-tight drop-shadow-lg font-normal">
						Three Unique Stays in the Heart of Merano
					</h1>
				</div>

				{/* Search Bar */}
			</div>
		</section>
	);
};

export default Hero;
