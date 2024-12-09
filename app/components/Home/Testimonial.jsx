"use client"
import React, { useState, useEffect } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight,
  Quote,
  ArrowRight,
  UserCircle2
} from 'lucide-react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "John D.",
      location: "Mumbai, India",
      text: "Helpman exceeded my expectations with timely delivery and exceptional quality. The attention to detail in our home renovation was impressive. Highly recommended!",
      rating: 5,
      project: "Complete Home Renovation"
    },
    {
      name: "Priya S.",
      location: "Bangalore, India",
      text: "The team was professional and efficient. Our renovation project was completed on time and on budget! The design suggestions were innovative and practical.",
      rating: 5,
      project: "Kitchen Remodeling"
    },
    {
      name: "Ravi G.",
      location: "Hyderabad, India",
      text: "I loved the transparent pricing and attention to detail. They made the entire process stress-free. The final result transformed our space completely!",
      rating: 5,
      project: "Interior Renovation"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="md:text-5xl text-3xl font-bold mb-6 tracking-tighter">What Our Clients Say</h2>
          <p className="text-gray-600">
            Real stories from happy clients who trusted us with their construction and renovation projects.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12 min-h-[400px]">
            <div className="absolute top-6 right-8 text-[#E94560]/10">
              <Quote className="w-24 h-24" />
            </div>
            
            <div className="relative flex flex-col justify-between h-full">
              {/* Testimonial Content */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E94560] text-[#E94560]" />
                  ))}
                </div>
                
                <p className="text-xl text-gray-700 mb-8 italic">
                  "{testimonials[currentSlide].text}"
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                    <UserCircle2 className="w-8 h-8 text-[#E94560]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonials[currentSlide].name}</h4>
                    <p className="text-gray-600 text-sm">{testimonials[currentSlide].location}</p>
                    <p className="text-[#E94560] text-sm">{testimonials[currentSlide].project}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full border border-gray-300 hover:border-[#E94560] hover:text-[#E94560] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'w-8 bg-[#E94560]' 
                      : 'bg-gray-300 hover:bg-[#E94560]/50'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="p-2 rounded-full border border-gray-300 hover:border-[#E94560] hover:text-[#E94560] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#E94560] mb-2">100+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#E94560] mb-2">4.9/5</div>
            <div className="text-gray-600">Customer Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#E94560] mb-2">95%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="group px-8 py-4 bg-[#E94560] text-white rounded-lg font-semibold hover:bg-[#d63d56] transition-colors">
            <span className="flex items-center gap-2">
              Start Your Project Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;