import { motion } from "framer-motion";
import { DecorativeDiamond } from "../decorative_diamond";

const SectionHeader = ({
    title,
    subtitle,
    align = 'left',
    large = false
}: {
    title: string,
    subtitle?: string,
    align?: 'left' | 'center',
    large?: boolean
}) => (
    <div className={`mb-6 lg:mb-20 ${align === 'center' ? 'text-center' : ''}`}>
        {align === 'center' && (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-4 mb-6 opacity-50"
            >
                <div className="h-[1px] w-12 bg-gold-400"></div>
                <DecorativeDiamond />
                <div className="h-[1px] w-12 bg-gold-400"></div>
            </motion.div>
        )}
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`font-serif text-white mb-6 leading-[1.1] ${large ? 'text-5xl md:text-7xl' : 'text-4xl md:text-5xl'}`}
        >
            {title}
        </motion.h2>
        {subtitle && (
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`text-neutral-400 font-light text-lg md:text-xl max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}
            >
                {subtitle}
            </motion.p>
        )}
    </div>
);

export default SectionHeader;
