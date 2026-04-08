# Vessel Community Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 9-page static informational website for Vessel Community (a church youth community) using Next.js App Router, implementing the "Sacred Glow / Modern Sanctuary" design from the stitch reference designs.

**Architecture:** Multi-page Next.js App Router site with a shared Navbar + Footer in the root layout. All pages are React Server Components except the Navbar (which has a mobile hamburger toggle requiring `useState`). Content is hardcoded — no CMS, no API calls.

**Tech Stack:** Next.js 16.2.2, React 19, TypeScript, Tailwind CSS v4, `next/font/google` (Newsreader + Plus Jakarta Sans), `next/image`, Material Symbols Outlined (CDN link in layout head)

**Design Reference:** `stitch/<page_name>/code.html` and `stitch/sacred_glow/DESIGN.md` — read these when you need visual clarity on any section.

---

## File Map

| File | Action | Purpose |
|---|---|---|
| `public/images/` | Create (copy from `assets/images/`) | Serve images via Next.js |
| `app/globals.css` | Modify | Tailwind v4 design tokens (colors, fonts, radius) |
| `app/layout.tsx` | Modify | Root layout: fonts, Material Symbols link, Navbar, Footer |
| `components/Navbar.tsx` | Create | Sticky glass nav with mobile hamburger (Client Component) |
| `components/Footer.tsx` | Create | Footer with links, address, copyright |
| `app/page.tsx` | Modify | Home page |
| `app/tentang-kami/page.tsx` | Create | About Us page |
| `app/ibadah/page.tsx` | Create | Worship schedule page |
| `app/komunitas/page.tsx` | Create | Community page |
| `app/pelayanan/page.tsx` | Create | Ministry/service page |
| `app/galeri/page.tsx` | Create | Photo gallery page |
| `app/berita/page.tsx` | Create | News/announcements page |
| `app/event/page.tsx` | Create | Events page |
| `app/kontak/page.tsx` | Create | Contact page |

---

## Task 1: Copy Images to public/ and Configure Design System

**Files:**
- Create: `public/images/` (copy from `assets/images/`)
- Modify: `app/globals.css`

- [ ] **Step 1: Copy images to public/images/**

Run in the project root (bash):
```bash
cp -r assets/images public/images
```

Verify the result:
```
public/images/logo_vessel.png
public/images/28-03-2026.png
public/images/14-03-2026.png
public/images/ibadah/19-01-2026_1.png
public/images/ibadah/19-01-2026_2.png
public/images/ibadah/29-03-2026_1.png
public/images/ibadah/29-03-2026_2.png
public/images/ibadah/29-03-2026_3.png
public/images/paskah/05-04-2026_1.png ... _5.png
public/images/badminton/04-04-2026_1.png ... _4.png
public/images/berita/07-04-2026.jpg
```

- [ ] **Step 2: Replace globals.css with Tailwind v4 design tokens**

Replace the entire contents of `app/globals.css`:

```css
@import "tailwindcss";

@theme {
  /* ── Colors ── */
  --color-primary: #755B00;
  --color-primary-container: #C9A227;
  --color-on-primary: #FFFFFF;
  --color-on-primary-container: #4B3A00;
  --color-secondary: #7D553C;
  --color-on-secondary: #FFFFFF;
  --color-secondary-container: #FFC9AA;
  --color-on-secondary-container: #7A523A;
  --color-tertiary: #735C00;
  --color-tertiary-container: #C1A449;
  --color-on-tertiary: #FFFFFF;
  --color-on-tertiary-container: #4A3A00;
  --color-surface: #FFF9ED;
  --color-surface-dim: #DFD9CE;
  --color-surface-bright: #FFF9ED;
  --color-surface-variant: #E8E2D6;
  --color-surface-container-lowest: #FFFFFF;
  --color-surface-container-low: #F9F3E7;
  --color-surface-container: #F3EDE1;
  --color-surface-container-high: #EDE8DC;
  --color-surface-container-highest: #E8E2D6;
  --color-on-surface: #1D1C14;
  --color-on-surface-variant: #4D4635;
  --color-outline: #7F7663;
  --color-outline-variant: #D1C5AF;
  --color-inverse-surface: #333029;
  --color-inverse-on-surface: #F6F0E4;
  --color-inverse-primary: #ECC246;
  --color-background: #FFF9ED;
  --color-on-background: #1D1C14;

  /* ── Fonts ── */
  --font-headline: var(--font-newsreader), serif;
  --font-body: var(--font-plus-jakarta-sans), sans-serif;
  --font-label: var(--font-plus-jakarta-sans), sans-serif;

  /* ── Border Radius ── */
  --radius-xl: 1.5rem;
  --radius-lg: 0.5rem;
  --radius-full: 9999px;
}

/* Material Symbols utility */
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

