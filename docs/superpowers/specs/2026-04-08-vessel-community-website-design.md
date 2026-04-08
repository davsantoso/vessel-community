# Vessel Community Website — Design Spec
**Date:** 2026-04-08

---

## 1. Overview

Website informasi statis untuk Vessel Community, komunitas gereja pemuda yang berada di bawah GSRI Jemaat Bekasi. Website ini dibangun dengan Next.js App Router, Tailwind CSS v4, dan TypeScript. Tidak ada CMS — semua konten hardcoded langsung di kode.

---

## 2. Info Komunitas

| Field | Value |
|---|---|
| Nama | Vessel Community |
| Gereja induk | GSRI Jemaat Bekasi |
| Alamat | Bekasi Grand Center Blok F1, Jl Cut Meutiah, RT.001/RW.011, Margahayu, Bekasi Timur, Bekasi, West Java 17113 |
| Jadwal ibadah | Setiap Sabtu, 17:00 – selesai |
| Anggota aktif | 50+ |
| Join/pengurus | Diarahkan ke grup WhatsApp (link dikosongkan dulu, diisi belakangan) |

---

## 3. Arsitektur

### Stack
- Next.js 16.2.2 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript

### Struktur File

```
app/
├── layout.tsx              ← root layout: Navbar + Footer + font setup
├── page.tsx                ← Home /
├── tentang-kami/page.tsx
├── ibadah/page.tsx
├── komunitas/page.tsx
├── pelayanan/page.tsx
├── galeri/page.tsx
├── berita/page.tsx
├── event/page.tsx
└── kontak/page.tsx

components/
├── Navbar.tsx
└── Footer.tsx

public/
└── images/
    ├── logo_vessel.png
    ├── 28-03-2026.png
    ├── 14-03-2026.png
    ├── ibadah/
    │   ├── 19-01-2026_1.png
    │   ├── 19-01-2026_2.png
    │   ├── 29-03-2026_1.png
    │   ├── 29-03-2026_2.png
    │   └── 29-03-2026_3.png
    ├── paskah/
    │   ├── 05-04-2026_1.png
    │   ├── 05-04-2026_2.png
    │   ├── 05-04-2026_3.png
    │   ├── 05-04-2026_4.png
    │   └── 05-04-2026_5.png
    ├── badminton/
    │   ├── 04-04-2026_1.png
    │   ├── 04-04-2026_2.png
    │   ├── 04-04-2026_3.png
    │   └── 04-04-2026_4.png
    └── berita/
        └── 07-04-2026.jpg

app/globals.css             ← Tailwind v4 CSS variables + custom utility classes
```

**Catatan:** Foto dipindahkan dari `assets/images/` ke `public/images/` agar dapat diakses Next.js via path `/images/...`.

---

## 4. Design System

Mengikuti sistem "Sacred Glow / Modern Sanctuary" dari file `stitch/sacred_glow/DESIGN.md`.

### Font
Diload via `next/font/google` (bukan CDN):
- **Newsreader** — headlines, display, italic editorial
- **Plus Jakarta Sans** — body, label, navigasi

### Warna (CSS variables di `globals.css`)

| Token | Value | Peran |
|---|---|---|
| `primary` | `#755B00` | Deep Gold |
| `primary-container` | `#C9A227` | Vibrant Gold / accent |
| `secondary` | `#7D553C` | Warm Wood |
| `surface` | `#FFF9ED` | Background utama (Warm Cream) |
| `on-surface` | `#1D1C14` | Teks utama (Charcoal Brown) |
| `surface-container-low` | `#F9F3E7` | Card background |
| `surface-container-high` | `#EDE8DC` | Hover state card |
| `surface-container-highest` | `#E8E2D6` | Input, secondary button bg |
| `outline-variant` | `#D1C5AF` | Ghost border |

### Custom CSS Classes
- `.glass-nav` — `background: rgba(255,249,237,0.7); backdrop-filter: blur(24px)`
- `.editorial-shadow` — `box-shadow: 0 32px 64px -12px rgba(125,85,60,0.06)`
- `.hero-gradient` — `background: linear-gradient(135deg, #3D1F0A 0%, #1D1C14 100%)`

---

## 5. Shared Components

