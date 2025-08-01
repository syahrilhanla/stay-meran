import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const LEGAL_DOCS = [
	{ code: "terms", label: "Terms of Service" },
	{ code: "privacy", label: "Privacy Policy" },
	{ code: "cookies", label: "Cookie Policy" },
];

const FooterLegalDropdown = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button
					type="button"
					className="flex items-center gap-3 text-white px-4 py-2 cursor-pointer hover:bg-slate-300/20 rounded-md duration-300"
				>
					<span className="font-light">Legal</span>
					<ChevronDown strokeWidth={1} />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				className="w-40 bg-[#18191A]/90 border-none p-2 text-white/80"
			>
				{LEGAL_DOCS.map((doc) => (
					<DropdownMenuItem key={doc.code} className="p-2 hover:bg-gray-700">
						{doc.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default FooterLegalDropdown;