/* Custom utilities used across stitch designs */
.hero-gradient {
  background: linear-gradient(135deg, #3D1F0A 0%, #1D1C14 100%);
}

.editorial-shadow {
  box-shadow: 0 32px 64px -12px rgba(125, 85, 60, 0.06);
}

.glass-nav {
  background: rgba(255, 249, 237, 0.7);
  backdrop-filter: blur(24px);
}

/* Selection color */
::selection {
  background-color: #C9A227;
  color: #4B3A00;
}
```

- [ ] **Step 3: Verify Tailwind picks up the tokens**

Run: `npm run build`

Expected: Build completes without errors. If you see "Cannot find module" errors for fonts, proceed to Task 2 first then come back and re-run.

- [ ] **Step 4: Commit**

```bash
git add public/images app/globals.css
git commit -m "feat: add images to public and configure Tailwind v4 design tokens"
```

---

## Task 2: Update Root Layout with Fonts and Providers

**Files:**
- Modify: `app/layout.tsx`

> **Note on next/font/google:** `Newsreader` and `Plus_Jakarta_Sans` are both available in the `next/font/google` package. Use the `variable` option to expose them as CSS custom properties, then reference those variables in `globals.css` via `--font-newsreader` and `--font-plus-jakarta-sans`. Do NOT import from CDN — `next/font` self-hosts for better performance.

> **Note on Material Symbols:** This is a Google icon font that uses `font-variation-settings`. It is NOT available through `next/font/google` (it uses a different variable axis format). Load it via a `<link>` tag in `<head>` directly in `layout.tsx`. This is valid in Next.js App Router.

> **Note on Navbar/Footer imports:** These components don't exist yet. Add the imports but you can leave the actual components as placeholder divs until Tasks 3 and 4 create them. OR implement Tasks 3 and 4 before this step.

- [ ] **Step 1: Replace app/layout.tsx**

```tsx
import type { Metadata } from 'next'
import { Newsreader, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Vessel Community',
  description:
    'Vessel Community — komunitas gereja pemuda GSRI Jemaat Bekasi. Ibadah setiap Sabtu, 17:00 WIB.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="id"
      className={`${newsreader.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-surface text-on-surface font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`

Expected: Build completes. If you see "Cannot find module '@/components/Navbar'" — Navbar doesn't exist yet. Complete Task 3 first, then re-run.

---

## Task 3: Navbar Component

**Files:**
- Create: `components/Navbar.tsx`

> **This is a Client Component** because the mobile hamburger toggle requires `useState`. Add `'use client'` at the top.

> **Active link detection:** Use `usePathname()` from `next/navigation` to highlight the current page's nav link with gold underline styling (`text-primary-container border-b-2 border-primary-container`).

> **Join Us button:** `href="#"` — WhatsApp link is intentionally empty until the user provides it. Leave as `href="#"`.

- [ ] **Step 1: Create components/Navbar.tsx**

First create the components directory:
```bash
mkdir -p components
```

Then create `components/Navbar.tsx`:

```tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/ibadah', label: 'Ibadah' },
  { href: '/komunitas', label: 'Komunitas' },
  { href: '/pelayanan', label: 'Pelayanan' },
  { href: '/kontak', label: 'Kontak' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

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
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? 'text-primary-container border-b-2 border-primary-container pb-1 font-headline italic transition-all duration-300'
                    : 'text-secondary font-label tracking-wide uppercase text-xs hover:text-primary-container transition-all duration-300'
                }
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Right: Join Us + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#"
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
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant/30 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={
                  isActive
                    ? 'text-primary-container font-headline italic text-lg'
                    : 'text-secondary font-label tracking-wide uppercase text-sm hover:text-primary-container transition-colors'
                }
              >
                {link.label}
              </Link>
            )
          })}
          <a
            href="#"
            className="mt-2 bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-3 rounded-xl font-label text-sm text-center tracking-wide"
          >
            Join Us
          </a>
        </div>
      )}
    </nav>
  )
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`

Expected: No TypeScript errors. `usePathname` and `useState` work in Client Components only — if you see "hooks can only be called in Client Components", check that `'use client'` is the very first line.

- [ ] **Step 3: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: add Navbar component with mobile hamburger and active link detection"
```

---

## Task 4: Footer Component

**Files:**
- Create: `components/Footer.tsx`

- [ ] **Step 1: Create components/Footer.tsx**

```tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-primary/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-12 py-16 max-w-screen-2xl mx-auto">
        {/* Brand */}
        <div className="space-y-6">
          <div className="font-headline italic text-xl text-primary">
            Vessel Community
          </div>
          <p className="text-secondary font-body text-sm leading-relaxed">
            Vessel Community adalah wadah bagi generasi muda untuk menemukan
            kedalaman iman di tengah hiruk-pikuk modernitas.
          </p>
          <p className="text-secondary/60 font-body text-xs italic">
            "Every vessel has a purpose. Find yours here."
          </p>
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h5 className="font-label text-xs uppercase tracking-widest text-primary mb-6">
              Navigasi
            </h5>
            <ul className="space-y-4">
              {[
                { href: '/event', label: 'Event' },
                { href: '/berita', label: 'Berita' },
                { href: '/galeri', label: 'Galeri' },
                { href: '/kontak', label: 'Kontak' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary font-body text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-label text-xs uppercase tracking-widest text-primary mb-6">
              Ibadah
            </h5>
            <ul className="space-y-3 text-secondary font-body text-sm">
              <li>Setiap Sabtu</li>
              <li>17:00 – selesai</li>
              <li className="text-xs leading-relaxed text-secondary/70">
                Bekasi Grand Center Blok F1, Jl Cut Meutiah, Bekasi Timur
              </li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h5 className="font-label text-xs uppercase tracking-widest text-primary">
            Bergabung
          </h5>
          <p className="text-secondary font-body text-sm leading-relaxed">
            Ingin bergabung atau menjadi bagian dari tim pelayanan? Hubungi kami
            melalui WhatsApp.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-label text-sm hover:bg-primary-container hover:text-on-primary-container transition-colors"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            Chat via WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 md:px-12 py-6 border-t border-primary/5 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-secondary font-label text-xs">
          © 2026 Vessel Community · GSRI Jemaat Bekasi
        </span>
        <span className="text-secondary/50 font-label text-xs">
          A Modern Sanctuary for the Intentional Soul.
        </span>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`

Expected: Build passes. The layout, Navbar, and Footer should all resolve now.

- [ ] **Step 3: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: add Footer component with navigation links and WhatsApp CTA"
```

---

## Task 5: Update Root Layout

**Files:**
- Modify: `app/layout.tsx` (already done in Task 2 — verify it's correct)

If Task 2 was done before Tasks 3/4, the build should now succeed end-to-end. Run:

- [ ] **Step 1: Final layout verification**

Run: `npm run build`

Expected: Build succeeds. Run `npm run dev`, open `http://localhost:3000` — you should see a blank page with the gold Navbar at the top and Footer at the bottom.

---

## Task 6: Home Page

**Files:**
- Modify: `app/page.tsx`

> **Reference design:** `stitch/home_vessel_community/code.html` and `stitch/home_vessel_community/screen.png`

> **Images used:** `/images/ibadah/29-03-2026_1.png` (hero photo), `/images/ibadah/29-03-2026_2.png` (bento lifestyle)

> The `<main>` wrapper is in `layout.tsx` — this page does NOT need its own `<main>` tag.

- [ ] **Step 1: Replace app/page.tsx**

```tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home | Vessel Community',
  description:
    'Temukan komunitas yang hangat dan penuh makna di Vessel Community, GSRI Jemaat Bekasi.',
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-gradient min-h-screen flex items-center pt-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left: text */}
          <div className="z-10">
            <span className="text-primary-container font-label uppercase tracking-[0.3em] text-xs mb-6 block">
              Welcome to Your Sanctuary
            </span>
            <h1 className="font-headline italic text-7xl lg:text-8xl text-primary-container leading-tight tracking-tighter mb-8">
              A home for the <br /> youthful soul.
            </h1>
            <p className="text-surface-variant/80 font-body text-xl max-w-xl mb-12 leading-relaxed">
              Temukan komunitas di mana iman bertemu modernitas. Kami adalah
              sekumpulan jiwa yang mencari, bertumbuh, dan saling mendukung
              dalam kasih.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/komunitas"
                className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-label font-bold tracking-wide hover:opacity-90 transition-all"
              >
                Temukan Komunitas
              </Link>
              <Link
                href="/tentang-kami"
                className="border border-primary-container/30 text-primary-container px-8 py-4 rounded-xl font-label tracking-wide hover:bg-primary-container/10 transition-all"
              >
                Pelajari Visi Kami
              </Link>
            </div>
          </div>

          {/* Right: hero photo */}
          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden editorial-shadow border-8 border-white/5 relative">
              <Image
                src="/images/ibadah/29-03-2026_1.png"
                alt="Ibadah Vessel Community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 0vw, 50vw"
                priority
              />
            </div>
            {/* Quote card */}
            <div className="absolute -bottom-12 -left-12 bg-surface p-8 rounded-xl editorial-shadow max-w-xs">
              <span className="material-symbols-outlined text-primary-container mb-4 block text-4xl">
                auto_awesome
              </span>
              <p className="text-secondary font-headline italic text-lg leading-snug">
                "Dalam persekutuan ini, kita menemukan ritme hati yang selaras
                dengan tujuan hidup."
              </p>
            </div>
          </div>
        </div>
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full -translate-y-1/2" />
      </section>

      {/* ── Jadwal Ibadah preview ── */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <div className="max-w-2xl">
              <h2 className="font-headline italic text-5xl text-primary mb-6">
                Jadwal Ibadah
              </h2>
              <p className="text-secondary text-lg">
                Bergabunglah dalam perjumpaan yang intim dan penuh makna setiap
                Sabtu sore.
              </p>
            </div>
            <div className="hidden md:block">
              <Link
                href="/ibadah"
                className="text-primary font-label flex items-center gap-2 group"
              >
                Lihat Detail Ibadah
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_right_alt
                </span>
              </Link>
            </div>
          </div>

          {/* Single schedule card */}
          <div className="max-w-md mx-auto bg-surface-container-low rounded-xl p-10 border-t-4 border-primary-container editorial-shadow">
            <div className="flex justify-between items-start mb-10">
              <span className="material-symbols-outlined text-primary-container text-4xl">
                church
              </span>
              <div className="text-right">
                <div className="font-label text-xs uppercase tracking-widest text-secondary mb-1">
                  Setiap Sabtu
                </div>
                <div className="font-headline italic text-2xl text-primary">
                  Vessel Community
                </div>
              </div>
            </div>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">
                  schedule
                </span>
                <span className="text-on-surface font-label text-sm uppercase tracking-wide">
                  17:00 – Selesai WIB
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5">
                  location_on
                </span>
                <span className="text-on-surface font-label text-sm leading-snug">
                  GSRI Jemaat Bekasi — Bekasi Grand Center Blok F1, Jl Cut
                  Meutiah, Bekasi Timur
                </span>
              </div>
            </div>
            <Link
              href="/ibadah"
              className="w-full block text-center py-4 bg-primary text-on-primary rounded-lg font-label text-xs uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-colors"
            >
              Info Lengkap Ibadah
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bento Lifestyle ── */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[700px]">
          {/* Large left card */}
          <div className="md:col-span-8 group relative rounded-xl overflow-hidden min-h-[400px]">
            <Image
              src="/images/ibadah/29-03-2026_2.png"
              alt="Worship as Lifestyle"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12">
              <h3 className="font-headline italic text-4xl text-white mb-4">
                Worship as Lifestyle
              </h3>
              <p className="text-white/70 max-w-lg mb-8">
                Lebih dari sekadar hari Sabtu. Kami mengekspresikan iman melalui
                kreativitas, seni, dan persaudaraan yang tulus.
              </p>
              <Link
                href="/galeri"
                className="inline-block bg-white text-primary px-6 py-3 rounded-xl font-label text-sm font-bold w-fit"
              >
                Galeri Kegiatan
              </Link>
            </div>
          </div>

          {/* Right column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex-1 bg-primary-container p-10 rounded-xl flex flex-col justify-between min-h-[200px]">
              <span className="material-symbols-outlined text-on-primary-container text-4xl">
                group_work
              </span>
              <div>
                <h4 className="font-headline italic text-2xl text-on-primary-container mb-2">
                  Connect Groups
                </h4>
                <p className="text-on-primary-container/70 text-sm mb-4">
                  Temukan lingkaran kecilmu untuk bertumbuh bersama.
                </p>
                <Link
                  href="/komunitas"
                  className="text-on-primary-container text-xs font-bold uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Bergabung
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex-1 rounded-xl overflow-hidden relative group min-h-[200px]">
              <Image
                src="/images/paskah/05-04-2026_1.png"
                alt="Pelayanan Vessel Community"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-secondary/40 backdrop-blur-[2px] flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-headline italic text-2xl text-white mb-2">
                    Pelayanan
                  </h4>
                  <Link
                    href="/pelayanan"
                    className="text-white/90 text-sm hover:text-white"
                  >
                    Make an impact today.
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Verify**

Run: `npm run dev`, open `http://localhost:3000`

Expected: Home page renders with dark hero section, schedule card, and bento lifestyle section. Gold navbar visible at top, footer at bottom.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: implement Home page"
```

---

## Task 7: Tentang Kami Page

**Files:**
- Create: `app/tentang-kami/page.tsx`

> **Reference design:** `stitch/tentang_kami_vessel_community/code.html`
> **Images used:** `/images/28-03-2026.png`, `/images/14-03-2026.png`

- [ ] **Step 1: Create app/tentang-kami/page.tsx**

```tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tentang Kami | Vessel Community',
  description:
    'Kenali visi, misi, dan nilai-nilai Vessel Community — komunitas pemuda GSRI Jemaat Bekasi.',
}

const values = [
  {
    icon: 'diversity_2',
    title: 'Komunitas Inklusif',
    desc: 'Menyambut setiap latar belakang tanpa penghakiman, menciptakan rumah bagi mereka yang mencari.',
  },
  {
    icon: 'auto_awesome',
    title: 'Pertumbuhan Holistik',
    desc: 'Fokus pada kesehatan mental, spiritual, dan relasional melalui program yang terkurasi.',
  },
  {
    icon: 'volunteer_activism',
    title: 'Pelayanan Otentik',
    desc: 'Bergerak keluar untuk memberikan dampak nyata bagi lingkungan sekitar dengan kasih.',
  },
  {
    icon: 'menu_book',
    title: 'Literasi Iman',
    desc: 'Pendekatan pengajaran yang intelektual namun tetap menyentuh kedalaman hati.',
  },
]

export default function TentangKamiPage() {
  return (
    <div className="pt-32">
      {/* ── Hero ── */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="text-primary font-body uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">
              Our Philosophy
            </span>
            <h1 className="font-headline italic text-6xl md:text-8xl text-on-surface leading-[1.1] tracking-tight mb-8">
              Menjadi Bejana yang <br />
              <span className="text-primary-container">Penuh Makna.</span>
            </h1>
            <p className="text-secondary text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
              Vessel bukan sekadar nama, melainkan sebuah identitas. Kami
              percaya setiap jiwa adalah bejana yang diciptakan untuk menampung
              kebaikan, kasih, dan pertumbuhan yang terus mengalir.
            </p>
          </div>
          <div className="lg:col-span-5 hidden lg:block">
            <div className="bg-surface-container-high rounded-xl aspect-[4/5] overflow-hidden relative group">
              <Image
                src="/images/28-03-2026.png"
                alt="Vessel Community gathering"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="40vw"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Visi, Misi, Nilai ── */}
      <section className="bg-surface-container-low py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Visi card (spans 2 cols) */}
            <div className="md:col-span-2 bg-surface rounded-xl p-12 relative overflow-hidden flex flex-col justify-between min-h-[400px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-bl-full" />
              <div>
                <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-8 inline-block uppercase">
                  Visi Kami
                </span>
                <h2 className="font-headline italic text-4xl md:text-5xl text-on-surface mb-6">
                  Membangun ekosistem spiritual yang relevan dan restoratif.
                </h2>
              </div>
              <p className="text-on-surface-variant leading-relaxed max-w-xl text-lg">
                Kami memimpikan sebuah komunitas di mana setiap individu merasa
                didengar, dihargai, dan diberdayakan untuk menjadi versi terbaik
                dari diri mereka di hadapan Sang Pencipta dan sesama.
              </p>
            </div>

            {/* Photo card */}
            <div className="bg-surface-container-highest rounded-xl overflow-hidden min-h-[400px] relative">
              <Image
                src="/images/14-03-2026.png"
                alt="Vessel Community kegiatan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Filosofi card */}
            <div className="bg-secondary text-surface rounded-xl p-12 flex flex-col justify-center min-h-[300px]">
              <div className="w-12 h-1 bg-primary-container mb-8" />
              <h3 className="font-headline italic text-3xl mb-4">
                Filosofi Bejana
              </h3>
              <p className="font-body font-light text-surface-variant/90 leading-relaxed">
                Sebuah bejana harus kosong sebelum bisa diisi. Kami menyediakan
                ruang untuk pengosongan diri dari kebisingan dunia, agar bisa
                diisi kembali dengan ketenangan dan tujuan hidup yang murni.
              </p>
            </div>

            {/* Values 2x2 grid (spans 2 cols) */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-surface-container-high rounded-xl p-8 border-l-4 border-primary-container"
                >
                  <span
                    className="material-symbols-outlined text-primary mb-4 block"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {v.icon}
                  </span>
                  <h4 className="font-bold text-on-surface mb-2">{v.title}</h4>
                  <p className="text-sm text-on-surface-variant">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Story section ── */}
      <section className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row gap-24 items-center">
          <div className="w-full md:w-1/2 relative">
            <div className="rounded-xl overflow-hidden aspect-[4/3] relative editorial-shadow">
              <Image
                src="/images/ibadah/29-03-2026_3.png"
                alt="Vessel Community ibadah bersama"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary p-6 rounded-xl hidden xl:block">
              <p className="text-surface font-headline italic text-xl">
                Est. 2024
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-headline italic text-5xl text-on-surface mb-10 leading-tight">
              Perjalanan Menuju Kesadaran
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-loose text-lg">
              <p>
                Vessel Community bermula dari sebuah kerinduan akan komunitas
                yang tidak hanya "sibuk secara religius", tetapi "bermakna
                secara spiritual".
              </p>
              <p>
                Kami menyadari bahwa di tengah dunia yang serba cepat, manusia
                modern membutuhkan sebuah tempat peristirahatan — di mana mereka
                bisa meletakkan beban, merefleksikan diri, dan menemukan kembali
                kompas moral mereka.
              </p>
              <p>
                Nama <strong className="text-on-surface">Vessel</strong>{' '}
                dipilih untuk mengingatkan kita semua bahwa kita tidak perlu
                menjadi sempurna untuk berguna. Sebuah bejana yang retak pun
                masih bisa memancarkan cahaya dari dalamnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-screen-2xl mx-auto relative rounded-xl overflow-hidden py-24 px-12 text-center bg-secondary">
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-12 text-surface">
            <div>
              <div className="font-headline italic text-5xl mb-2">50+</div>
              <div className="font-body text-xs uppercase tracking-widest opacity-80">
                Anggota Aktif
              </div>
            </div>
            <div>
              <div className="font-headline italic text-5xl mb-2">Sabtu</div>
              <div className="font-body text-xs uppercase tracking-widest opacity-80">
                Jadwal Ibadah
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="font-headline italic text-5xl mb-2">2024</div>
              <div className="font-body text-xs uppercase tracking-widest opacity-80">
                Berdiri Sejak
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-4xl mx-auto text-center px-6 md:px-12 pb-32">
        <h3 className="font-headline italic text-4xl text-on-surface mb-8">
          Siap menjadi bagian dari cerita kami?
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#"
            className="w-full sm:w-auto bg-primary text-surface px-10 py-4 rounded-full font-body font-semibold hover:shadow-lg transition-all text-center"
          >
            Hubungi Kami via WhatsApp
          </a>
          <Link
            href="/ibadah"
            className="w-full sm:w-auto border border-outline-variant text-secondary px-10 py-4 rounded-full font-body font-semibold hover:bg-surface-container-high transition-all text-center"
          >
            Lihat Jadwal Ibadah
          </Link>
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Verify**

Run: `npm run build`

Expected: No TypeScript errors. Run `npm run dev`, open `http://localhost:3000/tentang-kami`.

- [ ] **Step 3: Commit**

```bash
git add app/tentang-kami/
git commit -m "feat: implement Tentang Kami page"
```

---

## Task 8: Ibadah Page

**Files:**
- Create: `app/ibadah/page.tsx`

> **Reference design:** `stitch/ibadah_jadwal_vessel_community/code.html`
> **Images used:** `ibadah/` folder photos

- [ ] **Step 1: Create app/ibadah/page.tsx**

```tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jadwal Ibadah | Vessel Community',
  description:
    'Ibadah Vessel Community setiap Sabtu pukul 17:00 WIB di GSRI Jemaat Bekasi, Bekasi Grand Center Blok F1.',
}

const faq = [
  {
    no: '01',
    q: 'Di mana lokasi ibadah?',
    a: 'GSRI Jemaat Bekasi — Bekasi Grand Center Blok F1, Jl Cut Meutiah, RT.001/RW.011, Margahayu, Bekasi Timur, Bekasi, West Java 17113.',
  },
  {
    no: '02',
    q: 'Apa pakaian yang disarankan?',
    a: 'Kenakan pakaian yang membuat Anda merasa nyaman. Kami menyambut kehadiran Anda, bukan apa yang Anda kenakan.',
  },
  {
    no: '03',
    q: 'Bagaimana cara bergabung?',
    a: 'Langsung datang ke lokasi atau hubungi kami via WhatsApp untuk informasi lebih lanjut.',
  },
]

export default function IbadahPage() {
  return (
    <div className="pt-32">
      {/* ── Hero ── */}
      <header className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-20 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-[0.2em] uppercase mb-6">
          Worship Experience
        </span>
        <h1 className="font-headline italic text-6xl md:text-8xl text-on-surface tracking-tighter leading-none mb-8">
          Bertemu dalam <br /> Kehadiran-Nya
        </h1>
        <p className="max-w-2xl mx-auto text-secondary text-lg leading-relaxed font-light">
          Temukan ruang yang tenang dan penuh makna untuk bertumbuh bersama.
          Ibadah kami dirancang untuk mendukung setiap musim kehidupan Anda.
        </p>
      </header>

      {/* ── Main Schedule Card ── */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main card - large */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low p-10 flex flex-col justify-between min-h-[500px] border-l-4 border-primary-container editorial-shadow">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full -mr-20 -mt-20 blur-3xl" />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h2 className="font-headline italic text-4xl text-on-surface mb-2">
                    Ibadah Vessel Community
                  </h2>
                  <p className="text-secondary font-medium tracking-wide">
                    GSRI Jemaat Bekasi · Setiap Sabtu
                  </p>
                </div>
                <span className="material-symbols-outlined text-primary-container text-4xl">
                  church
                </span>
              </div>
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    schedule
                  </span>
                  <span className="text-on-surface font-semibold text-xl">
                    17:00 WIB – Selesai
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5">
                    location_on
                  </span>
                  <div>
                    <span className="text-on-surface font-semibold text-lg block">
                      GSRI Jemaat Bekasi
                    </span>
                    <span className="text-on-surface-variant text-sm leading-relaxed">
                      Bekasi Grand Center Blok F1, Jl Cut Meutiah,
                      RT.001/RW.011, Margahayu, Bekasi Timur, Bekasi, West Java
                      17113
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    calendar_today
                  </span>
                  <span className="text-on-surface font-semibold text-xl">
                    Setiap Sabtu
                  </span>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex flex-wrap gap-4 mt-12">
              <a
                href="https://maps.google.com/?q=Bekasi+Grand+Center+Blok+F1+Jl+Cut+Meutiah+Bekasi+Timur"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-primary-container hover:text-on-primary-container transition-colors font-label text-sm"
              >
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>
                Petunjuk Arah
              </a>
              <a
                href="#"
                className="bg-surface-container-highest text-primary px-6 py-3 rounded-xl hover:bg-white transition-colors font-label text-sm flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">
                  chat
                </span>
                Hubungi via WhatsApp
              </a>
            </div>
          </div>

          {/* Side card: photo */}
          <div className="md:col-span-4 rounded-xl overflow-hidden relative min-h-[300px]">
            <Image
              src="/images/ibadah/29-03-2026_1.png"
              alt="Suasana ibadah Vessel Community"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* ── Photo gallery strip ── */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mt-20">
        <h3 className="font-headline italic text-3xl text-on-surface mb-8">
          Momen Ibadah
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: '/images/ibadah/29-03-2026_2.png', alt: 'Ibadah 29 Mar 2026' },
            { src: '/images/ibadah/29-03-2026_3.png', alt: 'Ibadah 29 Mar 2026' },
            { src: '/images/ibadah/19-01-2026_1.png', alt: 'Ibadah 19 Jan 2026' },
            { src: '/images/ibadah/19-01-2026_2.png', alt: 'Ibadah 19 Jan 2026' },
          ].map((img) => (
            <div
              key={img.src}
              className="aspect-square rounded-xl overflow-hidden relative group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Location + FAQ ── */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mt-32 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Map embed */}
          <div className="rounded-xl overflow-hidden aspect-video editorial-shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6!2d107.0!3d-6.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBekasi+Grand+Center+Blok+F1%2C+Jl+Cut+Meutiah%2C+Bekasi+Timur!5e0!3m2!1sen!2sid!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi GSRI Jemaat Bekasi"
            />
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-headline italic text-4xl text-on-surface mb-8 tracking-tight leading-tight">
              Yang perlu Anda ketahui sebelum datang
            </h2>
            <div className="space-y-8">
              {faq.map((item) => (
                <div
                  key={item.no}
                  className="border-b border-outline-variant/30 pb-6"
                >
                  <h4 className="text-on-surface font-semibold text-lg flex items-center gap-3 mb-3">
                    <span className="text-primary-container italic font-headline">
                      {item.no}.
                    </span>
                    {item.q}
                  </h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed pl-10">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Verify**

Run: `npm run build`

Expected: Build passes. Open `http://localhost:3000/ibadah` — schedule card, photo grid, map embed, and FAQ visible.

- [ ] **Step 3: Commit**

```bash
git add app/ibadah/
git commit -m "feat: implement Ibadah page with schedule, photo strip, and FAQ"
```

---

## Task 9: Komunitas Page

**Files:**
- Create: `app/komunitas/page.tsx`

> **Reference design:** `stitch/komunitas_vessel_community/code.html`
> **Images used:** `paskah/` and `badminton/` folder photos

- [ ] **Step 1: Create app/komunitas/page.tsx**

```tsx
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Komunitas | Vessel Community',
  description:
    'Bergabunglah dengan komunitas pemuda Vessel Community. Connect groups, kegiatan bersama, dan persahabatan yang bermakna.',
}

const activities = [
  {
    title: 'Paskah 2026',
    date: '05 April 2026',
    desc: 'Perayaan Paskah bersama seluruh anggota komunitas.',
    images: [
      '/images/paskah/05-04-2026_1.png',
      '/images/paskah/05-04-2026_2.png',
    ],
    color: 'bg-primary-container',
    textColor: 'text-on-primary-container',
  },
  {
    title: 'Badminton',
    date: '04 April 2026',
    desc: 'Olahraga bersama — komunitas yang bermain bersama, bertumbuh bersama.',
    images: [
      '/images/badminton/04-04-2026_1.png',
      '/images/badminton/04-04-2026_2.png',
    ],
    color: 'bg-secondary',
    textColor: 'text-surface',
  },
]

export default function KomunitasPage() {
  return (
    <div className="pt-32">
      {/* ── Hero ── */}
      <header className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-20">
        <span className="text-primary font-label uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">
          Our Community
        </span>
        <h1 className="font-headline italic text-6xl md:text-8xl text-on-surface leading-[1.1] tracking-tight mb-8 max-w-4xl">
          Bertumbuh <span className="text-primary-container">Bersama</span> dalam
          Kasih.
        </h1>
        <p className="text-secondary text-xl max-w-2xl leading-relaxed font-light">
          Vessel Community adalah tempat di mana persahabatan sejati terbentuk —
          melalui ibadah, olahraga, pelayanan, dan setiap momen kehidupan
          sehari-hari.
        </p>
      </header>

      {/* ── Stats strip ── */}
      <section className="bg-surface-container-low py-16 px-6 md:px-12 mb-20">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="font-headline italic text-5xl text-primary mb-2">
              50+
            </div>
            <div className="font-label text-xs uppercase tracking-widest text-secondary">
              Anggota Aktif
            </div>
          </div>
          <div>
            <div className="font-headline italic text-5xl text-primary mb-2">
              Sabtu
            </div>
            <div className="font-label text-xs uppercase tracking-widest text-secondary">
              Pertemuan Rutin
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="font-headline italic text-5xl text-primary mb-2">
              ∞
            </div>
            <div className="font-label text-xs uppercase tracking-widest text-secondary">
              Kenangan Bersama
            </div>
          </div>
        </div>
      </section>

      {/* ── Activities bento ── */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-32">
        <h2 className="font-headline italic text-4xl text-on-surface mb-12">
          Kegiatan Komunitas
        </h2>
        <div className="space-y-12">
          {activities.map((act) => (
            <div
              key={act.title}
              className="grid grid-cols-1 md:grid-cols-12 gap-6"
            >
              {/* Info card */}
              <div
                className={`md:col-span-4 ${act.color} rounded-xl p-10 flex flex-col justify-between min-h-[300px]`}
              >
                <div>
                  <div
                    className={`font-label text-xs uppercase tracking-widest ${act.textColor}/70 mb-2`}
                  >
                    {act.date}
                  </div>
                  <h3
                    className={`font-headline italic text-3xl ${act.textColor} mb-4`}
                  >
                    {act.title}
                  </h3>
                  <p className={`${act.textColor}/80 text-sm leading-relaxed`}>
                    {act.desc}
                  </p>
                </div>
                <span
                  className={`material-symbols-outlined ${act.textColor}/50 text-5xl`}
                >
                  groups
                </span>
              </div>
              {/* Photo grid */}
              <div className="md:col-span-8 grid grid-cols-2 gap-4">
                {act.images.map((img, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden relative aspect-[4/3] group"
                  >
                    <Image
                      src={img}
                      alt={`${act.title} foto ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Join CTA ── */}
      <section className="bg-surface-container-low py-32 px-6 md:px-12 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="material-symbols-outlined text-primary-container text-5xl mb-6 block">
            group_add
          </span>
          <h2 className="font-headline italic text-5xl text-on-surface mb-6">
            Ingin Bergabung?
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-10">
            Komunitas kami terbuka untuk siapa saja. Bergabunglah ke grup
            WhatsApp kami untuk mendapatkan informasi terbaru tentang ibadah,
            kegiatan, dan pengumuman.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-primary text-on-primary px-10 py-4 rounded-xl font-label font-bold tracking-wide hover:bg-primary-container hover:text-on-primary-container transition-colors text-lg"
          >
            <span className="material-symbols-outlined">chat</span>
            Bergabung ke Grup WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Verify**

Run: `npm run build`

Expected: Build passes. Open `http://localhost:3000/komunitas`.

- [ ] **Step 3: Commit**

```bash
git add app/komunitas/
git commit -m "feat: implement Komunitas page"
```

---

## Task 10: Pelayanan Page

**Files:**
- Create: `app/pelayanan/page.tsx`

> **Reference design:** `stitch/pelayanan_vessel_community/code.html`

- [ ] **Step 1: Create app/pelayanan/page.tsx**

```tsx
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Pelayanan | Vessel Community',
  description:
    'Bergabunglah dalam tim pelayanan Vessel Community. Temukan cara untuk melayani dengan talenta dan hati yang tulus.',
}

const teams = [
  {
    icon: 'music_note',
    title: 'Tim Worship',
    desc: 'Memimpin ibadah melalui musik dan nyanyian. Menciptakan suasana yang menyambut hadirat Tuhan.',
    spots: 'Terbuka untuk vocalist, musician',
  },
  {
    icon: 'videocam',
    title: 'Tim Multimedia',
    desc: 'Mengelola proyektor, livestream, dan dokumentasi kegiatan komunitas.',
    spots: 'Terbuka untuk operator teknis',
  },
  {
    icon: 'star',
    title: 'Tim Dekorasi',
    desc: 'Menciptakan lingkungan ibadah yang indah dan bermakna melalui seni dekorasi.',
    spots: 'Terbuka untuk semua',
  },
  {
    icon: 'restaurant',
    title: 'Tim Konsumsi',
    desc: 'Menyiapkan kebutuhan makan dan minum untuk setiap kegiatan komunitas.',
    spots: 'Terbuka untuk semua',
  },
  {
    icon: 'handshake',
    title: 'Tim Penyambut',
    desc: 'Menyambut setiap orang yang datang dengan hangat dan penuh kasih.',
    spots: 'Terbuka untuk semua',
  },
  {
    icon: 'volunteer_activism',
    title: 'Tim Doa',
    desc: 'Mendoakan anggota komunitas dan mendukung setiap aspek kehidupan jemaat.',
    spots: 'Terbuka untuk semua',
  },
]

export default function PelayananPage() {
  return (
    <div className="pt-32">
      {/* ── Hero ── */}
      <header className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-20">
        <span className="text-primary font-label uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">
          Serve &amp; Impact
        </span>
        <h1 className="font-headline italic text-6xl md:text-8xl text-on-surface leading-[1.1] tracking-tight mb-8 max-w-4xl">
          Melayani dengan{' '}
          <span className="text-primary-container">Sepenuh Hati.</span>
        </h1>
        <p className="text-secondary text-xl max-w-2xl leading-relaxed font-light">
          Pelayanan bukan tentang kemampuan, melainkan tentang ketersediaan.
          Temukan tim yang paling sesuai dengan talenta dan hasrat hatimu.
        </p>
      </header>

      {/* ── Hero photo ── */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-20">
        <div className="rounded-xl overflow-hidden relative h-[400px] md:h-[500px]">
          <Image
            src="/images/ibadah/29-03-2026_1.png"
            alt="Tim pelayanan Vessel Community"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex flex-col justify-end p-12">
            <p className="text-white font-headline italic text-3xl max-w-xl">
              "Setiap tangan yang melayani adalah tangan Tuhan yang bergerak
              di bumi."
            </p>
          </div>
        </div>
      </section>

      {/* ── Teams grid ── */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-32">
        <h2 className="font-headline italic text-4xl text-on-surface mb-12">
          Tim Pelayanan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team) => (
            <div
              key={team.title}
              className="bg-surface-container-low rounded-xl p-8 border-t-4 border-primary-container hover:bg-surface-container-high transition-all duration-300 group"
            >
              <span
                className="material-symbols-outlined text-primary text-3xl mb-6 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {team.icon}
              </span>
              <h3 className="font-headline italic text-2xl text-on-surface mb-3">
                {team.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                {team.desc}
              </p>
              <div className="flex items-center gap-2 text-xs text-secondary/70 font-label">
                <span className="material-symbols-outlined text-sm">info</span>
                {team.spots}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Join CTA ── */}
      <section className="bg-surface-container-high py-32 px-6 md:px-12 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-headline italic text-5xl text-on-surface mb-6">
            Siap Melayani?
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-10">
            Hubungi kami melalui WhatsApp untuk mendaftarkan diri ke salah satu
            tim pelayanan. Tidak perlu pengalaman — hanya perlu hati yang mau
            melayani.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-primary text-on-primary px-10 py-4 rounded-xl font-label font-bold tracking-wide hover:bg-primary-container hover:text-on-primary-container transition-colors text-lg"
          >
            <span className="material-symbols-outlined">chat</span>
            Daftar via WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Verify + Commit**

```bash
npm run build
git add app/pelayanan/
git commit -m "feat: implement Pelayanan page with ministry teams"
```

---

## Task 11: Galeri Page

**Files:**
- Create: `app/galeri/page.tsx`

> **Reference design:** `stitch/galeri_momen_vessel_community/code.html`
> **All photos organized by event group, labeled with date and event name**

- [ ] **Step 1: Create app/galeri/page.tsx**

```tsx
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Galeri Momen | Vessel Community',
  description:
    'Koleksi foto kegiatan Vessel Community — ibadah, Paskah, badminton, dan momen kebersamaan lainnya.',
}

const groups = [
  {
    title: 'Ibadah',
    date: 'Maret 2026',
    photos: [
      { src: '/images/ibadah/29-03-2026_1.png', alt: 'Ibadah 29 Mar 2026' },
      { src: '/images/ibadah/29-03-2026_2.png', alt: 'Ibadah 29 Mar 2026' },
      { src: '/images/ibadah/29-03-2026_3.png', alt: 'Ibadah 29 Mar 2026' },
    ],
  },
  {
    title: 'Ibadah',
    date: 'Januari 2026',
    photos: [
      { src: '/images/ibadah/19-01-2026_1.png', alt: 'Ibadah 19 Jan 2026' },
      { src: '/images/ibadah/19-01-2026_2.png', alt: 'Ibadah 19 Jan 2026' },
    ],
  },
  {
    title: 'Paskah',
    date: '05 April 2026',
    photos: [
      { src: '/images/paskah/05-04-2026_1.png', alt: 'Paskah 05 Apr 2026' },
      { src: '/images/paskah/05-04-2026_2.png', alt: 'Paskah 05 Apr 2026' },
      { src: '/images/paskah/05-04-2026_3.png', alt: 'Paskah 05 Apr 2026' },
      { src: '/images/paskah/05-04-2026_4.png', alt: 'Paskah 05 Apr 2026' },
      { src: '/images/paskah/05-04-2026_5.png', alt: 'Paskah 05 Apr 2026' },
    ],
  },
  {
    title: 'Badminton',
    date: '04 April 2026',
    photos: [
      { src: '/images/badminton/04-04-2026_1.png', alt: 'Badminton 04 Apr 2026' },
      { src: '/images/badminton/04-04-2026_2.png', alt: 'Badminton 04 Apr 2026' },
      { src: '/images/badminton/04-04-2026_3.png', alt: 'Badminton 04 Apr 2026' },
      { src: '/images/badminton/04-04-2026_4.png', alt: 'Badminton 04 Apr 2026' },
    ],
  },
  {
    title: 'Momen Bersama',
    date: '2026',
    photos: [
      { src: '/images/28-03-2026.png', alt: 'Kegiatan 28 Mar 2026' },
      { src: '/images/14-03-2026.png', alt: 'Kegiatan 14 Mar 2026' },
    ],
  },
]

export default function GaleriPage() {
  return (
    <div className="pt-32 pb-32">
      {/* ── Header ── */}
      <header className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-20">
        <span className="font-label uppercase tracking-widest text-primary font-bold mb-4 block text-xs">
          Our Shared Journey
        </span>
        <h1 className="text-6xl md:text-8xl font-headline italic tracking-tight leading-tight text-on-surface mb-6">
          Galeri &amp; <span className="text-primary-container">Momen</span>
        </h1>
        <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light max-w-2xl">
          Merekam jejak kebersamaan, pertumbuhan iman, dan pelayanan dalam
          sebuah mosaik visual yang penuh makna. Setiap bingkai bercerita
          tentang kasih.
        </p>
      </header>

      {/* ── Photo groups ── */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 space-y-20">
        {groups.map((group) => (
          <div key={`${group.title}-${group.date}`}>
            {/* Group header */}
            <div className="flex items-baseline gap-4 mb-8">
              <h2 className="font-headline italic text-3xl text-on-surface">
                {group.title}
              </h2>
              <span className="font-label text-xs uppercase tracking-widest text-secondary">
                {group.date}
              </span>
            </div>
            {/* Photo grid */}
            <div
              className={`grid gap-4 ${
                group.photos.length >= 4
                  ? 'grid-cols-2 md:grid-cols-4'
                  : group.photos.length === 3
                  ? 'grid-cols-2 md:grid-cols-3'
                  : 'grid-cols-2'
              }`}
            >
              {group.photos.map((photo, i) => (
                <div
                  key={photo.src}
                  className={`rounded-xl overflow-hidden relative group ${
                    i === 0 && group.photos.length >= 3
                      ? 'aspect-[4/3]'
                      : 'aspect-square'
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify + Commit**

```bash
npm run build
git add app/galeri/
git commit -m "feat: implement Galeri page with event-grouped photo layout"
```

---

## Task 12: Berita Page

**Files:**
- Create: `app/berita/page.tsx`

> **Reference design:** `stitch/berita_pengumuman_vessel_community/code.html`
> **Image used:** `/images/berita/07-04-2026.jpg`
> The content for the first (and only) news item is the memorial for Natasha Carissa Vania — copy it exactly.

- [ ] **Step 1: Create app/berita/page.tsx**

```tsx
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Berita & Pengumuman | Vessel Community',
  description:
    'Berita dan pengumuman terbaru dari Vessel Community.',
}

export default function BeritaPage() {
  return (
    <div className="pt-32 pb-32">
      {/* ── Header ── */}
      <header className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-20">
        <span className="font-label uppercase tracking-widest text-primary font-bold mb-4 block text-xs">
          Berita &amp; Pengumuman
        </span>
        <h1 className="text-6xl md:text-8xl font-headline italic tracking-tight leading-tight text-on-surface mb-6">
          Kabar dari <span className="text-primary-container">Komunitas</span>
        </h1>
        <p className="text-xl text-secondary leading-relaxed font-light max-w-2xl">
          Informasi terbaru, pengumuman penting, dan cerita dari hati ke hati
          untuk seluruh anggota Vessel Community.
        </p>
      </header>

      {/* ── News card ── */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <article className="bg-surface-container-low rounded-xl overflow-hidden editorial-shadow border-t-4 border-primary-container">
            {/* Photo */}
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/berita/07-04-2026.jpg"
                alt="Selamat Jalan, Natasha Carissa Vania"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>

            {/* Content */}
            <div className="p-10 md:p-12">
              {/* Meta */}
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                  Duka Cita
                </span>
                <span className="text-secondary font-label text-xs uppercase tracking-widest">
                  07 April 2026
                </span>
              </div>

              <h2 className="font-headline italic text-4xl md:text-5xl text-on-surface mb-8 leading-tight">
                Selamat Jalan, Natasha Carissa Vania
              </h2>

              {/* Verse */}
              <blockquote className="border-l-4 border-primary-container pl-6 mb-8">
                <p className="font-headline italic text-xl text-on-surface leading-relaxed mb-3">
                  "Sebab jika kita hidup, kita hidup untuk Tuhan, dan jika kita
                  mati, kita mati untuk Tuhan. Jadi baik hidup atau mati, kita
                  adalah milik Tuhan."
                </p>
                <cite className="text-secondary font-label text-sm not-italic">
                  — Roma 14:8
                </cite>
              </blockquote>

              {/* Body */}
              <div className="space-y-5 text-on-surface-variant leading-loose text-lg">
                <p>
                  Dengan hati yang penuh dukacita, kami mengucapkan selamat
                  jalan kepada anggota Vessel Community yang kami kasihi,{' '}
                  <strong className="text-on-surface">
                    Natasha Carissa Vania
                  </strong>
                  .
                </p>
                <p>
                  Tuhan telah memanggilmu pulang ke rumah-Nya yang kekal. Di
                  sana tidak ada lagi air mata, tidak ada lagi penderitaan,
                  hanya damai sejahtera yang sempurna dalam hadirat-Nya.
                </p>
                <p>
                  Kami bersyukur untuk setiap waktu yang Tuhan izinkan kami
                  habiskan bersamamu. Kenangan bersamamu akan tetap hidup dalam
                  hati kami.
                </p>
              </div>

              {/* Closing */}
              <div className="mt-10 p-8 bg-surface rounded-xl text-center">
                <p className="font-headline italic text-3xl text-primary mb-4">
                  Rest in the arms of Jesus 🕊️
                </p>
                <p className="text-secondary font-body text-base mb-2">
                  — Vessel Community &amp; Family.
                </p>
                <p className="text-secondary/70 font-body text-sm">
                  Doa kami menyertai keluarga yang ditinggalkan. Tuhan
                  memberkati 🙏
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Verify + Commit**

```bash
npm run build
git add app/berita/
git commit -m "feat: implement Berita page with memorial news for Natasha Carissa Vania"
```

---

## Task 13: Event Page

**Files:**
- Create: `app/event/page.tsx`

> **Reference design:** `stitch/event_kegiatan_vessel_community/code.html`

- [ ] **Step 1: Create app/event/page.tsx**

```tsx
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Event & Kegiatan | Vessel Community',
  description:
    'Jadwal event dan kegiatan terbaru Vessel Community.',
}

const events = [
  {
    title: 'Paskah 2026',
    date: '05 April 2026',
    label: 'Kegiatan Rohani',
    desc: 'Perayaan Paskah bersama seluruh anggota komunitas Vessel. Sebuah momen memperingati kebangkitan Kristus dalam kebersamaan yang penuh sukacita.',
    image: '/images/paskah/05-04-2026_1.png',
    tag: 'Sudah Berlalu',
    tagColor: 'bg-surface-container-highest text-on-surface-variant',
  },
  {
    title: 'Badminton Bersama',
    date: '04 April 2026',
    label: 'Olahraga & Fellowship',
    desc: 'Sesi olahraga badminton bersama anggota komunitas. Mempererat hubungan melalui aktivitas yang menyenangkan dan penuh semangat.',
    image: '/images/badminton/04-04-2026_1.png',
    tag: 'Sudah Berlalu',
    tagColor: 'bg-surface-container-highest text-on-surface-variant',
  },
  {
    title: 'Ibadah Sabtu',
    date: 'Setiap Sabtu',
    label: 'Ibadah Rutin',
    desc: 'Ibadah mingguan Vessel Community setiap Sabtu sore pukul 17:00 WIB di GSRI Jemaat Bekasi. Terbuka untuk semua.',
    image: '/images/ibadah/29-03-2026_1.png',
    tag: 'Rutin',
    tagColor: 'bg-primary-container text-on-primary-container',
  },
]

export default function EventPage() {
  return (
    <div className="pt-32 pb-32">
      {/* ── Header ── */}
      <header className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-20">
        <span className="font-label uppercase tracking-widest text-primary font-bold mb-4 block text-xs">
          Events &amp; Activities
        </span>
        <h1 className="text-6xl md:text-8xl font-headline italic tracking-tight leading-tight text-on-surface mb-6">
          Event &amp; <span className="text-primary-container">Kegiatan</span>
        </h1>
        <p className="text-xl text-secondary leading-relaxed font-light max-w-2xl">
          Setiap kegiatan adalah kesempatan untuk bertumbuh, tertawa bersama,
          dan mempererat tali persaudaraan dalam komunitas kita.
        </p>
      </header>

      {/* ── Events list ── */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 space-y-10">
        {events.map((event) => (
          <div
            key={event.title}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-surface-container-low rounded-xl overflow-hidden editorial-shadow hover:bg-surface-container-high transition-colors duration-300"
          >
            {/* Photo */}
            <div className="md:col-span-5 relative min-h-[250px] md:min-h-full">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            {/* Info */}
            <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${event.tagColor}`}
                  >
                    {event.tag}
                  </span>
                  <span className="text-secondary font-label text-xs uppercase tracking-widest">
                    {event.label}
                  </span>
                </div>
                <h2 className="font-headline italic text-4xl text-on-surface mb-3">
                  {event.title}
                </h2>
                <div className="flex items-center gap-2 text-secondary font-label text-sm mb-6">
                  <span className="material-symbols-outlined text-sm">
                    calendar_today
                  </span>
                  {event.date}
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  {event.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Verify + Commit**

```bash
npm run build
git add app/event/
git commit -m "feat: implement Event page with Paskah, Badminton, and weekly ibadah"
```

---

## Task 14: Kontak Page

**Files:**
- Create: `app/kontak/page.tsx`

> **Reference design:** `stitch/kontak_vessel_community/code.html`

- [ ] **Step 1: Create app/kontak/page.tsx**

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontak | Vessel Community',
  description:
    'Hubungi Vessel Community. Temukan kami di GSRI Jemaat Bekasi, Bekasi Grand Center Blok F1.',
}

const contactItems = [
  {
    icon: 'location_on',
    label: 'Alamat',
    value:
      'Bekasi Grand Center Blok F1, Jl Cut Meutiah, RT.001/RW.011, Margahayu, Bekasi Timur, Bekasi, West Java 17113',
  },
  {
    icon: 'schedule',
    label: 'Jadwal Ibadah',
    value: 'Setiap Sabtu, 17:00 WIB – Selesai',
  },
  {
    icon: 'church',
    label: 'Gereja Induk',
    value: 'GSRI Jemaat Bekasi',
  },
  {
    icon: 'groups',
    label: 'Anggota Aktif',
    value: '50+ Anggota',
  },
]

export default function KontakPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* ── Left: Info ── */}
          <div className="lg:col-span-5 space-y-12">
            <header className="space-y-4">
              <span className="font-label uppercase tracking-[0.2em] text-primary-container font-semibold text-xs block">
                Hubungi Kami
              </span>
              <h1 className="text-6xl md:text-7xl font-headline italic leading-none tracking-tight text-on-surface">
                Mari Bertumbuh Bersama.
              </h1>
              <p className="text-xl text-secondary max-w-md leading-relaxed font-body">
                Punya pertanyaan tentang komunitas kami atau sekadar ingin
                menyapa? Kami di sini untuk mendengarkan.
              </p>
            </header>

            {/* Contact details */}
            <div className="space-y-8">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors duration-300 flex-shrink-0">
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <div className="font-label text-xs uppercase tracking-widest text-secondary mb-1">
                      {item.label}
                    </div>
                    <div className="text-on-surface font-body leading-relaxed">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="pt-4">
              <p className="text-secondary font-body text-sm mb-4">
                Untuk bergabung ke komunitas atau tim pelayanan, hubungi kami
                langsung via WhatsApp:
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-xl font-label font-bold tracking-wide hover:bg-primary-container hover:text-on-primary-container transition-colors"
              >
                <span className="material-symbols-outlined">chat</span>
                Chat via WhatsApp
              </a>
            </div>
          </div>

          {/* ── Right: Map ── */}
          <div className="lg:col-span-7 space-y-8">
            {/* Google Maps embed */}
            <div className="rounded-xl overflow-hidden editorial-shadow aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0!2d107.00!3d-6.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBekasi+Grand+Center+Blok+F1%2C+Jl.+Cut+Meutiah%2C+Margahayu%2C+Bekasi+Timur!5e0!3m2!1sid!2sid!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi GSRI Jemaat Bekasi"
              />
            </div>

            {/* Info card */}
            <div className="bg-surface-container-low rounded-xl p-8 border-l-4 border-primary-container">
              <h3 className="font-headline italic text-2xl text-on-surface mb-4">
                GSRI Jemaat Bekasi
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                Bekasi Grand Center Blok F1, Jl Cut Meutiah, RT.001/RW.011,
                Margahayu, Bekasi Timur, Bekasi, West Java 17113
              </p>
              <a
                href="https://maps.google.com/?q=Bekasi+Grand+Center+Blok+F1+Jl+Cut+Meutiah+Margahayu+Bekasi+Timur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-label text-sm hover:text-primary-container transition-colors"
              >
                <span className="material-symbols-outlined text-sm">
                  open_in_new
                </span>
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify + Commit**

```bash
npm run build
git add app/kontak/
git commit -m "feat: implement Kontak page with contact details and map embed"
```

---

## Task 15: Final Build Verification

- [ ] **Step 1: Full production build**

```bash
npm run build
```

Expected output (approximate):
```
Route (app)                    Size
┌ ○ /                          ...
├ ○ /tentang-kami              ...
├ ○ /ibadah                    ...
├ ○ /komunitas                 ...
├ ○ /pelayanan                 ...
├ ○ /galeri                    ...
├ ○ /berita                    ...
├ ○ /event                     ...
└ ○ /kontak                    ...
```

All 9 routes must appear. No TypeScript errors. No build errors.

- [ ] **Step 2: Spot-check in dev mode**

```bash
npm run dev
```

Open each URL and verify:
- `http://localhost:3000` — Hero, schedule card, bento section
- `http://localhost:3000/tentang-kami` — Visi/misi, values grid, story
- `http://localhost:3000/ibadah` — Schedule card with real address, photo strip, FAQ, map
- `http://localhost:3000/komunitas` — Stats, activities with photos, WhatsApp CTA
- `http://localhost:3000/pelayanan` — Ministry teams grid, WhatsApp CTA
- `http://localhost:3000/galeri` — All photos grouped by event
- `http://localhost:3000/berita` — Memorial article for Natasha Carissa Vania
- `http://localhost:3000/event` — Paskah, Badminton, Ibadah Sabtu cards
- `http://localhost:3000/kontak` — Address, map embed, WhatsApp CTA

Navbar active link should highlight correctly on each page.

- [ ] **Step 3: Final commit**

```bash
git add .
git commit -m "feat: complete Vessel Community website — all 9 pages implemented"
```

---

## Self-Review Checklist

- **Spec coverage:** All 9 pages ✓ · Design tokens ✓ · Image paths ✓ · WhatsApp links left as `#` ✓ · Berita content (Natasha memorial) ✓ · Real address on Ibadah + Kontak ✓ · Navbar active link ✓ · Footer ✓ · Mobile hamburger ✓
- **Placeholders:** None — all content is explicit
- **Type consistency:** `Metadata` used consistently, `Image` from `next/image` used throughout, `Link` from `next/link` for internal navigation, `<a>` for external and WhatsApp links
- **Gaps:** None found
