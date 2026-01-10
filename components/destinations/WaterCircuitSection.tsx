"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Ticket, Sparkles, Camera } from "lucide-react";
import { useTranslations } from "next-intl";

type Fountain = {
  id: string;
  image: string;
  highlight?: boolean;
};

const FOUNTAINS: Fountain[] = [
  {
    id: "fantasia",
    image: "/img/circuito-fuente-fantasia.jpg",
    highlight: true, // show principal
  },
  {
    id: "laberinto",
    image: "/img/circuito-fuente-laberinto.jpg",
  },
  {
    id: "tunelSorpresas",
    image: "/img/circuito-fuente-tunel-sorpresas.jpg",
  },
  {
    id: "ninos",
    image: "/img/circuito-fuente-ninos.jpg",
  },
  {
    id: "armonia",
    image: "/img/circuito-fuente-armonia.jpg",
  },
  {
    id: "arcoIris",
    image: "/img/circuito-fuente-arco-iris.jpg",
  },
  {
    id: "magica",
    image: "/img/circuito-fuente-magica.jpg",
  },
  {
    id: "ilusion",
    image: "/img/circuito-fuente-ilusion.jpg",
  },
  {
    id: "cupula",
    image: "/img/circuito-fuente-cupula.jpg",
  },
  {
    id: "rioDeseos",
    image: "/img/circuito-fuente-rio-deseos.jpg",
  },
  {
    id: "vida",
    image: "/img/circuito-fuente-vida.jpg",
  },
  {
    id: "union",
    image: "/img/circuito-fuente-union.jpg",
  },
  {
    id: "tradiciones",
    image: "/img/circuito-fuente-tradiciones.jpg",
  },
  {
    id: "logia",
    image: "/img/circuito-fuente-logia.jpg",
  }
];

export default function WaterCircuitSection() {
  const t = useTranslations("Destinations.waterCircuit");

  return (
    <section
        id="circuito-magico"
        className="bg-white py-16 scroll-mt-28 md:scroll-mt-32">
      {/* CABECERA */}
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

      {/* 1) PARADA: ESTADIO NACIONAL & PARQUE DE LA RESERVA */}
      <div className="mx-auto mt-10 max-w-6xl space-y-6 px-4">
        {/* Estadio Nacional (solo vista exterior) */}
        <article className="flex flex-col gap-5 rounded-2xl border border-zinc-100 bg-white shadow-sm md:flex-row md:items-stretch">
          <div className="relative h-52 w-full overflow-hidden rounded-t-2xl md:h-auto md:w-1/2 md:rounded-l-2xl md:rounded-tr-none">
            <Image
              src="/img/circuito-estadio-nacional.jpg"
              alt={t("stops.estadio.name")}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between gap-3 p-5 md:w-1/2">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-500">
                <Camera className="h-4 w-4" />
                {t("stops.estadio.badge")}
              </span>

              <h3 className="text-lg font-semibold text-zinc-900 md:text-xl">
                {t("stops.estadio.name")}
              </h3>

              <p className="text-sm text-zinc-600">
                {t("stops.estadio.description")}
              </p>

              <dl className="mt-3 grid gap-3 text-xs text-zinc-600 md:grid-cols-2 md:text-sm">
                <div>
                  <dt className="font-semibold text-zinc-800">
                    {t("labels.schedule")}
                  </dt>
                  <dd>{t("stops.estadio.schedule")}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-800">
                    {t("labels.price")}
                  </dt>
                  <dd>{t("stops.estadio.price")}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="https://maps.app.goo.gl/XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 md:text-sm"
              >
                <MapPin className="h-4 w-4" />
                {t("buttons.map")}
              </Link>
            </div>
          </div>
        </article>

        {/* Entrada Parque de la Reserva / Circuito */}
        <article className="flex flex-col gap-5 rounded-2xl border border-zinc-100 bg-white shadow-sm md:flex-row-reverse md:items-stretch">
          <div className="relative h-52 w-full overflow-hidden rounded-t-2xl md:h-auto md:w-1/2 md:rounded-r-2xl md:rounded-tl-none">
            <Image
              src="/img/dest-circuito-agua-2.jpg"
              alt={t("stops.parque.name")}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between gap-3 p-5 md:w-1/2">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                <Sparkles className="h-4 w-4" />
                {t("stops.parque.badge")}
              </span>

              <h3 className="text-lg font-semibold text-zinc-900 md:text-xl">
                {t("stops.parque.name")}
              </h3>

              <p className="text-sm text-zinc-600">
                {t("stops.parque.description")}
              </p>

              <dl className="mt-3 grid gap-3 text-xs text-zinc-600 md:grid-cols-2 md:text-sm">
                <div>
                  <dt className="font-semibold text-zinc-800">
                    {t("labels.schedule")}
                  </dt>
                  <dd>{t("stops.parque.schedule")}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-800">
                    {t("labels.price")}
                  </dt>
                  <dd>{t("stops.parque.price")}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="https://maps.app.goo.gl/XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 md:text-sm"
              >
                <MapPin className="h-4 w-4" />
                {t("buttons.map")}
              </Link>

              <Link
                href="https://www.circuitomagicodelagua.com.pe" // si luego quieres cambiar, lo cambias
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-rose-200 px-4 py-2 text-xs font-semibold text-rose-600 transition hover:border-rose-500 hover:text-rose-700 md:text-sm"
              >
                <Ticket className="h-4 w-4" />
                {t("buttons.tickets")}
              </Link>
            </div>
          </div>
        </article>
      </div>

      {/* 2) GRID DE LAS 13 FUENTES */}
      <div className="mx-auto mt-12 max-w-6xl px-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-zinc-900 md:text-xl">
            {t("fountainsTitle")}
          </h3>
          <p className="mt-3 text-sm text-zinc-600 md:text-base">
            {t("fountainsIntro")}
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {FOUNTAINS.map((fountain) => (
            <article
              key={fountain.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={fountain.image}
                  alt={t(`fountains.${fountain.id}.name`)}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                {fountain.highlight && (
                  <span className="absolute left-3 top-3 rounded-full bg-rose-600/90 px-3 py-1 text-xs font-semibold text-white shadow">
                    {t("highlightBadge")}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-2 p-4">
                <h4 className="text-sm font-semibold text-zinc-900 md:text-base">
                  {t(`fountains.${fountain.id}.name`)}
                </h4>
                <p className="text-xs text-zinc-600 md:text-sm">
                  {t(`fountains.${fountain.id}.description`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
