"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Ticket, Timer } from "lucide-react";
import { useTranslations } from "next-intl";

type StopId = "ballestas" | "icaBodega" | "huacachina" | "nazcaLines";

type Stop = {
  id: StopId;
  image: string;
  mapUrl: string;
  alignRight?: boolean;
};

const STOPS: Stop[] = [
  {
    id: "ballestas",
    image: "/img/sur-islas-ballestas.jpg",
    mapUrl: "https://maps.app.goo.gl/XXXXXXXX", // Paracas / muelle Islas Ballestas
    alignRight: false,
  },
  {
    id: "icaBodega",
    image: "/img/sur-bodega-ica.jpg",
    mapUrl: "https://maps.app.goo.gl/XXXXXXXX", // zona bodegas Ica (Nieto / CulturPisco)
    alignRight: true,
  },
  {
    id: "huacachina",
    image: "/img/sur-huacachina.jpg",
    mapUrl: "https://maps.app.goo.gl/XXXXXXXX", // Oasis de Huacachina
    alignRight: false,
  },
  {
    id: "nazcaLines",
    image: "/img/sur-lineas-nazca.jpg",
    mapUrl: "https://maps.app.goo.gl/XXXXXXXX", // Aeródromo de Nasca
    alignRight: true,
  },
];

export default function IcaNazcaRouteSection() {
  const t = useTranslations("Destinations.icaNazca");

  return (
    <section id="sur-ica-nazca" className="bg-zinc-50 py-16">
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

      {/* LISTA DE PARADAS */}
      <div className="mx-auto mt-10 max-w-6xl space-y-8 px-4">
        {STOPS.map((stop, index) => {
          const alignRight = stop.alignRight;

          return (
            <article
              key={stop.id}
              className={`flex flex-col gap-5 rounded-2xl border border-zinc-100 bg-white shadow-sm md:flex-row md:items-stretch ${
                alignRight ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Imagen */}
              <div className="relative h-52 w-full overflow-hidden rounded-t-2xl md:h-auto md:w-2/5 md:rounded-l-2xl md:rounded-tr-none">
                <Image
                  src={stop.image}
                  alt={t(`stops.${stop.id}.name`)}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Texto */}
              <div className="flex flex-1 flex-col justify-between gap-3 p-5 md:w-3/5">
                <div className="space-y-2">
                  <span className="inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-500">
                    {t("stopLabel", { number: index + 1 })}
                  </span>

                  <h3 className="text-lg font-semibold text-zinc-900 md:text-xl">
                    {t(`stops.${stop.id}.name`)}
                  </h3>

                  <p className="text-sm text-zinc-600 md:text-sm">
                    {t(`stops.${stop.id}.description`)}
                  </p>

                  {/* Detalles rápidos */}
                  <dl className="mt-3 grid gap-3 text-xs text-zinc-600 md:grid-cols-3 md:text-sm">
                    <div className="flex items-start gap-2">
                      <Clock className="mt-[2px] h-4 w-4 text-rose-500" />
                      <div>
                        <dt className="font-semibold text-zinc-800">
                          {t("labels.schedule")}
                        </dt>
                        <dd>{t(`stops.${stop.id}.schedule`)}</dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Ticket className="mt-[2px] h-4 w-4 text-rose-500" />
                      <div>
                        <dt className="font-semibold text-zinc-800">
                          {t("labels.price")}
                        </dt>
                        <dd>{t(`stops.${stop.id}.price`)}</dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Timer className="mt-[2px] h-4 w-4 text-rose-500" />
                      <div>
                        <dt className="font-semibold text-zinc-800">
                          {t("labels.duration")}
                        </dt>
                        <dd>{t(`stops.${stop.id}.duration`)}</dd>
                      </div>
                    </div>
                  </dl>
                </div>

                {/* CTAs */}
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href={stop.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 md:text-sm"
                  >
                    <MapPin className="h-4 w-4" />
                    {t("buttons.map")}
                  </Link>

                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 rounded-full border border-rose-200 px-4 py-2 text-xs font-semibold text-rose-600 transition hover:border-rose-500 hover:text-rose-700 md:text-sm"
                  >
                    {t("buttons.tour")}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* CTA FINAL */}
      <div className="mt-10 flex justify-center px-4">
        <div className="max-w-3xl rounded-2xl border border-rose-100 bg-rose-50 px-6 py-5 text-center text-sm text-rose-900 md:text-base">
          {t("outro")}
        </div>
      </div>
    </section>
  );
}
