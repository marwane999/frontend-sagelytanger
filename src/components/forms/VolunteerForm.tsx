'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { volunteerSchema, type VolunteerFormValues } from '@/lib/validations';
import { submitVolunteerForm } from '@/lib/api';
import { cn, WHATSAPP_URL } from '@/lib/utils';

const hearOptions = [
  { value: '', label: 'How did you hear about us? (Optional)' },
  { value: 'Google Search', label: 'Google Search' },
  { value: 'Instagram', label: 'Instagram' },
  { value: 'Facebook', label: 'Facebook' },
  { value: 'Friend or Family', label: 'Friend or Family' },
  { value: 'University / College Notice Board', label: 'University / College Notice Board' },
  { value: 'Travel Blog or Forum', label: 'Travel Blog or Forum' },
  { value: 'Volunteer Platform (Workaway, HelpX, etc.)', label: 'Volunteer Platform (Workaway, HelpX, etc.)' },
  { value: 'Other', label: 'Other' },
];

const availabilityOptions = [
  { value: '', label: 'Select your availability *' },
  { value: '6 months', label: '6 months' },
  { value: '1 year', label: '1 year' },
  { value: 'Flexible', label: 'Flexible' },
];

export function VolunteerForm() {
  const router = useRouter();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VolunteerFormValues>({
    resolver: zodResolver(volunteerSchema),
  });

  const onSubmit = async (data: VolunteerFormValues) => {
    setSubmitStatus('loading');
    try {
      await submitVolunteerForm({
        name: data.name,
        email: data.email,
        phone: data.phone || undefined,
        nationality: data.nationality,
        age: data.age,
        languages: data.languages,
        experience: data.experience || undefined,
        how_heard: data.how_heard || undefined,
        availability: data.availability,
        message: data.message,
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
        <label htmlFor="vol-name" className="form-label">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="vol-name"
          type="text"
          placeholder="Your full name"
          className={cn('form-input', errors.name && 'form-input-error')}
          {...register('name')}
        />
        {errors.name && <p className="form-error">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="vol-email" className="form-label">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="vol-email"
          type="email"
          placeholder="your@email.com"
          className={cn('form-input', errors.email && 'form-input-error')}
          {...register('email')}
        />
        {errors.email && <p className="form-error">{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="vol-phone" className="form-label">
          Phone Number
          <span className="text-neutral-400 font-normal ml-1">(optional)</span>
        </label>
        <input
          id="vol-phone"
          type="tel"
          placeholder="+1 234 567 890"
          className="form-input"
          {...register('phone')}
        />
      </div>

      {/* Nationality + Age */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="vol-nationality" className="form-label">
            Nationality <span className="text-red-500">*</span>
          </label>
          <input
            id="vol-nationality"
            type="text"
            placeholder="e.g. American, Canadian..."
            className={cn('form-input', errors.nationality && 'form-input-error')}
            {...register('nationality')}
          />
          {errors.nationality && <p className="form-error">{errors.nationality.message}</p>}
        </div>
        <div>
          <label htmlFor="vol-age" className="form-label">
            Age <span className="text-red-500">*</span>
          </label>
          <input
            id="vol-age"
            type="number"
            placeholder="Your age"
            min={18}
            max={80}
            className={cn('form-input', errors.age && 'form-input-error')}
            {...register('age', { valueAsNumber: true })}
          />
          {errors.age && <p className="form-error">{errors.age.message}</p>}
        </div>
      </div>

      {/* Languages */}
      <div>
        <label htmlFor="vol-languages" className="form-label">
          Languages You Speak <span className="text-red-500">*</span>
        </label>
        <input
          id="vol-languages"
          type="text"
          placeholder="e.g. English, French, Spanish"
          className={cn('form-input', errors.languages && 'form-input-error')}
          {...register('languages')}
        />
        {errors.languages && <p className="form-error">{errors.languages.message}</p>}
      </div>

      {/* Teaching Experience */}
      <div>
        <label htmlFor="vol-experience" className="form-label">
          Teaching Experience
          <span className="text-neutral-400 font-normal ml-1">(optional)</span>
        </label>
        <textarea
          id="vol-experience"
          rows={3}
          placeholder="Describe any teaching or tutoring experience..."
          className="form-input resize-none"
          {...register('experience')}
        />
      </div>

      {/* How Heard + Availability */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="vol-heard" className="form-label">
            How Did You Hear About Us?
          </label>
          <select id="vol-heard" className="form-input" {...register('how_heard')}>
            {hearOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="vol-availability" className="form-label">
            Availability <span className="text-red-500">*</span>
          </label>
          <select
            id="vol-availability"
            className={cn('form-input', errors.availability && 'form-input-error')}
            {...register('availability')}
          >
            {availabilityOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.availability && <p className="form-error">{errors.availability.message}</p>}
        </div>
      </div>

      {/* Why Volunteer */}
      <div>
        <label htmlFor="vol-message" className="form-label">
          Why Do You Want to Volunteer? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="vol-message"
          rows={5}
          placeholder="Tell us a bit about yourself and your motivation to volunteer at Sagely..."
          className={cn('form-input resize-none', errors.message && 'form-input-error')}
          {...register('message')}
        />
        {errors.message && <p className="form-error">{errors.message.message}</p>}
      </div>

      {/* Success State */}
      {submitStatus === 'success' && (
        <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
          <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-green-800 font-medium text-sm">Application received!</p>
            <p className="text-green-700 text-sm">
              We will be in touch within 2 business days. We look forward to welcoming you to
              Tanger. Redirecting you...
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
            Sending Application...
          </>
        ) : (
          'Send My Application →'
        )}
      </button>
    </form>
  );
}
