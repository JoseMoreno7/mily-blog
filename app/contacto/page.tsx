// app/[locale]/contacto/page.tsx
import ContactHero from "@/components/common/ContactHero";
import MilyProfileSection from "@/components/contact/MilyProfileSection";

export default function ContactoPage() {
  return (
    <div className="space-y-12 pb-16">
      <ContactHero/>
      <MilyProfileSection/>
    </div>
  );
}