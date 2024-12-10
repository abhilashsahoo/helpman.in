"use client"
import React, { useState } from 'react';
import { 
    ArrowRight, 
    ArrowLeft,
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
    CheckCircle,
    Clock,
    MapPin,
    Phone,
    Mail,
    Check,
    Building,
    PaintBucket,
    Grid2x2 
   
} from 'lucide-react';

const GetQuotePage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Service Details
    serviceType: '',
    propertyType: '',
    projectScope: '',
    
    // Project Details
    roomCount: '',
    squareFootage: '',
    walls: false,
    ceiling: false,
    trim: false,
    doors: false,
    windows: false,
    
    // Timeline
    startDate: '',
    flexibility: '',
    timeframe: '',
    
    // Personal Details
    name: '',
    email: '',
    phone: '',
    address: '',
    additionalNotes: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = () => {
    setStep(prev => Math.min(prev + 1, 5));
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    setStep(prev => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitted(true);
      // Here you would typically make an API call to submit the data
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const stepTitles = [
    'Select Service',
    'Project Details',
    'Timeline',
    'Personal Information',
    'Review & Submit'
  ];

 
  const services = [
    {
      icon: <PaintBucket  className="w-6 h-6" />,
      title: 'Painting',
      value: 'painting',
      description: 'Expert painting services for all needs'
    },
    {
      icon: <Grid2x2 className="w-6 h-6" />,
      title: 'False Ceiling',
      value: 'false-ceiling',
      description: 'Stylish and durable ceiling solutions'
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Fabrication',
      value: 'fabrication',
      description: 'Custom metal and glass fabrication'
    },
    {
      icon: <GlassWater className="w-6 h-6" />,
      title: 'Glass Work',
      value: 'glass-work',
      description: 'High-quality glass installations'
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: 'Waterproofing',
      value: 'waterproofing',
      description: 'Reliable waterproofing solutions'
    },
    {
      icon: <Grid3X3 className="w-6 h-6" />,
      title: 'Tiles & Granite Work',
      value: 'tiles',
      description: 'Elegant tile and granite designs'
    },
    {
      icon: <Pipette className="w-6 h-6" />,
      title: 'Plumbing',
      value: 'plumbing',
      description: 'Comprehensive plumbing services'
    },
    {
      icon: <Plug className="w-6 h-6" />,
      title: 'Electrical',
      value: 'electrical',
      description: 'Efficient and safe electrical work'
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: 'Carpentry',
      value: 'carpentry',
      description: 'Skilled woodwork and carpentry'
    },
    {
      icon: <AirVent className="w-6 h-6" />,
      title: 'AC Services',
      value: 'ac-services',
      description: 'AC installation and repair services'
    }
  ];

  // Update property types to be more comprehensive
  const propertyTypes = [
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'industrial', label: 'Industrial' },
    { value: 'retail', label: 'Retail' },
    { value: 'office', label: 'Office Space' },
    { value: 'apartment', label: 'Apartment Complex' }
  ];



  const projectScopes = [
    { value: 'full', label: 'Full Property' },
    { value: 'partial', label: 'Partial Property' },
    { value: 'single', label: 'Single Room' }
  ];

  const areas = [
    { name: 'walls', label: 'Walls' },
    { name: 'ceiling', label: 'Ceiling' },
    { name: 'trim', label: 'Trim & Baseboards' },
    { name: 'doors', label: 'Doors' },
    { name: 'windows', label: 'Window Frames' }
  ];

  const flexibilityOptions = [
    { value: 'exact', label: 'Must start on this date' },
    { value: 'flexible', label: 'Flexible within 1 week' },
    { value: 'very-flexible', label: 'Flexible within 2-3 weeks' }
  ];

  const timeframeOptions = [
    { value: 'asap', label: 'As soon as possible' },
    { value: 'within-month', label: 'Within a month' },
    { value: '1-2-months', label: '1-2 months' },
    { value: '3-plus-months', label: '3+ months' }
  ];

  const selectStyles = {
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
    backgroundPosition: 'right 0.75rem center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1.5em 1.5em',
    paddingRight: '2.5rem'
  };
 // Update project scopes based on service type
 const getProjectScopes = (serviceType) => {
    const commonScopes = [
      { value: 'full', label: 'Full Property' },
      { value: 'partial', label: 'Partial Property' },
      { value: 'single', label: 'Single Room/Area' }
    ];

    const specificScopes = {
      'painting': [
        { value: 'interior', label: 'Interior Only' },
        { value: 'exterior', label: 'Exterior Only' },
        { value: 'both', label: 'Both Interior & Exterior' }
      ],
      'false-ceiling': [
        { value: 'new-installation', label: 'New Installation' },
        { value: 'renovation', label: 'Renovation' },
        { value: 'repair', label: 'Repair Work' }
      ],
      'waterproofing': [
        { value: 'bathroom', label: 'Bathroom Waterproofing' },
        { value: 'terrace', label: 'Terrace Waterproofing' },
        { value: 'basement', label: 'Basement Waterproofing' }
      ],
      // Add specific scopes for other services as needed
    };

    return specificScopes[serviceType] || commonScopes;
  };

  // Update the areas based on selected service
  const getServiceAreas = (serviceType) => {
    const areas = {
      'painting': [
        { name: 'walls', label: 'Walls' },
        { name: 'ceiling', label: 'Ceiling' },
        { name: 'trim', label: 'Trim & Baseboards' },
        { name: 'doors', label: 'Doors' },
        { name: 'windows', label: 'Window Frames' }
      ],
      'false-ceiling': [
        { name: 'living', label: 'Living Room' },
        { name: 'bedroom', label: 'Bedroom' },
        { name: 'kitchen', label: 'Kitchen' },
        { name: 'bathroom', label: 'Bathroom' },
        { name: 'office', label: 'Office Space' }
      ],
      'tiles': [
        { name: 'floor', label: 'Floor Tiling' },
        { name: 'wall', label: 'Wall Tiling' },
        { name: 'kitchen', label: 'Kitchen Countertop' },
        { name: 'bathroom', label: 'Bathroom Tiling' },
        { name: 'outdoor', label: 'Outdoor Tiling' }
      ],
      // Add areas for other services
    };

    return areas[serviceType] || [];
  };
  const getServiceSpecificFields = (serviceType) => {
    const fields = {
      'painting': {
        showRooms: true,
        showArea: true,
        areas: [
          { name: 'walls', label: 'Walls' },
          { name: 'ceiling', label: 'Ceiling' },
          { name: 'trim', label: 'Trim & Baseboards' },
          { name: 'doors', label: 'Doors' },
          { name: 'windows', label: 'Window Frames' }
        ],
        title: 'Areas to be Painted'
      },
      'fabrication': {
        showRooms: false,
        showArea: true,
        areas: [
          { name: 'gates', label: 'Gates' },
          { name: 'grills', label: 'Window Grills' },
          { name: 'railings', label: 'Railings' },
          { name: 'stairs', label: 'Staircases' },
          { name: 'frameworks', label: 'Structural Frameworks' }
        ],
        title: 'Type of Fabrication Work'
      },
      'false-ceiling': {
        showRooms: true,
        showArea: true,
        areas: [
          { name: 'pop', label: 'POP Ceiling' },
          { name: 'gypsum', label: 'Gypsum Board' },
          { name: 'grid', label: 'Grid Ceiling' },
          { name: 'wooden', label: 'Wooden Ceiling' },
          { name: 'designer', label: 'Designer Ceiling' }
        ],
        title: 'Type of Ceiling Work'
      },
      'glass-work': {
        showRooms: false,
        showArea: true,
        areas: [
          { name: 'windows', label: 'Windows' },
          { name: 'doors', label: 'Glass Doors' },
          { name: 'partitions', label: 'Partitions' },
          { name: 'shower', label: 'Shower Enclosures' },
          { name: 'mirrors', label: 'Mirrors' }
        ],
        title: 'Type of Glass Work'
      },
      'waterproofing': {
        showRooms: false,
        showArea: true,
        areas: [
          { name: 'terrace', label: 'Terrace/Roof' },
          { name: 'bathroom', label: 'Bathroom' },
          { name: 'basement', label: 'Basement' },
          { name: 'walls', label: 'External Walls' },
          { name: 'tank', label: 'Water Tank' }
        ],
        title: 'Areas for Waterproofing'
      },
      'tiles': {
        showRooms: true,
        showArea: true,
        areas: [
          { name: 'floor', label: 'Floor Tiling' },
          { name: 'wall', label: 'Wall Tiling' },
          { name: 'kitchen', label: 'Kitchen' },
          { name: 'bathroom', label: 'Bathroom' },
          { name: 'outdoor', label: 'Outdoor Areas' }
        ],
        title: 'Areas for Tiling Work'
      },
      'plumbing': {
        showRooms: false,
        showArea: false,
        areas: [
          { name: 'pipeline', label: 'Pipeline Installation' },
          { name: 'fixtures', label: 'Fixture Installation' },
          { name: 'repair', label: 'Repairs' },
          { name: 'drainage', label: 'Drainage System' },
          { name: 'tank', label: 'Water Tank Installation' }
        ],
        title: 'Type of Plumbing Work'
      },
      'electrical': {
        showRooms: true,
        showArea: false,
        areas: [
          { name: 'wiring', label: 'Wiring' },
          { name: 'fixtures', label: 'Light Fixtures' },
          { name: 'switches', label: 'Switches & Outlets' },
          { name: 'panel', label: 'Panel Installation' },
          { name: 'repair', label: 'Repairs' }
        ],
        title: 'Type of Electrical Work'
      },
      'carpentry': {
        showRooms: true,
        showArea: true,
        areas: [
          { name: 'furniture', label: 'Custom Furniture' },
          { name: 'doors', label: 'Doors & Windows' },
          { name: 'cabinets', label: 'Cabinets' },
          { name: 'flooring', label: 'Wooden Flooring' },
          { name: 'repair', label: 'Repairs' }
        ],
        title: 'Type of Carpentry Work'
      },
      'ac-services': {
        showRooms: true,
        showArea: false,
        areas: [
          { name: 'installation', label: 'New Installation' },
          { name: 'repair', label: 'Repair & Service' },
          { name: 'maintenance', label: 'Annual Maintenance' },
          { name: 'gas', label: 'Gas Refilling' },
          { name: 'relocation', label: 'AC Relocation' }
        ],
        title: 'Type of AC Service'
      }
    };
  
    return fields[serviceType] || {
      showRooms: false,
      showArea: true,
      areas: [],
      title: 'Project Areas'
    };
  };
  // Common input classes
  const inputClasses = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all";
  const selectClasses = `${inputClasses} appearance-none bg-white`;

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Quote Request Submitted!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for your request. We'll review your project details and get back to you within 24 hours.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#E94560] text-white rounded-xl font-medium hover:bg-[#d63d56] transition-all duration-300"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="py-4">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              {stepTitles.map((title, index) => (
                <div 
                  key={index}
                  className={`flex flex-col items-center ${index + 1 === step ? 'text-[#E94560]' : 'text-gray-400'}`}
                >
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 
                    ${index + 1 === step ? 'bg-[#E94560] text-white' : 
                      index + 1 < step ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
                  >
                    {index + 1 < step ? <CheckCircle className="w-5 h-5" /> : index + 1}
                  </div>
                  <span className="hidden md:block text-sm">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-8">Select Your Service</h2>
                
                <div className="grid gap-6 md:grid-cols-2">
      {services.map((service) => (
        <label 
          key={service.value}
          className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all
          ${formData.serviceType === service.value ? 
            'border-[#E94560] bg-[#E94560]/5' : 
            'border-gray-200 hover:border-[#E94560]/50'}`}
        >
          <input
            type="radio"
            name="serviceType"
            value={service.value}
            checked={formData.serviceType === service.value}
            onChange={handleInputChange}
            className="hidden"
          />
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#E94560]/10 flex items-center justify-center text-[#E94560]">
              {service.icon}
            </div>
            <div>
              <h3 className="font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-500">{service.description}</p>
            </div>
          </div>
        </label>
      ))}
    </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className={selectClasses}
                    style={selectStyles}
                  >
                    <option value="">Select property type</option>
                    {propertyTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Scope
                  </label>
                  <select
                    name="projectScope"
                    value={formData.projectScope}
                    onChange={handleInputChange}
                    className={selectClasses}
                    style={selectStyles}
                  >
                    <option value="">Select project scope</option>
                    {projectScopes.map(scope => (
                      <option key={scope.value} value={scope.value}>{scope.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

           {/* Step 2: Project Details */}
{step === 2 && (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold mb-8">Project Details</h2>
    
    {(() => {
      const serviceFields = getServiceSpecificFields(formData.serviceType);
      return (
        <>
          <div className="grid sm:grid-cols-2 gap-6">
            {serviceFields.showRooms && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Rooms
                </label>
                <input
                  type="number"
                  name="roomCount"
                  value={formData.roomCount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
                  placeholder="Enter number of rooms"
                  min="1"
                />
              </div>
            )}
            
            {serviceFields.showArea && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Square Footage
                </label>
                <input
                  type="number"
                  name="squareFootage"
                  value={formData.squareFootage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
                  placeholder="Enter square footage"
                  min="1"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              {serviceFields.title}
            </label>
            <div className="grid sm:grid-cols-2 gap-4">
              {serviceFields.areas.map((area) => (
                <label 
                  key={area.name}
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-[#E94560]/50 transition-all"
                >
                  <input
                    type="checkbox"
                    name={area.name}
                    checked={formData[area.name]}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-[#E94560] rounded border-gray-300 focus:ring-[#E94560]"
                  />
                  <span>{area.label}</span>
                </label>
              ))}
            </div>
          </div>
        </>
      );
    })()}
  </div>
)}
            {/* Step 3: Timeline */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-8">Project Timeline</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className={inputClasses}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date Flexibility
                  </label>
                  <select
                    name="flexibility"
                    value={formData.flexibility}
                    onChange={handleInputChange}
                    className={selectClasses}
                    style={selectStyles}
                  >
                    <option value="">Select flexibility</option>
                    {flexibilityOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Timeframe
                  </label>
                  <select
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleInputChange}
                    className={selectClasses}
                    style={selectStyles}
                  >
                    <option value="">Select timeframe</option>
                    {timeframeOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
            {/* Step 4: Personal Details */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-8">Personal Information</h2>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="123 Main St, City, State"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    rows={4}
                    className={inputClasses}
                    placeholder="Any additional details about your project..."
                  />
                </div>
              </div>
            )}

            {/* Step 5: Review & Submit */}
            {step === 5 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold mb-8">Review Your Quote Request</h2>

                <div className="space-y-6">
                  {/* Service Details */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-lg mb-4">Service Details</h3>
                    <div className="grid gap-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service Type:</span>
                        <span className="font-medium capitalize">{formData.serviceType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Property Type:</span>
                        <span className="font-medium capitalize">{formData.propertyType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Project Scope:</span>
                        <span className="font-medium capitalize">{formData.projectScope}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-lg mb-4">Project Details</h3>
                    <div className="grid gap-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Number of Rooms:</span>
                        <span className="font-medium">{formData.roomCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Square Footage:</span>
                        <span className="font-medium">{formData.squareFootage} sq ft</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Areas to Paint:</span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {Object.entries(formData)
                            .filter(([key, value]) => typeof value === 'boolean' && value)
                            .map(([key]) => (
                              <span key={key} className="px-3 py-1 bg-[#E94560]/10 text-[#E94560] rounded-full text-sm">
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-lg mb-4">Timeline</h3>
                    <div className="grid gap-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Start Date:</span>
                        <span className="font-medium">{formData.startDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Flexibility:</span>
                        <span className="font-medium capitalize">{formData.flexibility?.replace(/-/g, ' ')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Timeframe:</span>
                        <span className="font-medium capitalize">{formData.timeframe?.replace(/-/g, ' ')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-lg mb-4">Personal Information</h3>
                    <div className="grid gap-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Name:</span>
                        <span className="font-medium">{formData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Email:</span>
                        <span className="font-medium">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Phone:</span>
                        <span className="font-medium">{formData.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Address:</span>
                        <span className="font-medium">{formData.address}</span>
                      </div>
                    </div>
                  </div>

                  {formData.additionalNotes && (
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-semibold text-lg mb-4">Additional Notes</h3>
                      <p className="text-gray-600">{formData.additionalNotes}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              {step > 1 && (
                <button
                  onClick={handlePrevious}
                  className="px-6 py-3 border-2 border-[#E94560] text-[#E94560] rounded-xl font-medium hover:bg-[#E94560]/5 transition-all duration-300 flex items-center gap-2"
                  disabled={loading}
                >
                  <ArrowLeft className="w-5 h-5" />
                  Previous
                </button>
              )}
              
              {step < 5 ? (
                <button
                  onClick={handleNext}
                  className="ml-auto px-6 py-3 bg-[#E94560] text-white rounded-xl font-medium hover:bg-[#d63d56] transition-all duration-300 flex items-center gap-2"
                >
                  Next
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="ml-auto px-6 py-3 bg-[#E94560] text-white rounded-xl font-medium hover:bg-[#d63d56] transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="animate-pulse">Submitting...</span>
                    </>
                  ) : (
                    <>
                      Submit Quote Request
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuotePage;