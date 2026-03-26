import Section from "@/components/ui/section";
import { PARTNERS_DATA } from "@/shared/content/content";
import SectionHeader from "../section_header/section_header";
import { cn } from "@/lib/utils";
import type { Partner } from "@/shared/types/types";

/** Карточка партнёра — нейтральная «витрина» для логотипа (подходит для чёрных и белых PNG) */
const PartnerCard = ({
    partner,
    isSingle = false,
}: {
    partner: Partner;
    isSingle?: boolean;
}) => {
    const cardContent = (
        <div className="flex-1 flex items-center justify-center min-h-0 min-w-0 p-4 sm:p-6">
            {partner.logoUrl ? (
                <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className={cn(
                        "max-w-full max-h-full object-contain w-auto h-auto",
                        partner.id !== "info3" && "grayscale invert brightness"
                    )}
                />
            ) : (
                <span className="font-serif text-xs font-medium uppercase text-white/50 tracking-wider text-center">
                    {partner.name}
                </span>
            )}
        </div>
    );

    const cardClassName = cn(
        "h-28 border border-white/5 bg-[#171717] flex transition-all duration-300 group hover:bg-white/[0.05]",
        // flex-basis: 2 cols mobile, 3 cols tablet, 4 cols desktop; для 1 партнёра — шире
        isSingle
            ? "flex-[0_1_calc(100%-0px)] min-w-[200px] max-w-[280px]"
            : "flex-[0_1_calc(50%-12px)] md:flex-[0_1_calc(33.333%-16px)] lg:flex-[0_1_calc(25%-18px)] min-w-[140px]"
    );

    if (partner.link) {
        return (
            <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClassName}
            >
                {cardContent}
            </a>
        );
    }

    return <div className={cardClassName}>{cardContent}</div>;
};

const Partners = () => {
    return (
        <Section className="border-t border-white/5 pb-6 md:pb-24">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="w-full text-center">
                    <SectionHeader title="Партнеры" align="center" />
                </div>

                <div className="space-y-10 sm:space-y-12">
                    {PARTNERS_DATA.map((category) => {
                        const count = category.partners.length;
                        return (
                            <div key={category.title}>
                                <h3 className="text-2xs border-b border-gold-500 mb-4 pb-4 text-center uppercase tracking-widest text-white/80">
                                    {category.title}
                                </h3>

                                <div className="flex flex-wrap justify-center gap-4 w-full">
                                    {category.partners.map((partner) => (
                                        <PartnerCard
                                            key={partner.id}
                                            partner={partner}
                                            isSingle={count === 1}
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};

export default Partners;
