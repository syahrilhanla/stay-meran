import { Mail, Phone } from "lucide-react";
import { Button } from "../ui/button";

const FooterSection = () => {
	return (
		<footer className="mt-30 bg-[#18191A] box-border min-h-[30dvh]">
			<div className="flex flex-col gap-8 px-36 py-20">
				<p className="text-3xl md:text-4xl lg:text-5xl text-white">
					Contact us for more details about your perfect stay in Merano.
				</p>

				<span className="flex gap-5">
					<Button
						variant="outline"
						id="contact-email"
						className="!py-6 !px-4 text-white flex gap-1 bg-transparent rounded-full active:scale-125 transition-all duration-300 cursor-pointer"
					>
						<Mail className="!size-6" /> <span>Email:</span>{" "}
						<span>info@staymeran.com</span>
					</Button>
					<Button
						variant="outline"
						id="contact-phone"
						className="!py-6 !px-4 text-white flex gap-1 bg-transparent rounded-full active:scale-125 transition-all duration-300 cursor-pointer"
					>
						<Phone className="!size-6" /> <span>Phone:</span>{" "}
						<span>+39 123 456 7890</span>
					</Button>
				</span>
			</div>
		</footer>
	);
};

export default FooterSection;
