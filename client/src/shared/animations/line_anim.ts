import { Variants } from "framer-motion";

export const lineAnim: Variants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
    }
};