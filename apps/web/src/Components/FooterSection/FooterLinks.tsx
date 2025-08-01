import Image from "next/image";
import Link from "next/link";
import { MessageCircleReply, Instagram } from "lucide-react";

const FooterLinks = () => {
	return (
		<div className="py-4 grid grid-cols-[3fr_1fr_3fr_3fr] gap-4 border-b border-[#454849] pb-9">
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

				<p className="text-sm leading-[200%]">
					Bernhard Johannes Str. 1, 39012 Merano
				</p>
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
			<div className="flex flex-col gap-6 text-white">
				<p className="text-xl">About</p>
				<Link href={"#"} className="text-sm text-[#CCD3D6] tracking-tight">
					About Us
				</Link>
				<Link href={"#"} className="text-sm text-[#CCD3D6] tracking-tight">
					Merano
				</Link>
			</div>
			<div className="flex flex-col gap-6 text-white">
				<p className="text-xl">About</p>
				<Link href={"#"} className="text-sm text-[#CCD3D6] tracking-tight">
					Helles Apartment in historischer Villa
				</Link>
				<Link href={"#"} className="text-sm text-[#CCD3D6] tracking-tight">
					Apartment Franz
				</Link>
				<Link href={"#"} className="text-sm text-[#CCD3D6] tracking-tight">
					Apartment Sissi mit Balkon
				</Link>
			</div>
			<div className="grid gap-6 text-white place-self-end h-full">
				<span className="w-full flex gap-6 justify-end">
					<Link href={"#"}>
						<div className="rounded-full p-0 bg-[#454849] w-10 h-10 flex items-center justify-center">
							<MessageCircleReply className="w-5 h-5" />
						</div>
					</Link>
					<Link href={"#"}>
						<div className="rounded-full p-0 bg-[#454849] w-10 h-10 flex items-center justify-center">
							<Instagram className="w-5 h-5" />
						</div>
					</Link>
				</span>

				<Image
					src={"/footer-creator.svg"}
					alt="Creator Logo"
					width={220}
					height={160}
					quality={75}
					loading="lazy"
					className="object-cover rounded mt-2 grayscale"
				/>
			</div>
		</div>
	);
};

export default FooterLinks;
