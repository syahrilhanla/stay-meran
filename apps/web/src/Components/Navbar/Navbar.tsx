import Image from "next/image";
import { DM_Sans } from "next/font/google";
import LocaleSelector from "./LocaleSelector";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
	return (
		<nav className="absolute top-0 z-50 w-full flex flex-col items-center py-6 px-4 md:px-10">
			{/* menu bar centered */}
			<div className="flex items-center gap-4 bg-[#454849]/20 py-2 px-2 rounded-full mx-auto">
				<div className="flex items-center gap-2">
					<Image src={"/Union.svg"} alt="Logo" width={40} height={40} />
				</div>
				<ul
					className={`hidden lg:flex gap-12 mx-12 text-white ${dmSans.className}`}
				>
					<li className="hover:text-white cursor-pointer">Home</li>
					<li className="hover:text-white cursor-pointer">Our Stays</li>
					<li className="hover:text-white cursor-pointer">Why Merano</li>
					<li className="hover:text-white cursor-pointer">About Us</li>
				</ul>
			</div>

			<div className="relative mt-2 md:absolute hidden lg:block md:right-10">
				<LocaleSelector />
			</div>
		</nav>
	);
};

export default Navbar;
