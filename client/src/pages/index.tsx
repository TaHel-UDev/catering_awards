import Hero from "@/components/elements/hero/hero";


import Winners from "@/components/elements/winners/winners";
import Registrations from "@/components/elements/registrations/registrations";
import Gallery from "@/components/elements/gallery/gallery";
import Reviews from "@/components/elements/reviews/reviews";
import Partners from "@/components/elements/partners/partners";
import Footer from "@/components/elements/footer/footer";

import Head from "next/head";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-950 font-sans text-neutral-200 selection:bg-gold-500/20 selection:text-gold-200">
      <Head>
        <title>Премия «Кейтеринг года»</title>
        <meta name="description" content="Независимая ежегодная премия «Кейтеринг года», отмечающая лучшие компании российской кейтеринг-индустрии." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content="Премия «Кейтеринг года»" />
        <meta property="og:description" content="Независимая ежегодная премия, отмечающая лучшие компании российской кейтеринг-индустрии." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://catering-awards.ru" />
        <meta property="og:image" content="/static/og-image.jpg" />
      </Head>
      <Hero />
      <Registrations />
      <Winners />
      <Gallery />
      <Reviews />
      <Partners />
      {/* <UpcomingEvent />
      <About /> */}

      <section className="py-32 bg-gold-600 relative overflow-hidden">

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4 leading-tight">
              Станьте частью истории<br />кейтеринг-индустрии
            </h2>
            <p className="text-gold-100/90 text-lg max-w-xl">
              Заявите о себе, получите признание экспертов и расширьте деловые связи на главной премии года.
            </p>
          </div>
          <div className="shrink-0">
            <Button
              className="bg-white text-black/90 shadow-2xl"
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Подать заявку
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
