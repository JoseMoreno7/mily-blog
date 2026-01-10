// components/history/HistoryIntroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

type PeriodId = "preinca" | "inca" | "virreinato" | "republica";

type Period = {
  id: PeriodId;
  image: string;
};

const PERIODS: Period[] = [
  {
    id: "preinca",
    image: "/img/hist-preinca.jpg", // Cambia por tu foto (Caral, Paracas, etc.)
  },
  {
    id: "inca",
    image: "/img/hist-inca.jpg", // Machu Picchu, andenes, etc.
  },
  {
    id: "virreinato",
    image: "/img/hist-virreinato.jpg", // Balcones coloniales, Lima antigua
  },
  {
    id: "republica",
    image: "/img/hist-republica.jpg", // Congreso, Plaza San Martín, etc.
  },
];

export default function HistoryIntroSection() {
  const t = useTranslations("History.intro");

  return (
    <section className="bg-white py-16">
      {/* Intro */}
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-500">
          {t("eyebrow")}
        </p>

        <h1 className="mt-3 text-2xl font-semibold tracking-wide text-zinc-900 md:text-3xl lg:text-4xl">
          {t("title")}
        </h1>

        <div className="mt-3 flex justify-center">
          <span className="h-[3px] w-24 rounded-full bg-rose-500" />
        </div>

        <p className="mt-4 text-sm text-zinc-600 md:text-base">
          {t("subtitle")}
        </p>
      </div>

      {/* Tira de épocas: carrusel en mobile, grid en desktop */}
      <div className="mx-auto mt-10 max-w-6xl px-4">
        <div
          className="
            flex gap-4 overflow-x-auto pb-2
            md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0
          "
        >
          {PERIODS.map((period) => (
            <Link
              key={period.id}
              href={`/historia#${period.id}`}
              className="
                group flex-shrink-0 w-56 rounded-2xl border border-zinc-100 bg-white 
                shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md
                md:w-full
              "
            >
              {/* Imagen */}
              <div className="relative h-32 w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={period.image}
                  alt={t(`periods.${period.id}.title`)}
                  fill
                  sizes="(min-width: 768px) 25vw, 60vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Degradado suave abajo para ayudar al texto */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Texto */}
              <div className="space-y-2 px-4 py-3">
                <span className="inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-rose-500">
                  {t(`periods.${period.id}.date`)}
                </span>

                <h2 className="text-sm font-semibold text-zinc-900 md:text-base">
                  {t(`periods.${period.id}.title`)}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
