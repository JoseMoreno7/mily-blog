"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Ticket } from "lucide-react";
import { useTranslations } from "next-intl";

type Place = {
  id: string;
  image: string;
  mapUrl: string;
};

const PLACES: Place[] = [
  {
    id: "parqueMariaReiche",
    image: "/img/dest-miraflores-maria-reiche.webp",
    mapUrl: "https://maps.app.goo.gl/XXXXXXXX",
  },
  {
    id: "parqueChino",
    image: "/img/dest-miraflores-parque-chino.jpg",
    mapUrl: "https://maps.app.goo.gl/XXXXXXXX",
  },
  {
    id: "parqueAmor",
    image: "/img/dest-miraflores-parque-amor.jpg",
    mapUrl: "https://maps.app.goo.gl/XXXXXXXX",
  },
  {
    id: "parqueIntihuatana",
    image: "/img/dest-miraflores-intihuatana.jpg",
    mapUrl: "https://maps.app.goo.gl/XXXXXXXX",
  },
  {
    id: "larcomar",
    image: "/img/dest-miraflores-larcomar.jpeg",
    mapUrl: "https://maps.app.goo.gl/XXXXXXXX",
  },
  {
    id: "puenteVillena",
    image: "/img/dest-miraflores-puente-villena.jpg",
    mapUrl: "https://maps.app.goo.gl/XXXXXXXX",
  },
];

export default function MirafloresCoastSection() {
  const t = useTranslations("Destinations.mirafloresCoast");

  return (
    <section
      id="miraflores"
      className="bg-white py-16 scroll-mt-28 md:scroll-mt-32"
    >
      {/* Cabecera de la sección */}
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

      {/* Itinerario zig-zag por el malecón */}
      <div className="mx-auto mt-10 max-w-6xl space-y-8 px-4">
        {PLACES.map((place, index) => {
          const reversed = index % 2 === 1;

          return (
            <article
              key={place.id}
              className={`flex flex-col gap-5 rounded-2xl border border-zinc-100 bg-white shadow-sm md:flex-row md:items-stretch ${
                reversed ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Imagen */}
              <div
                className={`relative h-52 w-full overflow-hidden rounded-t-2xl md:h-auto md:w-2/5 ${
                  reversed
                    ? "md:rounded-r-2xl md:rounded-bl-none"
                    : "md:rounded-l-2xl md:rounded-tr-none"
                }`}
              >
                <Image
                  src={place.image}
                  alt={t(`places.${place.id}.name`)}
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
                    {t(`places.${place.id}.name`)}
                  </h3>

                  <p className="text-sm text-zinc-600 md:text-sm">
                    {t(`places.${place.id}.description`)}
                  </p>

                  {/* Detalles rápidos */}
                  <dl className="mt-3 grid gap-3 text-xs text-zinc-600 md:grid-cols-2 md:text-sm">
                    <div className="flex items-start gap-2">
                      <Clock className="mt-[2px] h-4 w-4 text-rose-500" />
                      <div>
                        <dt className="font-semibold text-zinc-800">
                          {t("labels.schedule")}
                        </dt>
                        <dd>{t(`places.${place.id}.schedule`)}</dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Ticket className="mt-[2px] h-4 w-4 text-rose-500" />
                      <div>
                        <dt className="font-semibold text-zinc-800">
                          {t("labels.price")}
                        </dt>
                        <dd>{t(`places.${place.id}.price`)}</dd>
                      </div>
                    </div>
                  </dl>
                </div>

                {/* Botones: mapa + historia */}
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href={place.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 md:text-sm"
                  >
                    <MapPin className="h-4 w-4" />
                    {t("buttons.map")}
                  </Link>

                  <Link
                    href={`/historia#${place.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-rose-200 px-4 py-2 text-xs font-semibold text-rose-600 transition hover:border-rose-500 hover:text-rose-700 md:text-sm"
                  >
                    {t("buttons.history")}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
