import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const AccommodationCard = () => {
	return (
		<Card className="w-full py-3 px-0 border-none shadow-none rounded-2xl">
			<CardHeader className="px-0">
				<CardTitle className="text-sm px-0 relative">
					<Image
						src="/accommodation-1.png"
						alt="Accommodation Image"
						width={500}
						height={300}
						className="w-full h-100 rounded-2xl object-center object-cover"
					/>
					<Button className="absolute bottom-3 left-3 bg-white/80 text-[#18191A] backdrop-blur-xs pointer-events-none">
						Start from £80 / night
					</Button>
				</CardTitle>
				<CardContent className="mt-4 grid gap-4 p-0">
					<h4 className="text-[#18191A] font-semibold lg:text-xl text-lg">
						Helles Apartment in historischer Villa
					</h4>
					<p className="text-[#454849] text-xs lg:text-sm font-light">
						A bright, stylish retreat in a historic villa, blending classic
						charm with modern comfort.
					</p>

					<Button
						className="w-42 h-12 p-4 text-sm cursor-pointer rounded-full border border-[#18191A] bg-white/80 text-[#18191A]"
						variant="outline"
					>
						Discover Now <MoveRight className="ml-1 h-6 w-6" />
					</Button>
				</CardContent>
			</CardHeader>
		</Card>
	);
};

export default AccommodationCard;
