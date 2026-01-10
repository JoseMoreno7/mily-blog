"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { MapPin, Sparkles, Info } from "lucide-react";

const TIMELINE_IDS = [
  "independence",
  "earlyRepublic",
  "exportCycles",
  "modernPeru",
] as const;

const STRUCTURE_IDS = ["state", "economy", "society", "conflicts"] as const;

const LIFE_IDS = ["city", "regions", "identity"] as const;

const SITE_IDS = [
  "plazaSanMartin",
  "parqueReserva",
  "mirafloresMalecon",
] as const;

const TIP_IDS = ["ideaStory1", "ideaStory2", "curiosity1", "curiosity2"] as const;

export default function RepublicaSection() {
  const t = useTranslations("History.republica");

  return (
    <section
      id="republica"
      className="bg-sky-50/70 py-16 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="mx-auto max-w-6xl space-y-10 px-4">
        {/* CABECERA */}
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-500">
            {t("eyebrow")}
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl lg:text-4xl">
            {t("title")}
          </h2>

          <div className="mt-3 flex justify-center">
            <span className="h-[3px] w-24 rounded-full bg-rose-500" />
          </div>

          <p className="mt-4 mx-auto max-w-3xl text-sm text-zinc-700 md:text-base">
            {t("subtitle")}
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs md:text-sm">
            <span className="rounded-full bg-white px-3 py-1 font-medium text-sky-900 shadow-sm">
              {t("tags.period")}
            </span>
            <span className="rounded-full bg-white px-3 py-1 font-medium text-sky-900 shadow-sm">
              {t("tags.focus")}
            </span>
          </div>
        </header>

        {/* BLOQUE 1: IDEAS CLAVE */}
        <section className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm md:p-7">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-800">
            {t("keyIdeas.title")}
          </h3>
          <p className="mt-2 text-sm text-zinc-700 md:text-base">
            {t("keyIdeas.lead")}
          </p>

          <ul className="mt-4 grid gap-3 text-sm text-zinc-700 md:grid-cols-3 md:text-base">
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-rose-500" />
              <span>{t("keyIdeas.bullets.one")}</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-rose-500" />
              <span>{t("keyIdeas.bullets.two")}</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-rose-500" />
              <span>{t("keyIdeas.bullets.three")}</span>
            </li>
          </ul>
        </section>

        {/* BLOQUE 2: LÍNEA DE TIEMPO */}
        <section className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm md:p-7">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-800">
            {t("timeline.title")}
          </h3>
          <p className="mt-2 text-sm text-zinc-700 md:text-base">
            {t("timeline.lead")}
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {TIMELINE_IDS.map((id) => (
              <article
                key={id}
                className="rounded-xl bg-sky-50/80 p-4 text-sm text-zinc-800"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-900">
                  {t(`timeline.items.${id}.date`)}
                </p>
                <h4 className="mt-1 text-sm font-semibold text-zinc-900">
                  {t(`timeline.items.${id}.label`)}
                </h4>
                <p className="mt-2 text-xs text-zinc-700 md:text-sm">
                  {t(`timeline.items.${id}.description`)}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* BLOQUE 3: CÓMO ES LA REPÚBLICA */}
        <section className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm md:p-7">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-800">
            {t("structure.title")}
          </h3>
          <p className="mt-2 text-sm text-zinc-700 md:text-base">
            {t("structure.lead")}
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {STRUCTURE_IDS.map((id) => (
              <article
                key={id}
                className="rounded-xl bg-sky-50/80 p-4 text-sm text-zinc-800"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-sky-900">
                  {t(`structure.items.${id}.title`)}
                </p>
                <p className="mt-2 text-sm text-zinc-700 md:text-base">
                  {t(`structure.items.${id}.text`)}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* BLOQUE 4: VIDA COTIDIANA Y CAMBIOS */}
        <section className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm md:p-7">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-800">
            {t("life.title")}
          </h3>

          <div className="mt-4 grid gap-6 md:grid-cols-3">
            {LIFE_IDS.map((id) => (
              <div key={id}>
                <p className="text-xs font-semibold uppercase tracking-wide text-sky-900">
                  {t(`life.${id}.title`)}
                </p>
                <p className="mt-2 text-sm text-zinc-700 md:text-base">
                  {t(`life.${id}.text`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BLOQUE 5: LUGARES REPUBLICANOS EN LIMA */}
        <section className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm md:p-7">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-800">
            {t("sites.title")}
          </h3>
          <p className="mt-2 text-sm text-zinc-700 md:text-base">
            {t("sites.lead")}
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {SITE_IDS.map((id) => (
              <article
                key={id}
                className="flex flex-col justify-between gap-2 rounded-xl bg-sky-50/80 p-4 text-sm"
              >
                <div>
                  <h4 className="font-semibold text-zinc-900">
                    {t(`sites.items.${id}.name`)}
                  </h4>
                  <p className="text-xs text-sky-900/80 md:text-sm">
                    {t(`sites.items.${id}.location`)}
                  </p>
                  <p className="mt-1 text-xs text-zinc-700 md:text-sm">
                    {t(`sites.items.${id}.description`)}
                  </p>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {t(`sites.items.${id}.mapUrl`) && (
                    <Link
                      href={t(`sites.items.${id}.mapUrl`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-sky-900 shadow-sm transition hover:bg-sky-100 md:text-sm"
                    >
                      <MapPin className="h-4 w-4" />
                      {t("sites.buttons.map")}
                    </Link>
                  )}

                  {t(`sites.items.${id}.destLink`, { default: "" }) && (
                    <Link
                      href={t(`sites.items.${id}.destLink`)}
                      className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-900 transition hover:border-sky-500 hover:bg-sky-100 md:text-sm"
                    >
                      {t("sites.buttons.destinations")}
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BLOQUE 6: TIPS PARA GUIAR LA REPÚBLICA */}
        <section className="rounded-2xl border border-sky-100 bg-sky-900/90 p-6 text-sky-50 shadow-sm md:p-7">
          <div className="flex items-start gap-3">
            <div className="mt-1 rounded-full bg-sky-700/80 p-2">
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide">
                {t("tips.title")}
              </h3>
              <p className="text-xs text-sky-100/90 md:text-sm">
                {t("tips.lead")}
              </p>

              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-200">
                    {t("tips.groups.storyIdeas")}
                  </p>
                  <ul className="mt-1 space-y-1 text-xs md:text-sm">
                    {TIP_IDS.slice(0, 2).map((id) => (
                      <li key={id} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-300" />
                        <span>{t(`tips.items.${id}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-200">
                    {t("tips.groups.curiosities")}
                  </p>
                  <ul className="mt-1 space-y-1 text-xs md:text-sm">
                    {TIP_IDS.slice(2).map((id) => (
                      <li key={id} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-300" />
                        <span>{t(`tips.items.${id}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-3 flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-sky-200">
                <Info className="h-3.5 w-3.5" />
                {t("tips.footer")}
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
