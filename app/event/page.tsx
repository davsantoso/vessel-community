import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Event & Kegiatan | Vessel Community',
  description: 'Jadwal event dan kegiatan terbaru Vessel Community.',
}

const events = [
  {
    title: 'Ibadah Sabtu',
    date: 'Setiap Sabtu',
    label: 'Ibadah Rutin',
    desc: 'Ibadah mingguan Vessel Community setiap Sabtu sore pukul 17:00 WIB di GSRI Jemaat Bekasi. Terbuka untuk semua.',
    image: 'https://res.cloudinary.com/drxqokest/image/upload/v1775743502/29-03-2026_1_xp1ufm.png',
    tag: 'Rutin',
    tagColor: 'bg-primary-container text-on-primary-container',
  },
  {
    title: 'Paskah 2026',
    date: '05 April 2026',
    label: 'Kegiatan Rohani',
    desc: 'Perayaan Paskah bersama seluruh anggota komunitas Vessel. Sebuah momen memperingati kebangkitan Kristus dalam kebersamaan yang penuh sukacita.',
    image: 'https://res.cloudinary.com/drxqokest/image/upload/v1775743559/05-04-2026_1_d37cjo.png',
    tag: 'Sudah Berlalu',
    tagColor: 'bg-surface-container-highest text-on-surface-variant',
  },
  {
    title: 'Badminton Bersama',
    date: '04 April 2026',
    label: 'Olahraga & Fellowship',
    desc: 'Sesi olahraga badminton bersama anggota komunitas. Mempererat hubungan melalui aktivitas yang menyenangkan dan penuh semangat.',
    image: 'https://res.cloudinary.com/drxqokest/image/upload/v1775743799/04-04-2026_1_kt0hta.png',
    tag: 'Sudah Berlalu',
    tagColor: 'bg-surface-container-highest text-on-surface-variant',
  },
  {
    title: 'Vessel Camp',
    date: '26–27 September 2025',
    label: 'Kebersamaan & Relasi',
    desc: 'Kegiatan outing pemuda dan remaja di Villa Kembali Ke Akar, Cilember, Cisarua, Bogor. Diikuti oleh kelas Gloria, Tunas Remaja, dan Remaja untuk mempererat kebersamaan antar generasi.',
    image: 'https://res.cloudinary.com/drxqokest/image/upload/v1775832792/27-09-2025_2_jimyee.jpg',
    tag: 'Sudah Berlalu',
    tagColor: 'bg-surface-container-highest text-on-surface-variant',
  },
]

export default function EventPage() {
  return (
    <div className="pt-32 pb-32">
      {/* Header */}
      <header className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-20">
        <span className="font-label uppercase tracking-widest text-primary font-bold mb-4 block text-xs">
          Events &amp; Activities
        </span>
        <h1 className="text-6xl md:text-8xl font-headline italic tracking-tight leading-tight text-on-surface mb-6">
          Event &amp; <span className="text-primary-container">Kegiatan</span>
        </h1>
        <p className="text-xl text-secondary leading-relaxed font-light max-w-2xl">
          Setiap kegiatan adalah kesempatan untuk bertumbuh, tertawa bersama, dan mempererat tali
          persaudaraan dalam komunitas kita.
        </p>
      </header>

      {/* Events list */}
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
                  <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${event.tagColor}`}>
                    {event.tag}
                  </span>
                  <span className="text-secondary font-label text-xs uppercase tracking-widest">
                    {event.label}
                  </span>
                </div>
                <h2 className="font-headline italic text-4xl text-on-surface mb-3">{event.title}</h2>
                <div className="flex items-center gap-2 text-secondary font-label text-sm mb-6">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  {event.date}
                </div>
                <p className="text-on-surface-variant leading-relaxed">{event.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
