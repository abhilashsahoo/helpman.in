"use client"
import React from 'react';
import { 
  Paintbrush, 
  LayoutGrid, 
  Wrench, 
  GlassWater,
  Droplets,
  Grid3X3,
  Maximize,
  ArrowRight,
  Calculator,
  Plug,
  Hammer,
  Pipe,
  Pipette
} from 'lucide-react';
const CircleBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large circle that moves slowly */}
      <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] animate-[float_15s_ease-in-out_infinite]">
        <div className="w-full h-full rounded-full bg-[#E94560]/5 blur-3xl" />
      </div>
  
      {/* Medium circle with different animation */}
      <div className="absolute top-3/4 -right-1/4 w-[400px] h-[400px] animate-[float_20s_ease-in-out_infinite_reverse]">
        <div className="w-full h-full rounded-full bg-[#E94560]/10 blur-3xl" />
      </div>
  
      {/* Small circles scattered around */}
      <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] animate-[float_12s_ease-in-out_infinite]">
        <div className="w-full h-full rounded-full bg-[#E94560]/8 blur-2xl" />
      </div>
  
      <div className="absolute bottom-1/4 left-1/3 w-[150px] h-[150px] animate-[float_18s_ease-in-out_infinite_reverse]">
        <div className="w-full h-full rounded-full bg-[#E94560]/5 blur-2xl" />
      </div>
    </div>
  );
  
const ConstructionSection = () => {
  const services = [
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: 'Painting',
      description: 'Interior and exterior painting for vibrant, lasting finishes.'
    },
    {
      icon: <LayoutGrid className="w-6 h-6" />,
      title: 'False Ceiling',
      description: 'Stylish and functional ceiling solutions.'
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Fabrication',
      description: 'Customized metal and wood fabrication work.'
    },
    {
      icon: <GlassWater className="w-6 h-6" />,
      title: 'Glass Work',
      description: 'Expert glass installations for modern designs.'
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: 'Waterproofing',
      description: 'Effective solutions to protect your spaces from moisture.'
    },
    {
      icon: <Grid3X3 className="w-6 h-6" />,
      title: 'Tiles & Granite',
      description: 'Precision tiling and granite installations for durability.'
    },
    {
      icon: <Pipette className="w-6 h-6" />,
      title: 'Plumbing',
      description: 'Complete plumbing solutions for your construction needs.'
    },
    {
      icon: <Plug className="w-6 h-6" />,
      title: 'Electrical',
      description: 'Professional electrical installations and maintenance.'
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: 'Carpentry',
      description: 'Expert woodwork and custom carpentry solutions.'
    },
    {
      icon: <Maximize className="w-6 h-6" />,
      title: 'Area Extensions',
      description: 'Expand your living spaces seamlessly.'
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gray-50/50">
    {/* Animated Background */}
    <CircleBackground />
    <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(2%, 2%); }
          50% { transform: translate(-2%, 1%); }
          75% { transform: translate(1%, -2%); }
        }
      `}</style>

      <div className="relative container mx-auto px-4">

     
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="md:text-5xl text-3xl font-bold mb-6 tracking-tighter">
            Construction & Renovation Services
          </h2>
          <p className="text-gray-600">
            From design to execution, we transform spaces into functional, beautiful realities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-[#E94560] mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Space?</h3>
          <p className="text-gray-600 mb-8">
            Get started with a free consultation and cost estimate for your project.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="group px-6 py-3 bg-[#E94560] text-white rounded-lg font-medium hover:bg-[#d63d56] transition-colors">
              <span className="flex items-center gap-2">
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-6 py-3 border border-[#E94560] text-[#E94560] rounded-lg font-medium hover:bg-[#E94560] hover:text-white transition-colors flex items-center justify-center gap-2">
              <Calculator className="w-5 h-5" />
              Try Cost Calculator
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionSection;