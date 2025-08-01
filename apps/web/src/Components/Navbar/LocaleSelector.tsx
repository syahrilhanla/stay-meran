"use client";

import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { motion } from "motion/react";

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

interface Props {
	withoutIcon?: boolean;
}

const LocaleSelector = ({ withoutIcon }: Props) => {
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
		<motion.span
			initial={{ scaleX: 0, opacity: 0 }}
			animate={{ scaleX: 1, scaleY: 1, opacity: 1 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button
						type="button"
						className="flex items-center gap-3 text-white px-4 py-2 cursor-pointer hover:bg-slate-300/20 rounded-md duration-300"
					>
						{!withoutIcon && <Globe className="w-5 h-5" />}
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
		</motion.span>
	);
};

export default LocaleSelector;
