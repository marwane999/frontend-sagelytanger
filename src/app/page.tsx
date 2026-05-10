import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Clock, Globe, Award, MessageCircle, Users, CheckCircle, Star, ChevronRight } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/utils';
import { StatCounter } from '@/components/ui/StatCounter';

export const metadata: Metadata = {
  title: 'Sagely — Trilingual Language Center in Tanger, Morocco',
  description:
    "Tanger's premier English, French & Arabic language center. Native-speaking teachers. American-aligned curriculum. Book your free assessment today.",
  keywords: [
    'language center Tanger',
    'English classes Tanger Morocco',
    'trilingual school Tanger',
    'American curriculum Morocco',
    'English for kids Tanger',
  ],
};

const stats = [
  { number: '150+', label: 'Students Enrolled' },
  { number: '8+', label: 'Years of Excellence' },
  { number: '20+', label: 'Nationalities' },
  { number: '3', label: 'Languages Mastered' },
];

const differentiators = [
  {
    icon: Globe,
    title: 'Native-Speaking Teachers',
    text: 'Our educators are native English speakers from the US, Canada, and UK — certified and trained to teach English as a second language.',
  },
  {
    icon: Award,
    title: 'American-Aligned Curriculum',
    text: 'Our curriculum is aligned with accredited American school standards — giving your child a globally recognized academic foundation.',
  },
  {
    icon: MessageCircle,
    title: 'Truly Trilingual',
    text: 'English, French, and Arabic (both Moroccan and Modern Standard) taught by specialists in each language — real trilingual mastery.',
  },
  {
    icon: Users,
    title: 'Small Class Sizes',
    text: 'Maximum 8 students per class. Your child is seen, heard, and guided individually — not lost in a crowd.',
  },
  {
    icon: CheckCircle,
    title: 'Individual Progress Tracking',
    text: 'Monthly progress reports. Parent updates. Milestone assessments. You always know exactly where your child stands.',
  },
  {
    icon: Star,
    title: 'International Community',
    text: 'Students from 20+ nationalities. A multicultural environment that prepares your child for the global world they will inherit.',
  },
];

