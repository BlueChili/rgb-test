import { Card } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

import cardImage1 from "@/images/feature-1.png";
import cardImage2 from "@/images/feature-2.png";
import cardImage3 from "@/images/feature-3.png";
import cardImage4 from "@/images/feature-4.png";

import ToggleOn from "@/svgs/ToggleOn";
import ImportExport from "@/svgs/ImportExport";
import Inbox from "@/svgs/Inbox";
import Dashboard from "@/svgs/Dashboard";
import BarGraph from "@/svgs/Bargraph";
import UserIcon from "@/svgs/User";
import APIIcon from "@/svgs/API";

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

const featureList = [
                    {
                        icon: ToggleOn,
                        title: "Manage your activity",
                        text:
                            "CreatorNimbus is designed to eliminate the guesswork and inefficiencies of influencer management,",
                        secondaryText: "giving you more time to focus on growing your business.",
                    },
                    {
                        icon: ImportExport,
                        title: "Import/Export data",
                        text:
                            "CreatorNimbus is designed to eliminate the guesswork and inefficiencies of influencer management,",
                        secondaryText: "giving you more time to focus on growing your business.",
                    },
                    {
                        icon: Inbox,
                        title: "Inquiries",
                        text:
                            "CreatorNimbus is designed to eliminate the guesswork and inefficiencies of influencer management,",
                        secondaryText: "giving you more time to focus on growing your business.",
                    },
                    {
                        icon: Dashboard,
                        title: "Agency dashboard",
                        text:
                            "CreatorNimbus is designed to eliminate the guesswork and inefficiencies of influencer management,",
                        secondaryText: "giving you more time to focus on growing your business.",
                    },
                    {
                        icon: Dashboard,
                        title: "Agency Dashboard",
                        text:
                            "CreatorNimbus is designed to eliminate the guesswork and inefficiencies of influencer management,",
                        secondaryText: "giving you more time to focus on growing your business.",
                    },
                    {
                        icon: BarGraph,
                        title: "Advanced profiles",
                        text:
                            "CreatorNimbus is designed to eliminate the guesswork and inefficiencies of influencer management,",
                        secondaryText: "giving you more time to focus on growing your business.",
                    },
                    {
                        icon: UserIcon,
                        title: "Influencer profiles",
                        text:
                            "CreatorNimbus is designed to eliminate the guesswork and inefficiencies of influencer management,",
                        secondaryText: "giving you more time to focus on growing your business.",
                    },
                    {
                        icon: APIIcon,
                        title: "Data automatization",
                        text:
                            "CreatorNimbus is designed to eliminate the guesswork and inefficiencies of influencer management,",
                        secondaryText: "giving you more time to focus on growing your business.",
                    },
                    {
                        icon: ToggleOn,
                        title: "Manage your activity",
                        text:
                            "CreatorNimbus is designed to eliminate the guesswork and inefficiencies of influencer management,",
                        secondaryText: "giving you more time to focus on growing your business.",
                    },
                    {
                        icon: ImportExport,
                        title: "Import/Export data",
                        text:
                            "CreatorNimbus is designed to eliminate the guesswork and inefficiencies of influencer management,",
                        secondaryText: "giving you more time to focus on growing your business.",
                    },
                    {
                        icon: Inbox,
                        title: "Inquiries",
                        text:
                            "CreatorNimbus is designed to eliminate the guesswork and inefficiencies of influencer management,",
                        secondaryText: "giving you more time to focus on growing your business.",
                    },
                    {
                        icon: Dashboard,
                        title: "Agency dashboard",
                        text:
                            "CreatorNimbus is designed to eliminate the guesswork and inefficiencies of influencer management,",
                        secondaryText: "giving you more time to focus on growing your business.",
                    },
]
export default function Features() {
    return (
        <div className="bg-[#e2e8ef]">
            <section className="container mx-auto px-4 pt-24">
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
                            <Image
                                src={card.image}
                                alt="background image"
                                className="absolute w-full h-full object-cover rounded-xl inset-0"
                            />
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

            </section>

                <div className="container  mx-auto pb-14">
                    <div className="h-px w-full bg-[#b4c1d0]"></div>
                </div>

            {/* Features Grid */}
            <section className="container mx-auto px-4 pb-44 grid md:grid-cols-4 gap-8 gap-y-16">
                {featureList.map((feature, index) => (
                    <div key={index} className="text-white">
                        <div className="flex gap-4 items-center mb-2">
                        <feature.icon />
                        <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
                        </div>
                        <p className="text-[#374351] text-sm font-bold leading-tight">
                            {feature.text}
                            <span className="text-[#728294]">{feature.secondaryText}</span>
                        </p>
                    </div>
                ))}
            </section>
        </div>
    );
}
