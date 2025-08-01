"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { Button } from "../ui/button";

const FooterContacts = () => {
	return (
		<>
			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
				viewport={{ once: true, amount: 0.1 }}
				className="text-2xl md:text-4xl lg:text-5xl text-white"
			>
				Contact us for more details about your perfect stay in Merano.
			</motion.p>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
				viewport={{ once: true, amount: 0.3 }}
				className="flex flex-col lg:flex-row gap-5 border-b border-[#454849] lg:pt-2 pb-8"
			>
				<Link
					href={"mailto:info@staymeran.com"}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button
						variant="outline"
						id="contact-email"
						className="w-full lg:w-fit !py-6 !px-4 text-white flex justify-start gap-3 bg-transparent rounded-full active:scale-125 transition-all duration-300 cursor-pointer"
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
						className="w-full lg:w-fit !py-6 !px-4 text-white flex justify-start gap-3 bg-transparent rounded-full active:scale-125 transition-all duration-300 cursor-pointer"
					>
						<Phone className="!size-6" /> <span>Phone:</span>
						<span>+39 123 456 7890</span>
					</Button>
				</Link>
			</motion.div>
		</>
	);
};

export default FooterContacts;
