import { Button } from "@/components/ui/button";
import Logo from "@/svgs/logo";
import PolygonFull from "@/svgs/polygon";

const links = ["FEATURES", "BENEFITS", "CUSTOMERS", "PRICING", "BLOG"];

export default function Header () {
    return <header className="container mx-auto px-4 py-6 self-start grow-0 shrink relative">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 bg-neon-green rounded"></div>
                        <span className="font-bold text-white">
                            <Logo />
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-gray-200 font-display text-xs font-semibold">
                        {links.map((text, index) => {
                            if (index === 1) {
                                return (
                                    <a
                                        href="#"
                                        className="relative block"
                                        key={text}
                                    >
                                        {text}
                                        <span className="h-[3px] w-[19px] bg-white absolute -bottom-4 left-1/2 -translate-x-1/2"></span>
                                    </a>
                                );
                            }
                            return (
                                <a href="#" key={text}>
                                    {text}
                                </a>
                            );
                        })}
                    </div>
                    <Button
                        variant="secondary"
                        className="bg-neon-green text-black hover:bg-neon-green/90 relative px-9 font-display"
                    >
                        <PolygonFull className="absolute inset-0 !w-full !h-auto"/>
                        <span className="relative -translate-y-px font-bold text-xs">
                        EXPLORE AGENCIES
                        </span>
                    </Button>
                </nav>
            </header>
}
