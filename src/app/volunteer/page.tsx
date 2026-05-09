import type { Metadata } from 'next';
import Image from 'next/image';
import { BookOpen, Award, Globe, MapPin, Users, Star, CheckCircle } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { VolunteerForm } from '@/components/forms/VolunteerForm';

export const metadata: Metadata = {
  title: 'Volunteer & Teach English in Tanger Morocco | Sagely',
  description:
    'Spend 6 months to a year teaching English in beautiful Tanger, Morocco. Gain real teaching experience. Explore North Africa. Apply to volunteer at Sagely today.',
};

const benefits = [
  {
    icon: BookOpen,
    color: 'text-teal-500',
    bg: 'bg-teal-500/10',
    title: 'Real Teaching Experience',
    text: 'Teach in structured, small classrooms with real curriculum. You will leave with genuine, demonstrable teaching skills that advance your career.',
  },
  {
    icon: Award,
    color: 'text-gold-500',
    bg: 'bg-gold-500/10',
    title: 'Personal & Professional Growth',
    text: 'Our experienced educators mentor and train you throughout your stay. You grow as a teacher and as a person.',
  },
  {
    icon: Globe,
    color: 'text-primary-600',
    bg: 'bg-primary-100',
    title: 'Cultural Immersion',
    text: "Live in one of North Africa's most vibrant cities. Learn Arabic. Eat tajine. Visit the souk. Experience Morocco's incredible culture from the inside.",
  },
  {
    icon: MapPin,
    color: 'text-teal-500',
    bg: 'bg-teal-500/10',
    title: 'Explore North Africa',
    text: "Morocco's excellent transport system gives you access to Casablanca, Marrakech, Chefchaouen, the Sahara, and even Spain — just across the Strait of Gibraltar.",
  },
  {
    icon: Users,
    color: 'text-gold-500',
    bg: 'bg-gold-500/10',
    title: 'Welcoming Community',
    text: 'Our staff and student families are incredibly warm and welcoming. You will feel at home within days. Many volunteers extend their stay because they love it so much.',
  },
  {
    icon: Star,
    color: 'text-primary-600',
    bg: 'bg-primary-100',
    title: 'Use Your Unique Talents',
    text: 'Whether you are a photographer, a gardener, a musician, or a chef — we find ways to integrate your skills into our community and programs.',
  },
];

const testimonials = [
  {
    quote: 'Friendly environment with small, structured classrooms. Great staff!',
    name: 'Franki',
    description: 'American · Age 47',
    stars: 5,
  },
  {
    quote:
      "Coming to Sagely was a great opportunity to learn about Moroccan culture and improve my teaching skills. The staff at Sagely are so welcoming and find a way to use everyone's talents — from taking photos for their social media to teaching gardening and cooking.",
    name: 'Sarah',
    description: 'Canadian · Age 20',
    stars: 5,
  },
];

const requirements = [
  'A native or near-native English speaker',
  'Aged 18–65, open-minded, and culturally curious',
  'Committed for a minimum of 6 months',
  'Enthusiastic about working with children',
  'Willing to be trained and follow our curriculum',
  'Responsible, punctual, and a team player',
  'Any nationality — we celebrate diversity',
];

const weProvide = [
  'Full orientation and teacher training',
  'Structured curriculum and teaching materials',
  'Ongoing mentorship from lead educators',
  'Help finding local accommodation in Tanger',
  'Integration into our center community',
  'Support navigating Moroccan daily life',
  'A letter of reference upon completion',
];

const moroccoCards = [
  {
    icon: MapPin,
    title: 'The City',
    text: "Tanger sits at the northernmost tip of Africa, overlooking Spain across the Strait of Gibraltar. Its medina, its coastline, its cafés — there is nowhere quite like it.",
  },
  {
    icon: Star,
    title: 'The Food & Culture',
    text: "Try tajine, mint tea, couscous, and pastilla. Visit the souk. Watch the sunset over the strait. Morocco's food and culture are legendary for good reason.",
  },
  {
    icon: Globe,
    title: 'Travel & Adventure',
    text: 'Tanger is your base for exploring all of Morocco. Take the train to Marrakech, visit the blue city of Chefchaouen, camp in the Sahara, or catch a ferry to Spain for the weekend.',
  },
];

