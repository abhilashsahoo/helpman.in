"use client"
import React, { useState, useEffect } from 'react';
import { 
  Droplets,
  Shield,
  Home,
  CheckCircle,
  Clock,
  Wrench,
  ArrowRight,
  Calculator,
  Check,
  Droplet,
  Ruler,
  Building,
  PlusCircle,
  MinusCircle
} from 'lucide-react';
import Image from 'next/image';

const WaterproofingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const slides = [
    {
      image: '/images/waterproofing-1.jpg',
      title: 'Complete Protection',
      description: 'Advanced waterproofing solutions for lasting protection against water damage and leakage.'
    },
    {
      image: '/images/waterproofing-2.jpg',
      title: 'Expert Solutions',
      description: 'Professional waterproofing services for residential and commercial properties.'
    },
    {
      image: '/images/waterproofing-3.jpg',
      title: 'Quality Assured',
      description: 'Premium materials and expert application for guaranteed results.'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    "Advanced Materials",
    "10-Year Warranty",
    "Expert Application",
    "Free Inspection"
  ];

  const services = [
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Terrace Waterproofing',
      description: 'Complete protection for terraces and rooftops against water seepage.'
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Bathroom Waterproofing',
      description: 'Specialized solutions for bathrooms and wet areas.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Basement Waterproofing',
      description: 'Comprehensive protection against groundwater seepage.'
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: 'Wall Dampness Treatment',
      description: 'Effective solutions for wall dampness and seepage issues.'
    },
    {
      icon: <Droplet  className="w-6 h-6" />,
      title: 'Water Tank Treatment',
      description: 'Expert waterproofing for water tanks and storage areas.'
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: 'Expansion Joint Treatment',
      description: 'Specialized treatment for building expansion joints.'
    }
  ];

  const stats = [
    {
      icon: <Building className="w-8 h-8" />,
      value: "1000+",
      label: "Projects",
      subtext: "Successfully Completed"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "12+",
      label: "Years",
      subtext: "Industry Experience"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      value: "98%",
      label: "Success Rate",
      subtext: "Satisfied Clients"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      value: "5+",
      label: "Years",
      subtext: "Service Warranty"
    }
  ];

  const faqs = [
    {
      question: "How long does waterproofing treatment last?",
      answer: "Our waterproofing solutions typically last 8-10 years with proper maintenance. We provide a warranty of up to 5 years on our treatments, depending on the type of service."
    },
    {
      question: "What areas can be waterproofed?",
      answer: "We provide waterproofing solutions for terraces, bathrooms, basements, external walls, water tanks, and other areas prone to water damage. Each area requires specific treatment methods which we customize based on the requirement."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes, we offer emergency waterproofing services for urgent leakage issues. Our team can respond quickly to assess and address immediate concerns to prevent further damage."
    },
    {
      question: "What type of warranty do you provide?",
      answer: "We offer up to 5 years warranty on our waterproofing services, covering material and workmanship. The specific warranty period depends on the type of treatment and area covered."
    }
  ];

  // JSX similar to our other service pages, maintaining consistent design
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(#E94560_1.4px,transparent_1.4px),linear-gradient(to_right,#E94560_1.4px,transparent_1.4px)] bg-[size:28px_28px] opacity-[0.03]" />

        <div className="relative container mx-auto px-4 h-screen">
          <div className="h-full flex flex-col justify-center">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-[#E94560]/5 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-[#E94560] animate-pulse">●</span>
                  <span className="text-gray-600 text-sm">Professional Waterproofing Solutions</span>
                </div>

                <h1 className="text-7xl font-bold">
                  <span className="text-gray-900">Lasting</span>
                  <br />
                  <span className="text-[#E94560]">Protection</span>
                </h1>

                <p className="text-xl text-gray-600 max-w-xl">
                  Advanced waterproofing solutions that provide complete protection against water damage. Expert application with guaranteed results.
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
                    src="/images/water-proofing.jpg"
                    alt="Professional waterproofing service"
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
                        <div className="text-2xl font-bold text-[#E94560] mb-1">1000+</div>
                        <div className="text-gray-600 text-sm">Projects Done</div>
                      </div>
                      <div className="text-center border-x border-gray-200">
                        <div className="text-2xl font-bold text-[#E94560] mb-1">98%</div>
                        <div className="text-gray-600 text-sm">Success Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#E94560] mb-1">5+</div>
                        <div className="text-gray-600 text-sm">Year Warranty</div>
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
            <h2 className="text-4xl font-bold mb-4">Our Waterproofing Solutions</h2>
            <p className="text-xl text-gray-600">
              Comprehensive waterproofing services for complete protection against water damage
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

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
              <p className="text-gray-600">Everything you need to know about our waterproofing services</p>
            </div>

            <div className="space-y-4">
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
        </div>
      </section>
    </>
  );
};

export default WaterproofingPage;