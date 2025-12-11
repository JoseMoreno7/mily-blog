"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Instagram, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-rose-50/70 via-pink-50/40 to-white">
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
        {/* FILA PRINCIPAL: LOGO + REDES */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Logo + texto */}
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full bg-rose-100 shadow-md">
              <Image
                src="/img/mily-logo.png"
                alt="Logo Mily Peru Guide"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-base font-semibold text-rose-700 md:text-lg">
                Mily Peru Guide
              </p>
              <p className="text-sm text-zinc-600">{t("tagline")}</p>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="flex flex-col items-start gap-3 md:items-end">
            <p className="text-sm font-medium text-zinc-700">
              {t("follow")}
            </p>

            <div className="flex gap-3">
              {/* Cambia "#" por tus enlaces reales */}
              <Link
                href="https://www.instagram.com/milyy16saravia?utm_source=qr&igsh=MTE2Mm4zdnIxbmsyNA=="
                aria-label="Instagram de Mily"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-zinc-600 shadow-sm ring-1 ring-rose-100 transition hover:bg-rose-50 hover:text-rose-600"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Separador suave en vez de borde duro */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-rose-100 to-transparent" />

        {/* FILA INFERIOR: COPYRIGHT + made with love */}
        <div className="flex flex-col gap-1 pt-2 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} Mily Peru Guide. {t("rights")}
          </p>
          <p className="italic text-rose-500">{t("madeWithLove")}</p>
        </div>
      </div>
    </footer>
  );
}
