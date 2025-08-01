"use client";

import { motion } from "motion/react";

import LocaleSelector from "../Navbar/LocaleSelector";
import FooterContacts from "./FooterContacts";
import FooterLegalDropdown from "./FooterLegalDropdown";
import FooterLinks from "./FooterLinks";

const FooterSection = () => {
	return (
		<motion.footer
			className="mt-8 lg:mt-24 xl:mt-30 bg-[#18191A] box-border min-h-[30dvh] duration-300 transition-all"
			initial={{ opacity: 0, scaleY: 0, y: -100 }}
			whileInView={{ opacity: 1, scaleY: 1, y: 0 }}
			transition={{ duration: 0.2, ease: "anticipate" }}
			viewport={{ once: true, amount: 0.1 }}
		>
			<div className="flex flex-col gap-4 lg:gap-8 px-4 md:px-24 lg:px-30 xl:px-36 py-4 lg:py-10 xl:py-20">
				<FooterContacts />
				<FooterLinks />

				<div
					className="mt-0 w-full
            grid place-content-between gap-3 lg:gap-0
            lg:flex justify-between items-center text-[#CCD3D6] text-sm"
				>
					<p className="order-2">Copyright © {new Date().getFullYear()}</p>
					<span className="flex items-center lg:gap-2 gap-4 order-1 -ml-4">
						<LocaleSelector withoutIcon />
						<FooterLegalDropdown />
					</span>
				</div>
			</div>
		</motion.footer>
	);
};

export default FooterSection;
