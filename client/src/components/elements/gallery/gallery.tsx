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
            <div className="max-w-4xl mx-auto text-center">
                <SectionHeader title="Фотоархив" subtitle="История ярких моментов церемоний прошлых лет" align="center" />

                <div className="flex flex-col items-center gap-4 mt-12 relative z-10">
                    {visiblePhotos.map((item) => (
                        <Link
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative w-full max-w-4xl py-6 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 hover:border-gold-500/50 transition-colors"
                        >
                            <div className="flex items-center gap-8 md:gap-12 w-full">
                                <span className="font-serif text-3xl md:text-5xl text-white/30 group-hover:text-gold-500/50 transition-colors duration-300 w-24 md:w-32 text-right shrink-0">
                                    {item.year}
                                </span>
                                <span className="text-lg md:text-xl text-neutral-300 group-hover:text-white transition-colors text-left leading-tight">
                                    {item.title}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 text-gold-500/70 group-hover:text-gold-400 transition-colors text-sm uppercase tracking-widest pl-32 md:pl-0 shrink-0 mt-4 md:mt-0">
                                <span className="hidden md:inline">Смотреть</span>
                                <span className="md:hidden">Открыть</span>
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12">
                    <Button
                        onClick={() => setShowAll(!showAll)}
                        variant="outline"
                        className="border-gold-500/30 text-gold-400 hover:bg-gold-500 hover:text-black hover:border-gold-500 min-w-[200px]"
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