import { LucideIcon } from 'lucide-react';

export interface Winner {
    year: number;
    description?: string;
    introText?: string;
    specialNomination?: string;
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
    title: string;
    imageUrl?: string;
    link: string;
}

export interface Review {
    id: string;
    name: string;
    company: string;
    city: string;
    text: string;
}