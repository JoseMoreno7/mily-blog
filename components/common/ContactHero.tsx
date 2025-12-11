// components/common/ContactHero.tsx
"use client";

import { useTranslations } from "next-intl";

export default function ContactHero() {
  const t = useTranslations("Contact.hero");

  return (
    <section
      className="
        relative
        h-screen
        min-h-[600px]
        w-full
        bg-[url('/img/hero-contacto.jpg')]
        bg-cover
        bg-center
        bg-fixed
      "
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-black/30" />

      {/* Crédito del autor */}
      <div className="absolute bottom-2 right-2 z-20 text-[10px] text-white/70">
        Foto de{" "}
        <a 
          href="https://unsplash.com/es/@introspectivedsgn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Erik Mclean
        </a>
        {" en "}
        <a 
          href="https://unsplash.com/es/fotos/juguete-robot-amarillo-y-negro-65XzSynMPeA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Unsplash
        </a>
      </div>

      {/* Contenido centrado */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-rose-200">
          {t("eyebrow")}
        </p>

        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          {t("title")}
        </h1>

        <p className="mt-4 max-w-2xl text-sm text-rose-50/90 md:text-base">
          {t("subtitle")}
        </p>
      </div>
    </section>
  );
}