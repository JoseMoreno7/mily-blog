import DestinationsHero from "@/components/common/DestinationsHero";
import DestinationsIntroSection from "@/components/destinations/DestinationsIntroSection";
import LimaHistoricCenterSection from "@/components/destinations/LimaHistoricCenterSection";

export default function DestinosPage() {
  return (
    <div className="space-y-12 pb-16">
      <DestinationsHero/>
      <DestinationsIntroSection />
      <LimaHistoricCenterSection />
    </div>
  );
}
