// components/contact/MilyProfileSection.tsx
"use client";

import { useTranslations } from "next-intl";
import { MapPin, Languages, Briefcase } from "lucide-react";

export default function MilyProfileSection() {
  const t = useTranslations("Contact.profile");

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Título */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">
            {t("eyebrow")}
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-zinc-900 md:text-3xl">
            {t("title")}
          </h2>

          <p className="mt-4 text-sm text-zinc-600 md:text-base">
            {t("intro")}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Experiencia */}
          <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition hover:shadow-md">
            <Briefcase className="h-6 w-6 text-rose-500" />
            <h3 className="mt-4 font-semibold text-zinc-900">
              {t("experience.title")}
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              {t("experience.text")}
            </p>
          </div>

          {/* Lugares */}
          <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition hover:shadow-md">
            <MapPin className="h-6 w-6 text-rose-500" />
            <h3 className="mt-4 font-semibold text-zinc-900">
              {t("places.title")}
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              {t("places.text")}
            </p>
          </div>

          {/* Idiomas */}
          <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition hover:shadow-md">
            <Languages className="h-6 w-6 text-rose-500" />
            <h3 className="mt-4 font-semibold text-zinc-900">
              {t("languages.title")}
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              {t("languages.text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
