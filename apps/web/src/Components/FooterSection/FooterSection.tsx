import { Mail, Phone } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const FooterSection = () => {
	return (
		<footer className="mt-30 bg-[#18191A] box-border min-h-[30dvh]">
			<div className="flex flex-col gap-8 px-36 py-20">
				<p className="text-3xl md:text-4xl lg:text-5xl text-white">
					Contact us for more details about your perfect stay in Merano.
				</p>

				<div className="flex gap-5 border-b border-[#454849] pt-2 pb-8">
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
				</div>

				<div className="py-4 grid grid-cols-[3fr_1fr_3fr_3fr] gap-4">
					<div className="grid gap-2 text-white">
						<span className="flex gap-3 items-center">
							<Image
								src={"/Union.svg"}
								alt="Logo"
								width={40}
								height={40}
								quality={50}
							/>
							<p className="text-xl">Stay Merano</p>
						</span>
						<p>Bernhard Johannes Str. 1, 39012 Merano</p>
						<Image
							src={"/traveler-award.png"}
							alt="Logo"
							width={220}
							height={160}
							quality={75}
							loading="lazy"
							className="object-cover rounded mt-2 grayscale"
						/>
					</div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</footer>
	);
};

export default FooterSection;