### Navbar
- Sticky, fixed top, z-50, glassmorphism (`.glass-nav`)
- Kiri: logo "Vessel Community" (Newsreader italic, warna primary)
- Tengah: link navigasi — Home · Tentang Kami · Ibadah · Komunitas · Pelayanan · Kontak
- Kanan: tombol "Join Us" → link WhatsApp (kosong dulu, `href="#"`)
- Mobile: hamburger menu yang toggle nav links

### Footer
- Kolom 1: nama + deskripsi singkat komunitas
- Kolom 2: link cepat (Event, Berita, Galeri)
- Kolom 3: info kontak (alamat + tombol WhatsApp kosong)
- Baris bawah: copyright "© 2026 Vessel Community"

---

## 6. Halaman

### Home `/`
- **Hero section**: dark gradient background, headline besar "A home for the youthful soul.", deskripsi komunitas, 2 CTA ("Temukan Komunitas" → `/komunitas`, "Pelajari Visi Kami" → `/tentang-kami`), foto `ibadah/29-03-2026_1.png`
- **Jadwal Ibadah**: 1 kartu (Sabtu 17:00 – selesai, alamat GSRI Jemaat Bekasi), CTA "Lihat Jadwal" → `/ibadah`
- **Bento lifestyle section**: foto besar ibadah, kartu "Connect Groups" → `/komunitas`, kartu foto "Pelayanan" → `/pelayanan`

### Tentang Kami `/tentang-kami`
- Hero: judul + foto `28-03-2026.png`
- Visi & Misi komunitas
- Nilai-nilai komunitas (kartu bento)
- Info gereja induk: GSRI Jemaat Bekasi + alamat lengkap
- Foto `14-03-2026.png`

### Ibadah `/ibadah`
- Hero: judul "Jadwal Ibadah"
- Kartu jadwal tunggal: Sabtu 17:00 – selesai, lokasi GSRI Jemaat Bekasi (alamat lengkap)
- Embed Google Maps lokasi gereja
- Galeri preview foto ibadah (`ibadah/*.png`)
- CTA "Bergabung" → WhatsApp

### Komunitas `/komunitas`
- Hero: judul + deskripsi komunitas 50+ anggota
- Kartu connect groups / kegiatan komunitas
- Galeri preview foto kegiatan (`paskah/*.png`, `badminton/*.png`)
- CTA "Bergabung ke Grup WA" → WhatsApp

### Pelayanan `/pelayanan`
- Daftar tim pelayanan: Worship, Multimedia/Tech, Dekorasi, Konsumsi, dll (konten dummy)
- CTA untuk bergabung tim → WhatsApp

### Galeri `/galeri`
- Grid masonry/bento semua foto dikelompokkan per event:
  - Ibadah (19-01-2026, 29-03-2026)
  - Paskah (05-04-2026)
  - Badminton (04-04-2026)
- Label tanggal dan nama event per grup

### Berita `/berita`
- Kartu berita: **"Selamat Jalan, Natasha Carissa Vania"**
  - Tanggal: 07 April 2026
  - Foto: `berita/07-04-2026.jpg`
  - Ayat: Roma 14:8
  - Isi: pesan duka lengkap dari Vessel Community & Family
  - Penutup: doa untuk keluarga yang ditinggalkan

### Event `/event`
- Kartu event dengan foto:
  - **Paskah** — 05 April 2026 (`paskah/05-04-2026_1.png`)
  - **Badminton** — 04 April 2026 (`badminton/04-04-2026_1.png`)
- Label tanggal, nama event, deskripsi singkat

### Kontak `/kontak`
- Alamat lengkap: Bekasi Grand Center Blok F1, Jl Cut Meutiah, RT.001/RW.011, Margahayu, Bekasi Timur, Bekasi, West Java 17113
- Embed Google Maps
- Tombol "Chat via WhatsApp" → link kosong dulu
- Info ibadah ringkas (Sabtu 17:00)

---

## 7. Prinsip Implementasi

- Semua halaman adalah React Server Components (tidak ada `"use client"` kecuali untuk hamburger menu Navbar)
- Foto menggunakan `next/image` dengan `width` dan `height` eksplisit, `alt` deskriptif
- Tidak ada form yang membutuhkan server action — newsletter form di footer dihilangkan atau dibuat non-fungsional (UI only)
- Tidak ada animasi kompleks — hanya Tailwind transition classes (`transition-all duration-300/500`)
- Setiap halaman export `metadata` untuk SEO dasar (title, description)
