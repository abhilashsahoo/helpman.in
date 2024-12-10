import React from 'react';
import { Calculator } from 'lucide-react';

const ACServicesCalculator = ({ onCalculate }) => {
  const [formData, setFormData] = React.useState({
    acServiceType: '',
    acType: '',
    units: '',
    tonnage: '',
    copper: false,
    bracket: false,
    drainage: false,
    stabilizer: false,
    servicePlan: ''
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

    // Base rates for different services
    const rates = {
      installation: {
        window: 3000,
        split: 4500,
        cassette: 8000,
        tower: 10000
      },
      repair: {
        window: 800,
        split: 1000,
        cassette: 1500,
        tower: 2000
      },
      maintenance: {
        basic: 500,
        standard: 800,
        comprehensive: 1200
      },
      gasRefill: {
        window: 1500,
        split: 2000,
        cassette: 3000,
        tower: 4000
      },
      relocation: {
        window: 2000,
        split: 3000,
        cassette: 5000,
        tower: 7000
      }
    };

    // Calculate base cost based on service type and AC type
    switch (formData.acServiceType) {
      case 'installation':
        baseCost = rates.installation[formData.acType] || 0;
        // Add costs for tonnage
        baseCost *= parseFloat(formData.tonnage) || 1;
        break;
      case 'repair':
        baseCost = rates.repair[formData.acType] || 0;
        break;
      case 'maintenance':
        baseCost = rates.maintenance[formData.servicePlan] || 0;
        break;
      case 'gasRefill':
        baseCost = rates.gasRefill[formData.acType] || 0;
        break;
      case 'relocation':
        baseCost = rates.relocation[formData.acType] || 0;
        break;
      default:
        baseCost = 0;
    }

    // Multiply by number of units
    baseCost *= parseInt(formData.units) || 1;

    // Add costs for additional features
    if (formData.copper) baseCost += 1000;
    if (formData.bracket) baseCost += 500;
    if (formData.drainage) baseCost += 300;
    if (formData.stabilizer) baseCost += 2000;

    onCalculate(baseCost);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Service Type
        </label>
        <select
          name="acServiceType"
          value={formData.acServiceType}
          onChange={handleChange}
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
          value={formData.acType}
          onChange={handleChange}
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
          value={formData.units}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
          placeholder="Number of AC units"
          min="1"
        />
      </div>

      {formData.acServiceType === 'installation' && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tonnage
            </label>
            <select
              name="tonnage"
              value={formData.tonnage}
              onChange={handleChange}
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

          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Additional Requirements
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
                    checked={formData[item.name]}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#E94560] rounded border-gray-300"
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>
        </>
      )}

      {formData.acServiceType === 'maintenance' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Plan
          </label>
          <select
            name="servicePlan"
            value={formData.servicePlan}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
          >
            <option value="">Select plan</option>
            <option value="basic">Basic Service</option>
            <option value="standard">Standard Service</option>
            <option value="comprehensive">Comprehensive Service</option>
          </select>
        </div>
      )}

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

export default ACServicesCalculator;