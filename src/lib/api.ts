import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export async function submitContactForm(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
  source?: string;
}) {
  const response = await api.post('/api/contact', data);
  return response.data;
}

export async function submitVolunteerForm(data: {
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
}) {
  const response = await api.post('/api/volunteer', data);
  return response.data;
}

export default api;
