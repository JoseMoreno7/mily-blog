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
    id: "cuyChactado",
    image: "/img/gast-sierra-cuy-chactado.jpg",
    historyAnchor: "cuy-chactado",
  },
  {
    id: "pachamanca",
    image: "/img/gast-sierra-pachamanca.jpg",
    historyAnchor: "pachamanca",
  },
  {
    id: "rocotoRelleno",
    image: "/img/gast-sierra-rocoto-relleno.jpg",
    historyAnchor: "rocoto-relleno",
  },
  {
    id: "chicharronMote",
    image: "/img/gast-sierra-chicharron-mote.jpg",
    historyAnchor: "chicharron-mote",
  },
  {
    id: "truchaFrita",
    image: "/img/gast-sierra-trucha-frita.jpg",
    historyAnchor: "trucha-frita",
  },
  {
    id: "sopaMote",
    image: "/img/gast-sierra-sopa-mote.jpg",
    historyAnchor: "sopa-mote",
  },
  {
    id: "quesoHelado",
    image: "/img/gast-sierra-queso-helado.jpg",
    historyAnchor: "queso-helado-arequipeno",
  },
  {
    id: "calentito",
    image: "/img/gast-sierra-calentito.jpg",
    historyAnchor: "calentito",
  },
  {
    id: "chichaJora",
    image: "/img/gast-sierra-chicha-jora.jpg",
    historyAnchor: "chicha-jora",
  },
];

type Place = {
  id: string;
  mapUrl: string;
};

const PLACES: Place[] = [
  {
    id: "panchita",
    mapUrl: "https://maps.app.goo.gl/XXXXXXXX",
  },
  {
    id: "elRocoto",
    mapUrl: "https://maps.app.goo.gl/XXXXXXXX",
  },
  {
    id: "laCusquenita",
    mapUrl: "https://maps.app.goo.gl/XXXXXXXX",
  },
  {
    id: "huancahuasi",
    mapUrl: "https://maps.app.goo.gl/XXXXXXXX",
  },
];

export default function GastronomySierraSection() {
  const t = useTranslations("Gastronomy.sierra");

  return (
    <section id="sierra" className="bg-emerald-50/60 py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
          {t("eyebrow")}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-wide text-emerald-950 md:text-3xl">
          {t("title")}
        </h2>
        <div className="mt-3 flex justify-center">
          <span className="h-[3px] w-24 rounded-full bg-emerald-500" />
        </div>
        <p className="mt-4 text-sm text-emerald-900/80 md:text-base">
          {t("intro")}
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-8 px-4 md:grid-cols-2">
        {DISHES.map((dish) => (
          <article
            key={dish.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm"
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
                <h3 className="text-lg font-semibold text-emerald-950 md:text-xl">
                  {t(`dishes.${dish.id}.name`)}
                </h3>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                  {t("labels.ingredients")}
                </h4>
                <p className="text-sm text-emerald-900/80">
                  {t(`dishes.${dish.id}.ingredients`)}
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                  {t("labels.preparation")}
                </h4>
                <p className="text-sm text-emerald-900/80">
                  {t(`dishes.${dish.id}.preparation`)}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={`/historia#${dish.historyAnchor}`}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-200 px-4 py-2 text-xs font-semibold text-emerald-700 transition hover:border-emerald-500 hover:text-emerald-800 md:text-sm"
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
        <div className="rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-100 p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-emerald-950 md:text-xl">
                {t("places.title")}
              </h3>
              <p className="mt-1 text-sm text-emerald-900/80 md:text-base">
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
                  <p className="text-sm font-semibold text-emerald-950">
                    {t(`places.${place.id}.name`)}
                  </p>
                  <p className="text-xs text-emerald-900/80 md:text-sm">
                    {t(`places.${place.id}.description`)}
                  </p>
                </div>

                <Link
                  href={place.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-[96px] items-center justify-center rounded-full bg-emerald-600 px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm transition hover:bg-emerald-700 whitespace-nowrap"
                >
                  {t("places.viewOnMap")}
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-emerald-900/70 md:text-sm">
            {t("places.note")}
          </p>
        </div>
      </div>
    </section>
  );
}