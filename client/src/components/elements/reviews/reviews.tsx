import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import Section from "@/components/ui/section";
import SectionHeader from "../section_header/section_header";
import { REVIEWS } from "@/shared/content/content";
import type { Review } from "@/shared/types/types";

const PREVIEW_LENGTH = 140;

const getPreview = (text: string) => {
    const trimmed = text.trim();
    if (trimmed.length <= PREVIEW_LENGTH) return { preview: trimmed, hasMore: false };
    return {
        preview: trimmed.slice(0, PREVIEW_LENGTH).trim() + "…",
        hasMore: true
    };
};

const CARD_HEIGHT = 300;

const ReviewCard = ({ review, isExpanded, onToggle }: { review: Review; isExpanded: boolean; onToggle: () => void }) => {
    const { preview, hasMore } = getPreview(review.text);

    return (
        <div className="embla__slide min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_50%] px-2 md:px-4">
            <div
                className="bg-white/5 backdrop-blur-md border border-white/10 p-5 md:p-6 flex flex-col"
                style={{ minHeight: CARD_HEIGHT, height: CARD_HEIGHT }}
            >
                <blockquote className="flex-1 flex flex-col min-h-0 overflow-hidden">
                    <div className="flex-1 overflow-y-auto pr-1 min-h-0">
                        <p className="text-neutral-200 leading-relaxed font-serif whitespace-pre-line text-sm md:text-base">
                            &quot;{isExpanded ? review.text : preview}&quot;
                        </p>
                        {hasMore && (
                            <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); onToggle(); }}
                                className="mt-2 inline-flex items-center gap-1 text-gold-400 hover:text-gold-300 text-sm font-medium border-b border-gold-400/40 hover:border-gold-400 transition-colors"
                            >
                                {isExpanded ? (
                                    <>Свернуть <ChevronUp className="w-4 h-4" /></>
                                ) : (
                                    <>Читать далее <ChevronDown className="w-4 h-4" /></>
                                )}
                            </button>
                        )}
                    </div>
                </blockquote>

                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col items-center gap-1 text-center shrink-0">
                    <cite className="font-bold text-white not-italic text-sm">{review.name}</cite>
                    <div className="text-xs text-gold-400 font-medium">{review.company}</div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-wider">{review.city}</div>
                </div>
            </div>
        </div>
    );
};

const Reviews = () => {
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: false,
            align: "start",
            containScroll: "trimSnaps",
        },
        [
            Autoplay({
                delay: 5000,
                stopOnMouseEnter: true,
                stopOnInteraction: false,
            }),
        ]
    );
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.plugins()?.autoplay?.play();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

    const scrollSnapList = emblaApi?.scrollSnapList() ?? [];
    const slideCount = scrollSnapList.length;

    return (
        <Section className="bg-[#080808] relative" id="reviews">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionHeader
                    title="Отзывы участников"
                    subtitle="Мнения профессионалов индустрии о премии"
                    align="center"
                />

                <div className="mt-12 relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex touch-pan-y [touch-action:pan-y_pinch-zoom]">
                            {REVIEWS.map((review) => (
                                <ReviewCard
                                    key={review.id}
                                    review={review}
                                    isExpanded={expandedId === review.id}
                                    onToggle={() => setExpandedId((prev) => (prev === review.id ? null : review.id))}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={scrollPrev}
                            disabled={!canScrollPrev}
                            className="p-2 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-gold-500/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            aria-label="Назад"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={scrollNext}
                            disabled={!canScrollNext}
                            className="p-2 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-gold-500/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            aria-label="Вперёд"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {slideCount > 1 && (
                        <div className="flex justify-center gap-2 mt-4">
                            {scrollSnapList.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollTo(index)}
                                    className={`h-2 rounded-full transition-all ${
                                        index === selectedIndex
                                            ? "bg-gold-500 w-6"
                                            : "w-2 bg-white/30 hover:bg-white/50"
                                    }`}
                                    aria-label={`Отзыв ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Section>
    );
};

export default Reviews;
