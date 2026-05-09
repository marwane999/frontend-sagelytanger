import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { WHATSAPP_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Our Programs — English, French & Arabic | Sagely',
  description:
    "Explore Sagely's Full Day and Part-Time trilingual programs. Native speakers. American-aligned curriculum. Structured learning for all levels. Limited spots — enroll today.",
};

const fullDayFeatures = [
  'Full day academic instruction (Science, Math, Reading, History)',
  'American-accredited curriculum & materials',
  'Native-speaking English coaches',
  'Leveled French instruction (beginner to advanced)',
  'Arabic instruction — Moroccan Darija + Modern Standard (MSA)',
  'Maximum 8 students per class',
  'Monthly progress reports sent to parents',
  'Individual level assessment before start',
  'Parent-teacher communication (WhatsApp updates)',
  'Extracurricular enrichment activities',
];

const partTimeFeatures = [
  'Choose 1 or 2 language blocks (English / French / Arabic)',
  'Same native-speaking teachers as Full Day students',
  'Flexible morning OR afternoon sessions',
  'Individual level assessment before start',
  'Progress tracking & parent reports',
  'Option to upgrade to Full Day at any time',
  'Perfect for all ages 5–18',
  'Structured, level-appropriate curriculum',
];

const comparisonRows = [
  { feature: 'English Instruction', fullDay: true, partTime: true },
  { feature: 'French Instruction', fullDay: true, partTime: true },
  { feature: 'Arabic Instruction', fullDay: true, partTime: true },
  { feature: 'Academic Subjects (Math, Science)', fullDay: true, partTime: false },
  { feature: 'American Curriculum', fullDay: true, partTime: false },
  { feature: 'Duration', fullDay: 'Full school day', partTime: '1–2 blocks/day' },
  { feature: 'Native-Speaking Teachers', fullDay: true, partTime: true },
  { feature: 'Small Class Size (max 8)', fullDay: true, partTime: true },
  { feature: 'Monthly Progress Reports', fullDay: true, partTime: true },
  { feature: 'Flexible Scheduling', fullDay: false, partTime: true },
  { feature: 'Works Alongside Another School', fullDay: false, partTime: true },
];

