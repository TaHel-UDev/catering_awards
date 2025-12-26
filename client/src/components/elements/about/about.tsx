import Section from "@/components/ui/section";
import SectionHeader from "@/components/elements/section_header/section_header";
import { motion } from "framer-motion";
import { GOALS, PARTICIPATION_BENEFITS } from "@/shared/content/content";

const About = () => {
    return (
        <Section id="about" className="bg-[#080808]">
            <div className="grid lg:grid-cols-2 gap-20">
                {/* Goals */}
                <div>
                    <SectionHeader title="Миссия" />
                    <div className="grid gap-px bg-white/5 border border-white/5">
                        {GOALS.map((goal, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#080808] p-8 hover:bg-[#0A0A0A] transition-colors group"
                            >
                                <goal.icon className="w-6 h-6 text-gold-600 mb-4 group-hover:text-gold-400 transition-colors" />
                                <p className="text-neutral-300 font-light">{goal.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Benefits */}
                <div className="relative">
                    <SectionHeader title="Участие" subtitle="Что дает номинация" />
                    <div className="space-y-6">
                        {PARTICIPATION_BENEFITS.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-4 group"
                            >
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-gold-500 transition-colors"></span>
                                <p className="text-lg text-neutral-400 font-light group-hover:text-white transition-colors cursor-default">
                                    {benefit.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 p-8 border border-gold-500/10 bg-gold-500/5 backdrop-blur-sm">
                        <p className="font-serif text-2xl text-gold-200 italic">&quot;Главное событие года в индустрии&quot;</p>
                        {/* <Button size="sm">Скачать презентацию</Button> */}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About