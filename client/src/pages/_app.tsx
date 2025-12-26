import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope, Cormorant_Garamond } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${manrope.variable} ${cormorant.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
