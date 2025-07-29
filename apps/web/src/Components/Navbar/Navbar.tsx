import Image from "next/image";
import { DM_Sans } from "next/font/google";

import { Button } from "../ui/button";
import LocaleSelector from "./LocaleSelector";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
	return (
		<nav className="absolute top-0 z-50 w-full flex flex-col items-center py-6 px-4 md:px-10">
			{/* menu bar centered */}
			<div
				className="w-full lg:w-fit flex items-center justify-between lg:justify-start gap-4 
          py-2 px-2 rounded-full mx-auto bg-[#40404033]/80"
			>
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

				<Button
					className="block lg:hidden text-white"
					type="button"
					variant={"ghost"}
				>
					Menu
				</Button>
			</div>

			<div className="relative mt-2 md:absolute hidden lg:block md:right-10">
				<LocaleSelector />
			</div>
		</nav>
	);
};

export default Navbar;
