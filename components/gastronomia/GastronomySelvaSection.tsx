"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

type Dish = {
  id: string;
  image: string;
  historyAnchor: string;
};

const DISHES: Dish[] = [
  {
    id: "juane",
    image: "/img/gast-selva-juane.jpg",
    historyAnchor: "juane",
  },
  {
    id: "patarashca",
    image: "/img/gast-selva-patarashca.jpg",
    historyAnchor: "patarashca",
  },
  {
    id: "tacacho",
    image: "/img/gast-selva-tacacho-cecina.jpg",
    historyAnchor: "tacacho-cecina",
  },
  {
    id: "suriFrito",
    image: "/img/gast-selva-suri-frito.jpg",
    historyAnchor: "suri-frito",
  },
  {
    id: "inchicapi",
    image: "/img/gast-selva-inchicapi.jpg",
    historyAnchor: "inchicapi",
  },
  {
    id: "chilicano",
    image: "/img/gast-selva-chilicano.jpg",
    historyAnchor: "chilicano",
  },
  {
    id: "timbuche",
    image: "/img/gast-selva-timbuche.jpg",
    historyAnchor: "timbuche",
  },
  {
    id: "masato",
    image: "/img/gast-selva-masato.jpg",
    historyAnchor: "masato",
  },
  {
    id: "chapo",
    image: "/img/gast-selva-chapo.jpg",
    historyAnchor: "chapo",
  },
  {
    id: "aguajina",
    image: "/img/gast-selva-aguajina.jpg",
    historyAnchor: "aguajina",
  },
];

type Place = {
  id: string;
  mapUrl: string;
};

const PLACES: Place[] = [
  {
    id: "malabar",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Malabar+amazonica+Lima+Peru",
  },
  {
    id: "amaz",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Amaz+restaurante+Lima+Peru",
  },
  {
    id: "laPatarashca",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=La+Patarashca+restaurante+Lima+Peru",
  },
  {
    id: "elRinconcito",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=El+Rinconcito+Amazonico+Lima+Peru",
  },
];

export default function GastronomySelvaSection() {
  const t = useTranslations("Gastronomy.selva");

  return (
    <section id="selva" className="bg-amber-50/60 py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
          {t("eyebrow")}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-wide text-amber-950 md:text-3xl">
          {t("title")}
        </h2>
        <div className="mt-3 flex justify-center">
          <span className="h-[3px] w-24 rounded-full bg-amber-500" />
        </div>
        <p className="mt-4 text-sm text-amber-900/80 md:text-base">
          {t("intro")}
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-8 px-4 md:grid-cols-2">
        {DISHES.map((dish) => (
          <article
            key={dish.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={dish.image}
                alt={t(`dishes.${dish.id}.name`)}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
                {t(`dishes.${dish.id}.type`)}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-5">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-amber-950 md:text-xl">
                  {t(`dishes.${dish.id}.name`)}
                </h3>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                  {t("labels.ingredients")}
                </h4>
                <p className="text-sm text-amber-900/80">
                  {t(`dishes.${dish.id}.ingredients`)}
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                  {t("labels.preparation")}
                </h4>
                <p className="text-sm text-amber-900/80">
                  {t(`dishes.${dish.id}.preparation`)}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={`/historia#${dish.historyAnchor}`}
                  className="inline-flex items-center gap-2 rounded-full border border-amber-200 px-4 py-2 text-xs font-semibold text-amber-700 transition hover:border-amber-500 hover:text-amber-800 md:text-sm"
                >
                  {t("buttons.history")}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-5xl px-4">
        <div className="rounded-3xl bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-100 p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-amber-950 md:text-xl">
                {t("places.title")}
              </h3>
              <p className="mt-1 text-sm text-amber-900/80 md:text-base">
                {t("places.intro")}
              </p>
            </div>
          </div>

          <div className="mt-5 grid items-stretch gap-4 md:grid-cols-2">
            {PLACES.map((place) => (
              <div
                key={place.id}
                className="flex h-full items-center justify-between gap-3 rounded-2xl bg-white/85 px-4 py-3 shadow-sm"
              >
                <div className="flex-1 space-y-1 pr-2">
                  <p className="text-sm font-semibold text-amber-950">
                    {t(`places.${place.id}.name`)}
                  </p>
                  <p className="text-xs text-amber-900/80 md:text-sm">
                    {t(`places.${place.id}.description`)}
                  </p>
                </div>

                <Link
                  href={place.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-[96px] items-center justify-center rounded-full bg-amber-600 px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm transition hover:bg-amber-700 whitespace-nowrap"
                >
                  {t("places.viewOnMap")}
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-amber-900/70 md:text-sm">
            {t("places.note")}
          </p>
        </div>
      </div>
    </section>
  );
}