const testimonials = [
  {
    quote: 'Friendly environment with small, structured classrooms. Great staff!',
    name: 'Franki',
    description: 'American, Age 47 — Volunteer Teacher',
    stars: 5,
  },
  {
    quote:
      'Coming to Sagely was a great opportunity to learn about Moroccan culture and improve my teaching skills. The staff at Sagely are so welcoming and find a way to use everyone\'s talents, from taking photos for their social media to teaching gardening and cooking.',
    name: 'Sarah',
    description: 'Canadian, Age 20 — Volunteer Teacher',
    stars: 5,
  },
  {
    quote:
      'My daughter joined Sagely without speaking a word of English. Within 6 months, she was reading chapter books and speaking confidently with her teachers. The personal attention and structure are unlike anything we found elsewhere in Tanger.',
    name: 'Priya S.',
    description: 'Parent of an 8-year-old student — Indian family, Tanger',
    stars: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Students learning at Sagely language center in Tanger Morocco"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-800/70 to-primary-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-28">
          <div className="max-w-2xl">
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-hero text-white leading-tight mb-6">
              Speak the World.<br />
              Lead the Future.
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-4">
              Tanger&apos;s most trusted trilingual language center — English, French &amp; Arabic.{' '}
              Native-speaking coaches. American-aligned curriculum. Real, measurable results.
            </p>
            <p className="text-white/80 text-sm mb-8">
              ⭐⭐⭐⭐⭐{' '}
              <span className="text-gold-400 font-medium">
                Trusted by 150+ students from 20+ nationalities
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-gold text-center">
                Book Your Free Assessment →
              </Link>
              <Link href="/programs" className="btn-outline-white text-center">
                Explore Our Programs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary-600 py-12" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
                alt="Classroom at Sagely language center Tanger Morocco"
                fill
                className="object-cover"
              />
              {/* TODO: replace with real Sagely classroom image */}
            </div>
            <div>
              <p className="eyebrow mb-4">ABOUT SAGELY</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600 mb-6 leading-tight">
                A Community Built Around Your Child&apos;s Success
              </h2>
              <div className="space-y-4 text-neutral-600 text-base leading-relaxed">
                <p>
                  At Sagely, we believe every student deserves access to world-class language
                  education — regardless of where they are in the world.
                </p>
                <p>
                  We are a trilingual language center in Tanger, Morocco, helping children and
                  adults achieve fluency in English, French, and Arabic through a structured,
                  proven approach.
                </p>
                <p>
                  Our team of certified, native-speaking professionals from the US, Canada, and
                  Europe guide each student at their own level — ensuring real progress, real
                  confidence, and a real future.
                </p>
              </div>
              <blockquote className="border-l-4 border-gold-500 pl-5 my-6 italic text-neutral-600">
                &ldquo;Education is for improving the lives of others and for leaving your community
                and world better than you found it.&rdquo;
                <footer className="text-sm text-neutral-500 mt-1 not-italic">
                  — Marian Wright Edelman
                </footer>
              </blockquote>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-gold-500 transition-colors duration-200">
                Learn More About Our Story <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="section-padding bg-neutral-50">
        <div className="container-width">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">WHAT WE OFFER</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600 mb-4">
              A Program Built for Every Student
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Whether your child needs full immersion or a flexible language boost, we have the
              right program — at the right level, at the right time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Full Day Card */}
            <div className="card-program">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
                  <BookOpen size={24} className="text-teal-500" />
                </div>
                <span className="bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </span>
              </div>
              <h3 className="font-display font-semibold text-2xl text-primary-600 mb-1">
                Full Day Trilingual Program
              </h3>
              <p className="text-neutral-500 text-sm mb-4">Complete academic excellence in 3 languages</p>
              <p className="text-neutral-600 text-sm leading-relaxed mb-5">
                A comprehensive program offering core academic subjects (science, mathematics,
                reading, history) from an accredited American school — delivered alongside
                structured instruction in French and Arabic.
                <br /><br />
                Your child doesn&apos;t just learn a language. They learn through language.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'American-accredited curriculum',
                  'Native-speaking English coaches',
                  'Leveled French & Arabic instruction',
                  'Science, math, reading, history',
                  'Small class sizes (max 8 students)',
                  'Monthly progress reports',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle size={16} className="text-teal-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/programs#full-day"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-gold-500 transition-colors duration-200"
              >
                Learn More About Full Day <ChevronRight size={16} />
              </Link>
            </div>

            {/* Part-Time Card */}
            <div className="card-program">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center">
                  <Clock size={24} className="text-gold-500" />
                </div>
                <span className="bg-neutral-100 text-neutral-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Flexible
                </span>
              </div>
              <h3 className="font-display font-semibold text-2xl text-primary-600 mb-1">
                Part-Time Language Program
              </h3>
              <p className="text-neutral-500 text-sm mb-4">Already in school? Add world-class language blocks.</p>
              <p className="text-neutral-600 text-sm leading-relaxed mb-5">
                Already enrolled in a Moroccan or international school? No problem. Choose one or
                two focused language blocks each day and access the same native-speaking expertise
                — without disrupting your existing schedule.
                <br /><br />
                Your child gets the best of both worlds.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'English, French, OR Arabic blocks',
                  'Flexible scheduling (morning / afternoon)',
                  'Same quality native-speaking teachers',
                  'Individual level assessment',
                  'Progress tracking included',
                  'Can combine with Full Day later',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/programs#part-time"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-gold-500 transition-colors duration-200"
              >
                Learn More About Part-Time <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          <div className="text-center bg-white rounded-2xl p-8 border border-neutral-200">
            <p className="text-neutral-700 text-base mb-2">
              Not sure which program is right for your child?
            </p>
            <p className="text-neutral-500 text-sm mb-6">
              Book a free 30-minute assessment and we&apos;ll recommend the perfect fit.
            </p>
            <Link href="/contact" className="btn-primary">
              Book Free Assessment →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Sagely */}
      <section className="section-padding bg-primary-600">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Why 150+ Families Choose Sagely
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              We are not just another language school. Here is what makes Sagely different.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-500/20 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-gold-400" />
                  </div>
                  <h3 className="font-semibold text-white text-base mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600 mb-4">
              What Families Say About Sagely
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((t) => (
              <div key={t.name} className="card-testimonial">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={16} className="text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <blockquote className="text-neutral-700 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer>
                  <p className="font-semibold text-primary-600 text-sm">{t.name}</p>
                  <p className="text-neutral-500 text-xs mt-0.5">{t.description}</p>
                </footer>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-neutral-500 text-sm">
              ★★★★★{' '}
              <span className="font-medium text-neutral-700">4.9 out of 5</span>
              {' '}— Based on Google Reviews
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Teaser */}
      <section className="section-padding bg-gold-50">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">TEACH IN MOROCCO</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600 mb-6 leading-tight">
                Spend 6 Months in Beautiful Tanger. Change Lives While You Explore.
              </h2>
              <div className="space-y-4 text-neutral-600 text-base leading-relaxed mb-8">
                <p>
                  Sagely welcomes volunteer teachers from around the world to join our community
                  for 6 months to a year.
                </p>
                <p>
                  Teach English in our structured classrooms. Explore Morocco&apos;s souks,
                  mountains, and coasts on weekends. Build lifelong friendships and gain real
                  teaching experience.
                </p>
                <p>We provide everything you need — training, community, and purpose.</p>
              </div>
              <Link href="/volunteer" className="btn-primary">
                Learn About Volunteering →
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                alt="International volunteer teachers at Sagely Tanger Morocco"
                fill
                className="object-cover"
              />
              {/* TODO: replace with real volunteer group photo */}
            </div>
          </div>
        </div>
      </section>

      {/* Find Us / Map */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-10">
            <p className="eyebrow mb-4">FIND US</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600 mb-4">
              Visit Us in Tanger
            </h2>
            <p className="text-neutral-600 text-lg max-w-xl mx-auto">
              We are located in the heart of Tanger — easy to find, easy to reach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-primary-600 text-sm mb-1">Address</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Av Fayçal Ben Abdelaziz N 194<br />
                    Hay Souani 4, Tanger 90000, Morocco
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-primary-600 text-sm mb-1">Phone</p>
                  <a href="tel:+212642463171" className="text-neutral-600 text-sm hover:text-gold-500 transition-colors">
                    +212 642 463 171
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-primary-600 text-sm mb-1">Email</p>
                  <a href="mailto:contact@sagely.ma" className="text-neutral-600 text-sm hover:text-gold-500 transition-colors">
                    contact@sagely.ma
                  </a>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/place/Sagely+Tanger/@35.7664869,-5.8331341,15z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary mt-2"
              >
                Get Directions →
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-card border border-neutral-100 aspect-[4/3]">
              <iframe
                src="https://maps.google.com/maps?q=35.7664869,-5.8331341&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sagely Tanger location on Google Maps"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-width relative z-10 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-5">
            Ready to Give Your Child the Language Advantage?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-4">
            Book a free 30-minute assessment and we&apos;ll find the perfect program for your
            child&apos;s level, schedule, and goals. No pressure. No commitment. Just clarity.
          </p>
          <p className="text-gold-400 text-sm font-medium mb-8">
            ⚡ Limited spots available — new cohort starts soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Book Your Free Assessment Now →
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-white">
              WhatsApp Us Directly →
            </a>
          </div>
          <p className="text-white/40 text-xs mt-6">
            ✓ 100% Free &nbsp; ✓ No Commitment &nbsp; ✓ 30 Minutes &nbsp; ✓ Immediate Clarity
          </p>
        </div>
      </section>
    </>
  );
}
