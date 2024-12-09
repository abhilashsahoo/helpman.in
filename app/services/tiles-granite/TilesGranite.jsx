"use client"
import React, { useState, useEffect } from 'react';
import { 
  GalleryThumbnails,
  LayoutGrid, 
  Component,
  Shapes,
  FlaskConical,
  PenTool,
  ArrowRight,
  Calculator,
  Check,
  Clock,
  Workflow,
  Award,
  Star,
  ShieldCheck,
  PlusCircle,
  MinusCircle
} from 'lucide-react';
import Image from 'next/image';

const TilesGranitePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);



  const features = [
    "Expert Installation",
    "Premium Materials",
    "Custom Designs",
    "5-Year Warranty"
  ];

  const services = [
    {
      icon: <LayoutGrid className="w-6 h-6" />,
      title: 'Floor Tiling',
      description: 'Elegant, durable, and low-maintenance tiles for every space.'
    },
    {
      icon: <GalleryThumbnails className="w-6 h-6" />,
      title: 'Wall Tiling',
      description: 'Add style and protection to your walls with premium tiles.'
    },
    {
      icon: <Component className="w-6 h-6" />,
      title: 'Bathroom Tiling',
      description: 'Water-resistant, anti-slip tiles for safety and beauty.'
    },
    {
      icon: <Shapes className="w-6 h-6" />,
      title: 'Kitchen Countertops',
      description: 'Granite and tile solutions for heat-resistant, long-lasting counters.'
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: 'Granite Flooring',
      description: 'Luxurious granite floors for a polished, high-end look.'
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: 'Customized Designs',
      description: 'Tailored patterns, mosaics, and finishes for unique spaces.'
    }
  ];

  return (
    <>

          {/* Hero Section */}
          <section className="relative min-h-screen bg-gray-50 overflow-hidden">
        {/* Glass-inspired background pattern */}
        <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(#E94560_1.4px,transparent_1.4px),linear-gradient(to_right,#E94560_1.4px,transparent_1.4px)] bg-[size:28px_28px] opacity-[0.03]" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,white_25%,white_50%,transparent_50%,transparent_75%,white_75%,white_100%)] bg-[length:20px_20px] opacity-5" />
        </div>

        <div className="relative container mx-auto px-4 h-screen">
          <div className="h-full flex flex-col justify-center">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-[#E94560]/5 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-[#E94560] animate-pulse">●</span>
                  <span className="text-gray-600 text-sm">Premium Tiles & Granite</span>
                </div>

                <h1 className="text-7xl font-bold">
                  <span className="text-gray-900">Perfect</span>
                  <br />
                  <span className="text-[#E94560]">finish</span>
                </h1>

                <p className="text-xl text-gray-600 max-w-xl">
                Personalized patterns and unique designs that reflect your style and preferences.
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#E94560]" />
                    </div>
                    Expert Installation                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#E94560]" />
                    </div>
                    Premium Materials
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#E94560]" />
                    </div>
                    Custom Designs
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#E94560]" />
                    </div>
                    5-Year Warranty
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
                <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/granite-tiles.jpg"
                    alt="Premium Tiles & Granite"
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
                        <div className="text-2xl font-bold text-[#E94560] mb-1">300+</div>
                        <div className="text-gray-600 text-sm">Projects Done</div>
                      </div>
                      <div className="text-center border-x border-gray-200">
                        <div className="text-2xl font-bold text-[#E94560] mb-1">4.9/5</div>
                        <div className="text-gray-600 text-sm">Client Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#E94560] mb-1">15+</div>
                        <div className="text-gray-600 text-sm">Years Experience</div>
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Tiles & Granite Solutions</h2>
            <p className="text-xl text-gray-600">
              Premium installation services for all your flooring and surfacing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
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

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/tiles-benefits.jpg"
                alt="Premium tiles and granite installation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              <div className="absolute inset-0 p-8 flex items-center">
                <div className="text-white max-w-md">
                  <h2 className="text-3xl font-bold mb-4">Why Choose Our Services?</h2>
                  <p className="text-lg">Experience excellence in tiles and granite installation with our expert team.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: <Workflow className="w-6 h-6" />,
                  title: "Expert Installation",
                  description: "Professional installation by skilled craftsmen ensuring perfect finish"
                },
                {
                  icon: <Star className="w-6 h-6" />,
                  title: "Premium Materials",
                  description: "High-quality tiles and granite sourced from trusted manufacturers"
                },
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  title: "Quality Assurance",
                  description: "Rigorous quality checks and long-lasting durability"
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Timely Completion",
                  description: "Efficient project management with on-time delivery"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#E94560]/10 flex items-center justify-center text-[#E94560]">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* FAQ Section */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600">Everything you need to know about our tiles and granite services</p>
      </div>

      <div className="space-y-4">
        {[
          {
            question: "What types of tiles do you work with?",
            answer: "We work with a wide variety of tiles including ceramic, porcelain, natural stone, mosaic, and designer tiles. We also offer premium granite options for flooring and countertops."
          },
          {
            question: "How long does installation typically take?",
            answer: "Installation time varies based on the project scope. A standard room typically takes 2-3 days, while larger projects may take 5-7 days. We'll provide a detailed timeline during consultation."
          },
          {
            question: "Do you provide maintenance services?",
            answer: "Yes, we offer comprehensive maintenance services including cleaning, polishing, and sealing for both tiles and granite surfaces to ensure their longevity and appearance."
          },
          {
            question: "What is your warranty policy?",
            answer: "We provide a 5-year warranty on installation workmanship and use manufacturer-warranted materials. This covers any installation-related issues and material defects."
          },
          {
            question: "Can you help with tile selection?",
            answer: "Absolutely! Our experts can help you choose the perfect tiles or granite based on your space, usage requirements, budget, and aesthetic preferences."
          }
        ].map((faq, index) => (
          <div key={index} className="bg-gray-50 rounded-xl">
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="flex items-center justify-between w-full p-6 text-left"
            >
              <span className="font-semibold">{faq.question}</span>
              <div className={`transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                <PlusCircle className="w-5 h-5 text-[#E94560]" />
              </div>
            </button>
            <div className={`transition-all duration-300 ${openFaq === index ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
              <div className="p-6 pt-0 text-gray-600">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-8">Ready to transform your space with premium tiles and granite?</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="group px-8 py-4 bg-[#E94560] text-white rounded-xl font-medium hover:bg-[#d63d56] transition-colors">
            <span className="flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default TilesGranitePage;