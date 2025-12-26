import { useState } from "react";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/elements/section_header/section_header";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { PAST_WINNERS } from "@/shared/content/content";

const Winners = () => {
    const [activeYear, setActiveYear] = useState<number | null>(2023);

    return (
        <Section id="winners">
            <SectionHeader title="Лауреаты" subtitle="История успеха и признания" align="center" large />

            <div className="max-w-4xl mx-auto">
                {PAST_WINNERS.map((item) => {
                    const isOpen = activeYear === item.year;
                    return (
                        <motion.div
                            key={item.year}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="border-b border-white/10 last:border-0"
                        >
                            <button
                                onClick={() => setActiveYear(isOpen ? null : item.year)}
                                className="w-full py-10 flex items-center justify-between group outline-none text-left"
                            >
                                <div className="flex items-baseline gap-6">
                                    <span className={`font-serif text-5xl md:text-6xl transition-all duration-500 ${isOpen ? 'text-gold-400' : 'text-neutral-700 group-hover:text-neutral-500'}`}>
                                        {item.year}
                                    </span>
                                    <span className={`text-sm tracking-widest uppercase transition-opacity duration-500 ${isOpen ? 'opacity-100 text-gold-500/50' : 'opacity-0'}`}>
                                        Победители
                                    </span>
                                </div>

                                <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-gold-500 border-gold-500 rotate-180' : 'group-hover:border-white/30'}`}>
                                    <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-black' : 'text-white'}`} />
                                </div>
                            </button>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-12 pt-4 grid gap-6">
                                            {item.categories.map((cat, idx) => (
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    key={idx}
                                                    className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-8 group p-6 bg-white/5 hover:bg-white/10 transition-colors rounded-sm"
                                                >
                                                    <span className="text-xs text-gold-500 uppercase tracking-widest">{cat.title}</span>
                                                    <div className="h-[1px] bg-white/10 flex-grow hidden md:block group-hover:bg-white/20 transition-colors"></div>
                                                    <span className="text-2xl text-white font-serif">{cat.company}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
};

export default Winners;
