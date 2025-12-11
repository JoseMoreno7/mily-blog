// components/layout/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/destinos", label: "Destinos" },
  { href: "/gastronomia", label: "Gastronomía" },
  { href: "/historia", label: "Historia" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight || 800;
      const limit = vh * 0.7;
      setIsScrolled(window.scrollY > limit);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const desktopLinkBase =
    "text-sm font-medium transition-colors md:text-base";
  const desktopLinkColors = isScrolled
    ? "text-zinc-800 hover:text-rose-700"
    : "text-white hover:text-black";

  const brandColor = isScrolled ? "text-rose-600" : "text-rose-500";
  const mobileIconColor = isScrolled ? "text-zinc-800" : "text-white";

  // Fondo del panel mobile según scroll (sin líneas)
  const mobilePanelBg = isScrolled
    ? "bg-white/90 backdrop-blur-md shadow-lg"
    : "bg-black/75 backdrop-blur-md shadow-lg";

  const mobileLinkColors = isScrolled
    ? "text-zinc-900 hover:text-rose-600"
    : "text-white hover:text-rose-100";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-2 md:py-3">
        {/* LOGO + NOMBRE */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-16 w-16 md:h-20 md:w-20">
            <Image
              src="/img/mily-logo-2.png"
              alt="Mily Peru Guide"
              fill
              className="object-contain drop-shadow-lg"
              sizes="80px"
            />
          </div>

          <span
            className={`text-xl font-semibold tracking-tight md:text-2xl drop-shadow-sm ${brandColor}`}
          >
            Mily Peru Guide
          </span>
        </Link>

        {/* MENÚ DESKTOP */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${desktopLinkBase} ${desktopLinkColors}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* BOTÓN HAMBURGUESA (MOBILE) */}
        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-full p-2 outline-none transition md:hidden
          ${mobileIconColor} hover:bg-black/10 focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2`}
          aria-label="Abrir menú"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* MENÚ MOBILE: panel mitad derecha SIN líneas */}
        {mobileOpen && (
          <div
            className={`
              absolute right-4 top-full mt-2 w-1/2 min-w-[180px] rounded-xl ${mobilePanelBg}
              md:hidden
            `}
          >
            <nav className="flex flex-col">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm font-medium ${mobileLinkColors}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
