import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Thank You — Sagely',
  description: 'Thank you for contacting Sagely. We will be in touch shortly.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-primary-600 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle size={40} className="text-green-400" />
        </div>

        <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
          Thank You!
        </h1>

        <p className="text-white/80 text-lg mb-2">
          Your message has been received.
        </p>
        <p className="text-white/80 text-base mb-2">
          We will be in touch within a few hours — usually sooner.
        </p>
        <p className="text-white/70 text-base mb-10">
          We look forward to welcoming your family to Sagely.
        </p>

        <div className="space-y-3 text-left max-w-xs mx-auto mb-10">
          <p className="text-white/60 text-sm text-center mb-3">In the meantime, feel free to:</p>
          <Link
            href="/programs"
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
          >
            <span className="text-gold-400">→</span> Explore Our Programs
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
          >
            <span className="text-gold-400">→</span> Learn About Our Team
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
          >
            <span className="text-gold-400">→</span> WhatsApp Us Directly
          </a>
        </div>

        <p className="text-white/40 text-sm">Sagely — Tanger, Morocco</p>
      </div>
    </div>
  );
}
