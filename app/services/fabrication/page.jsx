import FabricationPage from "./Fabrication";

export const metadata = {
    title: 'Expert Fabrication Services | Helpman Services',
    description: 'Get high-quality fabrication solutions tailored to your needs. From structural steel to custom designs, our experts deliver precision and durability. Free consultation available.',
    openGraph: {
      title: 'Expert Fabrication Services | Helpman Services',
      description: 'Get high-quality fabrication solutions tailored to your needs. From structural steel to custom designs, our experts deliver precision and durability. Free consultation available.',
      type: 'website',
      images: [
        {
          url: '/images/fabrication-services-og.jpg', // Add a relevant image to your project
          width: 1200,
          height: 630,
          alt: 'Helpman Expert Fabrication Services'
        }
      ],
      locale: 'en_US',
      siteName: 'Helpman Services'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Expert Fabrication Services | Helpman Services',
      description: 'Get high-quality fabrication solutions tailored to your needs. From structural steel to custom designs, our experts deliver precision and durability. Free consultation available.',
      images: ['/images/fabrication-services-og.jpg'], // Same image as OpenGraph
    },
    keywords: [
      'fabrication services',
      'metal fabrication',
      'custom fabrication',
      'structural steel fabrication',
      'aluminum fabrication',
      'stainless steel fabrication',
      'fabrication contractors',
      'precision fabrication',
      'industrial fabrication',
      'welding services'
    ],
    alternates: {
      canonical: 'https://helpman.com/services/fabrication'
    }
  };

  export default function Page() {
    return <FabricationPage />;
  }