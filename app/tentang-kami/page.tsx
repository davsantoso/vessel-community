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
      {/* Hero */}
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

      {/* Visi, Misi, Nilai */}
      <section className="bg-surface-container-low py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Visi card */}
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
            {/* Photo */}
            <div className="bg-surface-container-highest rounded-xl overflow-hidden min-h-[400px] relative">
              <Image
                src="/images/14-03-2026.png"
                alt="Vessel Community kegiatan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            {/* Filosofi */}
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
            {/* Values 2x2 */}
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

      {/* Story */}
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
              <p className="text-surface font-headline italic text-xl">Est. 2024</p>
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
                Nama <strong className="text-on-surface">Vessel</strong> dipilih
                untuk mengingatkan kita semua bahwa kita tidak perlu menjadi
                sempurna untuk berguna. Sebuah bejana yang retak pun masih bisa
                memancarkan cahaya dari dalamnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-screen-2xl mx-auto relative rounded-xl overflow-hidden py-24 px-12 text-center bg-secondary">
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-12 text-surface">
            <div>
              <div className="font-headline italic text-5xl mb-2">50+</div>
              <div className="font-body text-xs uppercase tracking-widest opacity-80">Anggota Aktif</div>
            </div>
            <div>
              <div className="font-headline italic text-5xl mb-2">Sabtu</div>
              <div className="font-body text-xs uppercase tracking-widest opacity-80">Jadwal Ibadah</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="font-headline italic text-5xl mb-2">2024</div>
              <div className="font-body text-xs uppercase tracking-widest opacity-80">Berdiri Sejak</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
