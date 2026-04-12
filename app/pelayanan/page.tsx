import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Pelayanan | Vessel Community',
  description:
    'Bergabunglah dalam tim pelayanan Vessel Community. Temukan cara untuk melayani dengan talenta dan hati yang tulus.',
}

const teams = [
  { icon: 'music_note', title: 'Tim Worship', desc: 'Memimpin ibadah melalui musik dan nyanyian. Menciptakan suasana yang menyambut hadirat Tuhan.', spots: 'Terbuka untuk vocalist, musician' },
  { icon: 'videocam', title: 'Tim Multimedia', desc: 'Mengelola proyektor, livestream, dan dokumentasi kegiatan komunitas.', spots: 'Terbuka untuk operator teknis' },
  { icon: 'restaurant', title: 'Tim Konsumsi', desc: 'Menyiapkan kebutuhan makan dan minum untuk setiap kegiatan komunitas.', spots: 'Terbuka untuk semua' },
]

export default function PelayananPage() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <header className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-20">
        <span className="text-primary font-label uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">
          Serve &amp; Impact
        </span>
        <h1 className="font-headline italic text-6xl md:text-8xl text-on-surface leading-[1.1] tracking-tight mb-8 max-w-4xl">
          Melayani dengan <span className="text-primary-container">Sepenuh Hati.</span>
        </h1>
        <p className="text-secondary text-xl max-w-2xl leading-relaxed font-light">
          Pelayanan bukan tentang kemampuan, melainkan tentang ketersediaan. Temukan tim yang paling
          sesuai dengan talenta dan hasrat hatimu.
        </p>
      </header>

      {/* Hero photo */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-20">
        <div className="rounded-xl overflow-hidden relative h-[400px] md:h-[500px]">
          <Image
            src="https://res.cloudinary.com/drxqokest/image/upload/v1775743502/29-03-2026_1_xp1ufm.png"
            alt="Tim pelayanan Vessel Community"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex flex-col justify-end p-12">
            <p className="text-white font-headline italic text-3xl max-w-xl">
              "Setiap tangan yang melayani adalah tangan Tuhan yang bergerak di bumi."
            </p>
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-32">
        <h2 className="font-headline italic text-4xl text-on-surface mb-12">Tim Pelayanan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team) => (
            <div key={team.title} className="bg-surface-container-low rounded-xl p-8 border-t-4 border-primary-container hover:bg-surface-container-high transition-all duration-300">
              <span
                className="material-symbols-outlined text-primary text-3xl mb-6 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {team.icon}
              </span>
              <h3 className="font-headline italic text-2xl text-on-surface mb-3">{team.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{team.desc}</p>
              <div className="flex items-center gap-2 text-xs text-secondary/70 font-label">
                <span className="material-symbols-outlined text-sm">info</span>
                {team.spots}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-container-high py-32 px-6 md:px-12 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-headline italic text-5xl text-on-surface mb-6">Siap Melayani?</h2>
          <p className="text-secondary text-lg leading-relaxed mb-10">
            Hubungi kami melalui WhatsApp untuk mendaftarkan diri ke salah satu tim pelayanan.
            Tidak perlu pengalaman — hanya perlu hati yang mau melayani.
          </p>
          <a
            href="https://wa.me/6282335642114?text=Halo%20Vessel%20Community%2C%20saya%20ingin%20bertanya..."
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
