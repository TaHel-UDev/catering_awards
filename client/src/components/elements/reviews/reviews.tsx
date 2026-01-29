import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Section from "@/components/ui/section";
import SectionHeader from "../section_header/section_header";
import { REVIEWS } from "@/shared/content/content";

// Wait, I should check if @/lib/utils exists. In package.json clsx is there.

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
    })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

const Reviews = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    // We calculate the index based on the page state to allowing infinite looping
    const imageIndex = Math.abs(page % REVIEWS.length);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <Section className="bg-[#080808] relative" id="reviews">

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionHeader
                    title="Отзывы участников"
                    subtitle="Мнения профессионалов индустрии о премии"
                    align="center"
                />

                <div className="mt-16 relative grid grid-cols-1 place-items-center min-h-[400px]">
                    {/* Navigation Buttons - Desktop */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:block">
                        <button
                            className="p-3 rounded-full border border-white/10 bg-black/20 hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300 backdrop-blur-sm group"
                            onClick={() => paginate(-1)}
                        >
                            <ChevronLeft className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                        </button>
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:block">
                        <button
                            className="p-3 rounded-full border border-white/10 bg-black/20 hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300 backdrop-blur-sm group"
                            onClick={() => paginate(1)}
                        >
                            <ChevronRight className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                        </button>
                    </div>

                    {/* Slider */}
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={page}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="w-full max-w-3xl col-start-1 row-start-1"
                        >
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 text-center relative h-full">
                                {/* <Quote className="w-12 h-12 text-gold-500/30 absolute top-8 left-8" /> */}

                                <blockquote className="relative z-10 mt-6 mb-8">
                                    <p className="text-xl md:text-xl font-serif text-neutral-200 leading-relaxed whitespace-pre-line">
                                        &quot;{REVIEWS[imageIndex].text}&quot;
                                    </p>
                                </blockquote>

                                <div className="flex flex-col items-center gap-2">
                                    <cite className="font-bold text-lg text-white not-italic">
                                        {REVIEWS[imageIndex].name}
                                    </cite>
                                    <div className="text-sm text-gold-400 font-medium">
                                        {REVIEWS[imageIndex].company}
                                    </div>
                                    <div className="text-xs text-neutral-500 uppercase tracking-wider">
                                        {REVIEWS[imageIndex].city}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </Section>
    );
};

export default Reviews;
