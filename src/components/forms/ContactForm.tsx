'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { contactSchema, type ContactFormValues } from '@/lib/validations';
import { submitContactForm } from '@/lib/api';
import { cn, WHATSAPP_URL } from '@/lib/utils';

const sourceOptions = [
  { value: '', label: 'How did you hear about us? (Optional)' },
  { value: 'Google Search', label: 'Google Search' },
  { value: 'Instagram', label: 'Instagram' },
  { value: 'Facebook', label: 'Facebook' },
  { value: 'Referral from a friend or family', label: 'Referral from a friend or family' },
  { value: 'Walked past the center', label: 'Walked past the center' },
  { value: 'Other', label: 'Other' },
];

export function ContactForm() {
  const router = useRouter();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitStatus('loading');
    try {
      await submitContactForm({
        name: data.name,
        email: data.email,
        phone: data.phone || undefined,
        message: data.message,
        source: data.source || undefined,
      });
      setSubmitStatus('success');
      setTimeout(() => router.push('/thank-you'), 3000);
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="form-label">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder="Your full name"
          className={cn('form-input', errors.name && 'form-input-error')}
          {...register('name')}
        />
        {errors.name && <p className="form-error">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="form-label">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          placeholder="your@email.com"
          className={cn('form-input', errors.email && 'form-input-error')}
          {...register('email')}
        />
        {errors.email && <p className="form-error">{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="contact-phone" className="form-label">
          Phone Number
          <span className="text-neutral-400 font-normal ml-1">(optional)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          placeholder="+212 ... (include WhatsApp if possible)"
          className="form-input"
          {...register('phone')}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="form-label">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Tell us about your child's age, current level, and goals..."
          className={cn('form-input resize-none', errors.message && 'form-input-error')}
          {...register('message')}
        />
        {errors.message && <p className="form-error">{errors.message.message}</p>}
      </div>

      {/* Source */}
      <div>
        <label htmlFor="contact-source" className="form-label">
          How Did You Hear About Us?
        </label>
        <select id="contact-source" className="form-input" {...register('source')}>
          {sourceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Success State */}
      {submitStatus === 'success' && (
        <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
          <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-green-800 font-medium text-sm">Message sent!</p>
            <p className="text-green-700 text-sm">
              We will be in touch very soon — usually within a few hours. Thank you for
              choosing Sagely. Redirecting you...
            </p>
          </div>
        </div>
      )}

      {/* Error State */}
      {submitStatus === 'error' && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
          <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 font-medium text-sm">Something went wrong.</p>
            <p className="text-red-700 text-sm">
              Please try again or{' '}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="underline font-medium">
                contact us via WhatsApp
              </a>
              .
            </p>
          </div>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitStatus === 'loading' || submitStatus === 'success'}
        className="btn-gold w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitStatus === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          'Send My Message →'
        )}
      </button>
    </form>
  );
}
