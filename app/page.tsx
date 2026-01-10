// app/page.tsx
import PageHero from "@/components/common/PageHero";
import BestDestinationsSection from "@/components/home/BestDestinationsSection";
import HeroCarousel from "@/components/home/HeroCarousel";
import HistoryPreviewSection from "@/components/home/HistoryPreviewSection";
import AboutMiniSection from "@/components/home/AboutMiniSection";

export default function HomePage() {
  return (
    <div className="space-y-12 pb-16">
      <PageHero />
      <BestDestinationsSection/>
      <HeroCarousel />
      <HistoryPreviewSection />
      <AboutMiniSection />
    </div>
  );
}
