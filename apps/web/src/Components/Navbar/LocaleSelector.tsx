"use client";

import { useState } from "react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { ChevronDown, Globe } from "lucide-react";

const LANGUAGES = [
	{ code: "en", label: "English (EN)" },
	{ code: "it", label: "Italy (IT)" },
	{ code: "de", label: "German (DE)" },
];

const LocaleSelector = () => {
	const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);

	return (
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
	);
};

export default LocaleSelector;
