// app/[locale]/contacto/page.tsx
import ContactHero from "@/components/common/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import MilyProfileSection from "@/components/contact/MilyProfileSection";

export default function ContactoPage() {
  return (
    <div className="space-y-12 pb-16">
      <ContactHero/>
      <MilyProfileSection/>
      <ContactFormSection />
    </div>
  );
}