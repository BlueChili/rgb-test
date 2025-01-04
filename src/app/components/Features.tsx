import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight, Activity, Users, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

import cardImage1 from '@/images/feature-1.png';
import cardImage2 from '@/images/feature-2.png';
import cardImage3 from '@/images/feature-3.png';
import cardImage4 from '@/images/feature-4.png';

const featureCards = [
    {
        heading: "Verified Influencer Data",
        text: "Invite influencers to verify their profiles via API integration. Gain accurate, real-time data!",
        width: 2,
        image: cardImage1,
    },
    {
        heading: "Advanced Brand Inquiries",
        text: "Streamline collaboration with brands using our inquiry system.",
        width: 1,
        image: cardImage2,
    },
    {
        heading: "Management Dashboard",
        text: "Monitor your entire roster and agency activity from one place.",
        width: 1,
        image: cardImage3,
    },
    {
        heading: "Public Agency Profile",
        text: "Share a professional, automatically updated page with brands.",
        width: 2,
        image: cardImage4,
    },
];
export default function Features() {
    return (
        <div className="bg-[#e2e8ef]">
            <section className="container mx-auto px-4 py-24">
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="bg-black h-[7px] w-[22px] rounded-sm"></span>
                        <span className="text-foreground font-bold text-sm">
                            Explore key features
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <h2 className="text-[32px] leading-[1.04] font-bold font-display">
                            A PLATFORM DEDICATED
                            <br />
                            FOR STREAMLINED OPERATIONS
                        </h2>
                        <p className="text-foreground text-right max-w-2xl text-sm leading-tight font-bold">
                            CreatorNimbus is designed to eliminate the guesswork
                            and inefficiencies of influencer
                            <br />
                            management,{" "}
                            <span className="text-secondary-foreground">
                                giving you more time to focus on growing your
                                business.
                            </span>
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6 pb-28">
                    {featureCards.map((card) => (
                        <Card
                            className={cn(
                                "bg-gray-900 flex border-gray-800 p-6 items-end h-[460px] relative",
                                card.width === 2 && "col-span-2"
                            )}
                            key={card.heading}
                        >
                            <Image src={card.image} alt="background image" className="absolute w-full h-full object-cover rounded-xl inset-0"/>
                            <div className="relative">
                                <h3 className="text-[22px] font-bold text-white mb-1">
                                    {card.heading}
                                </h3>
                                <p className="text-gray-400 font-semibold leading-tight max-w-[357px]">
                                    {card.text}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="h-px w-full bg-[#b4c1d0]"></div>
            </section>

            {/* Features Grid */}
        </div>
    );
}
