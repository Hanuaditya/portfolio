import WovenTextBanner from "@/components/WovenTextBanner";

export default function FooterNameSection() {
  return (
    <footer className="w-full bg-[#07090d] border-t border-[#18202d] pt-8 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs font-mono text-[#8a95a5]">
        <span>© 2026 HANUMA ADITYA</span>
        <span>INTERACTIVE TEXTILE ENGINE</span>
        <a href="#hero" className="hover:text-white transition-colors">
          BACK TO TOP [↑]
        </a>
      </div>

      <div className="w-full my-4">
        <WovenTextBanner imageSrc="/hanuma-aditya-loom.png" />
      </div>
    </footer>
  );
}
