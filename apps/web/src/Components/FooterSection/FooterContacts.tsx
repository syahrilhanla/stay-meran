import { Mail, Phone } from "lucide-react";

import { Button } from "../ui/button";
import Link from "next/link";

const FooterContacts = () => {
	return (
		<>
			<p className="text-3xl md:text-4xl lg:text-5xl text-white">
				Contact us for more details about your perfect stay in Merano.
			</p>

			<div className="flex gap-5 border-b border-[#454849] pt-2 pb-8">
				<Link
					href={"mailto:info@staymeran.com"}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button
						variant="outline"
						id="contact-email"
						className="!py-6 !px-4 text-white flex gap-3 bg-transparent rounded-full active:scale-125 transition-all duration-300 cursor-pointer"
					>
						<Mail className="!size-6" /> <span>Email:</span>
						<span>info@staymeran.com</span>
					</Button>
				</Link>
				<Link
					href={"tel:+391234567890"}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button
						variant="outline"
						id="contact-phone"
						className="!py-6 !px-4 text-white flex gap-3 bg-transparent rounded-full active:scale-125 transition-all duration-300 cursor-pointer"
					>
						<Phone className="!size-6" /> <span>Phone:</span>
						<span>+39 123 456 7890</span>
					</Button>
				</Link>
			</div>
		</>
	);
};

export default FooterContacts;
