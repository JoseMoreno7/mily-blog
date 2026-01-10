"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

type DishId =
  | "ceviche"
  | "lecheTigre"
  | "arrozMariscos"
  | "causaLangostinos"
  | "piscoSour"
  | "chichaMorada";

type Dish = {
  id: DishId;
  image: string;
  kind: "dish" | "drink";
  historyAnchor?: string;
};

type RecommendationId =
  | "puntoAzul"
  | "laMar"
  | "mercado"
  | "alFresco"
  | "huarique";

type Recommendation = {
  id: RecommendationId;
  name: string;
  mapUrl: string;
};

const COAST_DISHES: Dish[] = [
  {
    id: "ceviche",
    image: "/img/gastro-ceviche.jpg",
    kind: "dish",
    historyAnchor: "ceviche",
  },
  {
    id: "lecheTigre",
    image: "/img/gastro-leche-tigre.jpg",
    kind: "drink",
    historyAnchor: "leche-tigre",
  },
  {
    id: "arrozMariscos",
    image: "/img/gastro-arroz-mariscos.jpg",
    kind: "dish",
    historyAnchor: "arroz-mariscos",
  },
  {
    id: "causaLangostinos",
    image: "/img/gastro-causa-langostinos.jpg",
    kind: "dish",
    historyAnchor: "causa-langostinos",
  },
  {
    id: "piscoSour",
    image: "/img/gastro-pisco-sour.jpg",
    kind: "drink",
    historyAnchor: "pisco-sour",
  },
  {
    id: "chichaMorada",
    image: "/img/gastro-chicha-morada.jpg",
    kind: "drink",
    historyAnchor: "chicha-morada",
  },
];

const RECOMMENDED_PLACES: Recommendation[] = [
  {
    id: "puntoAzul",
    name: "Punto Azul (Miraflores)",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Punto+Azul+Miraflores+Lima+Peru",
  },
  {
    id: "laMar",
    name: "La Mar Cebichería (Miraflores)",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=La+Mar+Cebicheria+Miraflores+Lima+Peru",
  },
  {
    id: "mercado",
    name: "El Mercado (Miraflores)",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=El+Mercado+restaurante+Miraflores+Lima+Peru",
  },
  {
    id: "alFresco",
    name: "Al Fresco (Malecón de Miraflores)",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Al+Fresco+cevicheria+Miraflores+Lima+Peru",
  },
  {
    id: "huarique",
    name: "Huariques de ceviche en Lima",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=cevicheria+huarique+Lima+Peru",
  },
];

export default function GastronomyCoastSection() {
  const t = useTranslations("Gastronomy.coast");

  return (
    <section className="bg-white py-16">
      {/* Cabecera sección costa */}
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-500">
          {t("eyebrow")}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-wide text-zinc-900 md:text-3xl">
          {t("title")}
        </h2>
        <div className="mt-3 flex justify-center">
          <span className="h-[3px] w-24 rounded-full bg-rose-500" />
        </div>
        <p className="mt-4 text-sm text-zinc-600 md:text-base">
          {t("intro")}
        </p>
      </div>

      {/* Grid de platos de la costa */}
      <div className="mx-auto mt-10 grid max-w-6xl gap-8 px-4 md:grid-cols-2">
        {COAST_DISHES.map((dish) => (
          <article
            key={dish.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm"
          >
            {/* Imagen */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={dish.image}
                alt={t(`dishes.${dish.id}.name`)}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
                {t(`dishes.${dish.id}.badge`)}
              </span>
            </div>

            {/* Contenido texto */}
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-zinc-900 md:text-xl">
                  {t(`dishes.${dish.id}.name`)}
                </h3>
                <p className="text-sm text-zinc-600">
                  {t(`dishes.${dish.id}.tagline`)}
                </p>
              </div>

              {/* Ingredientes */}
              <div className="space-y-1">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-rose-500">
                  {t("labels.ingredients")}
                </h4>
                <p className="text-sm text-zinc-700">
                  {t(`dishes.${dish.id}.ingredients`)}
                </p>
              </div>

              {/* Preparación */}
              <div className="space-y-1">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-rose-500">
                  {t("labels.preparation")}
                </h4>
                <p className="text-sm text-zinc-700">
                  {t(`dishes.${dish.id}.preparation`)}
                </p>
              </div>

              {/* Botón historia si hay anchor definido */}
              {dish.historyAnchor && (
                <div className="pt-2">
                  <Link
                    href={`/historia#gastro-${dish.historyAnchor}`}
                    className="inline-flex items-center gap-2 rounded-full border border-rose-200 px-4 py-2 text-xs font-semibold text-rose-600 transition hover:border-rose-500 hover:text-rose-700 md:text-sm"
                  >
                    {t(`dishes.${dish.id}.historyCta`)}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

        {/* Recomendaciones finales de lugares en Lima */}
      <div className="mx-auto mt-16 max-w-5xl px-4">
        <div className="rounded-3xl bg-gradient-to-r from-rose-50 via-pink-50 to-rose-100 p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 md:text-xl">
                {t("recommendations.title")}
              </h3>
              <p className="mt-1 text-sm text-zinc-700 md:text-base">
                {t("recommendations.subtitle")}
              </p>
            </div>
          </div>

          {/* Tarjetas responsive, todas con misma estructura */}
          <div className="mt-5 grid items-stretch gap-4 md:grid-cols-2">
            {RECOMMENDED_PLACES.map((rec) => (
              <div
                key={rec.id}
                className="flex h-full items-center justify-between gap-3 rounded-2xl bg-white/85 px-4 py-3 shadow-sm"
              >
                <div className="flex-1 space-y-1 pr-2">
                  <p className="text-sm font-semibold text-zinc-900">
                    {rec.name}
                  </p>
                  <p className="text-xs text-zinc-600 md:text-sm">
                    {t(`recommendations.items.${rec.id}.note`)}
                  </p>
                </div>

                <Link
                  href={rec.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-[96px] items-center justify-center rounded-full bg-rose-500 px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm transition hover:bg-rose-600 whitespace-nowrap"
                >
                  {t("recommendations.viewOnMap")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
