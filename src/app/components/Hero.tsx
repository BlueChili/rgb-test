import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import CredibilityLogos1 from "@/svgs/cred-logos-1";
import CredibilityLogos2 from "@/svgs/cred-logos-2";
import PolygonSliceLeft from "@/svgs/PolygonSliceLeft";
import PolygonSliceRight from "@/svgs/PolygonSliceRight";

export default function Hero() {
    return (
        <div className="flex flex-col justify-center relative h-full">
            <section className="container mx-auto px-4 text-center self-center -mt-28 pb-[56px]">
                <h1 className="text-4xl md:text-[42px] font-bold text-white mb-6 max-w-4xl mx-auto leading-[1.04] font-display">
                    TRANSFORM THE WAY YOUR INFLUENCER
                    <br />
                    MANAGEMENT AGENCY OPERATES
                </h1>
                <p className="text-gray-200 mb-12 max-w-2xl mx-auto font-bold leading-tight text-sm">
                    CreatorNimbus empowers influencer agencies with cutting-edge
                    technology, streamlining
                    <br />
                    operations and enabling secure, seamless collaboration with
                    brands.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                    <div className="relative">
                        <PolygonSliceLeft className="absolute" />
                        <Input
                            type="email"
                            placeholder="YOUR@EMAIL.COM"
                            className="bg-transparent border-none outline-none text-black placeholder:text-black font-display pr-12 relative pl-10 w-[330px] h-9 font-bold text-xs focus-visible:ring-transparent focus-visible:ring-offset-0"
                        />
                    </div>
                    <div className="relative h-9 -translate-x-[33px]">
                        <PolygonSliceRight className="absolute w-auto h-9 inset-0" />
                        <Button className="bg-cyan-400 text-black bg-transparent whitespace-nowrap h-9 font-display font-bold relative pl-9 text-xs pr-7 hover:bg-transparent">
                            GET STARTED NOW
                        </Button>
                    </div>
                </div>
            </section>

            <div className="container mx-auto text pb-[56px]">
                <div className="w-4/5 h-px bg-white/[0.17] mx-auto"></div>
            </div>

            <div className="container mx-auto flex gap-[30px] justify-center items-center pb-[56px]">
                <CredibilityLogos1 />
                <CredibilityLogos2 />
            </div>

            <div className="container mx-auto flex items-center gap-2.5 justify-center">
                <div className="inline-block bg-accent h-2 w-2 -skew-x-12"></div>
                <span className="text-background font-display italic text-[11px]">
                    TRUSTED BY INDUSTRY-LEADING INFLUENCER MARKETING AGENCIES
                </span>
            </div>
        </div>
    );
}
