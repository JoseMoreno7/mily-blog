// app/[locale]/historia/page.tsx
import HistoryHero from "@/components/common/HistoryHero";
import HistoryIntroSecction from "@/components/history/HistoryIntroSection";
import IncaSection from "@/components/history/IncaSection";
import PreIncaSection from "@/components/history/PreIncaSection";
import RepublicaSection from "@/components/history/RepublicaSection";
import VirreinatoSection from "@/components/history/VirreinatoSection";

export default function HistoriaPage() {
  return (
    <div className="space-y-12 pb-16">
      <HistoryHero/>
      <HistoryIntroSecction/>
      <PreIncaSection/>
      <IncaSection/>
      <VirreinatoSection/>
      <RepublicaSection/>
    </div>
  );
}