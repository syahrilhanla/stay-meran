"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircleReply, Instagram } from "lucide-react";

const FooterLinks = () => {
	return (
		<div className="py-4 grid lg:grid-cols-[3fr_1fr_3fr_3fr] gap-4 border-b border-[#454849] pb-9">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
				viewport={{ once: true, amount: 0.1 }}
				className="order-4 lg:order-1 grid gap-2 text-white"
			>
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
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
				viewport={{ once: true, amount: 0.1 }}
				className="order-1 lg:order-2 flex flex-col lg:gap-6 gap-4 text-white"
			>
				<p className="text-xl">About</p>
				<Link href={"#"} className="text-sm text-[#CCD3D6] tracking-tight">
					About Us
				</Link>
				<Link href={"#"} className="text-sm text-[#CCD3D6] tracking-tight">
					Merano
				</Link>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
				viewport={{ once: true, amount: 0.1 }}
				className="order-2 lg:order-3 flex flex-col lg:gap-6 gap-4 text-white"
			>
				<p className="text-xl lg:pt-0 pt-4">Our Stays</p>
				<Link href={"#"} className="text-sm text-[#CCD3D6] tracking-tight">
					Helles Apartment in historischer Villa
				</Link>
				<Link href={"#"} className="text-sm text-[#CCD3D6] tracking-tight">
					Apartment Franz
				</Link>
				<Link href={"#"} className="text-sm text-[#CCD3D6] tracking-tight">
					Apartment Sissi mit Balkon
				</Link>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
				viewport={{ once: true, amount: 0.1 }}
				className="order-3 lg:order-4 grid gap-6 text-white lg:place-self-end h-full"
			>
				<div className="space-y-4 lg:pt-0 pt-4">
					<p className="text-xl">Our Social Media</p>
					<span className="w-full flex gap-6 lg:justify-end">
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
				</div>

				<motion.span
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut", delay: 0.9 }}
					viewport={{ once: true, amount: 0.1 }}
					className="border-t lg:border-t-none border-[#454849] pt-4 lg:pt-0"
				>
					<Image
						src={"/footer-creator.svg"}
						alt="Creator Logo"
						width={220}
						height={160}
						quality={75}
						loading="lazy"
						className="object-cover rounded mt-2 grayscale"
					/>
				</motion.span>
			</motion.div>
		</div>
	);
};

export default FooterLinks;
