import ProcessPage from "./OurProcess";

export const metadata = {
    title: 'Our Process | Helpman Services',
    description: 'Learn about our streamlined process to deliver high-quality services. From consultation to completion, we ensure transparency, efficiency, and customer satisfaction every step of the way.',
    openGraph: {
      title: 'Our Process | Helpman Services',
      description: 'Learn about our streamlined process to deliver high-quality services. From consultation to completion, we ensure transparency, efficiency, and customer satisfaction every step of the way.',
      type: 'website',
      images: [
        {
          url: '/images/our-process-og.jpg', // Add a relevant image to your project
          width: 1200,
          height: 630,
          alt: 'Helpman Services - Our Process'
        }
      ],
      locale: 'en_US',
      siteName: 'Helpman Services'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Our Process | Helpman Services',
      description: 'Learn about our streamlined process to deliver high-quality services. From consultation to completion, we ensure transparency, efficiency, and customer satisfaction every step of the way.',
      images: ['/images/our-process-og.jpg'], // Same image as OpenGraph
    },
    keywords: [
      'our process',
      'how we work',
      'service workflow',
      'transparent process',
      'customer-focused services',
      'helpman process',
      'consultation to completion',
      'project execution process',
      'service delivery process',
      'efficiency and quality assurance'
    ],
    alternates: {
      canonical: 'https://helpman.com/our-process'
    }
  };
  export default function Page() {
    return <ProcessPage />;
  }