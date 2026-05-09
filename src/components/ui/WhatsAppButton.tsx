'use client';

import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/utils';

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sagely on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1fba57] transition-all duration-300 hover:scale-110 active:scale-95 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-slow opacity-40" />
      <MessageCircle size={26} className="relative z-10" />
    </a>
  );
}
