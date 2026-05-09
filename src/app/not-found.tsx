import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found — Sagely',
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-gold-500 font-display font-bold text-8xl mb-4">404</p>
        <h1 className="font-display font-bold text-3xl md:text-4xl text-primary-600 mb-4">
          Page Not Found
        </h1>
        <p className="text-neutral-600 text-base mb-8">
          The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Go to Home Page
          </Link>
          <Link href="/contact" className="btn-outline-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
