import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Berita & Pengumuman | Vessel Community',
  description: 'Berita dan pengumuman terbaru dari Vessel Community.',
}

export default function BeritaPage() {
  return (
    <div className="pt-32 pb-32">
      {/* Header */}
      <header className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-20">
        <span className="font-label uppercase tracking-widest text-primary font-bold mb-4 block text-xs">
          Berita &amp; Pengumuman
        </span>
        <h1 className="text-6xl md:text-8xl font-headline italic tracking-tight leading-tight text-on-surface mb-6">
          Kabar dari <span className="text-primary-container">Komunitas</span>
        </h1>
        <p className="text-xl text-secondary leading-relaxed font-light max-w-2xl">
          Informasi terbaru, pengumuman penting, dan cerita dari hati ke hati untuk seluruh anggota
          Vessel Community.
        </p>
      </header>

      {/* News card */}
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
                  "Sebab jika kita hidup, kita hidup untuk Tuhan, dan jika kita mati, kita mati
                  untuk Tuhan. Jadi baik hidup atau mati, kita adalah milik Tuhan."
                </p>
                <cite className="text-secondary font-label text-sm not-italic">— Roma 14:8</cite>
              </blockquote>

              {/* Body */}
              <div className="space-y-5 text-on-surface-variant leading-loose text-lg">
                <p>
                  Dengan hati yang penuh dukacita, kami mengucapkan selamat jalan kepada anggota
                  Vessel Community yang kami kasihi,{' '}
                  <strong className="text-on-surface">Natasha Carissa Vania</strong>.
                </p>
                <p>
                  Tuhan telah memanggilmu pulang ke rumah-Nya yang kekal. Di sana tidak ada lagi
                  air mata, tidak ada lagi penderitaan, hanya damai sejahtera yang sempurna dalam
                  hadirat-Nya.
                </p>
                <p>
                  Kami bersyukur untuk setiap waktu yang Tuhan izinkan kami habiskan bersamamu.
                  Kenangan bersamamu akan tetap hidup dalam hati kami.
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
                  Doa kami menyertai keluarga yang ditinggalkan. Tuhan memberkati 🙏
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
