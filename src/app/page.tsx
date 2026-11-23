import InteractiveHeroPortrait from "@/components/InteractiveHeroPortrait";
import AfterHours from "@/components/AfterHours";
import FooterNameSection from "@/components/FooterNameSection";

export default function Home() {
  return (
    <main className="bg-[#040810] min-h-screen text-[#efeade] overflow-x-hidden selection:bg-[#efeade] selection:text-[#040810]">
      {/* 1. Hero Halftone Card (60 FPS GPU-accelerated) */}
      <InteractiveHeroPortrait />

      {/* 2. After Hours 3D & Video Chapters (Directly after Hero) */}
      <AfterHours />

      {/* 3. Footer with Textile Name Banner & 3D Envelope */}
      <FooterNameSection />
    </main>
  );
}
