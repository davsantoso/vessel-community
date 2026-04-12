"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";

const navLinksBefore = [
  { href: "/", label: "Home" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/ibadah", label: "Ibadah" },
  { href: "/komunitas", label: "Komunitas" },
  { href: "/pelayanan", label: "Pelayanan" },
];

const navLinksAfter = [
  { href: "/kontak", label: "Kontak" },
];

const navLinks = [...navLinksBefore, ...navLinksAfter];

const eksplorasiLinks = [
  { href: "/event", label: "Event & Kegiatan" },
  { href: "/berita", label: "Berita & Pengumuman" },
  { href: "/galeri", label: "Galeri Momen" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [eksplorasiOpen, setEksplorasiOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isEksplorasiActive = eksplorasiLinks.some((l) => pathname === l.href);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setEksplorasiOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setEksplorasiOpen(false), 200);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center w-full px-6 md:px-12 py-5 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-headline italic text-primary tracking-tighter"
        >
          Vessel Community
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinksBefore.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-primary-container border-b-2 border-primary-container pb-1 font-headline italic transition-all duration-300"
                    : "text-secondary font-label tracking-wide uppercase text-xs hover:text-primary-container transition-all duration-300"
                }
              >
                {link.label}
              </Link>
            );
          })}

          {/* Dropdown Eksplorasi */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center gap-1 font-label tracking-wide uppercase text-xs transition-all duration-300 ${
                isEksplorasiActive
                  ? "text-primary-container border-b-2 border-primary-container pb-1 font-headline italic"
                  : "text-secondary hover:text-primary-container"
              }`}
            >
              Eksplorasi
              <span className="material-symbols-outlined text-sm leading-none">
                {eksplorasiOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
              </span>
            </button>

            {eksplorasiOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-surface rounded-xl shadow-lg border border-outline-variant/30 overflow-hidden">
                {eksplorasiLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-5 py-3 text-sm font-label tracking-wide hover:bg-surface-container-high transition-colors ${
                      pathname === link.href
                        ? "text-primary-container font-semibold"
                        : "text-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinksAfter.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-primary-container border-b-2 border-primary-container pb-1 font-headline italic transition-all duration-300"
                    : "text-secondary font-label tracking-wide uppercase text-xs hover:text-primary-container transition-all duration-300"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right: Join Us + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/6282335642114?text=Halo%20Vessel%20Community%2C%20saya%20ingin%20bertanya..."
            className="hidden md:inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-xl font-label text-sm tracking-wide hover:scale-95 transition-all"
          >
            Join Us
          </a>
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant/30 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={
                  isActive
                    ? "text-primary-container font-headline italic text-lg"
                    : "text-secondary font-label tracking-wide uppercase text-sm hover:text-primary-container transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}

          {/* Mobile Eksplorasi */}
          <div className="border-t border-outline-variant/20 pt-4">
            <div className="font-label text-xs uppercase tracking-widest text-secondary/50 mb-3">
              Eksplorasi
            </div>
            {eksplorasiLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2 ${
                  pathname === link.href
                    ? "text-primary-container font-headline italic text-lg"
                    : "text-secondary font-label tracking-wide uppercase text-sm hover:text-primary-container transition-colors"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href="https://wa.me/6282335642114?text=Halo%20Vessel%20Community%2C%20saya%20ingin%20bertanya..."
            className="mt-2 bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-3 rounded-xl font-label text-sm text-center tracking-wide"
          >
            Join Us
          </a>
        </div>
      )}
    </nav>
  );
}
