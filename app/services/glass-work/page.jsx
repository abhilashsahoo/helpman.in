import GlassWorksPage from "./GlassWorks";

export const metadata = {
    title: 'Professional Glass Works Services | Helpman Services',
    description: 'Enhance your spaces with our expert glass works solutions. From custom installations to repairs, we deliver precision and quality. Free consultation and estimates available.',
    openGraph: {
      title: 'Professional Glass Works Services | Helpman Services',
      description: 'Enhance your spaces with our expert glass works solutions. From custom installations to repairs, we deliver precision and quality. Free consultation and estimates available.',
      type: 'website',
      images: [
        {
          url: '/images/glass-works-services-og.jpg', // Ensure this image is added to your project
          width: 1200,
          height: 630,
          alt: 'Helpman Professional Glass Works Services'
        }
      ],
      locale: 'en_US',
      siteName: 'Helpman Services'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Professional Glass Works Services | Helpman Services',
      description: 'Enhance your spaces with our expert glass works solutions. From custom installations to repairs, we deliver precision and quality. Free consultation and estimates available.',
      images: ['/images/glass-works-services-og.jpg'], // Same image as OpenGraph
    },
    keywords: [
      'glass works services',
      'custom glass installations',
      'glass repair services',
      'residential glass solutions',
      'commercial glass services',
      'glass door installation',
      'window glass replacement',
      'glass partition walls',
      'shower glass enclosures',
      'glass railing systems'
    ],
    alternates: {
      canonical: 'https://helpman.com/services/glass-works'
    }
  };

  export default function Page() {
    return <GlassWorksPage />;
  }