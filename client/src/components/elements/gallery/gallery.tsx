import Section from "@/components/ui/section";
import SectionHeader from "@/components/elements/section_header/section_header";
import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { PHOTOS, VIDEOS } from "@/shared/content/content";
import Image from "next/image";

const Gallery = () => {
    return (
        <Section id="gallery">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <SectionHeader title="Галерея" subtitle="Эмоции и атмосфера" />
                {/* <Button variant="ghost">Смотреть архив <ArrowRight className="ml-2 w-4 h-4" /></Button> */}
            </div>

            <div className="grid md:grid-cols-12 gap-4">
                {/* Side Stack */}
                {PHOTOS.map((photo) => (
                    <motion.div
                        key={photo.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-4 relative group overflow-hidden bg-neutral-900 aspect-[4/3] md:aspect-auto"
                    >
                        <Image src={photo.imageUrl} alt="Details" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" width={1000} height={1000} />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                            <ArrowUpRight className="text-white w-8 h-8" />
                        </div>
                    </motion.div>
                ))}
                {VIDEOS.map((video) => (
                    <motion.div
                        key={video.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-4 relative group overflow-hidden bg-neutral-900 aspect-[4/3] md:aspect-auto"
                    >
                        <Image src={video.imageUrl} alt="Video" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" width={1000} height={1000} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 transition-colors">
                                <Play className="w-4 h-4 text-white ml-1 fill-white" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Gallery;