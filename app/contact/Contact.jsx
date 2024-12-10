"use client"
import React, { useState } from 'react';
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Check,
  X,
  Menu
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Form validation schema could be added here with yup/zod if needed

const ContactPage = () => {
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const scrollToMessageForm = () => {
    const form = document.getElementById('contact-form');
    form?.scrollIntoView({ behavior: 'smooth' });
    setShowMessageForm(true);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      subDetails: 'Mon-Fri from 8am to 6pm',
      action: 'tel:+15551234567',
      btnText: 'Call Now'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'contact@helpman.com',
      subDetails: 'Online support',
      action: 'mailto:contact@helpman.com',
      btnText: 'Send Email'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office',
      details: '123 Business Avenue',
      subDetails: 'New York, NY 10001',
      action: '#map-section',
      btnText: 'Get Directions'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      details: 'Mon - Fri: 8am - 6pm',
      subDetails: 'Sat: 9am - 2pm',
      action: '#schedule-modal',
      btnText: 'Schedule Call'
    }
  ];

  const quickFeatures = [
    {
      text: '24/7 Customer Support',
      icon: <Check className="w-3 h-3 text-[#E94560]" />
    },
    {
      text: 'Free Consultation',
      icon: <Check className="w-3 h-3 text-[#E94560]" />
    },
    {
      text: 'Quick Response Time',
      icon: <Check className="w-3 h-3 text-[#E94560]" />
    },
    {
      text: 'Expert Team',
      icon: <Check className="w-3 h-3 text-[#E94560]" />
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, label: 'Facebook', color: '#1877F2', url: '#' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', color: '#1DA1F2', url: '#' },
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', color: '#E4405F', url: '#' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', color: '#0A66C2', url: '#' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(#E94560_1.4px,transparent_1.4px),linear-gradient(to_right,#E94560_1.4px,transparent_1.4px)] bg-[size:28px_28px] opacity-[0.03]" />
        
        <div className="relative container mx-auto px-4 min-h-screen">
          <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left pt-20 lg:pt-0">
              <div className="inline-flex items-center gap-2 bg-[#E94560]/5 rounded-full px-4 py-2 mb-8">
                <span className="text-[#E94560] animate-pulse">●</span>
                <span className="text-gray-600 text-sm">Get in Touch</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6">
                Let's Discuss Your
                <span className="text-[#E94560] block mt-2">Next Project</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>

              {/* Quick Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {quickFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-[#E94560]/10 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    {feature.text}
                  </div>
                ))}
              </div>

              {/* Contact Options */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setShowScheduleModal(true)}
                  className="w-full sm:w-auto group px-8 py-4 bg-[#E94560] text-white rounded-xl font-medium hover:bg-[#d63d56] transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    Schedule a Call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button
                  onClick={scrollToMessageForm}
                  className="w-full sm:w-auto px-8 py-4 border-2 border-[#E94560] text-[#E94560] rounded-xl font-medium hover:bg-[#E94560]/5 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Right Form */}
            <div className="flex-1 w-full max-w-md lg:max-w-xl">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold mb-6">Quick Contact Form</h2>
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group px-8 py-4 bg-[#E94560] text-white rounded-xl font-medium hover:bg-[#d63d56] transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="group bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#E94560]/10 rounded-xl flex items-center justify-center text-[#E94560] mb-6 group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-[#E94560] font-medium mb-1">{method.details}</p>
                <p className="text-gray-600 text-sm mb-4">{method.subDetails}</p>
                <a
                  href={method.action}
                  className="inline-flex items-center text-[#E94560] hover:gap-2 transition-all"
                >
                  {method.btnText} <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Social Section */}
      <section id="map-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Visit Our Office</h3>
                <div className="flex items-start gap-4 text-gray-600 mb-6">
                  <MapPin className="w-5 h-5 text-[#E94560] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">123 Business Avenue</p>
                    <p>New York, NY 10001</p>
                    <p className="text-sm mt-2">Near Central Station</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 h-[300px] relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <p>Interactive Map</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <p className="text-gray-600 mb-8">
                Follow us on social media for updates, tips, and inspiration for your next project.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center gap-3 p-4 rounded-xl hover:shadow-md transition-all duration-300 bg-gray-50 hover:bg-white group"
                  >
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{ backgroundColor: `${social.color}20` }}
                    >
                      {social.icon}
                    </div>
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>

              <div className="mt-8 p-6 bg-[#E94560]/5 rounded-xl">
                <h4 className="font-semibold mb-2">Business Hours</h4>
                <div className="space-y-2 text-gray-600">
                <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Call Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative animate-fadeIn">
            <button 
              onClick={() => setShowScheduleModal(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-bold mb-6">Schedule a Call</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
                >
                  <option value="">Select a time slot</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Topic of Discussion
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E94560] focus:ring-2 focus:ring-[#E94560]/20 outline-none transition-all"
                >
                  <option value="">Select a topic</option>
                  <option value="construction">Construction Project</option>
                  <option value="renovation">Renovation</option>
                  <option value="painting">Painting Service</option>
                  <option value="consultation">General Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full group px-8 py-4 bg-[#E94560] text-white rounded-xl font-medium hover:bg-[#d63d56] transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  Schedule Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <p className="text-sm text-gray-500 text-center">
                By scheduling a call, you agree to our terms of service and privacy policy.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Success Message Toast - Add state management to show this */}
      <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg hidden">
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5" />
          <span>Message sent successfully!</span>
        </div>
      </div>
    </>
  );
};

export default ContactPage;