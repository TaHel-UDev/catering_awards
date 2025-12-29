import { useState } from "react";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/elements/section_header/section_header";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Trophy } from "lucide-react";
import { PAST_WINNERS } from "@/shared/content/content";
import { Button } from "@/components/ui/button";

const Winners = () => {
    // Only showing the latest year as requested
    const latestWinners = PAST_WINNERS[0];

    return (
        <Section id="winners">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-4">
                    <SectionHeader
                        title="Лауреаты"
                        subtitle="Лучшие компании по итогам прошедшего года"
                    />
                    <div className="p-8 border border-gold-500/20 bg-gold-500/5 relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 text-gold-500/10">
                            <Trophy size={120} />
                        </div>
                        <div className="relative z-10">
                            <span className="block text-6xl font-serif text-gold-400 mb-2">{latestWinners.year}</span>
                            <span className="text-sm uppercase tracking-widest text-gold-200">Год триумфа</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-8">
                    <div className="space-y-4">
                        {latestWinners.categories.map((cat, idx) => (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                key={idx}
                                className="group p-8 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500 border-l-2 border-transparent hover:border-gold-500 flex flex-col md:flex-row md:items-center justify-between gap-4"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-gold-500/50 font-serif text-xl italic">0{idx + 1}</span>
                                    <h4 className="text-sm text-neutral-400 uppercase tracking-widest group-hover:text-gold-200 transition-colors">{cat.title}</h4>
                                </div>
                                <div className="h-px w-12 bg-white/10 hidden md:block"></div>
                                <span className="text-2xl md:text-3xl text-white font-serif uppercase tracking-wide">{cat.company}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Winners;
