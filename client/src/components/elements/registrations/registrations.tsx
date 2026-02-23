import Section from "@/components/ui/section";
import { Sparkles, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NEXT_EVENT, PARTICIPATION_BENEFITS } from "@/shared/content/content";

const Registration = () => {
    return (
        <Section id="registration" className="relative z-20">
            <div className="grid md:grid-cols-2 shadow-2xl shadow-black/50">
                {/* Left Card - Nominees */}
                <div className="relative min-h-[500px] p-10 md:p-16 border border-white/10 bg-[#080808] group overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-white/5 rounded-full text-gold-500">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <span className="text-xs uppercase tracking-widest text-gold-500">Участникам</span>
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 uppercase">Подать Заявку</h3>
                        <p className="text-neutral-400 font-light leading-relaxed max-w-sm mb-8">
                            Заявите о себе на всю индустрию. Участие в премии — это знак качества, PR-поддержка и профессиональное признание.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {PARTICIPATION_BENEFITS.slice(0, 3).map((b, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-neutral-500">
                                    <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                                    {b.text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative z-10 mt-auto">
                        <div className="flex items-center gap-2 text-red-400 text-xs tracking-widest uppercase mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                            Прием заявок закрыт
                        </div>
                        <Button variant="outline" fullWidth disabled>Заполнить анкету</Button>
                    </div>
                </div>

                {/* Right Card - Guests */}
                <div className="relative min-h-[500px] p-10 md:p-16 bg-[#0B0B0B] border-y border-r border-white/10 group overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-white/5 rounded-full text-neutral-300">
                                <Ticket className="w-6 h-6" />
                            </div>
                            <span className="text-xs uppercase tracking-widest text-neutral-500">Гостям</span>
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 uppercase">Купить Билет</h3>
                        <p className="text-neutral-500 font-light leading-relaxed max-w-sm mb-8">
                            Посетите церемонию награждения {NEXT_EVENT.date}. Изысканный ужин, шоу-программа и нетворкинг с лидерами.
                        </p>
                        <div className="p-4 bg-white/5 border border-white/5 mb-8">
                            <div className="text-xl text-white font-serif mb-1">{NEXT_EVENT.location}</div>
                            <div className="text-xs text-neutral-500 uppercase tracking-widest">Место проведения</div>
                        </div>
                    </div>

                    <div className="relative z-10 mt-auto">
                        {/* <div className="flex items-center gap-2 text-neutral-500 text-xs tracking-widest uppercase mb-4">
                            Доступно: 12 мест
                        </div> */}
                        <Button variant="primary" disabled fullWidth>Купить билет</Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Registration
