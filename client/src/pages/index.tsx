import Hero from "@/components/elements/hero/hero";
import UpcomingEvent from "@/components/elements/upcoming_event/upcoming_event";
import About from "@/components/elements/about/about";
import Winners from "@/components/elements/winners/winners";
import Registrations from "@/components/elements/registrations/registrations";
import Gallery from "@/components/elements/gallery/gallery";
import Partners from "@/components/elements/partners/partners";
import Footer from "@/components/elements/footer/footer";

import Head from "next/head";

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
      <Partners />
      {/* <UpcomingEvent />
      <About /> */}

      <Footer />
    </div>
  );
}
