"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Label } from "../ui/label";
import DateRangePicker from "./DateRangePicker";
import GuestSelector from "./GuestSelector";

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

			<div>
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
		</div>
	);
};

export default MobileSearchFilter;
