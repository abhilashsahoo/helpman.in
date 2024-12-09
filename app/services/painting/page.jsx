import PaintingPage from "./Painting";

export const metadata = {
    title: 'Professional Painting Services | Helpman Services',
    description: 'Transform your space with our expert painting services. Get flawless finishes, eco-friendly paints, and 5-year warranty. Free consultation and estimates available.',
    openGraph: {
      title: 'Professional Painting Services | Helpman Services',
      description: 'Transform your space with our expert painting services. Get flawless finishes, eco-friendly paints, and 5-year warranty. Free consultation and estimates available.',
      type: 'website',
      images: [
        {
          url: '/images/painting-services-og.jpg', // You'll need to add this image
          width: 1200,
          height: 630,
          alt: 'Helpman Professional Painting Services'
        }
      ],
      locale: 'en_US',
      siteName: 'Helpman Services'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Professional Painting Services | Helpman Services',
      description: 'Transform your space with our expert painting services. Get flawless finishes, eco-friendly paints, and 5-year warranty. Free consultation and estimates available.',
      images: ['/images/painting-services-og.jpg'], // Same image as OpenGraph
    },
    keywords: [
      'professional painting services',
      'interior painting',
      'exterior painting',
      'residential painting',
      'commercial painting',
      'painting contractors',
      'wall painting',
      'house painting',
      'paint services',
      'painting company'
    ],
    alternates: {
      canonical: 'https://helpman.com/services/painting'
    }
  };
  export default function Page() {
    return <PaintingPage />;
  }