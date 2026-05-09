export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  source?: string;
}

export interface VolunteerFormData {
  name: string;
  email: string;
  phone?: string;
  nationality: string;
  age: number;
  languages: string;
  experience?: string;
  how_heard?: string;
  availability: string;
  message: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export interface TestimonialData {
  quote: string;
  name: string;
  description: string;
  stars: number;
}

export interface ProgramFeature {
  text: string;
}

export interface NavLink {
  href: string;
  label: string;
}
