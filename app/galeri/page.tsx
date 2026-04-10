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
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775743502/29-03-2026_1_xp1ufm.png', alt: 'Ibadah 29 Mar 2026' },
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775743501/29-03-2026_2_avy5ml.png', alt: 'Ibadah 29 Mar 2026' },
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775743501/29-03-2026_3_qju2se.png', alt: 'Ibadah 29 Mar 2026' },
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775743501/19-01-2026_1_tn4dc5.png', alt: 'Ibadah 19 Jan 2026' },
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775743502/19-01-2026_2_bdfzut.png', alt: 'Ibadah 19 Jan 2026' },
    ],
  },
  {
    title: 'Paskah',
    date: '05 April 2026',
    photos: [
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775743559/05-04-2026_1_d37cjo.png', alt: 'Paskah 05 Apr 2026' },
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775743559/05-04-2026_2_h43uvk.png', alt: 'Paskah 05 Apr 2026' },
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775743559/05-04-2026_3_bz30le.png', alt: 'Paskah 05 Apr 2026' },
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775743561/05-04-2026_4_hftlhv.png', alt: 'Paskah 05 Apr 2026' },
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775743564/05-04-2026_5_enhkcg.png', alt: 'Paskah 05 Apr 2026' },
    ],
  },
  {
    title: 'Badminton',
    date: '04 April 2026',
    photos: [
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775743799/04-04-2026_1_kt0hta.png', alt: 'Badminton 04 Apr 2026' },
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775743798/04-04-2026_2_jwj7c5.png', alt: 'Badminton 04 Apr 2026' },
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775743799/04-04-2026_3_ucxc4c.png', alt: 'Badminton 04 Apr 2026' },
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775743799/04-04-2026_4_fzjuno.png', alt: 'Badminton 04 Apr 2026' },
    ],
  },
  {
    title: 'Vessel Camp',
    date: '26–27 September 2025',
    photos: [
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775832793/27-09-2025_1_bv3yzg.jpg', alt: 'Vessel Camp Sep 2025' },
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775832792/27-09-2025_2_jimyee.jpg', alt: 'Vessel Camp Sep 2025' },
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775832793/27-09-2025_3_jmab2u.jpg', alt: 'Vessel Camp Sep 2025' },
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775832793/27-09-2025_4_md2u9h.jpg', alt: 'Vessel Camp Sep 2025' },
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775832794/27-09-2025_5_bracc6.jpg', alt: 'Vessel Camp Sep 2025' },
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775832793/27-09-2025_6_mcsrth.jpg', alt: 'Vessel Camp Sep 2025' },
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775832794/27-09-2025_7_pjixp3.jpg', alt: 'Vessel Camp Sep 2025' },
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775832794/27-09-2025_8_xfqvoe.jpg', alt: 'Vessel Camp Sep 2025' },
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775832795/27-09-2025_9_hvr82v.jpg', alt: 'Vessel Camp Sep 2025' },
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775832794/27-09-2025_10_d1gq9a.jpg', alt: 'Vessel Camp Sep 2025' },
    ],
  },
  {
    title: 'Momen Bersama',
    date: '2026',
    photos: [
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775743501/29-03-2026_3_qju2se.png', alt: 'Kegiatan 29 Mar 2026' },
      { src: 'https://res.cloudinary.com/drxqokest/image/upload/v1775743502/19-01-2026_2_bdfzut.png', alt: 'Kegiatan 19 Januari 2026' },
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
