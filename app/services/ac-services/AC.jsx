"use client"
import React, { useState } from 'react';
import { 
  Fan,
  Wind,
  Thermometer,
  Timer,
  Wrench,
  ArrowRight,
  Calculator,
  Shield,
  CheckCircle,
  Snowflake,
  AlertTriangle,
  PlusCircle,
  MinusCircle,
  Check,
  Phone
} from 'lucide-react';
import Image from 'next/image';

const ACServicesPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'AC Repair Services',
      description: 'Expert diagnosis and repair for all AC brands and models.',
    },
    {
      icon: <Fan className="w-6 h-6" />,
      title: 'AC Installation',
      description: 'Professional installation of split, window, and central AC units.',
    },
    {
      icon: <Timer className="w-6 h-6" />,
      title: 'AC Maintenance',
      description: 'Regular servicing to ensure optimal performance and efficiency.',
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: 'Duct Cleaning & Repair',
      description: 'Thorough cleaning and maintenance of ventilation systems.',
    },
    {
      icon: <Snowflake className="w-6 h-6" />,
      title: 'Gas Refilling',
      description: 'Professional refrigerant service and leak detection.',
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Emergency Services',
      description: '24/7 emergency AC repair and maintenance support.',
    }
  ];

  const faqs = [
    {
      question: "What brands of AC do you service?",
      answer: "We service all major AC brands including Carrier, Daikin, Trane, LG, Samsung, Mitsubishi, and more. Our technicians are trained and certified to work with various AC systems and models."
    },
    {
      question: "How often should I service my AC?",
      answer: "We recommend servicing your AC unit at least twice a year - before summer and winter seasons. Regular maintenance helps prevent breakdowns, extends unit life, and maintains energy efficiency."
    },
    {
      question: "Do you provide emergency AC services?",
      answer: "Yes, we offer 24/7 emergency AC repair services. Our team typically responds within 1-2 hours for urgent cooling issues to minimize your discomfort."
    },
    {
      question: "What's included in routine maintenance?",
      answer: "Our maintenance service includes filter cleaning/replacement, coil cleaning, refrigerant level check, electrical connection inspection, thermostat calibration, and overall system performance evaluation."
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
                  <span className="text-gray-600 text-sm">Professional AC Services</span>
                </div>

                <h1 className="text-7xl font-bold">
                  <span className="text-gray-900">Stay Cool &</span>
                  <br />
                  <span className="text-[#E94560]">Comfortable</span>
                </h1>

                <p className="text-gray-600 max-w-xl">
                  Expert AC repair, installation, and maintenance services. Keep your space comfortable with our professional cooling solutions.
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#E94560]" />
                    </div>
                    Certified Technicians
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
                    90-Day Warranty
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#E94560]" />
                    </div>
                    All Brands Serviced
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 pt-6">
                  <button className="group px-8 py-4 bg-[#E94560] text-white rounded-xl font-medium hover:bg-[#d63d56] transition-colors">
                    <span className="flex items-center gap-2">
                      Book Service
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
                    src="/images/ac-service.jpg"
                    alt="Professional AC service"
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
                        <div className="text-gray-600 text-sm">ACs Serviced</div>
                      </div>
                      <div className="text-center border-x border-gray-200">
                        <div className="text-2xl font-bold text-[#E94560] mb-1">25+</div>
                        <div className="text-gray-600 text-sm">Expert Technicians</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#E94560] mb-1">4.9/5</div>
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AC Services</h2>
            <p className="text-gray-600 text-lg">
              Comprehensive air conditioning solutions for your comfort needs.
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
            <h2 className="text-3xl font-bold mb-12">Why Choose Our AC Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#E94560]/10 rounded-full flex items-center justify-center text-[#E94560] mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Certified Experts</h3>
                <p className="text-gray-600">Factory-trained AC technicians</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#E94560]/10 rounded-full flex items-center justify-center text-[#E94560] mb-4">
                  <Thermometer className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">All Brands</h3>
                <p className="text-gray-600">Service all major AC brands</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#E94560]/10 rounded-full flex items-center justify-center text-[#E94560] mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">100% service guarantee</p>
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

export default ACServicesPage;