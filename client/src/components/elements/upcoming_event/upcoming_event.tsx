import Section from "@/components/ui/section";
import Divider from "@/components/ui/divider";
import { motion } from "framer-motion";
import { NEXT_EVENT } from "@/shared/content/content";
import { staggerChildren } from "@/shared/animations/stagger_children";
import { fadeUp } from "@/shared/animations/fade_up";

const UpcomingEvent = () => {
    return (
        <Section>
            <div className="relative">
                <Divider className="mb-12" />

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    <div className="lg:col-span-4">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerChildren}
                        >
                            <motion.h3 variants={fadeUp} className="text-gold-400 text-xs tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
                                Последняя проведенная премия
                            </motion.h3>

                            <motion.div variants={fadeUp} className="space-y-8">
                                <div className="group border-l border-white/10 pl-6 hover:border-gold-500 transition-colors duration-500">
                                    <span className="block text-3xl font-serif text-white mb-1 group-hover:text-gold-200 transition-colors">22.04.25</span>
                                    <span className="text-sm text-neutral-500 uppercase tracking-widest">Дата проведения</span>
                                </div>
                                <div className="group border-l border-white/10 pl-6 hover:border-gold-500 transition-colors duration-500">
                                    <span className="block text-3xl font-serif text-white mb-1 group-hover:text-gold-200 transition-colors">Bounce</span>
                                    <span className="text-sm text-neutral-500 uppercase tracking-widest">Площадка Omega Events</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-[1.1] font-light">
                                Пятнадцатая ежегодная<br />
                                <span className="italic text-gold-500">церемония вручения</span>
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8 text-neutral-400 font-light leading-relaxed">
                                <p>{NEXT_EVENT.description.split('.')[0]}.</p>
                                <p>{NEXT_EVENT.description.split('.').slice(1).join('.')}</p>
                            </div>

                            {/* <div className="mt-12 flex items-center gap-6">
                                <Button variant="outline">О площадке</Button>
                                <div className="h-[1px] flex-grow bg-white/10"></div>
                            </div> */}
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default UpcomingEvent
