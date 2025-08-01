import FooterContacts from "./FooterContacts";
import FooterLinks from "./FooterLinks";

const FooterSection = () => {
	return (
		<footer className="mt-30 bg-[#18191A] box-border min-h-[30dvh]">
			<div className="flex flex-col gap-8 px-36 py-20">
				<FooterContacts />
				<FooterLinks />
			</div>
		</footer>
	);
};

export default FooterSection;
