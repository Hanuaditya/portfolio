import Header from "@/components/Header";
import InteractiveHeroPortrait from "@/components/InteractiveHeroPortrait";
import InnomaticsShowcase from "@/components/InnomaticsShowcase";
import InteractiveLoupeSection from "@/components/InteractiveLoupeSection";
import ExperienceSection from "@/components/ExperienceSection";
import FooterNameSection from "@/components/FooterNameSection";

export default function Home() {
  return (
    <main className="bg-[#050811] min-h-screen text-[#efeade] overflow-x-hidden selection:bg-[#3d7edb] selection:text-white">
      {/* Fixed Navigation Header */}
      <Header />

      {/* 1. Hero Halftone Portrait (Uses /img/full.png) */}
      <InteractiveHeroPortrait imageSrc="/img/full.png" />

      {/* 2. Innomatics Lab Showcase (Uses /img/innomatics-lab-flat.jpg & /img/innomatics-lab-3d.jpg) */}
      <InnomaticsShowcase />

      {/* 3. Interactive 3D Optical Loupe (Uses /img/magnifying-asset.jpg) */}
      <InteractiveLoupeSection />

      {/* 4. Experience & Toolkit */}
      <ExperienceSection />

      {/* 5. Woven Name Footer (Uses /img/name.png) */}
      <FooterNameSection />
    </main>
  );
}
