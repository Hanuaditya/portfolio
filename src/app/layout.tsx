import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const anton = localFont({
  src: "../../public/fonts/anton_full_latin.woff2",
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const newsreader = localFont({
  src: [
    {
      path: "../../public/fonts/newsreader_latin_wght_normal_entry_subset-s.p.1g6a7_yqwawqx.woff2",
      weight: "200 800",
    },
    {
      path: "../../public/fonts/newsreader_italic_variable-s.0wdinsm5ohpci.woff2",
      weight: "200 800",
      style: "italic",
    },
  ],
  variable: "--font-newsreader",
  display: "swap",
});

const instrumentSans = localFont({
  src: "../../public/fonts/instrument_sans_latin_wdth_normal_entry_subset-s.p.3redu98f3-dg9.woff2",
  weight: "400 700",
  variable: "--font-instrument",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "../../public/fonts/jetbrains_mono_latin_wght_normal_entry_subset.p.3jmbz07ne0yg6.woff2",
  weight: "100 800",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hanuma Aditya — Creative Product Engineer",
  description: "Creative product engineer & full-stack AI developer. Building thoughtful web architectures, agentic systems, and generative interfaces.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${newsreader.variable} ${instrumentSans.variable} ${jetbrainsMono.variable} bg-[#07090d] text-[#efeade] selection:bg-[#efeade] selection:text-[#07090d] dark`}
    >
      <body className="antialiased overflow-x-hidden bg-[#07090d] text-[#efeade]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
