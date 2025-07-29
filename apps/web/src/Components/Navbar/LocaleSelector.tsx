"use client";

import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { ChevronDown, Globe } from "lucide-react";

type Language = {
	code: string;
	label: string;
};

enum TranslationLocale {
	en = "English (EN)",
	it = "Italy (IT)",
	de = "German (DE)",
}

const LocaleSelector = () => {
	const router = useRouter();

	const pathname = usePathname();
	const params = useParams();
	const locale = params.locale as keyof typeof TranslationLocale;

	function onSelectChange(language: Language) {
		const nextLocale = language.code as TranslationLocale;

		router.replace(
			// @ts-expect-error -- TypeScript will validate that only known `params`
			// are used in combination with a given `pathname`. Since the two will
			// always match for the current route, we can skip runtime checks.
			{ pathname, params },
			{ locale: nextLocale }
		);
	}

	const languages = Object.entries(TranslationLocale).map(([code, label]) => ({
		code,
		label,
	}));

	return (
		<div className="relative mt-4 md:mt-0 md:absolute md:right-10">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button
						type="button"
						className="flex items-center gap-3 text-white px-4 py-2 cursor-pointer hover:bg-slate-300/20 rounded-md duration-300"
					>
						<Globe strokeWidth={2} />
						<span className="font-light">
							{TranslationLocale[locale] || TranslationLocale.en}
						</span>
						<ChevronDown strokeWidth={1} />
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					align="end"
					className="w-40 bg-[#18191A]/90 border-none p-2 text-white/80"
				>
					{languages.map((language) => (
						<DropdownMenuItem
							key={language.code}
							onClick={() => {
								onSelectChange(language);
							}}
							className={`
								p-3 cursor-pointer hover:bg-[#454849]! text-white/80!
								${locale === language.code ? "font-bold" : ""}`}
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
