"use client";

import { useTranslations } from "next-intl";
import { MapPin, Sun, Compass } from "lucide-react";

export default function DestinationsIntroSection() {
  const t = useTranslations("Destinations.intro");

  const highlights = [
    {
      icon: MapPin,
      titleKey: "cards.lima.title",
      textKey: "cards.lima.text",
    },
    {
      icon: Sun,
      titleKey: "cards.surChico.title",
      textKey: "cards.surChico.text",
    },
    {
      icon: Compass,
      titleKey: "cards.icaNazca.title",
      textKey: "cards.icaNazca.text",
    },
  ];

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        {/* Título + subtítulo */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-500">
            {t("eyebrow")}
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-zinc-900 md:text-3xl">
            {t("title")}
          </h2>

          <div className="mt-3 flex justify-center">
            <span className="h-[3px] w-24 rounded-full bg-rose-500" />
          </div>

          <p className="mt-4 text-sm text-zinc-600 md:text-base">
            {t("description")}
          </p>
        </div>

        {/* Tarjetitas de resumen */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.titleKey}
                className="flex flex-col gap-2 rounded-xl border border-zinc-100 bg-rose-50/40 p-4 shadow-sm"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-100">
                  <Icon className="h-4 w-4 text-rose-600" />
                </div>
                <h3 className="text-sm font-semibold text-zinc-900 md:text-base">
                  {t(item.titleKey)}
                </h3>
                <p className="text-xs text-zinc-600 md:text-sm">
                  {t(item.textKey)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
