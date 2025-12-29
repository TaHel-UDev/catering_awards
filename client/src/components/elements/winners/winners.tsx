import { useState } from "react";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/elements/section_header/section_header";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Award, ChevronDown, ChevronUp, Trophy } from "lucide-react";
import { PAST_WINNERS } from "@/shared/content/content";
import { Button } from "@/components/ui/button";

const Winners = () => {
    const latestWinners = PAST_WINNERS[0];
    const [expanded, setExpanded] = useState(false);

    return (
        <Section id="winners">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-4 lg:sticky top-24">
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
                    <AnimatePresence mode="wait">
                        {!expanded ? (
                            <motion.div
                                key="teaser"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-white/5 p-12 border border-white/10 flex flex-col items-center justify-center text-center gap-6"
                            >
                                <div className="p-4 bg-gold-500/10 rounded-full text-gold-400">
                                    <Award size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif text-white mb-2">Объявлены победители</h3>
                                    <p className="text-neutral-400 max-w-md mx-auto">
                                        Ознакомьтесь с полным списком компаний, получивших признание профессионального сообщества в {latestWinners.year} году.
                                    </p>
                                </div>
                                <Button onClick={() => setExpanded(true)}>
                                    Показать список победителей <ChevronDown className="ml-2 w-4 h-4" />
                                </Button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="list"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="space-y-4 mb-8">
                                    {latestWinners.categories.map((cat, idx) => (
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            key={idx}
                                            className="group relative p-6 md:p-8 bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-500 border-l-2 border-transparent hover:border-gold-500 grid grid-cols-1 md:grid-cols-[45%_10%_45%] items-center gap-4"
                                        >
                                            <div className="flex items-center gap-5 pr-4">
                                                <span className="text-gold-500/50 font-serif text-xl italic shrink-0 w-8">
                                                    {(idx + 1).toString().padStart(2, '0')}
                                                </span>
                                                <h4 className="text-xs md:text-sm text-neutral-400 uppercase tracking-widest group-hover:text-gold-200 transition-colors leading-relaxed">
                                                    {cat.title}
                                                </h4>
                                            </div>

                                            <div className="hidden md:flex items-center justify-center">
                                                <div className="h-px w-12 bg-white/10 group-hover:bg-gold-500/50 transition-colors"></div>
                                            </div>

                                            <div className=" pl-4">
                                                <span className="text-xl md:text-2xl text-white font-serif uppercase tracking-wide leading-tight block">
                                                    {cat.company}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="flex justify-end">
                                    <Button
                                        variant="ghost"
                                        onClick={() => setExpanded(false)}
                                        className="text-neutral-500 hover:text-white"
                                    >
                                        Свернуть список <ChevronUp className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </Section>
    );
};

export default Winners;
