import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(255),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional().or(z.literal('')),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
  source: z.string().optional().or(z.literal('')),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const volunteerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(255),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional().or(z.literal('')),
  nationality: z.string().min(2, 'Please enter your nationality').max(100),
  age: z.number({ invalid_type_error: 'Please enter your age' }).min(18, 'You must be at least 18 years old').max(80),
  languages: z.string().min(2, 'Please list the languages you speak'),
  experience: z.string().optional().or(z.literal('')),
  how_heard: z.string().optional().or(z.literal('')),
  availability: z.string().min(1, 'Please select your availability'),
  message: z.string().min(20, 'Please tell us a bit more about your motivation (at least 20 characters)').max(3000),
});

export type VolunteerFormValues = z.infer<typeof volunteerSchema>;
