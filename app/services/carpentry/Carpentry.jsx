"use client"
import React, { useState } from 'react';
import { 
  Hammer,
  Ruler,
  Sofa,
  Door,
  Wrench,
  ArrowRight,
  Calculator,
  Check,
  PlusCircle,
  MinusCircle,
  Phone,
  DoorOpen
} from 'lucide-react';
import Image from 'next/image';

const CarpentryServices = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      icon: <Sofa className="w-6 h-6" />,
      title: 'Custom Furniture Design',
      description: 'Bespoke furniture tailored to your unique style and space requirements.'
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: 'Modular Kitchen Installation',
      description: 'Elegant and functional kitchen solutions crafted with precision.'
    },
    {
      icon: <DoorOpen className="w-6 h-6" />,
      title: 'Doors & Windows',
      description: 'Custom installation, repair, and restoration for interior and exterior needs.'
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Wood Polishing & Restoration',
      description: 'Breathe new life into old furniture with expert refinishing techniques.'
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: 'General Woodwork Repairs',
      description: 'Comprehensive repairs for squeaky doors, broken cabinets, and structural issues.'
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: 'Wardrobes & Custom Storage',
      description: 'Space-saving and stylish storage solutions designed for your home.'
    }
  ];

  const faqs = [
    {
      question: "Do you offer custom furniture design?",
      answer: "Absolutely! We specialize in creating bespoke furniture tailored to your specific needs, style, and space requirements."
    },
    {
      question: "What types of wood do you work with?",
      answer: "We work with a wide range of wood types, including oak, maple, pine, walnut, and exotic hardwoods. We can recommend the best material for your project."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project duration varies depending on complexity. A custom furniture piece might take 2-4 weeks, while smaller repairs can be completed in 1-2 days."
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
                <span className="text-gray-600 text-sm">Professional Carpentry Services</span>
              </div>

              <h1 className="text-7xl font-bold">
                <span className="text-gray-900">Expert</span>
                <br />
                <span className="text-[#E94560]">Woodwork Solutions</span>
              </h1>

              <p className="text-gray-600 max-w-xl">
                Crafting exceptional wooden spaces and furniture with precision, creativity, and unmatched skill. From custom designs to intricate repairs.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#E94560]" />
                  </div>
                  Skilled Craftsmen
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
                  Quality Materials
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#E94560]" />
                  </div>
                  Timely Completion
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
                  Project Calculator
                </button>
              </div>
            </div>

            {/* Right Column - Image with Stats */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/carpentry.jpg"
                  alt="Professional carpentry service"
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
                      <div className="text-gray-600 text-sm">Projects Completed</div>
                    </div>
                    <div className="text-center border-x border-gray-200">
                      <div className="text-2xl font-bold text-[#E94560] mb-1">10+</div>
                      <div className="text-gray-600 text-sm">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#E94560] mb-1">4.8/5</div>
                      <div className="text-gray-600 text-sm">Customer Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Carpentry Services</h2>
          <p className="text-gray-600 text-lg">
            Comprehensive woodworking solutions for residential and commercial spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#E94560]/10 rounded-xl flex items-center justify-center text-[#E94560] mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Emergency/Urgent Services Section */}
    <section className="py-16 bg-[#E94560]">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Urgent Woodwork Repairs</h2>
        <p className="text-xl mb-8 opacity-90">
          Need immediate carpentry assistance? We're here to help.
        </p>
        <button className="px-8 py-4 bg-white text-[#E94560] rounded-xl font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
          <Phone className="w-5 h-5" />
          Call Urgent Service
        </button>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl">
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
                <div className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-48' : 'max-h-0'
                }`}>
                  <div className="p-6 pt-0 text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default CarpentryServices;