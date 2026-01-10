// app/[locale]/gastronomia/page.tsx
import GastronomyHero from "@/components/common/GastronomyHero";
import GastronomyCoastSection from "@/components/gastronomia/GastronomyCoastSection";
import GastronomyIntroSection from "@/components/gastronomia/GastronomyIntroSection";
import GastronomySelvaSection from "@/components/gastronomia/GastronomySelvaSection";
import GastronomySierraSection from "@/components/gastronomia/GastronomySierraSection";

export default function GastronomiaPage() {
  return (
    <div className="space-y-12 pb-16">
      <GastronomyHero/>
      <GastronomyIntroSection/>
      <GastronomyCoastSection/>
      <GastronomySierraSection/>
      <GastronomySelvaSection/>
    </div>
  );
}