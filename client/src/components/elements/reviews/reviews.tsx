import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Section from "@/components/ui/section";
import SectionHeader from "../section_header/section_header";
import { REVIEWS } from "@/shared/content/content";
import { Button } from "@/components/ui/button";
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

const ReviewCard = ({ review, isExpanded, onToggle }: { review: Review; isExpanded: boolean; onToggle: () => void }) => {
    const { preview, hasMore } = getPreview(review.text);
    const showExpand = hasMore && !isExpanded;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 flex flex-col h-full"
        >
            <blockquote className="flex-1">
                <p className="text-neutral-200 leading-relaxed font-serif whitespace-pre-line">
                    &quot;{isExpanded ? review.text : preview}&quot;
                </p>
            </blockquote>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col items-center gap-2 text-center">
                <cite className="font-bold text-white not-italic">{review.name}</cite>
                <div className="text-sm text-gold-400 font-medium">{review.company}</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider">{review.city}</div>
            </div>

            {hasMore && (
                <div className="mt-4 flex justify-center">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onToggle}
                        className="text-gold-400 hover:text-gold-300 hover:bg-gold-500/10"
                    >
                        {isExpanded ? (
                            <>Свернуть <ChevronUp className="ml-1 w-4 h-4 inline" /></>
                        ) : (
                            <>Читать далее <ChevronDown className="ml-1 w-4 h-4 inline" /></>
                        )}
                    </Button>
                </div>
            )}
        </motion.div>
    );
};

const Reviews = () => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <Section className="bg-[#080808] relative" id="reviews">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionHeader
                    title="Отзывы участников"
                    subtitle="Мнения профессионалов индустрии о премии"
                    align="center"
                />

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {REVIEWS.map((review) => (
                            <ReviewCard
                                key={review.id}
                                review={review}
                                isExpanded={expandedId === review.id}
                                onToggle={() => setExpandedId((prev) => (prev === review.id ? null : review.id))}
                            />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </Section>
    );
};

export default Reviews;
