// components/common/PageHero.tsx
import { getTranslations } from "next-intl/server";

export default async function PageHero() {
  const t = await getTranslations("Home.hero");

  return (
    <section
      className="
        relative
        h-screen          /* ocupa todo el alto de la ventana */
        min-h-[600px]     /* en pantallas bajas no se queda muy chico */
        w-full
        bg-[url('/img/home-hero-general.jpg')]
        bg-cover
        bg-center
        bg-fixed
      "
    >
      {/* Capa oscura para que el texto se lea bien */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-black/30" />

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
