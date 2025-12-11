// components/home/HistoryPreviewSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

type PeriodId = "preinca" | "inca" | "virreinato" | "republica";

type Period = {
  id: PeriodId;
  image: string;
};

const periods: Period[] = [
  {
    id: "preinca",
    image: "/img/hist-preinca.jpg",       // 👉 pon aquí tu imagen
  },
  {
    id: "inca",
    image: "/img/hist-inca.jpg",
  },
  {
    id: "virreinato",
    image: "/img/hist-virreinato.jpg",
  },
  {
    id: "republica",
    image: "/img/hist-republica.jpg",
  },
];

export default function HistoryPreviewSection() {
  const t = useTranslations("Home.historyPreview");

  return (
    <section className="bg-white py-16">
      {/* Título y subtítulo */}
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-2xl font-semibold tracking-wide text-zinc-900 md:text-3xl">
          {t("title")}
        </h2>

        <div className="mt-3 flex justify-center">
          <span className="h-[3px] w-24 rounded-full bg-rose-500" />
        </div>

        <p className="mt-4 text-sm text-zinc-600 md:text-base">
          {t("subtitle")}
        </p>
      </div>

      {/* Grid de etapas */}
      <div className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 md:grid-cols-2">
        {periods.map((period) => (
          <article
            key={period.id}
            className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Imagen arriba */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={period.image}
                alt={t(`periods.${period.id}.title`)}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Texto */}
            <div className="flex flex-1 flex-col gap-2 p-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
                {t(`periods.${period.id}.step`)}
              </span>

              <h3 className="text-lg font-semibold text-zinc-900">
                {t(`periods.${period.id}.title`)}
              </h3>

              <p className="text-sm text-zinc-600">
                {t(`periods.${period.id}.description`)}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <Link
          href="/historia"
          className="rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-rose-700"
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}
