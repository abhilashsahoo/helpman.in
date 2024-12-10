"use client"
import React, { useState } from 'react';
import { 
  PhoneCall,
  ClipboardCheck,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Star,
  Calendar,
  Clock,
  MessageCircle,
  Banknote,
  Shield,
  ThumbsUp,
  Check
} from 'lucide-react';
import Image from 'next/image';

const ProcessPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      icon: <PhoneCall className="w-6 h-6" />,
      title: "Contact & Consultation",
      description: "Get in touch with us through phone, email, or our online booking system. Our team will gather initial details about your service needs.",
      details: [
        "24/7 customer support available",
        "Quick response to inquiries",
        "Free initial consultation",
        "Multiple contact channels"
      ]
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Diagnosis & Assessment",
      description: "Our expert technicians will assess your requirements and provide a detailed diagnosis of the issue.",
      details: [
        "Thorough system inspection",
        "Accurate problem identification",
        "Transparent assessment report",
        "Clear explanation of issues"
      ]
    },
    {
      icon: <Banknote className="w-6 h-6" />,
      title: "Quote & Approval",
      description: "Receive a comprehensive quote with transparent pricing. No hidden costs or surprise charges.",
      details: [
        "Detailed cost breakdown",
        "Upfront pricing",
        "Multiple solution options",
        "Flexible payment terms"
      ]
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Scheduling",
      description: "Choose a convenient time slot for the service. We respect your time and ensure punctual arrival.",
      details: [
        "Flexible scheduling options",
        "Same-day service available",
        "Punctual service delivery",
        "Regular updates"
      ]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Service Execution",
      description: "Our skilled technicians complete the work with attention to detail and professional expertise.",
      details: [
        "Expert technicians",
        "Quality materials used",
        "Clean and efficient work",
        "Safety protocols followed"
      ]
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Quality Check & Handover",
      description: "Final inspection and testing to ensure everything meets our high standards.",
      details: [
        "Thorough testing",
        "Detailed service report",
        "Usage instructions provided",
        "Warranty documentation"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time-Efficient",
      description: "Quick response and efficient service delivery"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assured",
      description: "Guaranteed satisfaction with our service"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Clear Communication",
      description: "Regular updates throughout the process"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Expert Service",
      description: "Skilled and certified technicians"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-50 pt-32 pb-20 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(#E94560_1.4px,transparent_1.4px),linear-gradient(to_right,#E94560_1.4px,transparent_1.4px)] bg-[size:28px_28px] opacity-[0.03]" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-[#E94560]/5 rounded-full px-4 py-2 mb-6">
                <span className="text-[#E94560] animate-pulse">●</span>
                <span className="text-gray-600 text-sm">Our Service Process</span>
              </div>
              <h1 className="text-6xl font-bold mb-6 ">
                Simple Steps to <span className='text-[#E94560]'>Superior Service</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience our streamlined approach to service delivery. Each step is designed to ensure quality, efficiency, and your complete satisfaction.
              </p>
            </div>

            {/* Process Overview Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-[#E94560]/10 rounded-lg flex items-center justify-center text-[#E94560] mb-4">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
                <h3 className="font-semibold mb-2">Transparent Process</h3>
                <p className="text-gray-600 text-sm">Clear communication at every step</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-[#E94560]/10 rounded-lg flex items-center justify-center text-[#E94560] mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-semibold mb-2">Time-Efficient</h3>
                <p className="text-gray-600 text-sm">Quick response and execution</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-[#E94560]/10 rounded-lg flex items-center justify-center text-[#E94560] mb-4">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-semibold mb-2">Quality Assured</h3>
                <p className="text-gray-600 text-sm">Guaranteed satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Steps List */}
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-[#E94560] text-white shadow-lg' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeStep === index ? 'bg-white/10' : 'bg-[#E94560]/10'
                    }`}>
                      <div className={activeStep === index ? 'text-white' : 'text-[#E94560]'}>
                        {step.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className={`${activeStep === index ? 'text-white/90' : 'text-gray-600'}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Step Details */}
            <div className="bg-gray-50 p-8 rounded-2xl md:sticky md:top-8 h-fit">
              <h3 className="text-2xl font-bold mb-6">{processSteps[activeStep].title}</h3>
              <div className="space-y-4">
                {processSteps[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#E94560]" />
                    </div>
                    <span className="text-gray-600">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Benefits of Our Process</h2>
            <p className="text-gray-600">
              Our structured approach ensures consistent quality and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#E94560]/10 rounded-xl flex items-center justify-center text-[#E94560] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessPage;