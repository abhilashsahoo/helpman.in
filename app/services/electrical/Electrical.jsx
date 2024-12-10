"use client"
import React, { useState } from 'react';
import { 
  Zap,
  Lightbulb,
  Power,
  Shield,
  Wrench,
  ArrowRight,
  Calculator,
  Clock,
  CheckCircle,
  AlertTriangle,
  CircuitBoard,
  PlusCircle,
  MinusCircle,
  Check,
  Phone
} from 'lucide-react';
import Image from 'next/image';

const ElectricalPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      icon: <CircuitBoard className="w-6 h-6" />,
      title: 'Wiring & Rewiring',
      description: 'Safe and efficient electrical wiring for new or existing spaces.',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Electrical Installations',
      description: 'Expert installation of lights, fans, appliances, and fixtures.',
    },
    {
      icon: <Power className="w-6 h-6" />,
      title: 'Panel Upgrades',
      description: 'Modernize your electrical panels for improved performance.',
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Fault Detection & Repair',
      description: 'Quick diagnosis and repair of electrical issues.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lighting Solutions',
      description: 'Custom lighting design for ambiance and functionality.',
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Emergency Services',
      description: '24/7 emergency electrical assistance when you need it most.',
    }
  ];

  const faqs = [
    {
      question: "Do you provide emergency electrical services?",
      answer: "Yes, we offer 24/7 emergency electrical services. Our licensed electricians are available round the clock to handle urgent electrical issues and ensure your safety."
    },
    {
      question: "What safety standards do you follow?",
      answer: "We strictly adhere to National Electrical Code (NEC) standards and local electrical codes. Our team is fully licensed, insured, and regularly trained on the latest safety protocols."
    },
    {
      question: "How long does a typical electrical project take?",
      answer: "Project duration varies based on complexity. Simple installations might take a few hours, while complete rewiring could take several days. We'll provide a detailed timeline during consultation."
    },
    {
      question: "Do you offer warranties on electrical work?",
      answer: "Yes, we provide comprehensive warranties on both parts and labor. Our standard warranty covers workmanship for 1 year, with extended warranties available for specific installations."
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
                  <span className="text-gray-600 text-sm">Licensed Electrical Services</span>
                </div>

                <h1 className="text-7xl font-bold">
                  <span className="text-gray-900">Safe & Reliable</span>
                  <br />
                  <span className="text-[#E94560]">Electrical Solutions</span>
                </h1>

                <p className="text-gray-600 max-w-xl">
                  Expert electrical services for your home and business. Licensed professionals delivering safe, efficient, and reliable solutions.
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#E94560]" />
                    </div>
                    Licensed Electricians
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#E94560]" />
                    </div>
                    24/7 Emergency Service
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#E94560]" />
                    </div>
                    Safety Guaranteed
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#E94560]" />
                    </div>
                    Upfront Pricing
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
                    <Phone className="w-5 h-5" />
                    Emergency Service
                  </button>
                </div>
              </div>

              {/* Right Column - Image with Stats */}
              <div className="relative">
                {/* Main Image */}
                <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/electrical.jpg"
                    alt="Professional electrical service"
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
                        <div className="text-2xl font-bold text-[#E94560] mb-1">20+</div>
                        <div className="text-gray-600 text-sm">Expert Electricians</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#E94560] mb-1">4.9/5</div>
                        <div className="text-gray-600 text-sm">Safety Rating</div>
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Electrical Services</h2>
            <p className="text-gray-600 text-lg">
              Comprehensive electrical solutions for residential and commercial needs.
            </p>
          </div>
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
            <h2 className="text-3xl font-bold mb-12">Why Choose Our Electrical Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#E94560]/10 rounded-full flex items-center justify-center text-[#E94560] mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully certified electrical professionals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#E94560]/10 rounded-full flex items-center justify-center text-[#E94560] mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">24/7 Service</h3>
                <p className="text-gray-600">Round-the-clock emergency response</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#E94560]/10 rounded-full flex items-center justify-center text-[#E94560] mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Guaranteed Quality</h3>
                <p className="text-gray-600">100% satisfaction with our work</p>
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

export default ElectricalPage;