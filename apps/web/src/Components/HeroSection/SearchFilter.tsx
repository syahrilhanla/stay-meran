import { Calendar, User, Search } from "lucide-react";

const SearchFilter = () => {
	return (
		<div className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg mt-24">
			{/* Labels grid aligned with inputs */}
			<div className="grid grid-cols-[1fr_1px_1fr_56px] px-1 mb-1">
				<span className="text-white font-light ml-0.5">
					Arrival & Departure
				</span>
				<span className="text-white font-light ml-0.5">Person</span>
			</div>
			<div className="rounded-2xl bg-white/20 p-1.5 backdrop-blur-md overflow-hidden">
				<div className="grid grid-cols-[1fr_1px_1fr_56px] overflow-visible">
					{/* Inputs */}
					<div className="flex items-center gap-2 flex-1 px-4 py-3 bg-white/90 rounded-l-2xl border-r border-gray-400">
						<Calendar className="w-5 h-5 text-gray-500" />
						<input
							type="text"
							placeholder="Select Date"
							className="bg-transparent outline-none text-gray-700 w-full placeholder:text-gray-400"
						/>
					</div>
					{/* Divider */}
					<div className="w-px my-2" />
					<div className="flex items-center gap-2 flex-1 px-4 py-3 bg-white/90">
						<User className="w-5 h-5 text-gray-500" />
						<input
							type="text"
							placeholder="0 Person"
							className="bg-transparent outline-none text-gray-700 w-full placeholder:text-gray-400 border-l border-gray-400"
						/>
					</div>
					{/* Search button */}
					<button
						className="bg-[#18191A] hover:[#18191A]/50 text-white p-3 
            flex items-center justify-center transition-colors rounded-r-2xl cursor-pointer"
					>
						<Search className="h-6 w-6" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default SearchFilter;
