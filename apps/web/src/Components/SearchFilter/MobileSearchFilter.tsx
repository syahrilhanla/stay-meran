"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Label } from "../ui/label";
import DateRangePicker from "./DateRangePicker";
import GuestSelector from "./GuestSelector";
import { Search } from "lucide-react";

const MobileSearchFilter = () => {
	const [searchForm, setSearchForm] = useState<{
		dateRange: DateRange;
		guests: { adults: number; children: number };
	}>({
		dateRange: { from: undefined, to: undefined },
		guests: { adults: 0, children: 0 },
	});

	const t = useTranslations("Hero");

	return (
		<div className="mt-24 grid gap-5 bg-white rounded-2xl shadow-lg p-4">
			<div className="space-y-2">
				<Label className="text-[#18191A] font-medium ml-0.5">
					{t("arrivalLabel")}
				</Label>
				<DateRangePicker
					selectedDate={searchForm.dateRange}
					setSelectedDate={(date) => {
						setSearchForm((prev) => ({
							...prev,
							dateRange: date,
						}));
					}}
				/>
			</div>

			<div className="space-y-2">
				<Label className="text-[#18191A] font-medium ml-0.5">
					{t("guestLabel")}
				</Label>
				<GuestSelector
					guests={searchForm.guests}
					onGuestChange={(type, count) => {
						setSearchForm((prev) => ({
							...prev,
							guests: { ...prev.guests, [type]: count },
						}));
					}}
				/>
			</div>

			<button
				type="button"
				className="w-full bg-[#18191A] hover:bg-[#18191A]/80 text-white text-sm
					p-3 font-extralight rounded-2xl cursor-pointer flex items-center justify-center gap-2"
			>
				Find It
				<Search className="h-6 w-6 text-3xl" />
			</button>
		</div>
	);
};

export default MobileSearchFilter;
