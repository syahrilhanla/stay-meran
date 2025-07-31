import { redirect } from "next/navigation";
import { Inter } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";

import "@/app/globals.css";

import { routing } from "@/i18n/routing";

import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], display: "swap" });

type Params = Promise<{ locale: string }>;

const DEFAULT_LOCALE = "en";

export async function generateMetadata({
	params,
}: {
	params: Params;
}): Promise<Metadata> {
	const { locale } = await params;

	const titles = {
		en: "Stay Meran - Unique Stays in Merano",
		it: "Stay Meran - Soggiorni unici a Merano",
		de: "Stay Meran - Einzigartige Aufenthalte in Meran",
	};
	const descriptions = {
		en: "Three Unique Stays in the Heart of Merano",
		it: "Tre soggiorni unici nel cuore di Merano",
		de: "Drei einzigartige Aufenthalte im Herzen von Meran",
	};

	return {
		title: titles[locale as keyof typeof titles] || titles.en,
		description:
			descriptions[locale as keyof typeof descriptions] || descriptions.en,
	};
}

export default async function LocaleLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Params;
}>) {
	// Ensure that the incoming `locale` is valid

	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		redirect(`/${DEFAULT_LOCALE}`);
	}

	return (
		<html lang={locale}>
			<body className={inter.className}>
				<NextIntlClientProvider>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
}
