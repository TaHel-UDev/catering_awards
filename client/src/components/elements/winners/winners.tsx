import { useState } from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/elements/section_header/section_header";
import { motion } from "framer-motion";
import { Award, ChevronDown, ChevronUp, Trophy } from "lucide-react";
import { PAST_WINNERS } from "@/shared/content/content";
import { Button } from "@/components/ui/button";

const MOBILE_CARDS_VISIBLE = 4;

const Winners = () => {
    const latestWinners = PAST_WINNERS[0];
    const [expanded, setExpanded] = useState(false);
    const [mobileCardsExpanded, setMobileCardsExpanded] = useState(false);
    const categories = latestWinners.categories;
    const visibleOnMobile = mobileCardsExpanded ? categories : categories.slice(0, MOBILE_CARDS_VISIBLE);
    const hasMoreOnMobile = categories.length > MOBILE_CARDS_VISIBLE;

    return (
        <Section id="winners">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-4 lg:sticky top-24">
                    <SectionHeader
                        title="Победители"
                        subtitle="Лучшие компании по итогам прошедшего года"
                    />
                    <div className="p-8 border border-gold-500/20 bg-gold-500/5 relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 text-gold-500 opacity-10">
                            <Trophy size={120} />
                        </div>
                        <div className="relative z-10">
                            <span className="block text-6xl font-serif text-gold-400 mb-2">{latestWinners.year}</span>
                            {/* <span className="text-sm uppercase tracking-widest text-gold-200">Год триумфа</span> */}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-8">
                    <div className="bg-white/5 p-8 md:p-12 border border-white/10">
                        <div className={cn(
                            "relative overflow-hidden transition-all duration-500",
                            !expanded ? "max-h-[200px]" : "max-h-none"
                        )}>
                            <p className="text-neutral-300 leading-relaxed whitespace-pre-line text-lg mb-8">
                                {latestWinners.description}
                            </p>
                            {!expanded && (
                                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#111] to-transparent pointer-events-none" />
                            )}
                        </div>

                        {!expanded ? (
                            <div className="mt-4 flex justify-center">
                                <Button
                                    onClick={() => setExpanded(true)}
                                    className="bg-gold-500 text-black hover:bg-gold-400"
                                >
                                    Читать далее <ChevronDown className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {latestWinners.introText && (
                                    <h3 className="font-serif text-2xl text-white mb-8 mt-8 border-l-4 border-gold-500 pl-4 py-1">
                                        {latestWinners.introText}
                                    </h3>
                                )}

                                <div className="space-y-4 mb-12">
                                    {/* На мобиле — только первые N карточек, затем «Показать всех» */}
                                    <div className="md:hidden space-y-4">
                                        {visibleOnMobile.map((cat, idx) => (
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.03 }}
                                                key={idx}
                                                className="group relative p-6 bg-white/[0.03] hover:bg-white/[0.06] transition-colors border-l-2 border-transparent hover:border-gold-500 flex flex-col items-start gap-4 py-5"
                                            >
                                                <div className="flex-1 w-full">
                                                    <div className="text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-gold-400 transition-colors">
                                                        {cat.title}
                                                    </div>
                                                    <div className="text-xl text-white font-serif leading-tight">
                                                        {cat.company}
                                                    </div>
                                                </div>
                                                <Award className="w-6 h-6 text-gold-500/20 group-hover:text-gold-500 transition-colors shrink-0" />
                                            </motion.div>
                                        ))}
                                        {hasMoreOnMobile && !mobileCardsExpanded && (
                                            <div className="pt-2 flex justify-center">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => setMobileCardsExpanded(true)}
                                                    className="border-gold-500/30 text-gold-400 hover:bg-gold-500/10"
                                                >
                                                    Показать всех победителей ({categories.length}) <ChevronDown className="ml-2 w-4 h-4" />
                                                </Button>
                                            </div>
                                        )}
                                        {hasMoreOnMobile && mobileCardsExpanded && (
                                            <div className="pt-2 flex justify-center">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => setMobileCardsExpanded(false)}
                                                    className="text-neutral-500 hover:text-white"
                                                >
                                                    Свернуть <ChevronUp className="ml-2 w-4 h-4" />
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                    {/* На планшете и десктопе — полный список */}
                                    <div className="hidden md:block space-y-4">
                                        {categories.map((cat, idx) => (
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.03 }}
                                                key={idx}
                                                className="group relative p-6 bg-white/[0.03] hover:bg-white/[0.06] transition-colors border-l-2 border-transparent hover:border-gold-500 flex flex-col md:flex-row items-start md:items-center gap-4 py-5"
                                            >
                                                <div className="flex-1">
                                                    <div className="text-xs text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-gold-400 transition-colors">
                                                        {cat.title}
                                                    </div>
                                                    <div className="text-xl md:text-2xl text-white font-serif leading-tight">
                                                        {cat.company}
                                                    </div>
                                                </div>
                                                <Award className="w-6 h-6 text-gold-500/20 group-hover:text-gold-500 transition-colors shrink-0" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {latestWinners.specialNomination && (
                                    <div className="bg-gold-500/10 border border-gold-500/20 p-8 mb-8">
                                        <div className="flex items-start gap-4">
                                            <Star className="w-8 h-8 text-gold-500 mt-1 shrink-0" />
                                            <div>
                                                <h4 className="font-serif text-xl text-gold-400 mb-2">Специальная номинация</h4>
                                                <p className="text-neutral-300 leading-relaxed">
                                                    {latestWinners.specialNomination}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="flex justify-center pt-8 border-t border-white/10">
                                    <Button
                                        variant="ghost"
                                        onClick={() => {
                                            setExpanded(false);
                                            // Optional: Scroll back to top of section
                                            document.getElementById('winners')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="text-neutral-500 hover:text-white"
                                    >
                                        Свернуть <ChevronUp className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Winners;
