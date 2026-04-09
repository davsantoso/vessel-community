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
    desc: 'Perayaan Paskah bersama seluruh anggota komunitas Vessel. Sebuah momen memperingati kebangkitan Kristus dalam kebersamaan yang penuh sukacita.',
    images: ['https://res.cloudinary.com/drxqokest/image/upload/v1775743559/05-04-2026_1_d37cjo.png', 'https://res.cloudinary.com/drxqokest/image/upload/v1775743559/05-04-2026_2_h43uvk.png'],
    color: 'bg-primary-container',
    textColor: 'text-on-primary-container',
  },
  {
    title: 'Badminton',
    date: '04 April 2026',
    desc: 'Sesi olahraga badminton bersama anggota komunitas. Mempererat hubungan melalui aktivitas yang menyenangkan dan penuh semangat.',
    images: ['https://res.cloudinary.com/drxqokest/image/upload/v1775743799/04-04-2026_1_kt0hta.png', 'https://res.cloudinary.com/drxqokest/image/upload/v1775743798/04-04-2026_2_jwj7c5.png'],
    color: 'bg-secondary',
    textColor: 'text-surface',
  },
]

export default function KomunitasPage() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <header className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-20">
        <span className="text-primary font-label uppercase tracking-[0.2em] text-xs font-semibold mb-6 block">
          Our Community
        </span>
        <h1 className="font-headline italic text-6xl md:text-8xl text-on-surface leading-[1.1] tracking-tight mb-8 max-w-4xl">
          Bertumbuh <span className="text-primary-container">Bersama</span> dalam Kasih.
        </h1>
        <p className="text-secondary text-xl max-w-2xl leading-relaxed font-light">
          Vessel Community adalah tempat di mana persahabatan sejati terbentuk — melalui ibadah,
          olahraga, pelayanan, dan setiap momen kehidupan sehari-hari.
        </p>
      </header>

      {/* Stats */}
      <section className="bg-surface-container-low py-16 px-6 md:px-12 mb-20">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="font-headline italic text-5xl text-primary mb-2">50+</div>
            <div className="font-label text-xs uppercase tracking-widest text-secondary">Anggota Aktif</div>
          </div>
          <div>
            <div className="font-headline italic text-5xl text-primary mb-2">Sabtu</div>
            <div className="font-label text-xs uppercase tracking-widest text-secondary">Pertemuan Rutin</div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="font-headline italic text-5xl text-primary mb-2">∞</div>
            <div className="font-label text-xs uppercase tracking-widest text-secondary">Kenangan Bersama</div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-32">
        <h2 className="font-headline italic text-4xl text-on-surface mb-12">Kegiatan Komunitas</h2>
        <div className="space-y-12">
          {activities.map((act) => (
            <div key={act.title} className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className={`md:col-span-4 ${act.color} rounded-xl p-10 flex flex-col justify-between min-h-[300px]`}>
                <div>
                  <div className={`font-label text-xs uppercase tracking-widest ${act.textColor}/70 mb-2`}>{act.date}</div>
                  <h3 className={`font-headline italic text-3xl ${act.textColor} mb-4`}>{act.title}</h3>
                  <p className={`${act.textColor}/80 text-sm leading-relaxed`}>{act.desc}</p>
                </div>
                <span className={`material-symbols-outlined ${act.textColor}/50 text-5xl`}>groups</span>
              </div>
              <div className="md:col-span-8 grid grid-cols-2 gap-4">
                {act.images.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden relative aspect-[4/3] group">
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

      {/* Join CTA */}
      <section className="bg-surface-container-low py-32 px-6 md:px-12 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="material-symbols-outlined text-primary-container text-5xl mb-6 block">group_add</span>
          <h2 className="font-headline italic text-5xl text-on-surface mb-6">Ingin Bergabung?</h2>
          <p className="text-secondary text-lg leading-relaxed mb-10">
            Komunitas kami terbuka untuk siapa saja. Bergabunglah ke grup WhatsApp kami untuk
            mendapatkan informasi terbaru tentang ibadah, kegiatan, dan pengumuman.
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
