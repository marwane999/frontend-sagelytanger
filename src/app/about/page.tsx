import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, X } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { WHATSAPP_URL } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'About Us — Sagely Tanger',
  description:
    'Meet the certified, native-speaking educators behind Sagely. 8+ years of trilingual excellence serving families from 20+ nationalities in Tanger, Morocco.',
};

const problemSolutions = [
  {
    problem: 'Unqualified teachers delivering poor results',
    solution:
      'All Sagely teachers are native speakers and certified professionals. We never compromise on quality.',
  },
  {
    problem: "Generic programs that ignore your child's level",
    solution:
      'Every student is individually assessed before starting. Programs are tailored to their exact level.',
  },
  {
    problem: 'No visibility into progress or results',
    solution:
      "Monthly progress reports. Parent updates. Your child's growth is transparent, measurable, and celebrated.",
  },
];

const teamMembers = [
  {
    name: '[Lead English Coach]',
    role: 'Lead English Coach',
    nationality: '🇺🇸 American',
    bio: 'A graduate of a US university, our Lead English Coach has 10+ years of experience teaching English as a second language across three continents. She brings structure, warmth, and a deep belief in every student\'s potential.',
    certifications: ['TESOL Certified', 'B.A. Education'],
  },
  {
    name: '[French & Arabic Instructor]',
    role: 'French & Arabic Instructor',
    nationality: '🇲🇦 Moroccan',
    bio: 'Holding a Masters in Linguistics, our French & Arabic instructor is passionate about helping students master both Modern Standard Arabic and the French that opens professional doors across North Africa and Europe.',
    certifications: ['Licence Professionnelle', 'M.A. Linguistics'],
  },
  {
    name: '[Director & Co-Founder]',
    role: 'Director & Co-Founder',
    nationality: '🌍 International',
    bio: 'With a background in education and a deep commitment to educational equity, our founder created Sagely with a single mission: give every child in Tanger access to world-class language education.',
    certifications: ['M.Ed. Education', 'CELTA Certified'],
  },
];

const certifications = [
  {
    icon: '🎓',
    title: 'American Curriculum Alignment',
    description:
      'Our Full Day Program curriculum is aligned with accredited American educational standards, providing students with a globally recognized academic foundation.',
  },
  {
    icon: '🌍',
    title: 'Native Speaker Standard',
    description:
      '100% of our language coaches are certified native speakers from their respective countries — the international gold standard in language instruction.',
  },
  {
    icon: '📋',
    title: 'Moroccan Ministry Registration',
    description:
      'Sagely is officially registered with the Moroccan Ministry of Education, ensuring compliance with all national educational regulations.',
  },
  {
    icon: '📜',
    title: 'TESOL / CELTA Certified Faculty',
    description:
      'Our English instructors hold TESOL or CELTA certification — the internationally recognized standard for English language teaching.',
  },
];

