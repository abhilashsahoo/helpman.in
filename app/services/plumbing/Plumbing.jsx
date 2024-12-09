"use client"
import React, { useState } from 'react';
import { 
  Pipette,
  Wrench,
  Flame,
  ShowerHead ,
  PieChart,
  AlarmClock,
  Shield,
  CheckCircle,
  Clock,
  ArrowRight,
  Phone,
  PlusCircle,
  MinusCircle,
  Droplets,
  Check,
  Calculator 
} from 'lucide-react';
import Image from 'next/image';

const PlumbingServices = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: 'Leak Detection & Repair',
      description: 'Quick and accurate solutions to stop leaks and prevent damage.'
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Pipe Installation & Replacement',
      description: 'Durable and efficient piping systems for new and existing spaces.'
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: 'Water Heater Services',
      description: 'Expert installation and repair of water heaters for reliable performance.'
    },
    {
      icon: <ShowerHead  className="w-6 h-6" />,
      title: 'Bathroom & Kitchen Plumbing',
      description: 'Installation and repair of faucets, sinks, ShowerHead s, and toilets.'
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: 'Drain Cleaning',
      description: 'Efficient unclogging and maintenance of drains to avoid blockages.'
    },
    {
      icon: <AlarmClock className="w-6 h-6" />,
      title: 'Emergency Plumbing',
      description: '24/7 assistance for urgent plumbing needs.'
    }
  ];

  const features = [
    { icon: <Shield className="w-6 h-6" />, text: 'Licensed & Insured Plumbers' },
    { icon: <CheckCircle className="w-6 h-6" />, text: 'Quality Materials' },
    { icon: <Clock className="w-6 h-6" />, text: 'Quick Response Time' }
  ];

  const faqs = [
    {
      question: "Do you offer same-day service?",
      answer: "Yes, we offer same-day service for most plumbing issues. For emergencies, we provide 24/7 assistance to address urgent plumbing needs."
    },
    {
      question: "What types of water heaters do you work with?",
      answer: "We work with all types of water heaters including traditional tank, tankless, hybrid, and solar water heaters. Our experts can help you choose the best option for your needs."
    },
    {
      question: "How do I know if I have a plumbing leak?",
      answer: "Common signs include increased water bills, water stains, mold growth, and unusual sounds in your plumbing system. We offer professional leak detection services to identify hidden leaks."
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
            <span className="text-gray-600 text-sm">Professional Plumbing Services</span>
          </div>

          <h1 className="text-7xl font-bold">
            <span className="text-gray-900">Reliable</span>
            <br />
            <span className="text-[#E94560]">Plumbing Solutions</span>
          </h1>

          <p className="text-gray-600 max-w-xl">
            Expert plumbing services to keep your home and business running smoothly. From emergency repairs to new installations, we've got you covered.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#E94560]" />
              </div>
              Licensed Plumbers
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
              5-Year Warranty
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#E94560]" />
              </div>
              Same Day Service
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
              src="/images/plumbing.jpg"
              alt="Professional plumbing service"
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
                  <div className="text-2xl font-bold text-[#E94560] mb-1">15+</div>
                  <div className="text-gray-600 text-sm">Expert Plumbers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#E94560] mb-1">100%</div>
                  <div className="text-gray-600 text-sm">Satisfaction</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Plumbing Services</h2>
            <p className="text-gray-600 text-lg">
              Comprehensive plumbing solutions for all your residential and commercial needs.
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

      {/* Emergency Section */}
      <section className="py-16 bg-[#E94560]">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">24/7 Emergency Plumbing Services</h2>
          <p className="text-xl mb-8 opacity-90">
            Plumbing emergency? We're available round the clock.
          </p>
          <button className="px-8 py-4 bg-white text-[#E94560] rounded-xl font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Call Emergency Service
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
export default PlumbingServices;