'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Programs' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-[72px]"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0" aria-label="Sagely — Home">
          <Image
            src="/images/logo.png"
            alt="Sagely"
            width={120}
            height={40}
            className={cn(
              'h-9 w-auto transition-all duration-300',
              !scrolled && 'brightness-0 invert'
            )}
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200 hover:text-gold-500',
                  pathname === link.href
                    ? scrolled
                      ? 'text-primary-600 font-semibold'
                      : 'text-gold-400 font-semibold'
                    : scrolled
                    ? 'text-neutral-700'
                    : 'text-white/90'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button (desktop) */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className={cn(
              'px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 active:scale-95',
              scrolled
                ? 'bg-gold-500 text-white hover:bg-gold-600 shadow-cta'
                : 'bg-gold-500 text-white hover:bg-gold-600 shadow-cta'
            )}
          >
            Book Free Assessment
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={cn(
            'md:hidden p-2 rounded-lg transition-colors duration-200',
            scrolled ? 'text-primary-600 hover:bg-primary-50' : 'text-white hover:bg-white/10'
          )}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 shadow-lg">
          <ul className="px-4 py-4 space-y-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200',
                    pathname === link.href
                      ? 'bg-primary-50 text-primary-600 font-semibold'
                      : 'text-neutral-700 hover:bg-neutral-50 hover:text-primary-600'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="block w-full text-center bg-gold-500 text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-gold-600 transition-all duration-200 active:scale-95"
              >
                Book Free Assessment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
