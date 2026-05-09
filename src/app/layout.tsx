import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Sagely — Trilingual Language Center in Tanger, Morocco',
    template: '%s | Sagely',
  },
  description:
    "Tanger's premier English, French & Arabic language center. Native-speaking teachers. American-aligned curriculum. Book your free assessment today.",
  keywords: [
    'language center Tanger',
    'English classes Tanger Morocco',
    'trilingual education Morocco',
    'American curriculum Morocco',
    'French Arabic English school Tanger',
    'native speaker English teacher Tanger',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sagely.ma',
    siteName: 'Sagely',
    title: 'Sagely — Trilingual Language Center in Tanger, Morocco',
    description: 'Native-speaking teachers. American-aligned curriculum. English, French & Arabic.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Sagely',
  description: 'Trilingual Language & Training Center in Tanger, Morocco',
  url: 'https://sagely.ma',
  logo: 'https://sagely.ma/images/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av Fayçal Ben Abdelaziz N 194',
    addressLocality: 'Tanger',
    postalCode: '90000',
    addressCountry: 'MA',
  },
  telephone: '+212642463171',
  sameAs: [
    'https://www.facebook.com/sagelytanger',
    'https://www.instagram.com/sagelytanger',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Language Programs',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Full Day Trilingual Program',
          description: 'Complete trilingual education: English, French, and Arabic',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'Part-Time Language Program',
          description: 'Flexible language blocks for students already enrolled in school',
        },
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body text-neutral-900 bg-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded z-50"
        >
          Skip to main content
        </a>
        <GoogleAnalytics />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
