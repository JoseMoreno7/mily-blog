// components/home/BestDestinationsSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

type DestinationId =
  | "limaCentro"
  | "barranco"
  | "circuitoMagico"
  | "paracasHuacachina"
  | "nazca"
  | "museosLima";

type Destination = {
  id: DestinationId;
  slug: string;
  image: string;
};

const destinations: Destination[] = [
  {
    id: "limaCentro",
    slug: "lima-centro",
    image: "/img/dest-lima-centro.jpg",
  },
  {
    id: "barranco",
    slug: "barranco",
    image: "/img/dest-barranco.jpg",
  },
  {
    id: "circuitoMagico",
    slug: "circuito-magico",
    image: "/img/dest-circuito-agua-2.jpg",
  },
  {
    id: "paracasHuacachina",
    slug: "paracas-huacachina",
    image: "/img/dest-paracas-huacachina.jpg",
  },
  {
    id: "nazca",
    slug: "nazca",
    image: "/img/dest-nazca.jpg",
  },
  {
    id: "museosLima",
    slug: "museos-lima",
    image: "/img/dest-museos.jpg",
  },
];

export default function BestDestinationsSection() {
  const t = useTranslations("Home.bestDestinations");

  return (
    <section className="bg-white py-16">
      {/* Título centrado */}
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

      {/* Grid 3x2 */}
      <div className="mx-auto mt-10 grid max-w-6xl gap-8 px-4 md:grid-cols-3">
        {destinations.map((dest) => (
          <article
            key={dest.slug}
            className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={dest.image}
                alt={t(`destinations.${dest.id}.title`)}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
                {t(`destinations.${dest.id}.badge`)}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-2 p-4">
              <h3 className="text-sm font-semibold text-zinc-900 md:text-base">
                {t(`destinations.${dest.id}.title`)}
              </h3>
              <p className="flex-1 text-xs text-zinc-600 md:text-sm">
                {t(`destinations.${dest.id}.description`)}
              </p>
              <Link
                href={{ pathname: "/destinos", hash: dest.slug }}
                scroll={true}
                className="mt-2 text-sm font-semibold text-rose-600 underline-offset-4 hover:text-rose-700 hover:underline"
              >
                {t("cta")}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