export default function VolunteerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80"
            alt="International volunteer teachers at Sagely Tanger Morocco"
            fill
            className="object-cover"
            priority
          />
          {/* TODO: replace with real volunteer group photo */}
          <div className="absolute inset-0 bg-primary-900/70" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-5 leading-tight">
            Come Teach. Explore. Transform.
          </h1>
          <p className="text-white/80 text-lg mb-6">
            Spend 6 months to a year in the beautiful city of Tanger, Morocco.
            <br />
            Improve your teaching skills. Explore North Africa. Make a real difference.
          </p>
          <a href="#volunteer-form" className="btn-gold">
            Apply to Volunteer →
          </a>
          <p className="text-white/60 text-sm mt-4">
            Volunteers from 🇺🇸 🇨🇦 🇬🇧 🇫🇷 🇦🇺 and beyond
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">WHY SAGELY</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600 mb-4">
              More Than a Volunteer Program — A Life-Changing Experience
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              We do not just put you in front of a classroom and hope for the best. We invest in
              you, train you, and make sure your time here is meaningful — for you and for every
              student you teach.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                  <div className={`w-11 h-11 rounded-xl ${b.bg} flex items-center justify-center mb-4`}>
                    <Icon size={22} className={b.color} />
                  </div>
                  <h3 className="font-semibold text-primary-600 text-base mb-2">{b.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Will Do */}
      <section className="section-padding bg-neutral-50">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">YOUR ROLE</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600 mb-6">
                What Volunteering at Sagely Looks Like
              </h2>
              <div className="space-y-4 text-neutral-600 text-base leading-relaxed mb-6">
                <p>
                  As a volunteer teacher at Sagely, you will be fully integrated into our
                  teaching team — not an afterthought, but a vital part of what makes our center
                  exceptional.
                </p>
                <p>Your days will be structured and purposeful:</p>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  { emoji: '📚', text: 'Teach structured English lessons in small classes (max 8 students) using our curriculum' },
                  { emoji: '👥', text: 'Work alongside our lead educators — you are supported, never alone' },
                  { emoji: '📸', text: 'Contribute your skills — photography, arts, gardening, cooking, music — whatever you bring' },
                  { emoji: '🌍', text: "Participate in field trips and cultural activities that enrich students' world view" },
                  { emoji: '📋', text: 'Track and support student progress with simple observation notes' },
                  { emoji: '🤝', text: 'Build real relationships with students and families that last well beyond your stay' },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-sm text-neutral-700">
                    <span className="text-base flex-shrink-0">{item.emoji}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-neutral-600 text-sm leading-relaxed mb-2">
                We provide orientation, curriculum materials, and ongoing guidance. You do not
                need to be a professional teacher — but you do need to be committed, warm, and
                genuinely enthusiastic about language and education.
              </p>
              <p className="text-primary-600 font-medium text-sm">
                Duration: 6 months to 1 year &nbsp;·&nbsp; Start dates: Flexible, by arrangement
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
                alt="Volunteer teacher at Sagely Tanger Morocco language center"
                fill
                className="object-cover"
              />
              {/* TODO: replace with real volunteer teaching photo */}
            </div>
          </div>
        </div>
      </section>

      {/* Morocco Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Tanger — Where Europe Meets Africa
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Tanger is one of Morocco&apos;s most dynamic cities — historically rich,
              cosmopolitan, and breathtakingly beautiful. It is a city that gets under your skin.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {moroccoCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="bg-white/10 border border-white/10 rounded-2xl p-6">
                  <Icon size={24} className="text-gold-400 mb-4" />
                  <h3 className="font-semibold text-white text-base mb-2">{card.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{card.text}</p>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600">
              Hear From Our Volunteers
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.name} className="card-testimonial">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-gold-500">★</span>
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
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding bg-neutral-50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600">
              What We Ask. What We Offer.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-neutral-200">
              <h3 className="font-semibold text-primary-600 text-lg mb-5">You Should Be...</h3>
              <ul className="space-y-3">
                {requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle size={16} className="text-teal-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-neutral-500 text-xs mt-4 italic">
                Prior teaching experience is a plus, but not required. We provide full training.
              </p>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8">
              <h3 className="font-semibold text-white text-lg mb-5">We Provide...</h3>
              <ul className="space-y-3">
                {weProvide.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="volunteer-form" className="section-padding bg-white">
        <div className="container-width">
          <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Intro */}
            <div className="md:col-span-2">
              <div className="sticky top-24">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-primary-600 mb-4">
                  Ready to Make a Difference?
                </h2>
                <p className="text-neutral-600 text-base leading-relaxed mb-6">
                  Fill in the form and we will be in touch within 2 business days to discuss your
                  application and answer any questions.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/212642463171"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-neutral-700 hover:text-primary-600 transition-colors"
                  >
                    <span className="text-[#25D366] text-lg">💬</span>
                    <span>WhatsApp: +212 6 42 46 31 71</span>
                  </a>
                  <a
                    href="mailto:contact@sagely.ma"
                    className="flex items-center gap-3 text-sm text-neutral-700 hover:text-primary-600 transition-colors"
                  >
                    <span className="text-lg">✉️</span>
                    <span>contact@sagely.ma</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
