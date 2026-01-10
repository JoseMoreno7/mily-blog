import DestinationsHero from "@/components/common/DestinationsHero";
import BarrancoBohemianSection from "@/components/destinations/BarrancoBohemianSection";
import DestinationsIntroSection from "@/components/destinations/DestinationsIntroSection";
import IcaNazcaRouteSection from "@/components/destinations/IcaNazcaRouteSection";
import LimaHistoricCenterSection from "@/components/destinations/LimaHistoricCenterSection";
import MirafloresCoastSection from "@/components/destinations/MirafloresCoastSection";
import WaterCircuitSection from "@/components/destinations/WaterCircuitSection";

export default function DestinosPage() {
  return (
    <div className="space-y-12 pb-16">
      <DestinationsHero/>
      <DestinationsIntroSection />
      <LimaHistoricCenterSection />
      <MirafloresCoastSection/>
      <BarrancoBohemianSection />
      <WaterCircuitSection />
      <IcaNazcaRouteSection />
    </div>
  );
}
