import React from 'react';
import { Calculator } from 'lucide-react';

const CarpentryCalculator = ({ onCalculate }) => {
  const [formData, setFormData] = React.useState({
    carpentryType: '',
    woodType: '',
    area: '',
    units: '',
    finishType: '',
    hardware: false,
    glassFitting: false,
    lighting: false,
    customDesign: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const calculateCost = () => {
    let baseCost = 0;

    // Base rates for different types of work
    const rates = {
      furniture: {
        plywood: 350,
        mdf: 250,
        particleBoard: 200,
        solid: 800,
        teak: 1200
      },
      wardrobes: {
        plywood: 450,
        mdf: 300,
        particleBoard: 250,
        solid: 900,
        teak: 1400
      },
      kitchen: {
        plywood: 500,
        mdf: 350,
        particleBoard: 300,
        solid: 1000,
        teak: 1500
      },
      doors: {
        plywood: 400,
        mdf: 300,
        solid: 850,
        teak: 1300
      },
      flooring: {
        solid: 250,
        teak: 450
      }
    };

    // Calculate base cost based on work type and wood type
    baseCost = (rates[formData.carpentryType]?.[formData.woodType] || 0) * 
               (parseFloat(formData.area) || 0);

    // Add cost multiplier based on finish type
    const finishMultiplier = {
      laminate: 1.2,
      veneer: 1.4,
      paint: 1.1,
      polish: 1.3,
      pu: 1.5
    };

    baseCost *= finishMultiplier[formData.finishType] || 1;

    // Multiply by number of units if applicable
    if (formData.units && parseInt(formData.units) > 0) {
      baseCost *= parseInt(formData.units);
    }

    // Add costs for additional features
    if (formData.hardware) baseCost *= 1.15; // 15% extra for premium hardware
    if (formData.glassFitting) baseCost *= 1.2; // 20% extra for glass fittings
    if (formData.lighting) baseCost *= 1.1; // 10% extra for lighting
    if (formData.customDesign) baseCost *= 1.25; // 25% extra for custom design

    onCalculate(Math.round(baseCost));
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Type of Work
        </label>
        <select
          name="carpentryType"
          value={formData.carpentryType}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="">Select work type</option>
          <option value="furniture">Custom Furniture</option>
          <option value="wardrobes">Wardrobes</option>
          <option value="kitchen">Kitchen Cabinets</option>
          <option value="doors">Doors & Windows</option>
          <option value="flooring">Wooden Flooring</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Wood Type
        </label>
        <select
          name="woodType"
          value={formData.woodType}
          onChange={handleChange}
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
            value={formData.area}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
            placeholder="Enter area"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Units
          </label>
          <input
            type="number"
            name="units"
            value={formData.units}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
            placeholder="Number of pieces"
            min="1"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Finish Type
        </label>
        <select
          name="finishType"
          value={formData.finishType}
          onChange={handleChange}
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
                checked={formData[item.name]}
                onChange={handleChange}
                className="w-4 h-4 text-[#E94560] rounded border-gray-300"
              />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={calculateCost}
        className="w-full px-6 py-4 bg-[#E94560] text-white rounded-xl font-medium hover:bg-[#d63d56] transition-all duration-300 flex items-center justify-center gap-2"
      >
        <Calculator className="w-5 h-5" />
        Calculate Cost
      </button>
    </div>
  );
};

export default CarpentryCalculator;