"use client"
import React, { useState } from 'react';
import { 
  Divide,
  Shield,
  Maximize,
  DoorOpen ,
  Palette,
  PenTool,
  ArrowRight,
  Check,
  Calculator,
  Timer,
  Sparkles,
  Sun,
  PlusCircle,
  MinusCircle,
  Phone,
  Mail
} from 'lucide-react';
import Image from 'next/image';

const GlassWorkPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
    {
      icon: <Divide className="w-6 h-6" />,
      title: 'Glass Partitions',
      description: 'Modern and stylish partitions for offices, homes, and commercial spaces.',
      image: '/images/glass-partitions.jpg'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Glass Railings',
      description: 'Elegant and sturdy railings for staircases, balconies, and terraces.',
      image: '/images/glass-railings.jpg'
    },
    {
      icon: <Maximize className="w-6 h-6" />,
      title: 'Shower Enclosures',
      description: 'Custom glass enclosures for a sleek and contemporary bathroom design.',
      image: '/images/shower-enclosures.jpg'
    },
    {
      icon: <DoorOpen  className="w-6 h-6" />,
      title: 'Glass Windows & Doors',
      description: 'Energy-efficient and aesthetically pleasing solutions for interiors and exteriors.',
      image: '/images/glass-windows.jpg'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Decorative Glass Work',
      description: 'Etched, frosted, and colored glass designs for artistic touches.',
      image: '/images/decorative-glass.jpg'
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: 'Custom Glass Installations',
      description: 'Tailored glass work for unique architectural or interior design needs.',
      image: '/images/custom-glass.jpg'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-50 overflow-hidden">
        {/* Glass-inspired background pattern */}
        <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(#E94560_1.4px,transparent_1.4px),linear-gradient(to_right,#E94560_1.4px,transparent_1.4px)] bg-[size:28px_28px] opacity-[0.03]" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,white_25%,white_50%,transparent_50%,transparent_75%,white_75%,white_100%)] bg-[length:20px_20px] opacity-5" />
        </div>

        <div className="relative container mx-auto px-4 h-screen">
          <div className="h-full flex flex-col justify-center">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-[#E94560]/5 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-[#E94560] animate-pulse">●</span>
                  <span className="text-gray-600 text-sm">Professional Glass Solutions</span>
                </div>

                <h1 className="text-7xl font-bold">
                  <span className="text-gray-900">Elegance in</span>
                  <br />
                  <span className="text-[#E94560]">Transparency</span>
                </h1>

                <p className="text-xl text-gray-600 max-w-xl">
                  Transform your spaces with our premium glass solutions. 
                  Where clarity meets creativity in every installation.
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#E94560]" />
                    </div>
                    Premium Glass
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#E94560]" />
                    </div>
                    Safety Assured
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#E94560]" />
                    </div>
                    Expert Installation
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#E94560]" />
                    </div>
                    Custom Designs
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
                <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/glass-hero.jpg"
                    alt="Elegant glass installation"
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
                        <div className="text-2xl font-bold text-[#E94560] mb-1">200+</div>
                        <div className="text-gray-600 text-sm">Installations</div>
                      </div>
                      <div className="text-center border-x border-gray-200">
                        <div className="text-2xl font-bold text-[#E94560] mb-1">95%</div>
                        <div className="text-gray-600 text-sm">Satisfaction</div>
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

    {/* Services Showcase Section */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl font-bold mb-4">Our Glass Solutions</h2>
      <p className="text-xl text-gray-600">
        Discover our range of premium glass services designed to enhance your space
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {services.map((service, index) => (
        <div 
          key={index}
          className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          {/* Service Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 text-white">
                {service.icon}
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
            </div>
          </div>

          {/* Service Content */}
          <div className="p-6">
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="flex justify-between items-center">
              <a href="#" className="text-[#E94560] hover:gap-2 transition-all duration-300 flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Benefits Section */}
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="relative h-[500px] rounded-2xl overflow-hidden">
        <Image
          src="/images/glass-benefits.jpg"
          alt="Glass work benefits"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center p-8">
          <div className="text-white space-y-4">
            <h3 className="text-3xl font-bold">Why Choose Our Glass Solutions?</h3>
            <p className="text-white/80">Experience the perfect blend of aesthetics and functionality</p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {[
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Safety First",
            description: "Tempered and laminated glass options for maximum security"
          },
          {
            icon: <Sun className="w-6 h-6" />,
            title: "Energy Efficient",
            description: "UV-protected and insulated glass for better temperature control"
          },
          {
            icon: <Sparkles className="w-6 h-6" />,
            title: "Premium Quality",
            description: "High-grade materials and precision craftsmanship"
          },
          {
            icon: <PenTool className="w-6 h-6" />,
            title: "Custom Designs",
            description: "Tailored solutions to match your specific requirements"
          }
        ].map((benefit, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#E94560]/10 flex items-center justify-center text-[#E94560]">
              {benefit.icon}
            </div>
            <div>
              <h4 className="font-semibold mb-2">{benefit.title}</h4>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


{/* FAQ Section */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
        <p className="text-gray-600">Everything you need to know about our glass services</p>
      </div>

      <div className="space-y-4">
        {[
          {
            question: "What types of glass do you use?",
            answer: "We use a variety of high-quality glass types including tempered, laminated, insulated, and decorative glass. Each type is chosen based on specific project requirements, safety standards, and aesthetic preferences."
          },
          {
            question: "How do you ensure safety during installation?",
            answer: "Our installation team follows strict safety protocols, uses professional-grade equipment, and has extensive training in handling glass. We also ensure all installations meet or exceed local building codes and safety standards."
          },
          {
            question: "Can you provide custom glass solutions?",
            answer: "Yes, we specialize in custom glass solutions. We can create unique designs, patterns, and installations tailored to your specific needs, space requirements, and aesthetic preferences."
          },
          {
            question: "What is the warranty coverage?",
            answer: "We provide comprehensive warranties on both materials and installation. Standard warranty covers manufacturing defects, installation quality, and hardware functionality. Extended warranty options are also available."
          }
        ].map((faq, index) => (
          <div key={index} className="bg-gray-50 rounded-xl">
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="flex items-center justify-between w-full p-6 text-left"
            >
              <span className="font-semibold">{faq.question}</span>
              <div className={`transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                <PlusCircle className="w-5 h-5 text-[#E94560]" />
              </div>
            </button>
            <div className={`transition-all duration-300 ${openFaq === index ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
              <div className="p-6 pt-0 text-gray-600">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-8">Still have questions? We're here to help!</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-4 bg-[#E94560] text-white rounded-xl font-medium hover:bg-[#d63d56] transition-colors flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Contact Us
          </button>
          <button className="px-8 py-4 border border-[#E94560] text-[#E94560] rounded-xl font-medium hover:bg-[#E94560]/5 transition-colors flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Email Support
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default GlassWorkPage;