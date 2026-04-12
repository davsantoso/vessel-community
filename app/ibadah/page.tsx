import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jadwal Ibadah | Vessel Community",
  description:
    "Ibadah Vessel Community setiap Sabtu pukul 17:00 WIB di GSRI Jemaat Bekasi, Bekasi Grand Center Blok F1.",
};

const faq = [
  {
    no: "01",
    q: "Di mana lokasi ibadah?",
    a: "GSRI Jemaat Bekasi — Bekasi Grand Center Blok F1, Jl Cut Meutiah, RT.001/RW.011, Margahayu, Bekasi Timur, Bekasi, West Java 17113.",
  },
  {
    no: "02",
    q: "Apa pakaian yang disarankan?",
    a: "Kenakan pakaian yang membuat Anda merasa nyaman. Kami menyambut kehadiran Anda, bukan apa yang Anda kenakan.",
  },
  {
    no: "03",
    q: "Bagaimana cara bergabung?",
    a: "Langsung datang ke lokasi atau hubungi kami via WhatsApp untuk informasi lebih lanjut.",
  },
];

export default function IbadahPage() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <header className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-20 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-[0.2em] uppercase mb-6">
          Worship Experience
        </span>
        <h1 className="font-headline italic text-6xl md:text-8xl text-on-surface tracking-tighter leading-none mb-8">
          Bertemu dalam <br /> Kehadiran-Nya
        </h1>
        <p className="max-w-2xl mx-auto text-secondary text-lg leading-relaxed font-light">
          Temukan ruang yang tenang dan penuh makna untuk bertumbuh bersama.
          Ibadah kami dirancang untuk mendukung setiap musim kehidupan Anda.
        </p>
      </header>

      {/* Schedule bento */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main card */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low p-10 flex flex-col justify-between min-h-[500px] border-l-4 border-primary-container editorial-shadow">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full -mr-20 -mt-20 blur-3xl" />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h2 className="font-headline italic text-4xl text-on-surface mb-2">
                    Ibadah Vessel Community
                  </h2>
                  <p className="text-secondary font-medium tracking-wide">
                    GSRI Jemaat Bekasi · Setiap Sabtu
                  </p>
                </div>
                <span className="material-symbols-outlined text-primary-container text-4xl">
                  church
                </span>
              </div>
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    schedule
                  </span>
                  <span className="text-on-surface font-semibold text-xl">
                    17:00 WIB – Selesai
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5">
                    location_on
                  </span>
                  <div>
                    <span className="text-on-surface font-semibold text-lg block">
                      GSRI Jemaat Bekasi
                    </span>
                    <span className="text-on-surface-variant text-sm leading-relaxed">
                      Bekasi Grand Center Blok F1, Jl Cut Meutiah,
                      RT.001/RW.011, Margahayu, Bekasi Timur, Bekasi, West Java
                      17113
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    calendar_today
                  </span>
                  <span className="text-on-surface font-semibold text-xl">
                    Setiap Sabtu
                  </span>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex flex-wrap gap-4 mt-12">
              <a
                href="https://maps.google.com/?q=GSRI+Jemaat+Bekasi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-primary-container hover:text-on-primary-container transition-colors font-label text-sm"
              >
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>
                Petunjuk Arah
              </a>
              <a
                href="https://wa.me/6282335642114?text=Halo%20Vessel%20Community%2C%20saya%20ingin%20bertanya..."
                className="bg-surface-container-highest text-primary px-6 py-3 rounded-xl hover:bg-white transition-colors font-label text-sm flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
          {/* Side photo */}
          <div className="md:col-span-4 rounded-xl overflow-hidden relative min-h-[300px]">
            <Image
              src="https://res.cloudinary.com/drxqokest/image/upload/v1775743502/29-03-2026_1_xp1ufm.png"
              alt="Suasana ibadah Vessel Community"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mt-20">
        <h3 className="font-headline italic text-3xl text-on-surface mb-8">
          Momen Ibadah
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              src: "https://res.cloudinary.com/drxqokest/image/upload/v1775743501/29-03-2026_2_avy5ml.png",
              alt: "Ibadah 29 Mar 2026",
            },
            {
              src: "https://res.cloudinary.com/drxqokest/image/upload/v1775743501/29-03-2026_3_qju2se.png",
              alt: "Ibadah 29 Mar 2026",
            },
            {
              src: "https://res.cloudinary.com/drxqokest/image/upload/v1775743501/19-01-2026_1_tn4dc5.png",
              alt: "Ibadah 19 Jan 2026",
            },
            {
              src: "https://res.cloudinary.com/drxqokest/image/upload/v1775743502/19-01-2026_2_bdfzut.png",
              alt: "Ibadah 19 Jan 2026",
            },
          ].map((img) => (
            <div
              key={img.src}
              className="aspect-square rounded-xl overflow-hidden relative group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Location + FAQ */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mt-32 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="rounded-xl overflow-hidden aspect-video editorial-shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.579122362056!2d107.01575294554617!3d-6.251635472468645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698e8771f08899%3A0x4199faabcd0398aa!2sGSRI%20Jemaat%20Bekasi!5e0!3m2!1sid!2sid!4v1775700382408!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi GSRI Jemaat Bekasi"
            />
          </div>
          <div>
            <h2 className="font-headline italic text-4xl text-on-surface mb-8 tracking-tight leading-tight">
              Yang perlu Anda ketahui sebelum datang
            </h2>
            <div className="space-y-8">
              {faq.map((item) => (
                <div
                  key={item.no}
                  className="border-b border-outline-variant/30 pb-6"
                >
                  <h4 className="text-on-surface font-semibold text-lg flex items-center gap-3 mb-3">
                    <span className="text-primary-container italic font-headline">
                      {item.no}.
                    </span>
                    {item.q}
                  </h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed pl-10">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
