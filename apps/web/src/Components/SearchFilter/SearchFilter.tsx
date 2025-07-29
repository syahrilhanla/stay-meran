"use client";

import { useState } from "react";
import { DateRange } from "react-day-picker";

import { Search } from "lucide-react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

import DateRangePicker from "./DateRangePicker";
import GuestSelector from "./GuestSelector";
import { useTranslations } from "next-intl";

const SearchFilter = () => {
	const [searchForm, setSearchForm] = useState<{
		dateRange: DateRange;
		guests: { adults: number; children: number };
	}>({
		dateRange: { from: undefined, to: undefined },
		guests: { adults: 0, children: 0 },
	});

	const t = useTranslations("Hero");

	return (
		<div className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg mt-24">
			{/* Labels grid aligned with inputs */}
			<div className="grid grid-cols-[1fr_1px_1fr_3.5rem] px-1 mb-1">
				<Label className="text-white font-light ml-0.5">
					{t("arrivalLabel")}
				</Label>
				<Label className="text-white font-light ml-0.5">
					{t("guestLabel")}
				</Label>
			</div>
			<div className="rounded-2xl bg-gray-300/10 p-1.5 overflow-hidden backdrop-blur-xs">
				<div className="grid grid-cols-[1fr_1px_1fr_3.5rem] overflow-visible">
					<DateRangePicker
						selectedDate={searchForm.dateRange}
						setSelectedDate={(date) => {
							setSearchForm((prev) => ({
								...prev,
								dateRange: date,
							}));
						}}
					/>

					{/* Divider */}
					<div className="w-px my-2" />

					<GuestSelector
						guests={searchForm.guests}
						onGuestChange={(type, count) => {
							setSearchForm((prev) => ({
								...prev,
								guests: {
									...prev.guests,
									[type]: count,
								},
							}));
						}}
					/>

					{/* Search button */}
					<Button
						type="button"
						className="h-full w-full bg-[#18191A] hover:[#18191A]/50 text-white p-3 
            flex items-center rounded-l-none justify-center transition-colors rounded-r-2xl cursor-pointer"
					>
						<Search className="h-6 w-6" />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default SearchFilter;
