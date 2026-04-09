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
      <section className="hero-gradient min-h-screen flex items-center pt-24 pb-24 px-6 md:px-12 relative">
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
