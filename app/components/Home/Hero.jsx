"use client"
import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Award, 
  ThumbsUp,
  ArrowRight,
  Calculator,
  Check,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/renovation.jpg',
      title: 'Transform Your Space',
      description: 'Expert construction and renovation services that bring your vision to life. Quality craftsmanship for every project, big or small.'
    },
    {
      image: '/images/construction-site.jpg',
      title: 'Build Your Dream',
      description: 'From foundation to finishing touches, we create spaces that inspire. Professional construction services tailored to your needs.'
    },
    {
      image: '/images/interior.jpg',
      title: 'Renovate With Style',
      description: 'Modern renovation solutions that combine aesthetics with functionality. Transform your space into something extraordinary.'
    },
    {
      image: '/images/architecture.jpg',
      title: 'Design Excellence',
      description: 'Architectural expertise meets exceptional craftsmanship. We turn innovative designs into beautiful realities.'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const keyFeatures = [
    "Professional Team",
    "Quality Materials",
    "Timely Delivery",
    "24/7 Support"
  ];

  const stats = [
    {
      icon: <Building2 className="w-6 h-6" />,
      value: '50+',
      label: 'Projects Completed',
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: '15+',
      label: 'Years Experience',
    },
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      value: '98%',
      label: 'Client Satisfaction',
    }
  ];



return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(#E94560_1.4px,transparent_1.4px),linear-gradient(to_right,#E94560_1.4px,transparent_1.4px)] bg-[size:28px_28px] opacity-[0.01]" />

      <div className="relative z-10">
        {/* Stats Bar */}
        <div className="border-b border-gray-200 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-8 py-3 md:py-4 px-4 overflow-x-auto">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 flex-shrink-0">
                  <div className="text-[#E94560]">{stat.icon}</div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm md:text-base">{stat.value}</div>
                    <div className="text-gray-600 text-xs md:text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 min-h-[calc(100vh-80px)] flex items-center py-8 md:py-12">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
            {/* Left Column */}
            <div className={`space-y-6 md:space-y-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              <div className="inline-flex items-center gap-2 bg-[#E94560]/5 rounded-full px-4 py-2">
                <span className="text-[#E94560] animate-pulse">●</span>
                <span className="text-gray-600 text-xs md:text-sm">We're ready to serve you</span>
              </div>

              <div className="min-h-[120px] md:min-h-[180px]">
                <div className="transition-all duration-500 transform">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                    <span className="text-gray-900">{slides[currentSlide].title.split(' ')[0]}</span>
                    <br />
                    <span className="text-[#E94560]">{slides[currentSlide].title.split(' ').slice(1).join(' ')}</span>
                  </h1>

                  <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-xl mt-4 md:mt-6">
                    {slides[currentSlide].description}
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                      <Check className="w-2 h-2 md:w-3 md:h-3 text-[#E94560]" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6">
                <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-[#E94560] text-white rounded-xl font-medium overflow-hidden w-full sm:w-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E94560] to-pink-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                  <span className="relative flex items-center justify-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <button className="px-6 md:px-8 py-3 md:py-4 border border-[#E94560] text-[#E94560] rounded-xl font-medium hover:bg-[#E94560]/5 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Calculator className="w-5 h-5" />
                  Cost Calculator
                </button>
              </div>
            </div>

            {/* Right Column - Image Slider */}
            <div className="relative aspect-[4/3] md:aspect-square w-full mt-4 md:mt-8">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    currentSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="relative h-full rounded-2xl overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 to-transparent" />
                  </div>
                </div>
              ))}

              {/* Slider Controls */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <button 
                  onClick={prevSlide}
                  className="p-1.5 md:p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </button>
                <div className="flex gap-1">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
                        currentSlide === index 
                          ? 'w-4 md:w-6 bg-white' 
                          : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextSlide}
                  className="p-1.5 md:p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


};

export default HeroSection;