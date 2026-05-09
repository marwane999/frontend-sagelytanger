import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Users, Star, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { WHATSAPP_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Book a Free Assessment | Contact Sagely Tanger',
  description:
    'Ready to start? Contact Sagely to book a free language assessment for your child. Limited spots available. We reply within a few hours.',
};

const valueCards = [
  {
    icon: CheckCircle,
    color: 'text-teal-500',
    bg: 'bg-teal-500/10',
    title: 'A Free 30-Minute Assessment',
    body: "We assess your child's language level with a friendly, low-pressure session — so we can recommend the exact right program.",
  },
  {
    icon: Users,
    color: 'text-gold-500',
    bg: 'bg-gold-500/10',
    title: 'Expert Guidance — No Sales Pressure',
    body: 'We will tell you honestly what we think is best for your child — even if that means a different program than you expected.',
  },
  {
    icon: Star,
    color: 'text-primary-600',
    bg: 'bg-primary-100',
    title: 'Immediate Clarity',
    body: "Walk away from the assessment knowing your child's current level, the right program, and exactly how to get started.",
  },
];

const contactMethods = [
  {
    icon: MessageCircle,
    iconColor: 'text-[#25D366]',
    bg: 'bg-[#25D366]/10',
    title: 'WhatsApp',
    badge: 'FASTEST RESPONSE',
    badgeColor: 'bg-green-100 text-green-700',
    body: 'Message us directly for the fastest response. Most families prefer WhatsApp — we do too.',
    cta: 'Chat on WhatsApp →',
    href: `${WHATSAPP_URL}`,
    external: true,
  },
  {
    icon: Phone,
    iconColor: 'text-primary-600',
    bg: 'bg-primary-100',
    title: 'Call Us',
    body: '+212 6 42 46 31 71\nAvailable Monday–Friday during school hours.',
    cta: 'Call Now →',
    href: 'tel:+212642463171',
    external: false,
  },
  {
    icon: Mail,
    iconColor: 'text-primary-600',
    bg: 'bg-primary-100',
    title: 'Email',
    body: 'contact@sagely.ma\nWe reply within one business day.',
    cta: 'Send Email →',
    href: 'mailto:contact@sagely.ma',
    external: false,
  },
  {
    icon: MapPin,
    iconColor: 'text-gold-500',
    bg: 'bg-gold-500/10',
    title: 'Visit Us',
    body: 'Av Fayçal Ben Abdelaziz N 194\nHay Souani 4, Tanger 90000',
    cta: 'Get Directions →',
    href: 'https://maps.google.com/?q=Sagely+Tanger+Morocco',
    external: true,
  },
];

const processSteps = [
  {
    icon: MessageCircle,
    color: 'text-teal-500',
    bg: 'bg-teal-500/10',
    title: '1. We Respond Quickly',
    body: 'We will reply to your message or WhatsApp within a few hours — typically the same day. We will introduce ourselves and ask a few quick questions.',
  },
  {
    icon: CheckCircle,
    color: 'text-gold-500',
    bg: 'bg-gold-500/10',
    title: '2. Free Language Assessment',
    body: "We schedule a friendly 30-minute assessment at our center. Our educators evaluate your child's current level in a warm, low-pressure environment.",
  },
  {
    icon: Star,
    color: 'text-primary-600',
    bg: 'bg-primary-100',
    title: '3. We Recommend the Right Program',
    body: 'Based on the assessment, we tell you exactly which program is the best fit. You decide if and when to enroll. No pressure. Just clarity.',
  },
];

