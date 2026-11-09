import type { Metadata } from "next";
import { Anton, Newsreader, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
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
