import Image from "next/image";
import { DM_Sans } from "next/font/google";

import LocaleSelector from "./LocaleSelector";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

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

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							className="block lg:hidden text-white font-light"
							type="button"
							variant={"ghost"}
						>
							Menu
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="end"
						className="w-fit bg-[#18191A]/80 border-none p-2 text-white/80"
					>
						<ul className={`${dmSans.className}`}>
							<li className="p-4 hover:text-white cursor-pointer">Home</li>
							<li className="p-4 hover:text-white cursor-pointer">Our Stays</li>
							<li className="p-4 hover:text-white cursor-pointer">
								Why Merano
							</li>
							<li className="pt-2 px-4 pb-4 hover:text-white cursor-pointer">
								About Us
							</li>
						</ul>
						<span className="mt-2">
							<LocaleSelector />
						</span>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			<div className="relative mt-2 md:absolute hidden lg:block md:right-10">
				<LocaleSelector />
			</div>
		</nav>
	);
};

export default Navbar;
