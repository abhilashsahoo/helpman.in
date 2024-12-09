"use client"
import React, { useState } from 'react';
import { 
  Hammer,
  Wrench,
  Scissors,
  TableProperties,
  Factory,
  PenTool,
  ArrowRight,
  Check,
  Calculator,
  Shield,
  Timer,
  Trophy,
  PlusCircle,
  MinusCircle,
  MessageCircle,
  Layers,
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react';
import Image from 'next/image';

const FabricationPage = () => {
  const [activeCategory, setActiveCategory] = useState('metal');
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    "Expert Craftsmanship",
    "Custom Designs",
    "Premium Materials",
    "Warranty Backed"
  ];

  const services = [
    {
      icon: <Hammer className="w-6 h-6" />,
      title: 'Metal Fabrication',
      description: 'Precision-crafted steel, aluminum, and iron works for durability and style.',
      category: 'metal'
    },
    {
      icon: <TableProperties className="w-6 h-6" />,
      title: 'Wood Fabrication',
      description: 'Custom furniture, doors, and partitions crafted to perfection.',
      category: 'wood'
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: 'Aluminum Fabrication',
      description: 'Lightweight and weather-resistant solutions for modern designs.',
      category: 'aluminum'
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Glass Fabrication',
      description: 'Innovative glass railings, windows, and partitions for sleek aesthetics.',
      category: 'glass'
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: 'Industrial Fabrication',
      description: 'Heavy-duty solutions for warehouses, factories, and infrastructure.',
      category: 'industrial'
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: 'Custom Designs',
      description: 'Tailored designs for gates, railings, furniture, and more.',
      category: 'custom'
    }
  ];

  const faqs = [
    {
      question: "What materials do you work with?",
      answer: "We work with a wide range of materials including steel, aluminum, stainless steel, wood, glass, and various alloys. Our experts can recommend the best materials based on your project requirements."
    },
    {
      question: "What is the lead time for custom designs?",
      answer: "Lead times vary based on project complexity and current workload. Typically, small to medium projects take 2-3 weeks, while larger custom projects may take 4-6 weeks. We'll provide a detailed timeline during consultation."
    },
    {
      question: "Do you provide installation services?",
      answer: "Yes, we offer complete installation services for all our fabrication work. Our experienced team ensures proper installation and finishing touches for every project."
    },
    {
      question: "What type of warranty do you offer?",
      answer: "We provide comprehensive warranties on both workmanship and materials. Standard warranty is 2 years for residential projects and 5 years for commercial projects, with options for extended coverage."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(#E94560_1.4px,transparent_1.4px),linear-gradient(to_right,#E94560_1.4px,transparent_1.4px)] bg-[size:28px_28px] opacity-[0.03]" />

        {/* Content */}
        <div className="relative container mx-auto px-4 h-screen">
          <div className="h-full flex flex-col justify-center">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-[#E94560]/5 rounded-full px-4 py-2">
                  <span className="text-[#E94560] animate-pulse">●</span>
                  <span className="text-gray-600 text-sm">Custom Fabrication Solutions</span>
                </div>

                <h1 className="text-7xl font-bold">
                  <span className="text-gray-900">Precision in</span>
                  <br />
                  <span className="text-[#E94560]">Every Detail</span>
                </h1>

                <p className="text-xl text-gray-600 max-w-xl">
                  Expert fabrication services that combine craftsmanship with innovation. 
                  Custom solutions tailored to your unique requirements.
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
                      Get Custom Quote
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <button className="px-8 py-4 border border-[#E94560] text-[#E94560] rounded-xl font-medium hover:bg-[#E94560]/5 transition-colors flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Cost Calculator
                  </button>
                </div>
              </div>

              {/* Right Column */}
              <div className="relative">
                <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/fabrication.jpg"
                    alt="Custom fabrication workshop"
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
                        <div className="text-2xl font-bold text-[#E94560] mb-1">500+</div>
                        <div className="text-gray-600 text-sm">Projects Done</div>
                      </div>
                      <div className="text-center border-x border-gray-200">
                        <div className="text-2xl font-bold text-[#E94560] mb-1">15+</div>
                        <div className="text-gray-600 text-sm">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#E94560] mb-1">100%</div>
                        <div className="text-gray-600 text-sm">Quality Assured</div>
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
      <h2 className="text-4xl font-bold mb-4">Our Fabrication Services</h2>
      <p className="text-xl text-gray-600">
        Precision engineering meets artistic design in our comprehensive fabrication solutions.
      </p>
    </div>

    {/* Category Filter */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {['all', 'metal', 'wood', 'aluminum', 'glass', 'industrial', 'custom'].map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all
            ${activeCategory === category 
              ? 'bg-[#E94560] text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {services.map((service, index) => (
        <div 
          key={index}
          className={`group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg
            ${activeCategory === 'all' || activeCategory === service.category 
              ? 'opacity-100 scale-100' 
              : 'opacity-50 scale-95'}`}
        >
          {/* Service Icon */}
          <div className="w-12 h-12 bg-[#E94560]/10 rounded-xl flex items-center justify-center text-[#E94560] mb-6 group-hover:scale-110 transition-transform">
            {service.icon}
          </div>

          {/* Content */}
          <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
          <p className="text-gray-600 mb-6">{service.description}</p>

          {/* Interactive Elements */}
          <div className="flex justify-between items-center">
            <a href="#" className="inline-flex items-center text-[#E94560] hover:gap-2 transition-all duration-300">
              Learn More <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <span className="text-sm text-gray-400 group-hover:text-[#E94560] transition-colors">
              {service.category}
            </span>
          </div>
        </div>
      ))}
    </div>

   

    {/* Interactive Process Timeline */}
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-8 text-center">Our Fabrication Process</h3>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200" />
        
        {/* Process Steps */}
        {[
          { title: 'Consultation', icon: <MessageCircle className="w-6 h-6" /> },
          { title: 'Design & Planning', icon: <PenTool className="w-6 h-6" /> },
          { title: 'Material Selection', icon: <Layers className="w-6 h-6" /> },
          { title: 'Fabrication', icon: <Wrench className="w-6 h-6" /> },
          { title: 'Quality Check', icon: <CheckCircle className="w-6 h-6" /> },
          { title: 'Installation', icon: <Hammer className="w-6 h-6" /> }
        ].map((step, index) => (
          <div key={index} className={`relative flex items-center mb-8 ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`}>
            {/* Step Content */}
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 justify-start mb-2">
                  {step.icon}
                  <h4 className="font-semibold">{step.title}</h4>
                </div>
              </div>
            </div>
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#E94560]" />
          </div>
        ))}
      </div>
    </div>
    {/* FAQ Section */}
<section className="py-24 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600">Find answers to common questions about our fabrication services</p>
      </div>

      {/* FAQ Grid */}
      <div className="grid gap-4">
        {[
          {
            question: "What materials do you work with?",
            answer: "We work with a wide range of materials including mild steel, stainless steel, aluminum, copper, brass, wood, glass, and various alloys. Our experts can recommend the best materials based on your specific project requirements, budget, and environmental conditions."
          },
          {
            question: "What is the typical turnaround time for custom fabrication?",
            answer: "Turnaround time varies depending on project complexity and current workload. Simple projects might take 1-2 weeks, while more complex custom fabrications can take 3-6 weeks. We provide detailed timelines during the consultation phase and keep you updated throughout the process."
          },
          {
            question: "Do you provide installation services?",
            answer: "Yes, we offer complete installation services for all our fabricated products. Our experienced team ensures proper installation, finishing, and quality checks. We also provide post-installation support and maintenance guidance."
          },
          {
            question: "What types of projects do you handle?",
            answer: "We handle a wide range of projects including but not limited to: custom gates, railings, staircases, metal furniture, structural components, architectural elements, industrial equipment, and decorative pieces. We work on both residential and commercial projects."
          },
          {
            question: "Do you offer warranties on your work?",
            answer: "Yes, we provide comprehensive warranties on both workmanship and materials. Standard warranties range from 1-5 years depending on the project type and materials used. Extended warranty options are also available for specific requirements."
          },
          {
            question: "Can you work with my existing designs?",
            answer: "Absolutely! We can work with your existing designs, architectural drawings, or rough sketches. Our team can also help refine and optimize designs for better functionality and cost-effectiveness while maintaining your original vision."
          },
          {
            question: "What is your quality control process?",
            answer: "Our quality control process includes material inspection, regular checks during fabrication, dimensional verification, structural integrity testing, finish quality assessment, and final inspection before delivery. We follow industry standards and maintain strict quality protocols."
          },
          {
            question: "Do you offer custom finishes?",
            answer: "Yes, we offer various finishing options including powder coating, paint, galvanizing, anodizing, polishing, and custom textures. We can match specific colors and provide finishes suitable for different environmental conditions."
          }
        ].map((faq, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
            >
              <span className="font-semibold text-gray-900">{faq.question}</span>
              <div 
                className={`ml-4 flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#E94560]/10 text-[#E94560] transition-transform duration-300 ${
                  openFaq === index ? 'rotate-45' : ''
                }`}
              >
                <PlusCircle className="w-5 h-5" />
              </div>
            </button>
            
            {/* Answer */}
            <div 
              className={`transition-all duration-300 ease-in-out ${
                openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="p-6 pt-0 text-gray-600">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-6">
          Still have questions? We're here to help!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-[#E94560] text-white rounded-lg hover:bg-[#d63d56] transition-colors flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            Contact Us
          </button>
          <button className="px-6 py-3 border border-[#E94560] text-[#E94560] rounded-lg hover:bg-[#E94560]/5 transition-colors flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            Email Support
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
</section>
    </>
  );
};

export default FabricationPage;