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
    date: '2026',
    photos: [
      { src: '/images/ibadah/29-03-2026_1.png', alt: 'Ibadah 29 Mar 2026' },
      { src: '/images/ibadah/29-03-2026_2.png', alt: 'Ibadah 29 Mar 2026' },
      { src: '/images/ibadah/29-03-2026_3.png', alt: 'Ibadah 29 Mar 2026' },
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
      {/* Header */}
      <header className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-20">
        <span className="font-label uppercase tracking-widest text-primary font-bold mb-4 block text-xs">
          Our Shared Journey
        </span>
        <h1 className="text-6xl md:text-8xl font-headline italic tracking-tight leading-tight text-on-surface mb-6">
          Galeri &amp; <span className="text-primary-container">Momen</span>
        </h1>
        <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light max-w-2xl">
          Merekam jejak kebersamaan, pertumbuhan iman, dan pelayanan dalam sebuah mosaik visual yang
          penuh makna. Setiap bingkai bercerita tentang kasih.
        </p>
      </header>

      {/* Photo groups */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 space-y-20">
        {groups.map((group) => (
          <div key={`${group.title}-${group.date}`}>
            <div className="flex items-baseline gap-4 mb-8">
              <h2 className="font-headline italic text-3xl text-on-surface">{group.title}</h2>
              <span className="font-label text-xs uppercase tracking-widest text-secondary">{group.date}</span>
            </div>
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
                    i === 0 && group.photos.length >= 3 ? 'aspect-[4/3]' : 'aspect-square'
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
