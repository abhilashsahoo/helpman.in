import FalseCeilingPage from "./FalseCeiling";
export const metadata = {
    title: 'Professional False Ceiling Services | Helpman Services',
    description: 'Elevate your interiors with our expert false ceiling solutions. Modern designs, durable materials, and precision installation. Free consultation and estimates available.',
    openGraph: {
      title: 'Professional False Ceiling Services | Helpman Services',
      description: 'Elevate your interiors with our expert false ceiling solutions. Modern designs, durable materials, and precision installation. Free consultation and estimates available.',
      type: 'website',
      images: [
        {
          url: '/images/false-ceiling-services-og.jpg', // Add this image to your project
          width: 1200,
          height: 630,
          alt: 'Helpman Professional False Ceiling Services'
        }
      ],
      locale: 'en_US',
      siteName: 'Helpman Services'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Professional False Ceiling Services | Helpman Services',
      description: 'Elevate your interiors with our expert false ceiling solutions. Modern designs, durable materials, and precision installation. Free consultation and estimates available.',
      images: ['/images/false-ceiling-services-og.jpg'], // Same image as OpenGraph
    },
    keywords: [
      'false ceiling services',
      'modern ceiling designs',
      'ceiling installation',
      'gypsum ceiling',
      'POP ceiling',
      'false ceiling contractors',
      'ceiling renovation',
      'durable false ceilings',
      'interior design',
      'false ceiling solutions'
    ],
    alternates: {
      canonical: 'https://helpman.com/services/false-ceiling'
    }
  };
export default function Page() {
    return <FalseCeilingPage />;
  }