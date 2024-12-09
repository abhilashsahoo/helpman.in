"use client"
import React from 'react';
import { 
  ArrowRight, 
  Calculator, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  Star,
  ChevronRight,
  MessageSquare
} from 'lucide-react';

const GetStartedSection = () => {
  const trustPoints = [
    { icon: <Clock className="w-5 h-5" />, text: 'Quick Response Time' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Hassle-Free Process' },
    { icon: <Star className="w-5 h-5" />, text: 'Trusted by 100+ Clients' }
  ];

  return (
    <section className="relative py-24 bg-[#E94560]">
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-xl text-white/80">
              Let's create your dream space with our expert construction and renovation solutions.
            </p>
          </div>

          {/* Main CTAs */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Primary CTA */}
            <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 text-[#E94560] mb-4">
                  <MessageSquare className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Get a Free Quote</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Share your project details and get a customized quote from our experts.
                </p>
                <button className="mt-auto group px-6 py-3 bg-[#E94560] text-white rounded-lg font-semibold hover:bg-[#d63d56] transition-colors">
                  <span className="flex items-center justify-center gap-2">
                    Get Started Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Secondary CTA */}
            <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 text-[#E94560] mb-4">
                  <Calculator className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Cost Calculator</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Get an instant estimate for your project using our cost calculator.
                </p>
                <button className="mt-auto group px-6 py-3 border-2 border-[#E94560] text-[#E94560] rounded-lg font-semibold hover:bg-[#E94560] hover:text-white transition-colors">
                  <span className="flex items-center justify-center gap-2">
                    Try Calculator
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-white/80">Helpline</div>
                  <a href="tel:+911234567890" className="text-lg font-semibold text-white hover:text-white/80 transition-colors">
                    +91 12345 67890
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-white/80">Email</div>
                  <a href="mailto:support@helpman.com" className="text-lg font-semibold text-white hover:text-white/80 transition-colors">
                    support@helpman.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Points */}
          <div className="grid grid-cols-3 gap-4">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-white mb-2">
                  {point.icon}
                </div>
                <span className="text-sm text-white/80">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;