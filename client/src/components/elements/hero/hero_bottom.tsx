import { motion } from "framer-motion";

const HeroBottom = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
            className="absolute bottom-8 left-0 w-full px-8 flex justify-between items-end text-[10px] text-neutral-600 uppercase tracking-widest font-mono"
        >
            <span>Est. 2009</span>
            <div className="flex flex-col items-center gap-2 animate-pulse">
                <span>Scroll</span>
                <div className="h-12 w-[1px] bg-neutral-800 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gold-500 animate-pulse"></div>
                </div>
            </div>
            <span>Moscow</span>
        </motion.div>
    );
};

export default HeroBottom;