import type { Metadata } from "next";
import { Instagram } from "react-feather";

export const metadata: Metadata = {
  title: "Kontak | Vessel Community",
  description:
    "Hubungi Vessel Community. Temukan kami di GSRI Jemaat Bekasi, Bekasi Grand Center Blok F1.",
};

const contactItems = [
  {
    icon: "location_on",
    label: "Alamat",
    value:
      "Bekasi Grand Center Blok F1, Jl Cut Meutiah, RT.001/RW.011, Margahayu, Bekasi Timur, Bekasi, West Java 17113",
  },
  {
    icon: "schedule",
    label: "Jadwal Ibadah",
    value: "Setiap Sabtu, 17:00 WIB – Selesai",
  },
  {
    icon: "church",
    label: "Gereja Induk",
    value: "GSRI Jemaat Bekasi",
  },
  {
    icon: "groups",
    label: "Anggota Aktif",
    value: "50+ Anggota",
  },
];

export default function KontakPage() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Info */}
          <div className="lg:col-span-5 space-y-12">
            <header className="space-y-4">
              <span className="font-label uppercase tracking-[0.2em] text-primary-container font-semibold text-xs block">
                Hubungi Kami
              </span>
              <h1 className="text-6xl md:text-7xl font-headline italic leading-none tracking-tight text-on-surface">
                Mari Bertumbuh Bersama.
              </h1>
              <p className="text-xl text-secondary max-w-md leading-relaxed font-body">
                Punya pertanyaan tentang komunitas kami atau sekadar ingin
                menyapa? Kami di sini untuk mendengarkan.
              </p>
            </header>

            {/* Contact details */}
            <div className="space-y-8">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors duration-300 flex-shrink-0">
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <div className="font-label text-xs uppercase tracking-widest text-secondary mb-1">
                      {item.label}
                    </div>
                    <div className="text-on-surface font-body leading-relaxed">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp & Instagram CTA */}
            <div className="pt-4 space-y-3 flex flex-col items-start">
              <p className="text-secondary font-body text-sm mb-4">
                Untuk bergabung ke komunitas atau tim pelayanan, hubungi kami
                langsung via WhatsApp:
              </p>
              <a
                href="https://wa.me/6282335642114?text=Halo%20Vessel%20Community%2C%20saya%20ingin%20bertanya..."
                className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-xl font-label font-bold tracking-wide hover:bg-primary-container hover:text-on-primary-container transition-colors"
              >
                <span className="material-symbols-outlined">chat</span>
                Chat via WhatsApp
              </a>
              <a
                href="https://www.instagram.com/vessel.comm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-outline-variant text-secondary px-8 py-4 rounded-xl font-label font-bold tracking-wide hover:bg-surface-container-high transition-colors"
              >
                <Instagram size={20} />
                Lihat di Instagram
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div className="lg:col-span-7 space-y-8">
            <div className="rounded-xl overflow-hidden editorial-shadow aspect-video">
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

            <div className="bg-surface-container-low rounded-xl p-8 border-l-4 border-primary-container">
              <h3 className="font-headline italic text-2xl text-on-surface mb-4">
                GSRI Jemaat Bekasi
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                Bekasi Grand Center Blok F1, Jl Cut Meutiah, RT.001/RW.011,
                Margahayu, Bekasi Timur, Bekasi, West Java 17113
              </p>
              <a
                href="https://maps.google.com/?q=GSRI+Jemaat+Bekasi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-label text-sm hover:text-primary-container transition-colors"
              >
                <span className="material-symbols-outlined text-sm">
                  open_in_new
                </span>
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
