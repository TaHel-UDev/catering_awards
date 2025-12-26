
import { motion } from "framer-motion"
import { fadeUp } from "@/shared/animations/fade_up"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const HeroContentLinks = () => {
    return (
        <>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <Button asChild size="lg">
                    <Link href="/form">Подать заявку</Link>
                </Button>

                <Button asChild variant="ghost">
                    <Link href="#about" className="border-b border-gold-400/30 hover:border-gold-400 transition-colors">
                        Узнать больше
                    </Link>
                </Button>
            </motion.div>
        </>
    )
}

export default HeroContentLinks
