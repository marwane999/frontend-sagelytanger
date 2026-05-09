import Link from 'next/link';
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Programs' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/contact', label: 'Contact' },
];

const programs = [
  { href: '/programs#full-day', label: 'Full Day Program' },
  { href: '/programs#part-time', label: 'Part-Time Program' },
  { href: '/volunteer', label: 'Volunteer Teaching' },
];

export function Footer() {
  return (
    <footer className="bg-primary-600 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo + tagline + social */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-display font-bold text-2xl text-white">Sagely</span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              Tanger&apos;s premier trilingual language center. Native-speaking teachers.
              American-aligned curriculum. Real results.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/sagelytanger"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                aria-label="Sagely on Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/sagelytanger"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                aria-label="Sagely on Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/212642463171?text=Hello%20Sagely"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366]/20 flex items-center justify-center hover:bg-[#25D366]/30 transition-colors duration-200"
                aria-label="Sagely on WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 text-sm hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Our Programs
            </h3>
            <ul className="space-y-3" role="list">
              {programs.map((program) => (
                <li key={program.href}>
                  <Link
                    href={program.href}
                    className="text-neutral-300 text-sm hover:text-gold-400 transition-colors duration-200"
                  >
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="font-semibold text-white text-sm uppercase tracking-widest mb-3">
                Languages
              </h3>
              <p className="text-neutral-300 text-sm">English · French · Arabic</p>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4" role="list">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300 text-sm leading-relaxed">
                  Av Fayçal Ben Abdelaziz N 194,<br />
                  Hay Souani 4, Tanger 90000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold-400 flex-shrink-0" />
                <a
                  href="tel:+212642463171"
                  className="text-neutral-300 text-sm hover:text-gold-400 transition-colors duration-200"
                >
                  +212 6 42 46 31 71
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-[#25D366] flex-shrink-0" />
                <a
                  href="https://wa.me/212642463171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 text-sm hover:text-gold-400 transition-colors duration-200"
                >
                  WhatsApp: +212 6 42 46 31 71
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold-400 flex-shrink-0" />
                <a
                  href="mailto:contact@sagely.ma"
                  className="text-neutral-300 text-sm hover:text-gold-400 transition-colors duration-200"
                >
                  contact@sagely.ma
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-neutral-400 text-sm">
            © 2026 Sagely. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="text-neutral-400 text-sm hover:text-gold-400 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="text-neutral-600 text-sm">Tanger, Morocco</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
