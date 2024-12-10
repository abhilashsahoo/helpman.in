import CarpentryPage from "./Carpentry";

export const metadata = {
    title: 'Expert Carpentry Services | Helpman Services',
    description: 'Transform your space with our professional carpentry solutions. Custom furniture, repair, and installations with top-quality craftsmanship. Free consultation and estimates available.',
    openGraph: {
      title: 'Expert Carpentry Services | Helpman Services',
      description: 'Transform your space with our professional carpentry solutions. Custom furniture, repair, and installations with top-quality craftsmanship. Free consultation and estimates available.',
      type: 'website',
      images: [
        {
          url: '/images/carpentry-services-og.jpg', // Add a relevant image to your project
          width: 1200,
          height: 630,
          alt: 'Helpman Expert Carpentry Services'
        }
      ],
      locale: 'en_US',
      siteName: 'Helpman Services'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Expert Carpentry Services | Helpman Services',
      description: 'Transform your space with our professional carpentry solutions. Custom furniture, repair, and installations with top-quality craftsmanship. Free consultation and estimates available.',
      images: ['/images/carpentry-services-og.jpg'], // Same image as OpenGraph
    },
    keywords: [
      'carpentry services',
      'custom carpentry',
      'furniture making',
      'woodwork repair',
      'wooden flooring installation',
      'kitchen cabinet installation',
      'wardrobe design',
      'wooden door installation',
      'carpentry contractors',
      'professional carpentry solutions'
    ],
    alternates: {
      canonical: 'https://helpman.com/services/carpentry'
    }
  };

  export default function Page() {
    return <CarpentryPage />;
  }