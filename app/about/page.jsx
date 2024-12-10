import AboutPage from "./About";

export const metadata = {
    title: 'About Us | Helpman Services',
    description: 'Discover Helpman Services - your trusted partner for high-quality home and commercial solutions. Learn about our mission, values, and dedication to exceptional customer satisfaction.',
    openGraph: {
      title: 'About Us | Helpman Services',
      description: 'Discover Helpman Services - your trusted partner for high-quality home and commercial solutions. Learn about our mission, values, and dedication to exceptional customer satisfaction.',
      type: 'website',
      images: [
        {
          url: '/images/about-us-og.jpg', // Add a relevant image to your project
          width: 1200,
          height: 630,
          alt: 'About Helpman Services'
        }
      ],
      locale: 'en_US',
      siteName: 'Helpman Services'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Us | Helpman Services',
      description: 'Discover Helpman Services - your trusted partner for high-quality home and commercial solutions. Learn about our mission, values, and dedication to exceptional customer satisfaction.',
      images: ['/images/about-us-og.jpg'], // Same image as OpenGraph
    },
    keywords: [
      'about us',
      'helpman services',
      'trusted service provider',
      'home solutions',
      'commercial services',
      'company mission',
      'customer satisfaction',
      'our values',
      'service excellence',
      'professional team'
    ],
    alternates: {
      canonical: 'https://helpman.com/about'
    }
  };

  export default function Page() {
    return <AboutPage />;
  }