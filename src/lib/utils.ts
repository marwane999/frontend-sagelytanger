import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneForWhatsApp(phone: string): string {
  return phone.replace(/\D/g, '');
}

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '212642463171';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Sagely%2C%20I%20would%20like%20to%20book%20a%20free%20assessment`;
