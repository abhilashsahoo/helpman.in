"use client"
import React from 'react';
import { 
  Building,
  Target,
  Eye,
  CheckCircle2,
  Clock,
  MessageSquare,
  Shield,
  Heart,
  Lightbulb,
  Users,
  ArrowRight,
  Check
} from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  const achievements = [
    { value: '500+', label: 'Projects Completed', icon: <Building className="w-6 h-6" /> },
    { value: '300+', label: 'Satisfied Customers', icon: <Heart className="w-6 h-6" /> },
    { value: '15+', label: 'Years Experience', icon: <Clock className="w-6 h-6" /> },
    { value: '50+', label: 'Expert Team Members', icon: <Users className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Integrity',
      description: 'We uphold honesty and transparency in all our interactions.',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Quality',
      description: 'Excellence is at the heart of everything we do.',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority.',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation',
      description: 'We embrace creativity and the latest technology to deliver the best results.',
    }
  ];

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen bg-gray-50 overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(#E94560_1.4px,transparent_1.4px),linear-gradient(to_right,#E94560_1.4px,transparent_1.4px)] bg-[size:28px_28px] opacity-[0.03]" />
        
        <div className="relative container mx-auto px-4 h-screen">
          <div className="h-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#E94560]/5 rounded-full px-4 py-2">
                <span className="text-[#E94560] animate-pulse">●</span>
                <span className="text-gray-600 text-sm">Welcome to Helpman</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold">
                Building Trust,
                <br />
                <span className="text-[#E94560]">Delivering Excellence</span>
              </h1>
              
              <p className="text-xl text-gray-600">
                Transforming Spaces with Expertise and Dedication
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {achievements.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-[#E94560] mb-2">
                      {stat.icon}
                      <span className="text-2xl font-bold">{stat.value}</span>
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-8">
                <button className="group px-8 py-4 bg-[#E94560] text-white rounded-xl font-medium hover:bg-[#d63d56] transition-all duration-300 hover:shadow-lg">
                  <span className="flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="px-8 py-4 border-2 border-[#E94560] text-[#E94560] rounded-xl font-medium hover:bg-[#E94560]/5 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full max-w-2xl lg:max-w-none relative">
              <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about.jpg"
                  alt="Our work"
                  fill
                  className="object-cover"
                />
                {/* Overlay Card */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#E94560]/10 rounded-xl flex items-center justify-center">
                          <Check className="w-6 h-6 text-[#E94560]" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Quality Guaranteed</h3>
                        <p className="text-sm text-gray-600">220-point quality checklist on every project</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/work.jpg"
                  alt="Our workspace"
                  fill
                  className="object-cover"
                />
                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#E94560]/10 rounded-2xl -z-10"></div>
              </div>
              {/* Additional Decorative Element */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#E94560]/10 rounded-2xl -z-10"></div>
            </div>
            
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-[#E94560]/5 rounded-full px-4 py-2">
                <span className="text-[#E94560]">About Us</span>
              </div>
              
              <h2 className="text-4xl font-bold">Who We Are</h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                At Helpman, we specialize in providing comprehensive solutions for construction, 
                renovation, and home services. With a focus on quality, reliability, and customer 
                satisfaction, our experienced team transforms ideas into reality—creating spaces 
                that inspire and function seamlessly.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-600">
                    Our mission is to deliver unparalleled craftsmanship and customer satisfaction 
                    in every project.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the leading name in construction and home services by consistently 
                    exceeding client expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#E94560]/5 rounded-full px-4 py-2 mb-6">
              <span className="text-[#E94560]">Our Advantages</span>
            </div>
            <h2 className="text-4xl font-bold">Why Choose Helpman?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building className="w-6 h-6" />,
                title: "Expert Team",
                description: "Highly skilled professionals with years of experience in construction and renovation."
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Timely Delivery",
                description: "We respect your time and ensure projects are completed on schedule."
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Clear Communication",
                description: "Stay informed with regular updates throughout your project."
              }
            ].map((item, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-[#E94560]/10 rounded-xl flex items-center justify-center text-[#E94560] mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#E94560]/5 rounded-full px-4 py-2 mb-6">
              <span className="text-[#E94560]">What Drives Us</span>
            </div>
            <h2 className="text-4xl font-bold">Our Core Values</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-[#E94560]/10 rounded-full flex items-center justify-center text-[#E94560] group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-xl mt-6 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-12 shadow-xl relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E94560]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E94560]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative text-center space-y-8">
              <h2 className="text-4xl font-bold">Let's Build Your Dream Space Together!</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ready to start your next project? Contact us today to discuss your requirements 
                and let us bring your vision to life.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="group px-8 py-4 bg-[#E94560] text-white rounded-xl font-medium hover:bg-[#d63d56] transition-all duration-300 hover:shadow-lg">
                  <span className="flex items-center gap-2">
                    Get in Touch
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="px-8 py-4 border-2 border-[#E94560] text-[#E94560] rounded-xl font-medium hover:bg-[#E94560]/5 transition-all duration-300">
                  View Our Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;