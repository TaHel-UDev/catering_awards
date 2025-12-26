import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { fadeUp } from "@/shared/animations/fade_up";

const HeroContentLogo = () => {
    return (
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
            <span className="h-[1px] w-8 bg-gold-400/50"></span>
            <Link href="/">
                <Image
                    src="/static/logo.svg"
                    alt="Logo"
                    width={300}
                    height={300}
                    className="w-[80px] h-[80px]"
                />
            </Link>
            <span className="h-[1px] w-8 bg-gold-400/50"></span>
        </motion.div>
    )
}

export default HeroContentLogo