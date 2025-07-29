import { Search, CalendarDays, UserRound } from "lucide-react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const SearchFilter = () => {
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
					{/* Inputs */}
					<button
						aria-label="Select Date"
						type="button"
						className="flex items-center gap-2 flex-1 px-4 py-3 bg-white/90 rounded-l-2xl border-r border-gray-400 cursor-pointer"
					>
						<CalendarDays className="w-6 h-6 text-[#18191A]" />
						<p className="text-[#707577] font-light">Select Date</p>
					</button>
					{/* Divider */}
					<div className="w-px my-2" />
					<button
						aria-label="Select Person"
						type="button"
						className="flex items-center gap-2 flex-1 px-4 py-3 bg-white/90 cursor-pointer"
					>
						<UserRound className="w-6 h-6 text-[#18191A]" />
						<p className="text-[#707577] font-light">0 Person</p>
					</button>

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
