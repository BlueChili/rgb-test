import Image from "next/image";
import Header from "./components/Header";

import heroImage from '@/images/hero-bg.png';
import Hero from "./components/Hero";
import Features from "./components/Features";

export default function Home() {
    return (
        <div className="min-h-screen">

            <div className="h-screen bg-gradient-to-br from-purple-600 to-purple-900">
                <Image className="absolute inset-0 object-cover w-full h-auto" src={heroImage} alt="hero section background"/>
                <Header />
                <Hero />
            </div>

            <Features />

        </div>
    );
}
