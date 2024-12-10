import ACServicesPage from "./AC";


export const metadata = {
    title: 'Expert AC Services | Helpman Services',
    description: 'Stay cool and comfortable with our professional AC installation, repair, and maintenance services. Certified technicians and affordable solutions. Free consultation and estimates available.',
    openGraph: {
      title: 'Expert AC Services | Helpman Services',
      description: 'Stay cool and comfortable with our professional AC installation, repair, and maintenance services. Certified technicians and affordable solutions. Free consultation and estimates available.',
      type: 'website',
      images: [
        {
          url: '/images/ac-services-og.jpg', // Add a relevant image to your project
          width: 1200,
          height: 630,
          alt: 'Helpman Expert AC Services'
        }
      ],
      locale: 'en_US',
      siteName: 'Helpman Services'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Expert AC Services | Helpman Services',
      description: 'Stay cool and comfortable with our professional AC installation, repair, and maintenance services. Certified technicians and affordable solutions. Free consultation and estimates available.',
      images: ['/images/ac-services-og.jpg'], // Same image as OpenGraph
    },
    keywords: [
      'AC services',
      'air conditioner repair',
      'AC installation',
      'AC maintenance',
      'AC cleaning',
      'AC troubleshooting',
      'professional AC services',
      'HVAC services',
      'home AC repair',
      'commercial AC services'
    ],
    alternates: {
      canonical: 'https://helpman.com/services/ac-services'
    }
  };
  export default function Page() {
    return <ACServicesPage />;
  }