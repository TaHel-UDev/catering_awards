import Section from "@/components/ui/section";
import { Sparkles, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";

const Registration = () => {
    return (
        <Section noPadding>
            <div className="grid md:grid-cols-2">
                {/* Left Card */}
                <div className="relative min-h-[500px] p-12 md:p-24 border-r border-white/5 border-b md:border-b-0 border-white/5 bg-[#080808] group overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative z-10 flex flex-col h-full justify-between items-start">
                        <div>
                            <Sparkles className="w-8 h-8 text-gold-500 mb-8" />
                            <h3 className="font-serif text-4xl text-white mb-4">Номинантам</h3>
                            <p className="text-neutral-500 font-light leading-relaxed max-w-sm">
                                Заявите о себе на всю индустрию. Участие в премии — это знак качества и профессионального признания.
                            </p>
                        </div>

                        <div className="mt-12 w-full">
                            <div className="flex items-center gap-2 text-red-400 text-xs tracking-widest uppercase mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                Прием заявок закрыт
                            </div>
                            <Button variant="outline" fullWidth disabled>Подать заявку</Button>
                        </div>
                    </div>
                </div>

                {/* Right Card */}
                <div className="relative min-h-[500px] p-12 md:p-24 bg-[#050505] group overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative z-10 flex flex-col h-full justify-between items-start">
                        <div>
                            <Ticket className="w-8 h-8 text-neutral-400 mb-8 group-hover:text-white transition-colors" />
                            <h3 className="font-serif text-4xl text-white mb-4">Гостям</h3>
                            <p className="text-neutral-500 font-light leading-relaxed max-w-sm">
                                Посетите церемонию награждения. Изысканный ужин, шоу-программа и лучшие представители отрасли.
                            </p>
                        </div>

                        <div className="mt-12 w-full">
                            <div className="flex items-center gap-2 text-red-400 text-xs tracking-widest uppercase mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                Sold Out
                            </div>
                            <Button variant="outline" fullWidth disabled>Купить билет</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Registration
