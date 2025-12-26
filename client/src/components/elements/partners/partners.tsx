import Section from "@/components/ui/section";
import { motion } from "framer-motion";
import { PARTNERS_DATA } from "@/shared/content/content";


const Partners = () => {
    return (
        <Section className="bg-[#080808] py-32 border-t border-white/5">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-20 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gold-600 text-xs uppercase tracking-[0.3em] block mb-4"
                    >
                        Поддержка
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-serif text-4xl md:text-5xl text-white"
                    >
                        Наши Партнеры
                    </motion.h2>
                </div>

                <div className="space-y-24">
                    {PARTNERS_DATA.map((category) => (
                        <div key={category.title}>
                            <div className="flex items-center gap-6 mb-8">
                                <h3 className="text-xs uppercase tracking-widest text-neutral-500 whitespace-nowrap">{category.title}</h3>
                                <div className="h-[1px] w-full bg-white/5"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 border-l border-t border-white/5">
                                {category.partners.map((partner) => (
                                    <div key={partner.id} className="aspect-[2/1] border-r border-b border-white/5 flex items-center justify-center p-6 group hover:bg-white/[0.02] transition-colors relative">
                                        <div className="opacity-30 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0">
                                            <span className="font-serif text-lg font-medium text-white">{partner.name}</span>
                                        </div>
                                        {/* Corner accent on hover */}
                                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Partners;
