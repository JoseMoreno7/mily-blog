"use client";

import { useTranslations } from "next-intl";
import { UtensilsCrossed, Waves, Mountain, Leaf } from "lucide-react";

export default function GastronomyIntroSection() {
  const t = useTranslations("Gastronomy.intro");

  const regions = [
    {
      id: "coast",
      icon: Waves,
      labelKey: "regions.coast.label",
      descKey: "regions.coast.description",
    },
    {
      id: "andes",
      icon: Mountain,
      labelKey: "regions.andes.label",
      descKey: "regions.andes.description",
    },
    {
      id: "jungle",
      icon: Leaf,
      labelKey: "regions.jungle.label",
      descKey: "regions.jungle.description",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Eyebrow + título */}
        <div className="text-center">
          <p className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-rose-500">
            <UtensilsCrossed className="h-4 w-4" />
            {t("eyebrow")}
          </p>

          <h1 className="mt-3 text-2xl font-semibold tracking-wide text-zinc-900 md:text-3xl lg:text-4xl">
            {t("title")}
          </h1>

          <p className="mt-4 text-sm text-zinc-600 md:text-base max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Texto principal */}
        <div className="mt-8 max-w-4xl mx-auto space-y-4 text-sm text-zinc-700 md:text-base">
          <p>{t("paragraph1")}</p>
          <p>{t("paragraph2")}</p>
        </div>

        {/* Costa – Sierra – Selva resumen */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {regions.map((region) => {
            const Icon = region.icon;
            return (
              <article
                key={region.id}
                className="flex flex-col gap-2 rounded-2xl border border-rose-100 bg-rose-50/60 p-4 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                    <Icon className="h-4 w-4 text-rose-500" />
                  </span>
                  <h2 className="text-sm font-semibold text-zinc-900 md:text-base">
                    {t(region.labelKey)}
                  </h2>
                </div>
                <p className="text-xs text-zinc-700 md:text-sm">
                  {t(region.descKey)}
                </p>
              </article>
            );
          })}
        </div>

        {/* Nota de transición hacia las secciones siguientes */}
        <div className="mt-10 max-w-3xl mx-auto rounded-2xl bg-rose-50 px-5 py-4 text-center text-xs text-rose-900 md:text-sm">
          {t("next")}
        </div>
      </div>
    </section>
  );
}
