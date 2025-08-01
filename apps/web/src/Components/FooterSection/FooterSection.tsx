import LocaleSelector from "../Navbar/LocaleSelector";
import FooterContacts from "./FooterContacts";
import FooterLegalDropdown from "./FooterLegalDropdown";
import FooterLinks from "./FooterLinks";

const FooterSection = () => {
	return (
		<footer className="mt-30 bg-[#18191A] box-border min-h-[30dvh]">
			<div className="flex flex-col gap-8 px-36 py-20">
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
