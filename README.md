# Vessel Community Website

Website informasi komunitas pemuda **Vessel Community** — GSRI Jemaat Bekasi.

## Stack

- **Next.js** 15 (App Router)
- **React** 19
- **TypeScript**
- **Tailwind CSS** v4 (konfigurasi via `@theme {}` di `globals.css`)
- **next/image** untuk optimasi gambar
- **next/font/google** — Newsreader + Plus Jakarta Sans

## Halaman

| Route           | Halaman          |
| --------------- | ---------------- |
| `/`             | Home             |
| `/tentang-kami` | Tentang Kami     |
| `/ibadah`       | Jadwal Ibadah    |
| `/komunitas`    | Komunitas        |
| `/pelayanan`    | Pelayanan        |
| `/galeri`       | Galeri           |
| `/berita`       | Berita           |
| `/event`        | Event & Kegiatan |
| `/kontak`       | Kontak           |

## Struktur Folder

```
app/                  # Halaman (App Router)
components/           # Navbar, Footer
public/               # Asset
```

## Development

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Catatan

- Semua konten bersifat statis (hardcoded), tidak menggunakan CMS.
- Link WhatsApp masih placeholder `href="#"` — ganti dengan link grup WhatsApp komunitas.
- Foto disimpan di `Cloudinary.com`.
