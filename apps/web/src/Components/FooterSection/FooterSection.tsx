import LocaleSelector from "../Navbar/LocaleSelector";
import FooterContacts from "./FooterContacts";
import FooterLegalDropdown from "./FooterLegalDropdown";
import FooterLinks from "./FooterLinks";

const FooterSection = () => {
	return (
		<footer className="mt-8 lg:mt-24 xl:mt-30 bg-[#18191A] box-border min-h-[30dvh] duration-300 transition-all">
			<div className="flex flex-col gap-8 px-4 md:px-24 lg:px-30 xl:px-36 py-4 lg:py-10 xl:py-20">
				<FooterContacts />
				<FooterLinks />

				<div className="mt-0 flex justify-between items-center text-[#CCD3D6] text-sm">
					<p>Copyright © {new Date().getFullYear()}</p>
					<span className="flex items-center gap-2">
						<LocaleSelector withoutIcon />
						<FooterLegalDropdown />
					</span>
				</div>
			</div>
		</footer>
	);
};

export default FooterSection;
