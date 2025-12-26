import { staggerChildren } from "@/shared/animations/stagger_children"
import { motion } from "framer-motion"
import HeroContentLogo from "./hero_content_logo"
import HeroContentText from "./hero_content_text"
import HeroContentLinks from "./hero_content_links"

const HeroContent = () => {
    return (
        <div className="relative z-10 max-w-[1400px] w-full mx-auto grid grid-cols-1 place-items-center">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerChildren}
                className="text-center"
            >
                <HeroContentLogo />

                <HeroContentText />

                <HeroContentLinks />
            </motion.div>
        </div>
    )
}

export default HeroContent