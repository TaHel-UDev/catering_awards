import Section from "@/components/ui/section";
import { Sparkles, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NEXT_EVENT, PARTICIPATION_BENEFITS, REGISTRATION_LINKS } from "@/shared/content/content";

const Registration = () => {
    return (
        <Section id="registration" className="relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 shadow-2xl shadow-black/50">
                {/* Left on mobile, Right on PC - Nominees (Подать заявку) */}
                <div className="relative min-h-[500px] p-10 md:p-16 border border-white/10 bg-[#0B0B0B] group overflow-hidden flex flex-col justify-between md:col-start-2">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-white/5 rounded-full text-gold-500">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <span className="text-xs uppercase tracking-widest text-gold-500">Номинантам</span>
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
                        <Button asChild variant="primary" fullWidth>
                            <Link href={REGISTRATION_LINKS.nominees} target="_blank" rel="noopener noreferrer">
                                Заполнить анкету
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Right on mobile, Left on PC - Guests (Купить билет) */}
                <div className="relative min-h-[500px] p-10 md:p-16 bg-[#0B0B0B] border-y md:border-l border-white/10 group overflow-hidden flex flex-col justify-between md:col-start-1 md:row-start-1">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-white/5 rounded-full text-gold-500">
                                <Ticket className="w-6 h-6" />
                            </div>
                            <span className="text-xs uppercase tracking-widest text-gold-500">Гостям</span>
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 uppercase">Купить Билет</h3>
                        <p className="text-neutral-400 font-light leading-relaxed max-w-sm mb-8">
                            Посетите церемонию награждения {NEXT_EVENT.date}. Нетворкинг с лидерами индустрии.
                        </p>
                        {/* <div className="mb-8">
                            <div className="text-xl text-white font-serif mb-1">{NEXT_EVENT.location}</div>
                            <div className="text-xs text-neutral-500 uppercase tracking-widest">Место проведения</div>
                        </div> */}
                    </div>

                    <div className="relative z-10 mt-auto">
                        <Button asChild variant="primary" fullWidth>
                            <Link href={REGISTRATION_LINKS.guests} target="_blank" rel="noopener noreferrer">
                                Купить билет
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Registration
