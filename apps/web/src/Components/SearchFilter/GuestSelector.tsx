"use client";

import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

import { UserRound, Plus, Minus } from "lucide-react";
import { useTranslations } from "next-intl";

type Guests = { adults: number; children: number };

interface Props {
	guests: Guests;
	onGuestChange?: (type: "adults" | "children", count: number) => void;
}

const GuestSelector = ({ guests, onGuestChange }: Props) => {
	const [error, setError] = useState<string | null>(null);

	const t = useTranslations("Hero");

	const formatGuestCount = (guests: Guests) => {
		if (guests.adults === 0 && guests.children === 0)
			return t("guestPlaceholder");

		return `${guests.adults} Adult${guests.adults > 1 ? "s" : ""} ${
			guests.children > 0
				? `, ${guests.children} Child${guests.children > 1 ? "ren" : ""}`
				: ""
		}`;
	};

	const handleSelectGuest = (
		type: "adults" | "children",
		action: "increment" | "decrement"
	) => {
		if (!onGuestChange) return;

		// Calculate new values
		let newAdults = guests.adults;
		let newChildren = guests.children;

		if (type === "adults") {
			newAdults =
				action === "increment" ? guests.adults + 1 : guests.adults - 1;
		} else {
			newChildren =
				action === "increment" ? guests.children + 1 : guests.children - 1;
		}

		// Error: minimum 1 adult
		if (newAdults < 1) {
			setError(t("minAdultError"));
			return;
		}
		// Error: children cannot be negative
		if (newChildren < 0) {
			setError(t("negativeChildrenError"));
			return;
		}
		// Error: prohibit 1+ children with 0 adults
		if (newAdults === 0 && newChildren > 0) {
			setError(t("childrenNoAdultError"));
			return;
		}

		setError(null);

		// Only call onGuestChange if value actually changes
		if (type === "adults" && newAdults !== guests.adults) {
			onGuestChange("adults", newAdults);
		} else if (type === "children" && newChildren !== guests.children) {
			onGuestChange("children", newChildren);
		}
	};

	return (
		<Popover>
			<PopoverTrigger asChild>
				<button
					aria-label={t("guestPlaceholder")}
					type="button"
					className="flex items-center gap-2 flex-1 px-4 py-3 bg-white/90 cursor-pointer"
				>
					<UserRound className="w-6 h-6 text-[#18191A]" />
					<p className="text-[#707577] font-light">
						{formatGuestCount(guests)}
					</p>
				</button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Card className="w-72 py-3 px-0 border-none shadow-lg">
					<CardHeader>
						<CardTitle className="text-sm">{t("selectGuestTitle")}</CardTitle>
						<CardDescription className="-mt-2 text-sm text-gray-500">
							{t("selectGuestSubtitle")}
							<p>{error && <span className="text-red-500">{error}</span>}</p>
						</CardDescription>
						<CardContent className="p-0">
							<div className="w-full flex items-center justify-between py-2">
								<span className="text-gray-700">Adults</span>
								<div className="flex h-full items-center gap-2">
									<Button
										className="h-8 w-8 rounded-lg bg-[#454849]"
										onClick={() => handleSelectGuest("adults", "decrement")}
									>
										<Minus className="h-4 w-4" />
									</Button>
									<input
										className="w-16 h-8 text-center border border-gray-300 rounded-md"
										value={guests.adults}
										disabled
									/>
									<Button
										className="h-8 w-8 rounded-lg bg-[#454849]"
										onClick={() => handleSelectGuest("adults", "increment")}
									>
										<Plus className="h-4 w-4" />
									</Button>
								</div>
							</div>
							<div className="w-full flex items-center justify-between py-2">
								<span className="text-gray-700">Children</span>
								<div className="flex h-full items-center gap-2">
									<Button
										className="h-8 w-8 rounded-lg bg-[#454849]"
										onClick={() => handleSelectGuest("children", "decrement")}
									>
										<Minus className="h-4 w-4" />
									</Button>
									<input
										className="w-16 h-8 text-center border border-gray-300 rounded-md"
										value={guests.children}
										disabled
									/>
									<Button
										className="h-8 w-8 rounded-lg bg-[#454849]"
										onClick={() => handleSelectGuest("children", "increment")}
									>
										<Plus className="h-4 w-4" />
									</Button>
								</div>
							</div>
						</CardContent>
					</CardHeader>
				</Card>
			</PopoverContent>
		</Popover>
	);
};

export default GuestSelector;
