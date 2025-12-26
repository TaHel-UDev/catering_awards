import { lineAnim } from "@/shared/animations/line_anim";
import { motion } from "framer-motion";

const Divider = ({ className = "" }: { className?: string }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={lineAnim}
        className={`h-[1px] bg-white/10 w-full ${className}`}
    />
);

export default Divider