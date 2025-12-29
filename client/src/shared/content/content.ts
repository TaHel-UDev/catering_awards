import { Award, CheckCircle, TrendingUp, Users, BookOpen, Star } from 'lucide-react';
import { FeaturePoint, Winner, PartnerCategory, MediaItem } from '../types/types';

export const HERO_TEXT = {
    title: "Кейтеринг года",
    description: "«Кейтеринг года» — это независимая ежегодная премия, на которой называются лучшие компании российской кейтеринг-индустри этого года, на основании качества материально-технической базы, уровня кухни, наличия профессиональной команды менеджеров, системности работы и отзывов участников event-рынка."
};

export const NEXT_EVENT = {
    date: "22 апреля 2025 года",
    title: "Пятнадцатая ежегодная церемония вручения премии «Кейтеринг года»",
    location: "Bounce от Omega Events",
    description: "В этом году в современном пространстве Bounce от Omega Events мы снова собрали лучших представителей отрасли на традиционном офлайн-мероприятии, где отметили компании, добившиеся выдающихся результатов. Премия «Кейтеринг года» — это не только возможность узнать лидеров рынка, но и площадка для обсуждения актуальных тенденций, обмена опытом, установления новых контактов."
};

export const GOALS: FeaturePoint[] = [
    { icon: TrendingUp, text: "Развитие кейтеринг-индустрии" },
    { icon: Award, text: "Повышение престижа операторов" },
    { icon: Star, text: "Выявление лидеров рынка" },
    { icon: Users, text: "Условия для профессионального диалога" },
];

export const PARTICIPATION_BENEFITS: FeaturePoint[] = [
    { icon: CheckCircle, text: "Участие в главном отраслевом мероприятии" },
    { icon: TrendingUp, text: "Подтверждение статуса" },
    { icon: Star, text: "Выделение среди конкурентов" },
    { icon: Users, text: "PR-повод и новые контакты" },
    { icon: BookOpen, text: "Признание успеха компании в профессиональном сооществе, среди экспертов и коллег, клиентов и партнеров" },
];

export const PAST_WINNERS: Winner[] = [
    {
        year: 2025,
        categories: [
            { title: "Кейтеринг года", company: "Event Catering" },
            { title: "Лучший сервис", company: "Diamond Service" },
            { title: "Прорыв года", company: "Fusion Taste" },
            { title: "Лучший кейтеринг масштабных мероприятий", company: "Mega Events Catering" },
            { title: "Лучший премиальный кейтеринг", company: "Royal Service" },
            { title: "Кейтеринг года: Москва", company: "Capital Taste" },
            { title: "Кейтеринг года: Санкт-Петербург", company: "North Venice Catering" },
            { title: "Лучший свадебный кейтеринг", company: "Love & Food" },
            { title: "Лучший корпоративный кейтеринг", company: "BizLunch Pro" },
            { title: "Лучший выездной бар", company: "Shake It Up" },
            { title: "Лучшая концепция подачи", company: "Art of Serving" },
            { title: "Лучший эко-кейтеринг", company: "Green Leaf" },
            { title: "Лучший кейтеринг на спортивных мероприятиях", company: "Sport Food" },
            { title: "Лучший детский кейтеринг", company: "Happy Kids" },
            { title: "Лучший кофе-брейк", company: "Morning Aroma" },
            { title: "Лучший сервис доставки", company: "Express Gourmet" },
            { title: "Самое креативное меню", company: "Chef's Fantasy" },
            { title: "Лучший персонал", company: "Service Elite" },
            { title: "Выбор гостей", company: "People's Choice Catering" },
            { title: "Лучший национальный кейтеринг", company: "Russian Tradition" }
        ]
    },
];

export const PHOTOS: MediaItem[] = [
    { id: 'p1', year: 2023, imageUrl: 'https://picsum.photos/id/431/600/600', link: '#' },
    { id: 'p2', year: 2023, imageUrl: 'https://picsum.photos/id/338/600/600', link: '#' },
    { id: 'p3', year: 2023, imageUrl: 'https://picsum.photos/id/225/600/600', link: '#' },
];

export const VIDEOS: MediaItem[] = [
    { id: 'v1', year: 2023, imageUrl: 'https://picsum.photos/id/452/800/450', link: '#' },
    { id: 'v2', year: 2023, imageUrl: 'https://picsum.photos/id/180/800/450', link: '#' },
    { id: 'v3', year: 2023, imageUrl: 'https://picsum.photos/id/399/800/450', link: '#' },
];

export const PARTNERS_DATA: PartnerCategory[] = [
    {
        title: "Генеральные партнеры",
        partners: [
            { id: 'gp1', name: "Alpha Bank", logoUrl: "https://picsum.photos/id/20/200/100" },
            { id: 'gp2', name: "Omega Events", logoUrl: "https://picsum.photos/id/26/200/100" },
            { id: 'gp3', name: "Bounce", logoUrl: "https://picsum.photos/id/36/200/100" },
        ]
    },
    {
        title: "Продуктовые партнеры",
        partners: [
            { id: 'pp1', name: "Fine Foods", logoUrl: "https://picsum.photos/id/42/200/100" },
            { id: 'pp2', name: "Drink Co", logoUrl: "https://picsum.photos/id/60/200/100" },
            { id: 'pp3', name: "Sweet Life", logoUrl: "https://picsum.photos/id/75/200/100" },
        ]
    },
    {
        title: "Последние партнеры",
        partners: [
            { id: 'lp1', name: "Decor Studio", logoUrl: "https://picsum.photos/id/119/200/100" },
            { id: 'lp2', name: "Sound Pro", logoUrl: "https://picsum.photos/id/133/200/100" },
            { id: 'lp3', name: "Light Masters", logoUrl: "https://picsum.photos/id/160/200/100" },
        ]
    }
];
