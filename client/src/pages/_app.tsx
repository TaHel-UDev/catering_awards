import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope, Jost } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

const jost = Jost({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${manrope.variable} ${jost.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
