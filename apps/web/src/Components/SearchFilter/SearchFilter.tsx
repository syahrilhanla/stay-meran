"use client";

import { useState } from "react";
import { DateRange } from "react-day-picker";

import { Search, UserRound, Plus, Minus } from "lucide-react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

import DateRangePicker from "./DateRangePicker";

const SearchFilter = () => {
	const [searchForm, setSearchForm] = useState<{
		dateRange: DateRange;
		guests: { adults: number; children: number };
	}>({
		dateRange: { from: undefined, to: undefined },
		guests: { adults: 0, children: 0 },
	});

	return (
		<div className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg mt-24">
			{/* Labels grid aligned with inputs */}
			<div className="grid grid-cols-[1fr_1px_1fr_3.5rem] px-1 mb-1">
				<Label className="text-white font-light ml-0.5">
					Arrival & Departure
				</Label>
				<Label className="text-white font-light ml-0.5">Person</Label>
			</div>
			<div className="rounded-2xl bg-gray-300/10 p-1.5 overflow-hidden backdrop-blur-xs">
				<div className="grid grid-cols-[1fr_1px_1fr_3.5rem] overflow-visible">
					{/* Date Picker */}
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

					{/* Guest Selector */}
					<Popover>
						<PopoverTrigger asChild>
							<button
								aria-label="Select Person"
								type="button"
								className="flex items-center gap-2 flex-1 px-4 py-3 bg-white/90 cursor-pointer"
							>
								<UserRound className="w-6 h-6 text-[#18191A]" />
								<p className="text-[#707577] font-light">0 Person</p>
							</button>
						</PopoverTrigger>
						<PopoverContent className="w-auto p-0">
							<Card className="w-72 py-3 px-0 border-none shadow-lg">
								<CardHeader>
									<CardTitle className="text-sm">Select Guests</CardTitle>
									<CardDescription className="-mt-2 text-sm text-gray-500">
										Enter the number of guests below
									</CardDescription>
									<CardContent className="p-0">
										<div className="w-full flex items-center justify-between py-2">
											<span className="text-gray-700">Adults</span>
											<div className="flex h-full items-center gap-2">
												<Button className="h-8 w-8 rounded-lg bg-[#454849]">
													<Minus className="h-4 w-4" />
												</Button>
												<input
													className="w-16 h-8 text-center border border-gray-300 rounded-md"
													value={searchForm.guests.adults}
													disabled
												/>
												<Button className="h-8 w-8 rounded-lg bg-[#454849]">
													<Plus className="h-4 w-4" />
												</Button>
											</div>
										</div>
									</CardContent>
								</CardHeader>
							</Card>
						</PopoverContent>
					</Popover>

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
