import Link from 'next/link'
import { Instagram } from 'react-feather'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-primary/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-12 py-16 max-w-screen-2xl mx-auto">
        {/* Brand */}
        <div className="space-y-6">
          <div className="font-headline italic text-xl text-primary">
            Vessel Community
          </div>
          <p className="text-secondary font-body text-sm leading-relaxed">
            Vessel Community adalah wadah bagi generasi muda untuk menemukan
            kedalaman iman di tengah hiruk-pikuk modernitas.
          </p>
          <p className="text-secondary/60 font-body text-xs italic">
            "Every vessel has a purpose. Find yours here."
          </p>
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h5 className="font-label text-xs uppercase tracking-widest text-primary mb-6">
              Navigasi
            </h5>
            <ul className="space-y-4">
              {[
                { href: '/event', label: 'Event' },
                { href: '/berita', label: 'Berita' },
                { href: '/galeri', label: 'Galeri' },
                { href: '/kontak', label: 'Kontak' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary font-body text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-label text-xs uppercase tracking-widest text-primary mb-6">
              Ibadah
            </h5>
            <ul className="space-y-3 text-secondary font-body text-sm">
              <li>Setiap Sabtu</li>
              <li>17:00 – selesai</li>
              <li className="text-xs leading-relaxed text-secondary/70">
                Bekasi Grand Center Blok F1, Jl Cut Meutiah, Bekasi Timur
              </li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h5 className="font-label text-xs uppercase tracking-widest text-primary">
            Bergabung
          </h5>
          <p className="text-secondary font-body text-sm leading-relaxed">
            Ingin bergabung atau menjadi bagian dari tim pelayanan? Hubungi kami
            melalui WhatsApp.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/6282335642114?text=Halo%20Vessel%20Community%2C%20saya%20ingin%20bertanya..."
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-label text-sm hover:bg-primary-container hover:text-on-primary-container transition-colors"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              Chat via WhatsApp
            </a>
            <a
              href="https://www.instagram.com/vessel.comm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-outline-variant text-secondary hover:text-primary hover:border-primary transition-colors"
              aria-label="Instagram Vessel Community"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 md:px-12 py-6 border-t border-primary/5 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-secondary font-label text-xs">
          © 2026 Vessel Community · GSRI Jemaat Bekasi
        </span>
        <span className="text-secondary/50 font-label text-xs">
          A Modern Sanctuary for the Intentional Soul.
        </span>
      </div>
    </footer>
  )
}
