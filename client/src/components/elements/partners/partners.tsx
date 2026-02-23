import Section from "@/components/ui/section";
import { PARTNERS_DATA } from "@/shared/content/content";
import SectionHeader from "../section_header/section_header";
import { cn } from "@/lib/utils";
import type { Partner } from "@/shared/types/types";

const PartnerCell = ({
    partner,
    spanFullRowMd = false,
    spanFullRowLg = false,
}: {
    partner: Partner;
    spanFullRowMd?: boolean;
    spanFullRowLg?: boolean;
}) => {
    const content = (
        <div className="opacity-70 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0 w-full h-full flex items-center justify-center p-4 sm:p-6">
            {partner.logoUrl ? (
                <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="max-h-24 sm:max-h-32 w-auto max-w-full object-contain"
                />
            ) : (
                <span className="font-serif text-sm font-medium uppercase text-white/60 tracking-wider text-center">
                    {partner.name}
                </span>
            )}
        </div>
    );

    const cellClassName = cn(
        "min-h-[100px] sm:min-h-[120px] lg:min-h-[140px] border-r border-b border-white/5 flex items-center justify-center group hover:bg-white/[0.02] transition-colors relative w-full",
        spanFullRowMd && "md:col-span-2",
        spanFullRowLg && "lg:col-span-3"
    );

    if (partner.link) {
        return (
            <a
                key={partner.id}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cellClassName}
            >
                {content}
            </a>
        );
    }

    return (
        <div key={partner.id} className={cellClassName}>
            {content}
        </div>
    );
};

const Partners = () => {
    return (
        <Section className="py-24 border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                    <SectionHeader title="Партнеры" />
                </div>

                <div className="space-y-16 sm:space-y-24">
                    {PARTNERS_DATA.map((category) => {
                        const count = category.partners.length;
                        const gridClass =
                            count <= 1
                                ? "grid grid-cols-1 grid-auto-rows-[100px] sm:grid-auto-rows-[120px] lg:grid-auto-rows-[140px] border-t border-l border-white/5"
                                : count === 2
                                  ? "grid grid-cols-2 grid-auto-rows-[100px] sm:grid-auto-rows-[120px] lg:grid-auto-rows-[140px] border-t border-l border-white/5"
                                    : count === 3
                                    ? "grid grid-cols-1 sm:grid-cols-3 grid-auto-rows-[100px] sm:grid-auto-rows-[120px] lg:grid-auto-rows-[140px] border-t border-l border-white/5"
                                    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-auto-rows-[100px] sm:grid-auto-rows-[120px] lg:grid-auto-rows-[140px] border-t border-l border-white/5";
                        return (
                            <div key={category.title}>
                                <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-6 sm:mb-8 pl-4 border-l-2 border-gold-500">
                                    {category.title}
                                </h3>

                                <div className={cn(gridClass, "w-full")}>
                                    {category.partners.map((partner, index) => {
                                        const isLast = index === count - 1;
                                        const spanFullRowMd =
                                            count >= 4 &&
                                            count % 2 === 1 &&
                                            isLast;
                                        const spanFullRowLg =
                                            count >= 4 &&
                                            count % 3 === 1 &&
                                            isLast;
                                        return (
                                            <PartnerCell
                                                key={partner.id}
                                                partner={partner}
                                                spanFullRowMd={spanFullRowMd}
                                                spanFullRowLg={spanFullRowLg}
                                            />
                                        );
                                    })}
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
