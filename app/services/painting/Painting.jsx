"use client"
import React, { useState } from 'react';
import { 
  Paintbrush,
  Sun,
  Puzzle,
  Droplets,
  Palette,
  ArrowRight,
  Calculator,
  Medal,
  CheckCircle,
  Sparkles,
  Wallpaper ,
  PlusCircle,
  MinusCircle,
  Check
} from 'lucide-react';
import Image from 'next/image';

const PaintingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: 'Interior Painting',
      description: 'Beautiful finishes that bring life to your interiors.',
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: 'Exterior Painting',
      description: 'Weather-resistant paints for long-lasting durability.',
    },
    {
      icon: <Puzzle className="w-6 h-6" />,
      title: 'Textured Painting',
      description: 'Add character to your walls with unique textures and designs.',
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: 'Waterproof Coating',
      description: 'Protect your home from moisture and leakage.',
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Custom Artworks',
      description: 'Bring your creative vision to life with bespoke wall art.',
    },
    {
      icon: <Wallpaper  className="w-6 h-6" />,
      title: 'Wall Treatments',
      description: 'Specialized treatments for unique wall finishes.',
    }
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '95%', label: 'Client Satisfaction' },
    { value: '10+', label: 'Years Experience' },
    { value: '50+', label: 'Expert Painters' }
  ];

  const faqs = [
    {
      question: "How long does a typical painting project take?",
      answer: "Project duration varies based on size and complexity. A standard room typically takes 1-2 days, while larger projects may take 3-5 days or more. We'll provide a detailed timeline during consultation."
    },
    {
      question: "What type of paints do you use?",
      answer: "We use premium quality, eco-friendly paints from leading manufacturers. Our paints are chosen based on the specific requirements of your project, ensuring durability and perfect finish."
    },
    {
      question: "Do you provide color consultation?",
      answer: "Yes, our expert color consultants can help you choose the perfect colors for your space. We consider lighting, room function, and your preferences to create the ideal color scheme."
    },
    {
      question: "What preparation work is included?",
      answer: "Our service includes thorough surface preparation: cleaning, sanding, filling holes/cracks, primer application, and protecting furniture/floors. This ensures a perfect, long-lasting finish."
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "Yes, we provide warranty on both workmanship and materials. The specific warranty period varies by service type and will be clearly outlined in your service agreement."
    }
  ];

  return (
    <>
{/* Hero Section */}
<section className="relative min-h-screen bg-gray-50 overflow-hidden">
  {/* Subtle Background Pattern */}
  <div className="absolute inset-0 bg-[linear-gradient(#E94560_1.4px,transparent_1.4px),linear-gradient(to_right,#E94560_1.4px,transparent_1.4px)] bg-[size:28px_28px] opacity-[0.03]" />

  <div className="relative container mx-auto px-4 h-screen">
    <div className="h-full flex flex-col justify-center">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-[#E94560]/5 rounded-full px-4 py-2">
            <span className="text-[#E94560] animate-pulse">●</span>
            <span className="text-gray-600 text-sm">Professional Painting Services</span>
          </div>

          <h1 className="text-7xl font-bold">
            <span className="text-gray-900">Perfect Finish</span>
            <br />
            <span className="text-[#E94560]">Every Time</span>
          </h1>

          <p className="text-gray-600 max-w-xl">
            Elevate your space with expert painting services. From classic elegance to modern designs, we deliver flawless results that last.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#E94560]" />
              </div>
              Eco-Friendly Paints
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#E94560]" />
              </div>
              Color Consultation
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#E94560]" />
              </div>
              5-Year Warranty
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#E94560]" />
              </div>
              Professional Team
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-6">
            <button className="group px-8 py-4 bg-[#E94560] text-white rounded-xl font-medium hover:bg-[#d63d56] transition-colors">
              <span className="flex items-center gap-2">
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 border border-[#E94560] text-[#E94560] rounded-xl font-medium hover:bg-[#E94560]/5 transition-colors flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Cost Calculator
            </button>
          </div>
        </div>

        {/* Right Column - Image with Stats */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/painting.jpg"
              alt="Professional painting service"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Stats Overlay */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#E94560] mb-1">5000+</div>
                  <div className="text-gray-600 text-sm">Rooms Painted</div>
                </div>
                <div className="text-center border-x border-gray-200">
                  <div className="text-2xl font-bold text-[#E94560] mb-1">15+</div>
                  <div className="text-gray-600 text-sm">Paint Experts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#E94560] mb-1">100%</div>
                  <div className="text-gray-600 text-sm">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#E94560]/10 rounded-xl flex items-center justify-center text-[#E94560] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a href="#" className="inline-flex items-center text-[#E94560] hover:gap-2 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Why Choose Our Painting Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#E94560]/10 rounded-full flex items-center justify-center text-[#E94560] mb-4">
                  <Medal className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">Professional painters with years of experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#E94560]/10 rounded-full flex items-center justify-center text-[#E94560] mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Quality Materials</h3>
                <p className="text-gray-600">Premium paints and tools for the best results</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#E94560]/10 rounded-full flex items-center justify-center text-[#E94560] mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">100% satisfaction with our service quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFaq === index ? (
                    <MinusCircle className="w-5 h-5 text-[#E94560]" />
                  ) : (
                    <PlusCircle className="w-5 h-5 text-[#E94560]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PaintingPage;