import ContactPage from "./Contact";

export const metadata = {
    title: 'Contact Us | Helpman Services',
    description: 'Get in touch with Helpman Services for all your home and commercial service needs. Contact us via phone, email, or our online form for inquiries, bookings, or support.',
    openGraph: {
      title: 'Contact Us | Helpman Services',
      description: 'Get in touch with Helpman Services for all your home and commercial service needs. Contact us via phone, email, or our online form for inquiries, bookings, or support.',
      type: 'website',
      images: [
        {
          url: '/images/contact-us-og.jpg', // Add a relevant image to your project
          width: 1200,
          height: 630,
          alt: 'Contact Helpman Services'
        }
      ],
      locale: 'en_US',
      siteName: 'Helpman Services'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Us | Helpman Services',
      description: 'Get in touch with Helpman Services for all your home and commercial service needs. Contact us via phone, email, or our online form for inquiries, bookings, or support.',
      images: ['/images/contact-us-og.jpg'], // Same image as OpenGraph
    },
    keywords: [
      'contact us',
      'helpman services contact',
      'get in touch',
      'customer support',
      'service inquiries',
      'contact helpman',
      'book services',
      'phone number',
      'email address',
      'contact form'
    ],
    alternates: {
      canonical: 'https://helpman.com/contact'
    }
  };
  export default function Page() {
    return <ContactPage />;
  }
