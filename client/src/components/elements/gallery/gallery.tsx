import { AnimatePresence, motion } from "framer-motion";
import { Camera, ExternalLink } from "lucide-react";
import SectionHeader from "../section_header/section_header";
import { useState } from "react";
import { PHOTOS } from "@/shared/content/content";
import Link from "next/link";
import Section from "@/components/ui/section";

const Gallery = () => {
    // Use PHOTOS data but pretend they are album covers linked to VK
    const galleryItems = PHOTOS.map((photo) => ({
        year: photo.year,
        link: photo.link,
        image: photo.imageUrl,
        label: "Смотреть фотоотчет",
    }));

    const [hoveredImage, setHoveredImage] = useState<string | null>(null);

    return (
        <Section className="bg-[#080808] relative">
            <div className="max-w-4xl mx-auto text-center">
                <SectionHeader title="Фотоархив" subtitle="История ярких моментов церемоний прошлых лет" align="center" />

                <div className="flex flex-col items-center gap-4 mt-12 relative z-10">
                    {galleryItems.map((item) => (
                        <Link
                            key={item.year}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative w-full max-w-2xl py-8 border-b border-white/10 flex items-center justify-between hover:border-gold-500/50 transition-colors"
                            onMouseEnter={() => setHoveredImage(item.image)}
                            onMouseLeave={() => setHoveredImage(null)}
                        >
                            <div className="flex items-center gap-8">
                                <span className="font-serif text-5xl md:text-6xl text-white group-hover:text-gold-400 transition-colors duration-300">
                                    {item.year}
                                </span>
                                <span className="hidden md:inline-flex px-3 py-1 rounded-full border border-white/20 text-xs text-neutral-400 uppercase tracking-widest group-hover:bg-white/10">
                                    ВКонтакте
                                </span>
                            </div>

                            <div className="flex items-center gap-4 text-neutral-500 group-hover:text-white transition-colors">
                                <span className="text-xs uppercase tracking-widest hidden sm:inline-block">{item.label}</span>
                                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Floating Preview Image */}
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
            </AnimatePresence>
        </Section>
    );
};

export default Gallery;