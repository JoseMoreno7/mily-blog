"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

type Slide = {
  id: number;
  image: string;
  titleKey: string;
  subtitleKey: string;
  ctaLabelKey: string;
  ctaHref: string;
  position?: "left" | "right";
};

const SLIDE_INTERVAL = 5000; // 5 segundos

export default function HeroCarousel() {
  const t = useTranslations("Home.heroCarousel");

  // 🔥 AHORA SOLO GASTRONOMÍA
  const slides: Slide[] = [
    {
      id: 0,
      image: "/img/hero-lomo.jpg", // pon aquí tu imagen de lomo saltado
      titleKey: "lomo.title",
      subtitleKey: "lomo.subtitle",
      ctaLabelKey: "lomo.cta",
      ctaHref: "/gastronomia",
      position: "left",
    },
    {
      id: 1,
      image: "/img/hero-ceviche.jpg",
      titleKey: "ceviche.title",
      subtitleKey: "ceviche.subtitle",
      ctaLabelKey: "ceviche.cta",
      ctaHref: "/gastronomia",
      position: "left",
    },
    {
      id: 2,
      image: "/img/hero-pisco.jpg", // pon aquí tu imagen de pisco sour
      titleKey: "pisco.title",
      subtitleKey: "pisco.subtitle",
      ctaLabelKey: "pisco.cta",
      ctaHref: "/gastronomia",
      position: "left",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(id);
  }, [slides.length]);

  const active = slides[index];
  const alignRight = active.position === "right";

  return (
  <section className="mx-auto max-w-6xl space-y-6 px-4">
    {/* TÍTULO DE SECCIÓN */}
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-zinc-900 md:text-3xl">
        {t("sectionTitle")}
      </h2>

      {/* Línea roja como en Destinos */}
      <div className="mt-3 flex justify-center">
        <span className="h-[3px] w-24 rounded-full bg-rose-500" />
      </div>

      {/* Pequeña descripción */}
      <p className="mt-4 text-sm text-zinc-600 md:text-base">
        {t("sectionSubtitle")}
      </p>
    </div>

    {/* CONTENEDOR DEL CARRUSEL (alineado con el resto) */}
    <div className="mx-auto max-w-6xl px-4">
      <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
        {/* IMAGEN DE FONDO */}
        <div className="absolute inset-0">
          <Image
            src={active.image}
            alt={t(active.titleKey)}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Capa para oscurecer y que el texto se lea bien */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-black/20" />
        </div>

        {/* CONTENIDO SUPERPUESTO */}
        <div className="relative z-10 flex h-full items-end px-6 pb-8 md:px-10 md:pb-10">
          <div
            className={`max-w-xl text-white ${
              alignRight ? "ml-auto text-right" : ""
            }`}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-rose-200">
              {t("badge")}
            </p>

            <h3 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              {t(active.titleKey)}
            </h3>

            <p className="mt-3 text-sm text-rose-50/90 md:text-base">
              {t(active.subtitleKey)}
            </p>

            <div
              className={`mt-6 flex gap-3 ${
                alignRight ? "justify-end" : "justify-start"
              }`}
            >
              <Link
                href={active.ctaHref}
                className="rounded-full bg-white/95 px-6 py-3 text-sm font-semibold text-rose-600 shadow-lg transition hover:bg-rose-50"
              >
                {t(active.ctaLabelKey)}
              </Link>
            </div>
          </div>
        </div>

        {/* PUNTITOS DEL CARRUSEL */}
        {slides.length > 1 && (
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full border border-white/70 transition ${
                  i === index ? "bg-white" : "bg-white/10"
                }`}
                aria-label={`Ir al slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  </section>
);
}
