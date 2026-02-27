import Section from "@/components/ui/section";
import { PARTNERS_DATA } from "@/shared/content/content";
import SectionHeader from "../section_header/section_header";
import { cn } from "@/lib/utils";
import type { Partner } from "@/shared/types/types";

const LOGO_BOX = "h-14 w-24 sm:h-16 sm:w-28";
const LOGO_BOX_LARGE = "h-24 w-40 sm:h-28 sm:w-52";

const PartnerCell = ({ partner, isSingle = false }: { partner: Partner; isSingle?: boolean }) => {
    const content = (
        <div className="transition-all duration-300 w-full h-full flex items-center justify-center p-3 sm:p-4">
            {partner.logoUrl ? (
                <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className={cn(isSingle ? LOGO_BOX_LARGE : LOGO_BOX, "object-contain object-center")}
                />
            ) : (
                <span className="font-serif text-xs font-medium uppercase text-white/50 tracking-wider text-center">
                    {partner.name}
                </span>
            )}
        </div>
    );

    const cellClassName = cn(
        "border-r border-b border-white/5 flex items-center justify-center group hover:bg-white/[0.02] transition-colors w-full",
        isSingle ? "min-h-[120px] sm:min-h-[140px]" : "min-h-[72px] sm:min-h-[80px]"
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
        <Section className="py-16 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                    <SectionHeader title="Партнеры" />
                </div>

                <div className="space-y-10 sm:space-y-12">
                    {PARTNERS_DATA.map((category) => {
                        const count = category.partners.length;
                        const gridClass =
                            count <= 1
                                ? "grid grid-cols-1 border-t border-l border-white/5"
                                : count === 2
                                  ? "grid grid-cols-2 border-t border-l border-white/5"
                                    : count === 3
                                    ? "grid grid-cols-1 sm:grid-cols-3 border-t border-l border-white/5"
                                    : "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-white/5";
                        return (
                            <div key={category.title}>
                                <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-4 sm:mb-5 pl-4 border-l-2 border-gold-500">
                                    {category.title}
                                </h3>

                                <div className={cn(gridClass, "w-full")}>
                                    {category.partners.map((partner) => (
                                        <PartnerCell key={partner.id} partner={partner} isSingle={count === 1} />
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
