"use client";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { formatDateRange } from "@/lib/helpers";
import { CalendarDays } from "lucide-react";
import { DateRange } from "react-day-picker";

interface Props {
	selectedDate: DateRange;
	setSelectedDate: (date: DateRange) => void;
}

const DateRangePicker = ({ selectedDate, setSelectedDate }: Props) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<button
					aria-label="Select Date"
					type="button"
					className="flex items-center gap-2 flex-1 px-4 py-3 bg-white/90 rounded-l-2xl border-r border-gray-400 cursor-pointer"
				>
					<CalendarDays className="w-6 h-6 text-[#18191A]" />
					<p className="text-[#707577] font-light">
						{selectedDate.from
							? `${formatDateRange(selectedDate)}`
							: "Select Date"}
					</p>
				</button>
			</PopoverTrigger>

			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="range"
					selected={selectedDate}
					numberOfMonths={2}
					onSelect={(selectedDate) => {
						if (!selectedDate) return;
						setSelectedDate(selectedDate);
					}}
				/>
			</PopoverContent>
		</Popover>
	);
};

export default DateRangePicker;
