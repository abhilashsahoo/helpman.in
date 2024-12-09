// app/services/plumbing/page.js
import { Metadata } from 'next';
import PlumbingServices from './Plumbing';


export const metadata = {
  title: 'Professional Plumbing Services | Helpman Services',
  description: 'Expert plumbing solutions for residential and commercial spaces. 24/7 emergency service, leak detection, pipe installation, and more.',
  keywords: [
    'plumbing services',
    'leak detection',
    'pipe installation',
    'water heater repair',
    'drain cleaning',
    'emergency plumber',
    'bathroom plumbing',
    'kitchen plumbing'
  ]
};

export default function Page() {
  return <PlumbingServices/>;
}