const faqs = [
  {
    q: 'Is the assessment really free?',
    a: 'Absolutely. The assessment is completely free with no obligation to enroll. We do it because we want to make sure we recommend the right program — and because we are confident you will love what you see.',
  },
  {
    q: 'How long does the assessment take?',
    a: 'About 30 minutes. We assess reading, speaking, and comprehension in a friendly, relaxed way — not a stressful exam.',
  },
  {
    q: 'What if my child is very shy?',
    a: 'Our teachers are trained to create a warm, safe environment. Shyness is common and never a problem. We know how to make children feel at ease.',
  },
  {
    q: 'Do you offer adult language classes?',
    a: 'Our main programs are for ages 5–18. However, if you are an adult seeking language instruction, please contact us and we will discuss options.',
  },
  {
    q: 'How quickly can my child start?',
    a: 'After the assessment, children can typically start within 1–2 weeks, subject to available spots. This is why we recommend booking your assessment early.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-primary-600 pt-24 pb-16 md:pt-28 md:pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            Book Your Free Assessment
          </h1>
          <p className="text-white/80 text-lg mb-4">
            One conversation is all it takes. Tell us about your child and we will find the
            perfect program — free, fast, and without any pressure.
          </p>
          <p className="text-gold-400 text-sm font-medium">
            ⚡ We typically reply within a few hours — often the same day.
          </p>
        </div>
      </section>

      {/* Value Frame */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600">
              Here is What You Get When You Reach Out
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {valueCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="text-center p-6">
                  <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mx-auto mb-4`}>
                    <Icon size={24} className={card.color} />
                  </div>
                  <h3 className="font-semibold text-primary-600 text-base mb-2">{card.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding bg-neutral-50">
        <div className="container-width">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600 mb-3">
              Choose How You&apos;d Like to Reach Us
            </h2>
            <p className="text-neutral-600 text-base">
              We are available via multiple channels — use whatever is easiest for you.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div key={method.title} className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm flex flex-col">
                  <div className={`w-10 h-10 rounded-xl ${method.bg} flex items-center justify-center mb-3`}>
                    <Icon size={20} className={method.iconColor} />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-primary-600 text-sm">{method.title}</h3>
                    {method.badge && (
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${method.badgeColor}`}>
                        {method.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-neutral-500 text-xs leading-relaxed mb-4 flex-1 whitespace-pre-line">
                    {method.body}
                  </p>
                  <a
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    className="text-primary-600 font-semibold text-sm hover:text-gold-500 transition-colors"
                  >
                    {method.cta}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Left: Intro */}
            <div className="md:col-span-2">
              <div className="sticky top-24">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-primary-600 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-neutral-600 text-base leading-relaxed mb-6">
                  Fill in the form and we will respond within a few hours. We will listen, ask a
                  few questions about your child&apos;s needs, and set up a free assessment at a
                  time that works for you.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-600 text-sm">
                      Av Fayçal Ben Abdelaziz N 194,<br />Hay Souani 4, Tanger 90000
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-gold-500 flex-shrink-0" />
                    <a href="tel:+212642463171" className="text-neutral-600 text-sm hover:text-primary-600">
                      +212 6 42 46 31 71
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle size={16} className="text-[#25D366] flex-shrink-0" />
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-neutral-600 text-sm hover:text-primary-600">
                      WhatsApp: +212 6 42 46 31 71
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-gold-500 flex-shrink-0" />
                    <a href="mailto:contact@sagely.ma" className="text-neutral-600 text-sm hover:text-primary-600">
                      contact@sagely.ma
                    </a>
                  </div>
                </div>
                <div className="text-xs text-neutral-400">
                  ✓ 100% Free &nbsp; ✓ No Obligation &nbsp; ✓ Reply within hours
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="md:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section-padding bg-neutral-50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600">
              What Happens After You Contact Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="text-center">
                  <div className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center mx-auto mb-4`}>
                    <Icon size={22} className={step.color} />
                  </div>
                  <h3 className="font-semibold text-primary-600 text-base mb-2">{step.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display font-bold text-3xl text-primary-600 mb-6">
                Visit Our Center in Tanger
              </h2>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="font-semibold text-primary-600 mb-1">Sagely</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Av Fayçal Ben Abdelaziz N 194<br />
                    Hay Souani 4<br />
                    Tanger, Morocco 90000
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary-600 text-sm mb-1">Phone</p>
                  <a href="tel:+212642463171" className="text-neutral-600 text-sm hover:text-primary-600">
                    +212 6 42 46 31 71
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-primary-600 text-sm mb-1">Opening Hours</p>
                  <p className="text-neutral-600 text-sm">Monday – Friday: School hours</p>
                  <p className="text-neutral-600 text-sm">Saturday: By appointment</p>
                  <p className="text-neutral-600 text-sm">Sunday: Closed</p>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  We are located in the Hay Souani neighborhood of Tanger. Parking is available
                  on the street in front of the center.
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Av+Fay%C3%A7al+Ben+Abdelaziz+N+194+Tanger+Morocco"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-primary inline-flex"
              >
                Get Directions on Google Maps →
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <iframe
                src={process.env.NEXT_PUBLIC_MAPS_EMBED_URL || 'https://maps.google.com/maps?q=Tanger+Morocco&output=embed'}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sagely location map in Tanger Morocco"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl text-primary-600">
              Common Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-neutral-200">
                <h3 className="font-semibold text-primary-600 text-sm mb-2">{faq.q}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
