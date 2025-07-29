"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Globe } from "lucide-react";
import { DM_Sans } from "next/font/google";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const LANGUAGES = [
	{ code: "en", label: "English (EN)" },
	{ code: "it", label: "Italy (IT)" },
	{ code: "de", label: "German (DE)" },
];

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
	const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);

	return (
		<nav className="absolute top-0 z-50 w-full flex flex-col items-center py-6 px-4 md:px-10">
			{/* menu bar centered */}
			<div className="flex items-center gap-4 bg-[#454849]/20 py-2 px-2 rounded-full mx-auto">
				<div className="flex items-center gap-2">
					<Image src={"/Union.svg"} alt="Logo" width={40} height={40} />
				</div>
				<ul
					className={`hidden md:flex gap-12 mx-12 text-white ${dmSans.className}`}
				>
					<li className="hover:text-white cursor-pointer">Home</li>
					<li className="hover:text-white cursor-pointer">Our Stays</li>
					<li className="hover:text-white cursor-pointer">Why Merano</li>
					<li className="hover:text-white cursor-pointer">About Us</li>
				</ul>
			</div>

			{/* Language dropdown */}
			{/* TODO: separate as new component later */}
			<div className="relative mt-4 md:mt-0 md:absolute md:right-10">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button
							type="button"
							className="flex items-center gap-3 text-white px-4 py-2 cursor-pointer hover:bg-slate-300/20 rounded-md duration-300"
						>
							<Globe strokeWidth={2} />
							<span className="font-light">{selectedLang.label}</span>
							<ChevronDown strokeWidth={1} />
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="end"
						className="w-40 bg-[#18191A]/90 border-none p-2 text-white/80"
					>
						{LANGUAGES.map((language) => (
							<DropdownMenuItem
								key={language.code}
								onClick={() => setSelectedLang(language)}
								className={`
                  cursor-pointer hover:bg-[#454849]! text-white/80!
                  ${selectedLang.code === language.code ? "font-bold" : ""}`}
							>
								{language.label}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</nav>
	);
};

export default Navbar;
