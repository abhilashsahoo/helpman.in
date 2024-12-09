"use client"
import React from 'react';
import { 
  MessagesSquare, 
  PenLine, 
  Calculator, 
  Hammer, 
  CheckCircle,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <MessagesSquare className="w-6 h-6" />,
      title: 'Consultation',
      description: 'Share your requirements with us, and our experts will provide tailored solutions.'
    },
    {
      number: '02',
      icon: <PenLine className="w-6 h-6" />,
      title: 'Design & Planning',
      description: 'Receive detailed concept plans, 3D elevations, and a project schedule for approval.'
    },
    {
      number: '03',
      icon: <Calculator className="w-6 h-6" />,
      title: 'Cost Estimation',
      description: 'Transparent pricing with a detailed breakdown of costs.'
    },
    {
      number: '04',
      icon: <Hammer className="w-6 h-6" />,
      title: 'Execution',
      description: 'Our skilled professionals bring your project to life with quality assurance at every step.'
    },
    {
      number: '05',
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Handover',
      description: 'Enjoy your newly constructed or renovated space, with post-project support.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="md:text-5xl text-3xl font-bold mb-6 tracking-tighter">How It Works</h2>
          <p className="text-gray-600">Simple Steps to Your Dream Space</p>
        </div>

        {/* Steps Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 left-[60%] w-full h-[2px] bg-gray-100">
                    <div className="absolute inset-0 bg-[#E94560] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                )}
                
                {/* Step Card */}
                <div className="bg-white p-6 rounded-xl group-hover:shadow-lg transition-shadow duration-300">
                  {/* Step Number */}
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-gray-200 mr-3">{step.number}</span>
                    <div className="w-12 h-12 rounded-lg bg-[#E94560]/10 flex items-center justify-center text-[#E94560]">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>

                  {/* Progress Indicator */}
                  <div className="mt-4 flex items-center text-[#E94560] opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="group px-8 py-4 bg-[#E94560] text-white rounded-lg font-semibold hover:bg-[#d63d56] transition-colors">
              <span className="flex items-center gap-2">
                Start Your Project Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 border-2 border-[#E94560] text-[#E94560] rounded-lg font-semibold hover:bg-[#E94560] hover:text-white transition-colors">
              Learn More About Our Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;