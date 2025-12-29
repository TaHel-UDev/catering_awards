import Section from "@/components/ui/section";
import SectionHeader from "@/components/elements/section_header/section_header";
import { ArrowUpRight, Calendar, Play } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PHOTOS, VIDEOS } from "@/shared/content/content";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Gallery = () => {
    const years = [2024, 2023, 2022];
    const [selectedYear, setSelectedYear] = useState(2024);

    const yearImages = PHOTOS.filter(p => p.year === selectedYear);
    const displayImages = yearImages.length > 0 ? yearImages.slice(0, 3) : PHOTOS.slice(0, 3);

    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
            // Your custom options
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <Section className="bg-[#080808] h-full" id="gallery">
            <div className="flex flex-col items-center mb-12">
                <h2 className="font-serif uppercase text-4xl text-white mb-8">Архив Премии</h2>

                {/* Year Tabs */}
                <div className="flex gap-2 p-1 bg-white/5 rounded-full overflow-hidden">
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`
                px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500
                ${selectedYear === year ? 'bg-gold-500 text-black shadow-lg shadow-gold-500/20' : 'text-neutral-500 hover:text-white hover:bg-white/5'}
              `}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedYear}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {/* Large Featured Image */}
                    {displayImages[0] && (
                        <a
                            href={displayImages[0].imageUrl}
                            data-fancybox={`gallery-${selectedYear}`}
                            className="md:col-span-2 h-full relative group overflow-hidden bg-neutral-900 cursor-pointer block"
                        >
                            <img src={displayImages[0].imageUrl} alt="Event" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-8 left-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <Calendar className="w-4 h-4 text-gold-500" />
                                    <span className="text-gold-400 text-xs uppercase tracking-widest">{selectedYear}</span>
                                </div>
                                <h3 className="text-white font-serif text-3xl uppercase max-w-md leading-tight">Церемония награждения и Гала-ужин</h3>
                            </div>
                        </a>
                    )}

                    {/* Side Stack */}
                    <div className="grid grid-rows-2 gap-6 h-full">
                        {displayImages[1] && (
                            <a
                                href={displayImages[1].imageUrl}
                                data-fancybox={`gallery-${selectedYear}`}
                                className="relative group overflow-hidden bg-neutral-900 cursor-pointer block"
                            >
                                <img src={displayImages[1].imageUrl} alt="Details" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Button variant="outline" size="sm" className="backdrop-blur-md">Смотреть фото</Button>
                                </div>
                            </a>
                        )}
                        {displayImages[2] && (
                            <a
                                href={displayImages[2].imageUrl}
                                data-fancybox={`gallery-${selectedYear}`}
                                className="relative group overflow-hidden bg-neutral-900 cursor-pointer block"
                            >
                                <img src={displayImages[2].imageUrl} alt="Details" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
                                <div className="absolute bottom-4 right-4 p-3 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                                    <ArrowUpRight className="w-4 h-4 text-white" />
                                </div>
                            </a>
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>
        </Section>
    );
};

export default Gallery;