import { LucideIcon } from 'lucide-react';

export interface Winner {
    year: number;
    categories: {
        title: string;
        company: string;
    }[];
}

export interface Partner {
    id: string;
    name: string;
    logoUrl?: string; // Optional, using placeholders
}

export interface PartnerCategory {
    title: string;
    partners: Partner[];
}

export interface FeaturePoint {
    icon: LucideIcon;
    text: string;
}

export interface MediaItem {
    id: string;
    year: number;
    imageUrl: string;
    link: string;
}