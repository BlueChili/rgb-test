import { Card } from "@/components/ui/card"
import Image from "next/image";
import { ArrowRight, Activity, Users, Globe } from "lucide-react";

export default function Features () {
    return (
            <section className="container mx-auto px-4 py-24">
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="bg-black h-[7px] w-[22px] rounded-sm"></span>
                        <span className="text-foreground font-bold text-sm">
                            Explore key features
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                    <h2 className="text-[32px] leading-[1.04] font-bold mb-4 font-display">
                        A PLATFORM DEDICATED
                        <br />
                        FOR STREAMLINED OPERATIONS
                    </h2>
                    <p className="text-foreground text-right max-w-2xl text-sm leading-tight font-bold">
                        CreatorNimbus is designed to eliminate the guesswork and
                        inefficiencies of influencer<br />management, <span className="text-secondary-foreground">giving you more
                        time to focus on growing your business.</span>
                    </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    <Card className="bg-gray-900 border-gray-800 p-6 col-span-2">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Verified Influencer Data
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Invite influencers to verify their profiles via API
                            integration. Gain accurate, real-time data!
                        </p>
                        <div className="aspect-video relative bg-black rounded-lg overflow-hidden">
                            <Image
                                src="/placeholder.svg"
                                alt="Network visualization"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </Card>

                    <Card className="bg-gray-900 border-gray-800 p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Advanced Brand Inquiries
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Streamline collaboration with brands using our
                            inquiry system.
                        </p>
                        <div className="aspect-video relative bg-black rounded-lg overflow-hidden">
                            <Image
                                src="/placeholder.svg"
                                alt="Brand inquiries interface"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </Card>

                    <Card className="bg-gray-900 border-gray-800 p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Management Dashboard
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Monitor your entire roster and agency activity from
                            one place.
                        </p>
                        <div className="aspect-video relative bg-black rounded-lg overflow-hidden">
                            <Image
                                src="/placeholder.svg"
                                alt="Management dashboard"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </Card>

                    <Card className="bg-gray-900 border-gray-800 p-6 col-span-2">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Public Agency Profile
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Share a professional, automatically updated page
                            with brands.
                        </p>
                        <div className="aspect-video relative bg-black rounded-lg overflow-hidden">
                            <Image
                                src="/placeholder.svg"
                                alt="Agency profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </Card>
                </div>
            </section>

            {/* Features Grid */}
            <section className="container mx-auto px-4 py-24 grid md:grid-cols-4 gap-8">
                {[
                    {
                        icon: Activity,
                        title: "Manage your activity",
                        description:
                            "CreatorNimbus is designed to eliminate the guesswork and inefficiencies of influencer management, giving you more time to focus on growing your business.",
                    },
                    {
                        icon: ArrowRight,
                        title: "Import/Export data",
                        description:
                            "CreatorNimbus is designed to eliminate the guesswork and inefficiencies of influencer management, giving you more time to focus on growing your business.",
                    },
                    {
                        icon: Users,
                        title: "Inquiries",
                        description:
                            "CreatorNimbus is designed to eliminate the guesswork and inefficiencies of influencer management, giving you more time to focus on growing your business.",
                    },
                    {
                        icon: Globe,
                        title: "Agency dashboard",
                        description:
                            "CreatorNimbus is designed to eliminate the guesswork and inefficiencies of influencer management, giving you more time to focus on growing your business.",
                    },
                ].map((feature, index) => (
                    <div key={index} className="text-white">
                        <feature.icon className="w-6 h-6 mb-4 text-neon-green" />
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-400 text-sm">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </section>
    )
}
