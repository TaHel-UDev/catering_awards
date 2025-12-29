import Section from "@/components/ui/section";
import { motion } from "framer-motion";
import { PARTNERS_DATA } from "@/shared/content/content";
import SectionHeader from "../section_header/section_header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


const Partners = () => {
    return (
        <Section className="py-24 border-t border-white/5">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                    <SectionHeader title="Партнеры" />
                </div>

                <div className="space-y-24">
                    {PARTNERS_DATA.map((category) => (
                        <div key={category.title}>
                            <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-8 pl-4 border-l-2 border-gold-500">{category.title}</h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 border-t border-l border-white/5">
                                {category.partners.map((partner) => (
                                    <div key={partner.id} className="aspect-[3/2] border-r border-b border-white/5 flex items-center justify-center p-8 group hover:bg-white/[0.02] transition-colors relative">
                                        <div className="opacity-40 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0">
                                            <span className="font-serif text-lg font-bold uppercase text-white tracking-wider">{partner.name}</span>
                                        </div>
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
