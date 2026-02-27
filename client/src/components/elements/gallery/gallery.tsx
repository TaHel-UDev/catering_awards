import { useState } from "react";

import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import SectionHeader from "../section_header/section_header";
import { PHOTOS } from "@/shared/content/content";
import Link from "next/link";
import Section from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const Gallery = () => {
    const [showAll, setShowAll] = useState(false);

    // Sort items by year descending
    const sortedPhotos = [...PHOTOS].sort((a, b) => b.year - a.year);

    // Show top 5 or all
    const visiblePhotos = showAll ? sortedPhotos : sortedPhotos.slice(0, 5);

    return (
        <Section className="bg-[#080808] relative" id="gallery">
            <div className="max-w-2xl mx-auto text-center">
                <SectionHeader title="Фотоархив" subtitle="История ярких моментов церемоний прошлых лет" align="center" />

                <div className="flex flex-col items-center gap-0 mt-8 relative z-10">
                    {visiblePhotos.map((item) => (
                        <Link
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative w-full py-3 md:py-4 border-b border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-6 hover:border-gold-500/30 transition-colors"
                        >
                            <div className="flex items-center gap-4 md:gap-6 w-full">
                                <span className="font-serif text-xl md:text-2xl text-white/25 group-hover:text-gold-500/40 transition-colors duration-300 w-14 md:w-20 text-right shrink-0">
                                    {item.year}
                                </span>
                                <span className="text-sm md:text-base text-neutral-400 group-hover:text-neutral-300 transition-colors text-left leading-tight">
                                    {item.title}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 text-gold-500/50 group-hover:text-gold-400 transition-colors text-xs uppercase tracking-widest pl-20 md:pl-0 shrink-0">
                                <span className="hidden md:inline">Смотреть</span>
                                <span className="md:hidden">Открыть</span>
                                <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-6">
                    <Button
                        onClick={() => setShowAll(!showAll)}
                        variant="outline"
                        size="sm"
                        className="border-gold-500/20 text-gold-500/80 hover:bg-gold-500/10 hover:text-gold-400 hover:border-gold-500/40 min-w-[160px]"
                    >
                        {showAll ? (
                            <>Свернуть <ChevronUp className="ml-2 w-4 h-4" /></>
                        ) : (
                            <>Показать все ({PHOTOS.length}) <ChevronDown className="ml-2 w-4 h-4" /></>
                        )}
                    </Button>
                </div>
            </div>

            {/* Floating Preview Image
            <AnimatePresence>
                {hoveredImage && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                        className="fixed pointer-events-none z-20 hidden md:block"
                        style={{
                            top: '50%',
                            left: '50%',
                            marginLeft: '250px', // Offset from center
                            marginTop: '-150px'
                        }}
                    >
                        <div className="w-[300px] h-[200px] rounded-lg overflow-hidden border-4 border-white shadow-2xl relative">
                            <img
                                src={hoveredImage}
                                alt="Preview"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white/90">
                                <Camera size={16} />
                                <span className="text-[10px] uppercase tracking-wider">Превью</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence> */}
        </Section>
    );
};

export default Gallery;