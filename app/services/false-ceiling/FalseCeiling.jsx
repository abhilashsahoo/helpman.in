"use client"
import React, { useState } from 'react';
import { 
  LayoutGrid,
  Building2,
  SquareStack,
  Puzzle,
  Grid3X3,
  Boxes,
  ArrowRight,
  Check,
  PlusCircle,
  MinusCircle,
  Calculator,
  Timer,
  Sparkles,
  Lightbulb,
  Gavel
} from 'lucide-react';
import Image from 'next/image';

const FalseCeilingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  // Hero Content
  const features = [
    "Premium Materials",
    "Expert Installation",
    "Custom Designs",
    "5-Year Warranty"
  ];

  // Service Cards
  const services = [
    {
      icon: <LayoutGrid className="w-6 h-6" />,
      title: 'Gypsum Ceilings',
      description: 'Durable, elegant, and cost-effective solutions for modern homes and offices.'
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'POP Ceilings',
      description: 'Smooth and artistic finishes for a classic touch.'
    },
    {
      icon: <SquareStack className="w-6 h-6" />,
      title: 'Wooden Ceilings',
      description: 'Natural and premium designs for a warm, sophisticated look.'
    },
    {
      icon: <Grid3X3 className="w-6 h-6" />,
      title: 'Metal Ceilings',
      description: 'Industrial-grade durability with sleek, contemporary designs.'
    },
    {
      icon: <Puzzle className="w-6 h-6" />,
      title: 'Grid Ceilings',
      description: 'Perfect for commercial spaces with easy access to utilities.'
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      title: 'Customized Designs',
      description: 'Bespoke patterns, lighting integration, and unique aesthetics.'
    }
  ];

  const faqs = [
    {
      question: "What are the benefits of a false ceiling?",
      answer: "False ceilings offer numerous benefits including better acoustics, improved insulation, concealed wiring/ducts, enhanced aesthetics, and energy efficiency through better temperature control and integrated lighting solutions."
    },
    {
      question: "How long does installation take?",
      answer: "Installation time varies based on room size and design complexity. A standard room typically takes 2-3 days, while larger or more intricate projects may take 4-7 days."
    },
    {
      question: "What type of maintenance is required?",
      answer: "False ceilings require minimal maintenance. Regular dusting and occasional checks for moisture damage are recommended. Our installations come with anti-moisture treatment for longer life."
    },
    {
      question: "Can lights be integrated into the ceiling?",
      answer: "Yes, our false ceilings are designed to seamlessly integrate various lighting options including LED panels, spotlights, and recessed lighting for both aesthetic and functional purposes."
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
                  <span className="text-gray-600 text-sm">Premium Ceiling Solutions</span>
                </div>

                <h1 className="text-7xl font-bold">
                  <span className="text-gray-900">Elevate Your</span>
                  <br />
                  <span className="text-[#E94560]">Ceiling Design</span>
                </h1>

                <p className="text-xl text-gray-600 max-w-xl">
                  Create stunning spaces with our expert false ceiling solutions. Combine aesthetics with functionality for the perfect overhead finish.
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#E94560]" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 pt-6">
                  <button className="group px-8 py-4 bg-[#E94560] text-white rounded-xl font-medium hover:bg-[#d63d56] transition-colors">
                    <span className="flex items-center gap-2">
                      Free Consultation
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
                    src="/images/false-ceiling.jpg"
                    alt="Modern false ceiling design"
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
                        <div className="text-gray-600 text-sm">Customer Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#E94560] mb-1">10+</div>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Our Ceiling Solutions
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Choose from our wide range of ceiling options, each designed to meet specific aesthetic and functional requirements.
          </p>

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

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Why Choose Our Ceiling Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#E94560]/10 rounded-full flex items-center justify-center text-[#E94560] mb-4">
                  <Gavel className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Quality Materials</h3>
                <p className="text-gray-600 text-sm">Premium products for lasting results</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#E94560]/10 rounded-full flex items-center justify-center text-[#E94560] mb-4">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Smart Integration</h3>
                <p className="text-gray-600 text-sm">Seamless lighting solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#E94560]/10 rounded-full flex items-center justify-center text-[#E94560] mb-4">
                  <Timer className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Timely Delivery</h3>
                <p className="text-gray-600 text-sm">On-schedule completion</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#E94560]/10 rounded-full flex items-center justify-center text-[#E94560] mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Expert Finish</h3>
                <p className="text-gray-600 text-sm">Professional craftsmanship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
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

export default FalseCeilingPage;