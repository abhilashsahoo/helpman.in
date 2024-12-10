import React from 'react';
import { Calculator } from 'lucide-react';

const ElectricalCalculator = ({ onCalculate }) => {
  const [formData, setFormData] = React.useState({
    electricalType: '',
    area: '',
    rooms: '',
    heavyPoints: '',
    materialQuality: 'standard',
    wiring: false,
    switchboard: false,
    lighting: false,
    fan: false,
    earthing: false,
    mcb: false
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

    // Base rates for different types of electrical work
    const rates = {
      newWiring: {
        standard: 150,  // per sq ft
        premium: 200,
        luxury: 300
      },
      renovation: {
        standard: 100,
        premium: 150,
        luxury: 200
      },
      repair: {
        standard: 2000, // base price
        premium: 3000,
        luxury: 4000
      },
      maintenance: {
        standard: 1500,
        premium: 2500,
        luxury: 3500
      }
    };

    // Calculate base cost based on service type and material quality
    switch (formData.electricalType) {
      case 'newWiring':
      case 'renovation':
        baseCost = (rates[formData.electricalType][formData.materialQuality] || 0) * 
                   (parseFloat(formData.area) || 0);
        break;
      case 'repair':
      case 'maintenance':
        baseCost = rates[formData.electricalType][formData.materialQuality] || 0;
        break;
      default:
        baseCost = 0;
    }

    // Add costs for rooms
    const roomCost = parseInt(formData.rooms) * 1000 || 0;
    baseCost += roomCost;

    // Add costs for heavy points
    const heavyPointCost = parseInt(formData.heavyPoints) * 2500 || 0;
    baseCost += heavyPointCost;

    // Add costs for additional features
    if (formData.wiring) baseCost += 5000;
    if (formData.switchboard) baseCost += 2000;
    if (formData.lighting) baseCost += 3000;
    if (formData.fan) baseCost += 1500;
    if (formData.earthing) baseCost += 4000;
    if (formData.mcb) baseCost += 3500;

    onCalculate(Math.round(baseCost));
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Service Type
        </label>
        <select
          name="electricalType"
          value={formData.electricalType}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="">Select service type</option>
          <option value="newWiring">New Wiring</option>
          <option value="renovation">Renovation</option>
          <option value="repair">Repair Work</option>
          <option value="maintenance">Maintenance</option>
        </select>
      </div>

      {(formData.electricalType === 'newWiring' || formData.electricalType === 'renovation') && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Property Size (sq ft)
          </label>
          <input
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
            placeholder="Enter property size"
            min="0"
          />
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Rooms
          </label>
          <input
            type="number"
            name="rooms"
            value={formData.rooms}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
            placeholder="Number of rooms"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Heavy Points
          </label>
          <input
            type="number"
            name="heavyPoints"
            value={formData.heavyPoints}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
            placeholder="AC, Geyser points etc."
            min="0"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Material Quality
        </label>
        <select
          name="materialQuality"
          value={formData.materialQuality}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
        >
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
          <option value="luxury">Luxury</option>
        </select>
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

export default ElectricalCalculator;