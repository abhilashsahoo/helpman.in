"use client"
import React, { useState } from 'react';
import { 
  Paintbrush,
  LayoutGrid,
  Wrench,
  GlassWater,
  Droplets,
  Grid3X3,
  Pipette,
  Plug,
  Hammer,
  AirVent,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  DollarSign,
  Calculator,
  Check
} from 'lucide-react';

const CostCalculatorPage = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [calculatorData, setCalculatorData] = useState({
    // Common fields
    area: '',
    rooms: '',
    quality: 'standard',
    
    // Painting specific
    walls: false,
    ceiling: false,
    doors: false,
    windows: false,
    trim: false,
    paintQuality: 'standard',
    
    // False Ceiling specific
    ceilingType: '',
    ceilingDesign: 'basic',
    
    // Fabrication specific
    fabricationType: '',
    metalType: '',
    designComplexity: 'simple',
    
    // Glass Work specific
    glassType: '',
    thickness: '',
    treatment: '',
    
    // Other service-specific fields...
  });

  const [totalCost, setTotalCost] = useState(0);

  const services = [
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: 'Painting',
      value: 'painting',
      description: 'Expert painting services for all needs',
      baseRate: 12, // per sq ft
    },
    {
      icon: <LayoutGrid className="w-6 h-6" />,
      title: 'False Ceiling',
      value: 'false-ceiling',
      description: 'Stylish and durable ceiling solutions',
      baseRate: 85, // per sq ft
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Fabrication',
      value: 'fabrication',
      description: 'Custom metal and glass fabrication',
      baseRate: 150, // per sq ft
    },
    {
      icon: <GlassWater className="w-6 h-6" />,
      title: 'Glass Work',
      value: 'glass-work',
      description: 'High-quality glass installations',
      baseRate: 120, // per sq ft
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: 'Waterproofing',
      value: 'waterproofing',
      description: 'Reliable waterproofing solutions',
      baseRate: 45, // per sq ft
    },
    {
      icon: <Grid3X3 className="w-6 h-6" />,
      title: 'Tiles & Granite Work',
      value: 'tiles',
      description: 'Elegant tile and granite designs',
      baseRate: 90, // per sq ft
    },
    {
      icon: <Pipette className="w-6 h-6" />,
      title: 'Plumbing',
      value: 'plumbing',
      description: 'Comprehensive plumbing services',
      baseRate: 2500, // base price
    },
    {
      icon: <Plug className="w-6 h-6" />,
      title: 'Electrical',
      value: 'electrical',
      description: 'Efficient and safe electrical work',
      baseRate: 2000, // base price
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: 'Carpentry',
      value: 'carpentry',
      description: 'Skilled woodwork and carpentry',
      baseRate: 350, // per sq ft
    },
    {
      icon: <AirVent className="w-6 h-6" />,
      title: 'AC Services',
      value: 'ac-services',
      description: 'AC installation and repair services',
      baseRate: 1500, // base price
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCalculatorData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleServiceSelect = (serviceValue) => {
    setSelectedService(serviceValue);
    setStep(2);
  };

  const calculateCost = () => {
    let cost = 0;
    const service = services.find(s => s.value === selectedService);
    
    switch (selectedService) {
      case 'painting':
        const baseRate = service.baseRate;
        const qualityMultiplier = {
          'economy': 0.8,
          'standard': 1,
          'premium': 1.4
        }[calculatorData.paintQuality];
        
        const area = parseFloat(calculatorData.area);
        cost = area * baseRate * qualityMultiplier;
        
        // Add extra costs for additional areas
        if (calculatorData.ceiling) cost += area * 0.3 * baseRate;
        if (calculatorData.doors) cost += 500 * parseInt(calculatorData.doors || 0);
        if (calculatorData.windows) cost += 300 * parseInt(calculatorData.windows || 0);
        break;

      case 'false-ceiling':
        cost = parseFloat(calculatorData.area) * service.baseRate;
        const designMultiplier = {
          'basic': 1,
          'medium': 1.3,
          'complex': 1.8
        }[calculatorData.ceilingDesign];
        cost *= designMultiplier;
        break;

      // Add calculations for other services...
    }

    setTotalCost(Math.round(cost));
  };

  return (
<div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(#E94560_1.4px,transparent_1.4px),linear-gradient(to_right,#E94560_1.4px,transparent_1.4px)] bg-[size:28px_28px] opacity-[0.03]" />
        
        <div className="relative container mx-auto px-4 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#E94560]/5 rounded-full px-4 py-2 mb-6">
              <span className="text-[#E94560] animate-pulse">●</span>
              <span className="text-gray-600 text-sm">Instant Cost Estimation</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Calculate Your <span className="text-[#E94560]">Project Cost</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get instant estimates for your home improvement projects with our interactive calculator. 
              Choose your service and get detailed cost breakdowns.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {step === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#E94560]" />
                    </div>
                    Instant Pricing
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#E94560]" />
                    </div>
                    Detailed Breakdown
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#E94560]" />
                    </div>
                    All Services Included
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Select a Service</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <button
                    key={service.value}
                    onClick={() => handleServiceSelect(service.value)}
                    className={`flex items-center p-4 rounded-xl border-2 text-left transition-all
                      ${selectedService === service.value ? 
                        'border-[#E94560] bg-[#E94560]/5' : 
                        'border-gray-200 hover:border-[#E94560]/50'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#E94560]/10 flex items-center justify-center text-[#E94560]">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{service.title}</h3>
                        <p className="text-sm text-gray-500">{service.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Service-Specific Calculator */}
          {step === 2 && selectedService === 'painting' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Painting Cost Calculator</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Wall Area (sq ft)
                  </label>
                  <input
                    type="number"
                    name="area"
                    value={calculatorData.area}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
                    placeholder="Enter total wall area"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Paint Quality
                  </label>
                  <select
                    name="paintQuality"
                    value={calculatorData.paintQuality}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
                  >
                    <option value="economy">Economy</option>
                    <option value="standard">Standard</option>
                    <option value="premium">Premium</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Additional Areas
                  </label>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-200">
                      <input
                        type="checkbox"
                        name="ceiling"
                        checked={calculatorData.ceiling}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#E94560] rounded border-gray-300"
                      />
                      <span>Ceiling</span>
                    </label>
                    
                    <div className="p-4 rounded-xl border border-gray-200">
                      <label className="block text-sm font-medium">
                        Number of Doors
                      </label>
                      <input
                        type="number"
                        name="doors"
                        value={calculatorData.doors}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border rounded-lg"
                        min="0"
                      />
                    </div>
                    
                    <div className="p-4 rounded-xl border border-gray-200">
                      <label className="block text-sm font-medium">
                        Number of Windows
                      </label>
                      <input
                        type="number"
                        name="windows"
                        value={calculatorData.windows}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border rounded-lg"
                        min="0"
                      />
                    </div>
                  </div>
                </div>

          

                {totalCost > 0 && (
                  <div className="mt-6 p-6 bg-gray-50 rounded-xl">
                    <h3 className="text-xl font-bold mb-2">Estimated Cost</h3>
                    <div className="text-3xl font-bold text-[#E94560]">
                      ₹{totalCost.toLocaleString()}
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      This is an approximate estimate. Final cost may vary based on site conditions.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

        {/* False Ceiling Calculator */}
{step === 2 && selectedService === 'false-ceiling' && (
  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h2 className="text-2xl font-bold mb-6">False Ceiling Cost Calculator</h2>
    
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Total Ceiling Area (sq ft)
        </label>
        <input
          type="number"
          name="area"
          value={calculatorData.area}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
          placeholder="Enter ceiling area"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ceiling Type
        </label>
        <select
          name="ceilingType"
          value={calculatorData.ceilingType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="">Select type</option>
          <option value="gypsum">Gypsum Board</option>
          <option value="pop">POP</option>
          <option value="grid">Grid Ceiling</option>
          <option value="wooden">Wooden Ceiling</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Design Complexity
        </label>
        <select
          name="ceilingDesign"
          value={calculatorData.ceilingDesign}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="basic">Basic (Single Level)</option>
          <option value="medium">Medium (Double Level)</option>
          <option value="complex">Complex (Multi-Level)</option>
        </select>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Additional Features
        </label>
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-200">
            <input
              type="checkbox"
              name="spotLights"
              checked={calculatorData.spotLights}
              onChange={handleInputChange}
              className="w-4 h-4 text-[#E94560] rounded border-gray-300"
            />
            <span>Spot Lights</span>
          </label>
          <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-200">
            <input
              type="checkbox"
              name="cove"
              checked={calculatorData.cove}
              onChange={handleInputChange}
              className="w-4 h-4 text-[#E94560] rounded border-gray-300"
            />
            <span>Cove Lighting</span>
          </label>
        </div>
      </div>
    </div>
  </div>
)}

{/* Glass Work Calculator */}
{step === 2 && selectedService === 'glass-work' && (
  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h2 className="text-2xl font-bold mb-6">Glass Work Cost Calculator</h2>
    
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Glass Type
        </label>
        <select
          name="glassType"
          value={calculatorData.glassType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="">Select type</option>
          <option value="plain">Plain Glass</option>
          <option value="toughened">Toughened Glass</option>
          <option value="laminated">Laminated Glass</option>
          <option value="tinted">Tinted Glass</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Glass Area (sq ft)
        </label>
        <input
          type="number"
          name="area"
          value={calculatorData.area}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
          placeholder="Enter glass area"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Glass Thickness (mm)
        </label>
        <select
          name="thickness"
          value={calculatorData.thickness}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="">Select thickness</option>
          <option value="4">4mm</option>
          <option value="6">6mm</option>
          <option value="8">8mm</option>
          <option value="10">10mm</option>
          <option value="12">12mm</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Treatment
        </label>
        <select
          name="treatment"
          value={calculatorData.treatment}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="">Select treatment</option>
          <option value="none">No Treatment</option>
          <option value="frosted">Frosted</option>
          <option value="etched">Etched</option>
          <option value="tinted">Tinted</option>
        </select>
      </div>
    </div>
  </div>
)}

{/* Waterproofing Calculator */}
{step === 2 && selectedService === 'waterproofing' && (
  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h2 className="text-2xl font-bold mb-6">Waterproofing Cost Calculator</h2>
    
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Area Type
        </label>
        <select
          name="areaType"
          value={calculatorData.areaType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="">Select area type</option>
          <option value="terrace">Terrace/Roof</option>
          <option value="bathroom">Bathroom</option>
          <option value="basement">Basement</option>
          <option value="external">External Walls</option>
          <option value="tank">Water Tank</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Total Area (sq ft)
        </label>
        <input
          type="number"
          name="area"
          value={calculatorData.area}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
          placeholder="Enter area"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Treatment Type
        </label>
        <select
          name="treatmentType"
          value={calculatorData.treatmentType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="">Select treatment</option>
          <option value="membrane">Membrane Waterproofing</option>
          <option value="chemical">Chemical Treatment</option>
          <option value="cementitious">Cementitious Waterproofing</option>
          <option value="injection">Injection Waterproofing</option>
        </select>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Additional Requirements
        </label>
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-200">
            <input
              type="checkbox"
              name="surfacePrep"
              checked={calculatorData.surfacePrep}
              onChange={handleInputChange}
              className="w-4 h-4 text-[#E94560] rounded border-gray-300"
            />
            <span>Surface Preparation</span>
          </label>
          <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-200">
            <input
              type="checkbox"
              name="warranty"
              checked={calculatorData.warranty}
              onChange={handleInputChange}
              className="w-4 h-4 text-[#E94560] rounded border-gray-300"
            />
            <span>Extended Warranty</span>
          </label>
        </div>
      </div>
    </div>
  </div>
)}

{/* Carpentry Calculator */}
{step === 2 && selectedService === 'carpentry' && (
  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h2 className="text-2xl font-bold mb-6">Carpentry Cost Calculator</h2>
    
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Type of Work
        </label>
        <select
          name="carpentryType"
          value={calculatorData.carpentryType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="">Select work type</option>
          <option value="furniture">Custom Furniture</option>
          <option value="wardrobes">Wardrobes</option>
          <option value="kitchen">Kitchen Cabinets</option>
          <option value="doors">Doors & Windows</option>
          <option value="flooring">Wooden Flooring</option>
          <option value="repair">Repair Work</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Wood Type
        </label>
        <select
          name="woodType"
          value={calculatorData.woodType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="">Select wood type</option>
          <option value="plywood">Plywood</option>
          <option value="mdf">MDF</option>
          <option value="particleBoard">Particle Board</option>
          <option value="solid">Solid Wood</option>
          <option value="teak">Teak Wood</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Area/Size (sq ft)
          </label>
          <input
            type="number"
            name="area"
            value={calculatorData.area}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
            placeholder="Enter area"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Units
          </label>
          <input
            type="number"
            name="units"
            value={calculatorData.units}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
            placeholder="Number of pieces"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Finish Type
        </label>
        <select
          name="finishType"
          value={calculatorData.finishType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="">Select finish</option>
          <option value="laminate">Laminate</option>
          <option value="veneer">Veneer</option>
          <option value="paint">Paint</option>
          <option value="polish">Polish</option>
          <option value="pu">PU Finish</option>
        </select>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Additional Features
        </label>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { name: 'hardware', label: 'Premium Hardware' },
            { name: 'glassFitting', label: 'Glass Fittings' },
            { name: 'lighting', label: 'Interior Lighting' },
            { name: 'customDesign', label: 'Custom Design Work' }
          ].map((item) => (
            <label key={item.name} className="flex items-center gap-3 p-4 rounded-xl border border-gray-200">
              <input
                type="checkbox"
                name={item.name}
                checked={calculatorData[item.name]}
                onChange={handleInputChange}
                className="w-4 h-4 text-[#E94560] rounded border-gray-300"
              />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  </div>
)}

{/* AC Services Calculator */}
{step === 2 && selectedService === 'ac-services' && (
  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h2 className="text-2xl font-bold mb-6">AC Services Cost Calculator</h2>
    
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Service Type
        </label>
        <select
          name="acServiceType"
          value={calculatorData.acServiceType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="">Select service type</option>
          <option value="installation">New Installation</option>
          <option value="repair">Repair & Service</option>
          <option value="maintenance">Annual Maintenance</option>
          <option value="gasRefill">Gas Refilling</option>
          <option value="relocation">AC Relocation</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          AC Type
        </label>
        <select
          name="acType"
          value={calculatorData.acType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="">Select AC type</option>
          <option value="window">Window AC</option>
          <option value="split">Split AC</option>
          <option value="cassette">Cassette AC</option>
          <option value="tower">Tower AC</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Number of Units
        </label>
        <input
          type="number"
          name="units"
          value={calculatorData.units}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
          placeholder="Number of AC units"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tonnage
        </label>
        <select
          name="tonnage"
          value={calculatorData.tonnage}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="">Select tonnage</option>
          <option value="1">1 Ton</option>
          <option value="1.5">1.5 Ton</option>
          <option value="2">2 Ton</option>
          <option value="2.5">2.5 Ton</option>
          <option value="3">3 Ton</option>
        </select>
      </div>

      {calculatorData.acServiceType === 'installation' && (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Installation Requirements
          </label>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: 'copper', label: 'Extra Copper Piping' },
              { name: 'bracket', label: 'Mounting Bracket' },
              { name: 'drainage', label: 'Drainage Piping' },
              { name: 'stabilizer', label: 'Stabilizer' }
            ].map((item) => (
              <label key={item.name} className="flex items-center gap-3 p-4 rounded-xl border border-gray-200">
                <input
                  type="checkbox"
                  name={item.name}
                  checked={calculatorData[item.name]}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-[#E94560] rounded border-gray-300"
                />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {calculatorData.acServiceType === 'maintenance' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Plan
          </label>
          <select
            name="servicePlan"
            value={calculatorData.servicePlan}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
          >
            <option value="">Select plan</option>
            <option value="basic">Basic Service</option>
            <option value="standard">Standard Service</option>
            <option value="comprehensive">Comprehensive Service</option>
          </select>
        </div>
      )}
    </div>
  </div>
)}
{/* Tiles & Granite Calculator */}
{step === 2 && selectedService === 'tiles' && (
  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h2 className="text-2xl font-bold mb-6">Tiles & Granite Cost Calculator</h2>
    
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Material Type
        </label>
        <select
          name="materialType"
          value={calculatorData.materialType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="">Select material</option>
          <option value="ceramic">Ceramic Tiles</option>
          <option value="vitrified">Vitrified Tiles</option>
          <option value="marble">Marble</option>
          <option value="granite">Granite</option>
          <option value="italian">Italian Marble</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Application Area
        </label>
        <select
          name="applicationType"
          value={calculatorData.applicationType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="">Select area</option>
          <option value="floor">Floor</option>
          <option value="wall">Wall</option>
          <option value="counter">Kitchen Counter</option>
          <option value="staircase">Staircase</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Total Area (sq ft)
        </label>
        <input
          type="number"
          name="area"
          value={calculatorData.area}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
          placeholder="Enter area"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Material Grade
        </label>
        <select
          name="materialGrade"
          value={calculatorData.materialGrade}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
          <option value="luxury">Luxury</option>
        </select>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Additional Services
        </label>
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-200">
            <input
              type="checkbox"
              name="oldTileRemoval"
              checked={calculatorData.oldTileRemoval}
              onChange={handleInputChange}
              className="w-4 h-4 text-[#E94560] rounded border-gray-300"
            />
            <span>Old Tile Removal</span>
          </label>
          <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-200">
            <input
              type="checkbox"
              name="edgeFinishing"
              checked={calculatorData.edgeFinishing}
              onChange={handleInputChange}
              className="w-4 h-4 text-[#E94560] rounded border-gray-300"
            />
            <span>Edge Finishing</span>
          </label>
        </div>
      </div>
    </div>
  </div>
)}

{/* Plumbing Calculator */}
{step === 2 && selectedService === 'plumbing' && (
  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h2 className="text-2xl font-bold mb-6">Plumbing Cost Calculator</h2>
    
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Service Type
        </label>
        <select
          name="plumbingType"
          value={calculatorData.plumbingType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="">Select service type</option>
          <option value="installation">New Installation</option>
          <option value="repair">Repair Work</option>
          <option value="replacement">Replacement</option>
          <option value="maintenance">Maintenance</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Area/Room Type
        </label>
        <select
          name="roomType"
          value={calculatorData.roomType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="">Select area</option>
          <option value="bathroom">Bathroom</option>
          <option value="kitchen">Kitchen</option>
          <option value="utility">Utility Area</option>
          <option value="complete">Complete House</option>
        </select>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Required Works
        </label>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { name: 'pipeWork', label: 'Pipe Installation/Repair' },
            { name: 'fixtures', label: 'Fixture Installation' },
            { name: 'drainage', label: 'Drainage Work' },
            { name: 'tankWork', label: 'Water Tank Work' },
            { name: 'sanitaryWare', label: 'Sanitary Ware Installation' },
            { name: 'waterHeater', label: 'Water Heater Installation' }
          ].map((item) => (
            <label key={item.name} className="flex items-center gap-3 p-4 rounded-xl border border-gray-200">
              <input
                type="checkbox"
                name={item.name}
                checked={calculatorData[item.name]}
                onChange={handleInputChange}
                className="w-4 h-4 text-[#E94560] rounded border-gray-300"
              />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Material Grade
        </label>
        <select
          name="materialGrade"
          value={calculatorData.materialGrade}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="standard">Standard Quality</option>
          <option value="premium">Premium Quality</option>
          <option value="luxury">Luxury Quality</option>
        </select>
      </div>
    </div>
  </div>
)}

{/* Electrical Calculator */}
{step === 2 && selectedService === 'electrical' && (
  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h2 className="text-2xl font-bold mb-6">Electrical Work Cost Calculator</h2>
    
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Service Type
        </label>
        <select
          name="electricalType"
          value={calculatorData.electricalType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="">Select service type</option>
          <option value="newWiring">New Wiring</option>
          <option value="renovation">Renovation</option>
          <option value="repair">Repair Work</option>
          <option value="maintenance">Maintenance</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Property Size (sq ft)
        </label>
        <input
          type="number"
          name="area"
          value={calculatorData.area}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
          placeholder="Enter property size"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Rooms
          </label>
          <input
            type="number"
            name="rooms"
            value={calculatorData.rooms}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
            placeholder="Number of rooms"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Heavy Points
          </label>
          <input
            type="number"
            name="heavyPoints"
            value={calculatorData.heavyPoints}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
            placeholder="AC, Geyser points etc."
          />
        </div>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Required Works
        </label>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { name: 'wiring', label: 'Wiring Work' },
            { name: 'switchboard', label: 'Switchboard Installation' },
            { name: 'lighting', label: 'Light Installation' },
            { name: 'fan', label: 'Fan Installation' },
            { name: 'earthing', label: 'Earthing' },
            { name: 'mcb', label: 'MCB/Distribution Box' }
          ].map((item) => (
            <label key={item.name} className="flex items-center gap-3 p-4 rounded-xl border border-gray-200">
              <input
                type="checkbox"
                name={item.name}
                checked={calculatorData[item.name]}
                onChange={handleInputChange}
                className="w-4 h-4 text-[#E94560] rounded border-gray-300"
              />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Material Quality
        </label>
        <select
          name="materialQuality"
          value={calculatorData.materialQuality}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
          <option value="luxury">Luxury</option>
        </select>
      </div>
    </div>
  </div>
)}
{/* Cost Calculation Button and Results Display for all calculators */}
{step === 2 && (
  <div className="mt-8">
    <button
      onClick={calculateCost}
      className="w-full px-6 py-4 bg-[#E94560] text-white rounded-xl font-medium hover:bg-[#d63d56] transition-all duration-300 flex items-center justify-center gap-2"
    >
      <Calculator className="w-5 h-5" />
      Calculate Total Cost
    </button>

    {totalCost > 0 && (
      <div className="mt-6 p-6 bg-gray-50 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Cost Breakdown</h3>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Base Cost</span>
            <span className="font-medium">₹{(totalCost * 0.7).toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Labor Charges</span>
            <span className="font-medium">₹{(totalCost * 0.2).toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Additional Features</span>
            <span className="font-medium">₹{(totalCost * 0.1).toLocaleString()}</span>
          </div>
          
          <div className="h-px bg-gray-200 my-4"></div>
          
          <div className="flex justify-between items-center text-lg font-bold">
            <span>Total Estimated Cost</span>
            <span className="text-[#E94560]">₹{totalCost.toLocaleString()}</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          * This is an approximate estimate. Final cost may vary based on site conditions, material availability, and specific requirements.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="flex-1 px-6 py-3 bg-[#E94560] text-white rounded-xl font-medium hover:bg-[#d63d56] transition-all duration-300">
            Get Detailed Quote
          </button>
          <button className="flex-1 px-6 py-3 border-2 border-[#E94560] text-[#E94560] rounded-xl font-medium hover:bg-[#E94560]/5 transition-all duration-300">
            Book Consultation
          </button>
        </div>
      </div>
    )}
  </div>
)}

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 border-2 border-[#E94560] text-[#E94560] rounded-xl font-medium hover:bg-[#E94560]/5 transition-all duration-300 flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Services
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCalculatorPage;