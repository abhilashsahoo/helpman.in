import ElectricalPage from "./Electrical";

export const metadata = {
    title: 'Expert Electrical Services | Helpman Services',
    description: 'Reliable and professional electrical solutions for homes and businesses. From installations to repairs, our certified electricians ensure safety and quality. Free consultation and estimates available.',
    openGraph: {
      title: 'Expert Electrical Services | Helpman Services',
      description: 'Reliable and professional electrical solutions for homes and businesses. From installations to repairs, our certified electricians ensure safety and quality. Free consultation and estimates available.',
      type: 'website',
      images: [
        {
          url: '/images/electrical-services-og.jpg', // Add a relevant image to your project
          width: 1200,
          height: 630,
          alt: 'Helpman Expert Electrical Services'
        }
      ],
      locale: 'en_US',
      siteName: 'Helpman Services'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Expert Electrical Services | Helpman Services',
      description: 'Reliable and professional electrical solutions for homes and businesses. From installations to repairs, our certified electricians ensure safety and quality. Free consultation and estimates available.',
      images: ['/images/electrical-services-og.jpg'], // Same image as OpenGraph
    },
    keywords: [
      'electrical services',
      'professional electricians',
      'electrical repair',
      'electrical installations',
      'home electrical solutions',
      'commercial electrical services',
      'wiring and rewiring',
      'circuit breaker repair',
      'electrician near me',
      'certified electricians'
    ],
    alternates: {
      canonical: 'https://helpman.com/services/electrical'
    }
  };
  export default function Page() {
    return <ElectricalPage />;
  }