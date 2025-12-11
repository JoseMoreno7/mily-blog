"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { MapPin, Heart, Users, Sparkles } from "lucide-react";

export default function AboutMiniSection() {
  const t = useTranslations("Home");

  const highlights = [
    {
      icon: MapPin,
      labelKey: "aboutMini.highlight1"
    },
    {
      icon: Users,
      labelKey: "aboutMini.highlight2"
    },
    {
      icon: Heart,
      labelKey: "aboutMini.highlight3"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 py-16 md:py-24">
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-rose-200/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-pink-200/30 blur-3xl" />
      
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
          
          <div className="relative mx-auto md:mx-0">
            <div className="relative h-72 w-72 md:h-80 md:w-80">
              <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-rose-400 to-pink-400 opacity-20 blur-xl" />
              
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-2xl">
                <Image
                  src="/img/mily-profile.jpg"
                  alt="Mily - Guía oficial de turismo en Perú"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, 320px"
                />
              </div>
              
              <div className="absolute -right-2 top-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
                <Sparkles className="h-4 w-4 text-rose-500" />
                <span className="text-xs font-bold text-gray-800">
                  {t("aboutMini.badge")}
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-rose-600">
                {t("aboutMini.eyebrow")}
              </p>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                {t("aboutMini.title")}
              </h2>
            </div>

            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              {t("aboutMini.text")}
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-lg bg-white/70 px-3 py-2 backdrop-blur-sm"
                  >
                    <Icon className="h-5 w-5 flex-shrink-0 text-rose-500" />
                    <span className="text-sm font-medium text-gray-700">
                      {t(item.labelKey)}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <Link
                href="/sobre-mi"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                {t("aboutMini.cta")}
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              
              <p className="text-sm text-gray-600">
                {t("aboutMini.ctaHelper")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}