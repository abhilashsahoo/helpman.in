import GetQuotePage from "./GetQuote";

export const metadata = {
    title: 'Get a Quote | Helpman Services',
    description: 'Request a personalized quote for our home and commercial services. Fill out the form to get a detailed estimate tailored to your requirements. Quick and hassle-free.',
    openGraph: {
      title: 'Get a Quote | Helpman Services',
      description: 'Request a personalized quote for our home and commercial services. Fill out the form to get a detailed estimate tailored to your requirements. Quick and hassle-free.',
      type: 'website',
      images: [
        {
          url: '/images/get-quote-og.jpg', // Add a relevant image to your project
          width: 1200,
          height: 630,
          alt: 'Get a Quote from Helpman Services'
        }
      ],
      locale: 'en_US',
      siteName: 'Helpman Services'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Get a Quote | Helpman Services',
      description: 'Request a personalized quote for our home and commercial services. Fill out the form to get a detailed estimate tailored to your requirements. Quick and hassle-free.',
      images: ['/images/get-quote-og.jpg'], // Same image as OpenGraph
    },
    keywords: [
      'get a quote',
      'request a quote',
      'service estimate',
      'helpman quote',
      'personalized service quote',
      'quick quote request',
      'free estimate',
      'service pricing',
      'quote form',
      'get a service quote'
    ],
    alternates: {
      canonical: 'https://helpman.com/get-quote'
    }
  };

  export default function Page() {
    return <GetQuotePage />;
  }