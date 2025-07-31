import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { locales } from "../../config";

import "@/app/globals.css";

import { routing } from "@/i18n/routing";

import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], display: "swap" });
<link rel="icon" href="/favicon.ico" sizes="any" />;

export async function generateMetadata({
	params,
}: {
	// referring to locale in next-intl config
	params: { locale: (typeof locales)[number] };
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
		title: titles[locale] || titles.en,
		description: descriptions[locale] || descriptions.en,
	};
}

export default async function LocaleLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	// Ensure that the incoming `locale` is valid
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang={locale}>
			<body className={inter.className}>
				<NextIntlClientProvider>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
}
