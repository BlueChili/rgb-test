import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowRight, Activity, Users, Globe } from "lucide-react";
import Image from "next/image";
import Header from "./components/Header";

import heroImage from '@/images/hero-bg.png';
import CredibilityLogos1 from "@/svgs/cred-logos-1";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-900">
            <div className="h-screen">
                <Image className="absolute inset-0 object-cover w-full h-auto" src={heroImage} alt="hero section background"/>
                <Header />

                <div className="flex flex-col justify-center relative h-full">
                    <section className="container mx-auto px-4 text-center self-center -mt-24">
                        <h1 className="text-4xl md:text-[42px] font-bold text-white mb-6 max-w-4xl mx-auto leading-[1.04] font-display">
                            TRANSFORM THE WAY YOUR INFLUENCER
                            <br />
                            MANAGEMENT AGENCY OPERATES
                        </h1>
                        <p className="text-gray-200 mb-12 max-w-2xl mx-auto">
                            CreatorNimbus empowers influencer agencies with
                            cutting-edge technology, streamlining operations and
                            enabling secure, seamless collaboration with brands.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                            <Input
                                type="email"
                                placeholder="YOUR@EMAIL.COM"
                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            />
                            <Button className="bg-cyan-400 text-black hover:bg-cyan-300 whitespace-nowrap">
                                GET STARTED NOW
                            </Button>
                        </div>
                    </section>

                    <div className="container mx-auto text py-24">
                        <div className="w-4/5 h-px bg-white/[0.17] mx-auto"></div>
                    </div>

                    <div className="flex gap-[30px] justify-center">
                        <CredibilityLogos1 />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <section className="container mx-auto px-4 py-24">
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="h-0.5 w-6 bg-neon-green"></div>
                        <span className="text-gray-400">
                            Explore key features
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                        A PLATFORM DEDICATED
                        <br />
                        FOR STREAMLINED OPERATIONS
                    </h2>
                    <p className="text-gray-400 max-w-2xl">
                        CreatorNimbus is designed to eliminate the guesswork and
                        inefficiencies of influencer management, giving you more
                        time to focus on growing your business.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-gray-900 border-gray-800 p-6">
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

                    <Card className="bg-gray-900 border-gray-800 p-6">
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
        </div>
    );
}
