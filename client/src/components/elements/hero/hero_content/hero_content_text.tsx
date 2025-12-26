import { motion } from "framer-motion"
import { fadeUp } from "@/shared/animations/fade_up"
import { HERO_TEXT } from "@/shared/content/content"

const HeroContentText = () => {
    return (
        <>
            <motion.h1 variants={fadeUp} className="font-serif text-[12vw] leading-[1.2] md:leading-[0.8] md:text-[6rem] lg:text-[9rem] text-white whitespace-nowrap mb-6">
                <span className="block">
                    ПРЕМИЯ
                </span>

                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-700 italic font-light transform -translate-y-4">
                    КЕЙТЕРИНГ ГОДА
                </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="max-w-2xl mx-auto text-neutral-400 font-light text-lg leading-relaxed mb-12">
                {HERO_TEXT.description}
            </motion.p>
        </>
    )
}

export default HeroContentText