const faqs = [
  {
    q: 'What ages do you accept?',
    a: 'We welcome students from age 5 to 18 in all programs. Adults seeking French, English, or Arabic instruction can contact us for customized adult sessions.',
  },
  {
    q: "My child doesn't speak any English yet — is that okay?",
    a: "Absolutely. We welcome complete beginners. Our individual assessment ensures your child starts at the right level, and our native-speaking teachers are trained to bring complete beginners to fluency step by step.",
  },
  {
    q: 'How quickly will I see results?',
    a: 'Most parents notice measurable improvement within the first 4–6 weeks. We provide monthly progress reports so you always know exactly where your child stands.',
  },
  {
    q: 'Are your teachers actually native speakers?',
    a: 'Yes. 100% of our language coaches are certified native speakers — English teachers from the US, Canada, and UK; French instructors from France and Morocco; Arabic teachers from Morocco. We never compromise on this.',
  },
  {
    q: 'What is the class size?',
    a: 'Maximum 8 students per class. This is a firm policy. Smaller classes mean more attention, faster progress, and a better learning environment for every child.',
  },
  {
    q: "How do I stay updated on my child's progress?",
    a: 'You receive a monthly written progress report. Our teachers are also available via WhatsApp for updates between reports. You are always in the loop.',
  },
  {
    q: 'Can I switch from Part-Time to Full Day later?',
    a: 'Yes, this is very common. Many families start with Part-Time and upgrade to Full Day once they see the results. We will guide you through the transition seamlessly.',
  },
  {
    q: 'What happens if my child has already started school somewhere else?',
    a: "No problem. The Part-Time program is specifically designed to complement any existing school. Many of our students attend local Moroccan or French schools and come to us for language blocks.",
  },
];

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === 'boolean') {
    return value ? (
      <span className="text-teal-500 font-bold text-lg">✓</span>
    ) : (
      <span className="text-neutral-300 font-bold text-lg">✗</span>
    );
  }
  return <span className="text-neutral-700 text-sm">{value}</span>;
}

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Our Programs"
        subtitle="Full immersion or flexible scheduling — we have a program that fits your child's exact level, schedule, and goals."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Programs' }]}
        stats="Enrolling students aged 5–18  ·  All levels welcome  ·  Limited spots per cohort"
      />

      {/* Programs Intro */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-4">STRUCTURED. PROVEN. RESULTS-DRIVEN.</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600 mb-8">
            Language Education That Opens Every Door
          </h2>
          <div className="space-y-4 text-neutral-600 text-base leading-relaxed text-left">
            <p>
              Every child who walks through our doors receives an individual language assessment
              before beginning any program. This ensures they are placed at exactly the right
              level — never bored, never overwhelmed, always progressing.
            </p>
            <p>
              Our programs are taught by certified, native-speaking professionals and structured
              around proven language acquisition methodology. We do not guess. We follow science.
            </p>
            <p>
              Below, explore our two main programs — and if you are unsure which fits your child
              best, book a free assessment and let us guide you.
            </p>
          </div>
        </div>
      </section>

      {/* Full Day Program */}
      <section id="full-day" className="section-padding bg-neutral-50">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-block bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-5">
                Most Popular Program
              </div>
              <p className="eyebrow mb-3">PROGRAM 1</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600 mb-3 leading-tight">
                Full Day Trilingual Program
              </h2>
              <p className="text-neutral-500 text-base mb-6">
                Complete academic excellence — in English, French, and Arabic
              </p>
              <div className="space-y-4 text-neutral-600 text-base leading-relaxed mb-6">
                <p>
                  The Full Day Program is our flagship offering — a comprehensive,
                  full-immersion educational experience designed for students who want it all.
                </p>
                <p>
                  Students receive core academic instruction in Science, Mathematics, Reading,
                  and History — delivered using an accredited American school curriculum. This
                  means that what your child learns is internationally recognized and
                  academically rigorous.
                </p>
                <p>
                  Alongside the academic core, students receive structured, leveled instruction
                  in both French and Arabic (including both Moroccan Arabic and Modern Standard
                  Arabic) — delivered by specialist language coaches in each language.
                </p>
                <p>
                  The result: a child who can think, speak, read, and write fluently across
                  three languages — one of the most valuable skills any child can have in 2026
                  and beyond.
                </p>
              </div>

              <h3 className="font-semibold text-primary-600 text-sm uppercase tracking-wide mb-3">
                What&apos;s Included
              </h3>
              <ul className="space-y-2 mb-6">
                {fullDayFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle size={16} className="text-teal-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-primary-50 rounded-xl p-5 mb-6">
                <h4 className="font-semibold text-primary-600 text-sm mb-3">Who Is This For?</h4>
                <ul className="space-y-1.5">
                  {[
                    'Children aged 5–18 who are new to Tanger and need a structured school day',
                    'Expat families looking for international-quality education',
                    'Students who want to accelerate their language skills while keeping up academically',
                    "Families whose current school doesn't meet their child's potential",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="text-primary-600 font-bold mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact?program=full-day" className="btn-gold block text-center sm:inline-flex">
                Enroll in Full Day Program →
              </Link>
              <p className="text-orange-600 text-xs mt-2">
                ⚡ Limited spots available — book your free assessment first
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
                alt="Students in Full Day Program at Sagely language center Tanger"
                fill
                className="object-cover"
              />
              {/* TODO: replace with real Sagely classroom image */}
            </div>
          </div>
        </div>
      </section>

      {/* Part-Time Program */}
      <section id="part-time" className="section-padding bg-white">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative rounded-2xl overflow-hidden shadow-card aspect-[4/3] md:order-first">
              <Image
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80"
                alt="Part-Time language program at Sagely Tanger"
                fill
                className="object-cover"
              />
              {/* TODO: replace with real Sagely image */}
            </div>
            <div>
              <p className="eyebrow mb-3">PROGRAM 2</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600 mb-3 leading-tight">
                Part-Time Language Program
              </h2>
              <p className="text-neutral-500 text-base mb-6">
                Already in school? Add the language skills your child is missing.
              </p>
              <div className="space-y-4 text-neutral-600 text-base leading-relaxed mb-6">
                <p>
                  Already enrolled in a Moroccan school, French school, or international school?
                  The Part-Time Program is designed exactly for you.
                </p>
                <p>
                  Choose one or two language blocks per day — English, French, or Arabic — and
                  your child will receive the same native-speaking instruction quality as our
                  Full Day students. All without disrupting their existing school schedule.
                </p>
                <p>
                  Our flexible morning and afternoon sessions are designed around the local
                  school day, so your child can do both. Many families start here and move to
                  our Full Day program once they see the results.
                </p>
              </div>

              <h3 className="font-semibold text-primary-600 text-sm uppercase tracking-wide mb-3">
                What&apos;s Included
              </h3>
              <ul className="space-y-2 mb-6">
                {partTimeFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-gold-50 rounded-xl p-5 mb-6">
                <h4 className="font-semibold text-primary-600 text-sm mb-3">Who Is This For?</h4>
                <ul className="space-y-1.5">
                  {[
                    'Students who need language reinforcement on top of their existing school',
                    'Families who want English or French improvement without a full school change',
                    'Students preparing for international exams or applications',
                    'Anyone who wants flexible, quality language instruction',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="text-gold-500 font-bold mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact?program=part-time" className="btn-primary block text-center sm:inline-flex">
                Enroll in Part-Time Program →
              </Link>
              <p className="text-orange-600 text-xs mt-2">
                ⚡ Limited spots — new sessions starting soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600">
              Full Day vs. Part-Time — Which Is Right for Your Child?
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-card overflow-hidden border border-neutral-200">
            <table className="w-full" role="table">
              <thead>
                <tr className="bg-primary-600">
                  <th className="text-left px-6 py-4 text-white font-semibold text-sm w-1/2">Feature</th>
                  <th className="text-center px-4 py-4 text-white font-semibold text-sm">Full Day</th>
                  <th className="text-center px-4 py-4 text-white font-semibold text-sm">Part-Time</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                    <td className="px-6 py-3.5 text-sm text-neutral-700 font-medium">{row.feature}</td>
                    <td className="px-4 py-3.5 text-center">
                      <Cell value={row.fullDay} />
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <Cell value={row.partTime} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <p className="text-neutral-600 text-base mb-2">
              Still unsure? Book a free 30-minute assessment — we will tell you exactly which
              program suits your child&apos;s level and goals.
            </p>
            <Link href="/contact" className="btn-primary mt-4 inline-flex">
              Book Free Assessment →
            </Link>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600">
              Our 3-Step Process — From First Contact to First Day of Class
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Book Your Free Assessment',
                description:
                  'Contact us via the form, WhatsApp, or phone. We\'ll schedule a free 30-minute assessment session for your child — no pressure, no commitment.',
              },
              {
                step: '2',
                title: 'We Assess Their Level',
                description:
                  "Our educators conduct a friendly, low-pressure language assessment. We evaluate reading, speaking, and comprehension to identify your child's exact level.",
              },
              {
                step: '3',
                title: 'We Recommend the Perfect Program',
                description:
                  'Based on the assessment, we recommend the best program and class. You choose whether to enroll. Your child starts their journey within days.',
              },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary-600 text-white font-display font-bold text-xl flex items-center justify-center mx-auto mb-5">
                  {step.step}
                </div>
                <h3 className="font-semibold text-primary-600 text-lg mb-3">{step.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-neutral-200">
                <h3 className="font-semibold text-primary-600 text-base mb-2">{faq.q}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-width text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-5">
            Reserve Your Child&apos;s Spot Today
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-4">
            We admit a limited number of new students each term to protect the quality of our
            small-class model. Spots for the upcoming cohort are filling quickly.
            <br /><br />
            Book your free assessment now — it is 100% free, takes 30 minutes, and gives you
            complete clarity on the right next step for your child.
          </p>
          <p className="text-gold-400 text-sm font-medium mb-8">
            ⚡ New cohort enrollment now open — limited spots remaining
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Book Free Assessment →
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-white">
              WhatsApp Us →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