const numbersStats = [
  { number: '150+', label: 'Students Enrolled', sub: '150+ families chose us over every other option in Tanger.', color: 'text-primary-600' },
  { number: '8+', label: 'Years of Excellence', sub: '8+ years of proven results — we have been here since the beginning.', color: 'text-gold-500' },
  { number: '20+', label: 'Nationalities', sub: 'Students from 20+ nationalities create a truly international classroom.', color: 'text-teal-500' },
  { number: '3', label: 'Languages Taught', sub: 'English, French, and Arabic — the three languages that unlock the world.', color: 'text-primary-600' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story. Our Mission. Our People."
        subtitle="Eight years of dedication to language excellence in the heart of Tanger, Morocco."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      {/* Mission & Belief */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-4">WHAT WE BELIEVE</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600 mb-8">
            Every Child Deserves a World-Class Education — Wherever They Are
          </h2>
          <div className="space-y-5 text-neutral-600 text-base leading-relaxed text-left">
            <p>
              At Sagely, we started with a single belief: that a family&apos;s location should
              never limit a child&apos;s potential.
            </p>
            <p>
              Whether you are an expat family navigating a new country, or a Moroccan family
              seeking international-standard education — your child deserves the same quality of
              instruction that would be found in the world&apos;s best schools.
            </p>
            <p>
              We bridge the gap between where your child is and where they are capable of going.
            </p>
            <p>
              Through native-speaking teachers, structured curriculum, and genuine personal care,
              we give every student the tools, the confidence, and the language skills to thrive
              — academically, professionally, and personally.
            </p>
          </div>
          <blockquote className="border-l-4 border-gold-500 pl-5 my-8 italic text-neutral-600 text-left">
            &ldquo;Education is for improving the lives of others and for leaving your community
            and world better than you found it.&rdquo;
            <footer className="text-sm text-neutral-500 mt-1 not-italic">— Marian Wright Edelman</footer>
          </blockquote>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-neutral-50">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-card aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80"
                alt="Sagely language center classroom in Tanger Morocco"
                fill
                className="object-cover"
              />
              {/* TODO: replace with real Sagely classroom image */}
            </div>
            <div>
              <p className="eyebrow mb-4">OUR STORY</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600 mb-6 leading-tight">
                From a Single Classroom to Tanger&apos;s Most Trusted Language Center
              </h2>
              <div className="space-y-4 text-neutral-600 text-base leading-relaxed">
                <p>
                  Sagely began with a vision: to create a space where language was not just
                  taught — but truly lived, felt, and internalized.
                </p>
                <p>
                  We opened our doors in Tanger with a small team of passionate educators and a
                  handful of families who believed in what we were building. Since then, we have
                  grown into a community of 150+ students from more than 20 nationalities — a
                  testament to the quality and warmth that defines everything we do.
                </p>
                <p>
                  Our location in Tanger — a city that has always been a crossroads of cultures
                  — was no accident. This is a city where Arabic, French, Spanish, and English
                  echo through the streets. A city where being multilingual is not a luxury, but
                  a life skill.
                </p>
                <p>
                  We built Sagely to be the very best language center this city has ever seen.
                  We believe we are well on our way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">THE PROBLEM WE SOLVE</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600">
              The Challenge Every International Family Faces
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {problemSolutions.map((item, i) => (
              <div key={i} className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                <div className="flex items-start gap-3 mb-4">
                  <X size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-700 font-medium text-sm">{item.problem}</p>
                </div>
                <div className="border-t border-neutral-200 pt-4 flex items-start gap-3">
                  <CheckCircle size={18} className="text-teal-500 flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-neutral-50">
        <div className="container-width">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">OUR EDUCATORS</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600 mb-4">
              Native Speakers. Certified Teachers. Genuine Passion.
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Our team represents the best of international education, brought to the heart of Morocco.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 shadow-card text-center">
                <div className="w-20 h-20 rounded-full bg-primary-100 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-600 font-display font-bold text-2xl">
                    {member.role[0]}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg text-primary-600 mb-0.5">
                  {member.name}
                </h3>
                <p className="text-gold-500 text-sm font-medium mb-1">{member.role}</p>
                <p className="text-neutral-500 text-xs mb-4">{member.nationality}</p>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.certifications.map((cert) => (
                    <span key={cert} className="bg-primary-50 text-primary-600 text-xs px-3 py-1 rounded-full font-medium">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 text-center max-w-3xl mx-auto">
            <p className="text-neutral-600 text-sm leading-relaxed">
              All our teachers undergo a rigorous selection process including credential
              verification, teaching demos, and ongoing professional development. We never hire
              unqualified instructors.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-primary-600">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Our Credentials &amp; Accreditations
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.title} className="bg-white/10 border border-white/10 rounded-2xl p-6 flex gap-4">
                <span className="text-3xl flex-shrink-0">{cert.icon}</span>
                <div>
                  <h3 className="font-semibold text-white text-base mb-2">{cert.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {numbersStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`font-display font-bold text-4xl md:text-5xl mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="font-semibold text-neutral-700 text-sm mb-2">{stat.label}</div>
                <div className="text-neutral-500 text-xs leading-relaxed">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-neutral-50">
        <div className="container-width text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-600 mb-5">
            Still Have Questions?
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto mb-8">
            We love meeting families. Come visit our center, meet our teachers, and see what
            Sagely is all about — before making any decision.
            <br />
            Book a free 30-minute visit and assessment. No pressure. Just a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Book a Free Visit →
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-primary">
              WhatsApp Us →
            </a>
          </div>
          <p className="text-neutral-400 text-sm mt-5">
            We reply within a few hours — usually sooner.
          </p>
        </div>
      </section>
    </>
  );
}
