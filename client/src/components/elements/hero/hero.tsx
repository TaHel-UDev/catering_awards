import HeroLines from "./hero_lines";
import HeroGradient from "./hero_gradient";
import { useState } from "react";
import AboutModal from "@/components/about-modal/about_modal";
import HeroContentLogo from "./hero_content/hero_content_logo";
import HeroContentText from "./hero_content/hero_content_text";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/shared/animations/fade_up";
import { staggerChildren } from "@/shared/animations/stagger_children";

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <AboutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <div className="relative min-h-screen flex flex-col justify-center items-center bg-dark-950 overflow-hidden px-6">
                <HeroGradient />

                <HeroLines />

                <div className="relative z-10 max-w-[1400px] w-full mx-auto grid grid-cols-1 place-items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerChildren}
                        className="text-center"
                    >
                        <HeroContentLogo />

                        <HeroContentText />

                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <Button asChild size="lg">
                                <Link href="/form">Подать заявку</Link>
                            </Button>

                            <Button asChild variant="ghost" onClick={() => setIsModalOpen(true)}>
                                <Link href="#about" className="border-b border-gold-400/30 hover:border-gold-400 transition-colors">
                                    Узнать больше
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* <HeroBottom /> */}
            </div>
        </>
    );
};

export default Hero;