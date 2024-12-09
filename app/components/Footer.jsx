"use client"
import React from 'react';
import { Phone, Mail, MessageCircle, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import GetStartedSection from './Home/GetStarted';

const Footer = () => {
  const quickLinks = [
    'Home', 'Services', 'Cost Calculator', 'Our Process', 'About Us', 'Contact Us'
  ];

  const services = [
    'Construction & Renovation',
    'Architectural Services',
    'Structural Services',
    'Project Management Services',
    'Contractor Services'
  ];

  const company = [
    'Vision & Mission',
    'Meet the Team',
    'Testimonials'
  ];

  const support = [
    'FAQs',
    'Complaint Resolution Process',
    'Communication Channels'
  ];

  const legal = [
    'Privacy Policy',
    'Terms & Conditions'
  ];

  return (
    <>
    <GetStartedSection/>
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
            <Image
      src="/images/helpman-logo.png"
      width={200}
      height={100}
      alt="Helpman Logo"
    />
            </div>
            <p className="text-gray-600 mb-4">
              Your trusted partner in construction and renovation services. We bring expertise, quality, and reliability to every project.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-[#E94560]">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-[#E94560]">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-8">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-[#E94560]">{item}</a>
                </li>
              ))}
            </ul>

        
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <a href="tel:+1234567890" className="flex items-center text-gray-600 hover:text-[#E94560]">
                <Phone className="w-5 h-5 mr-2" />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="https://wa.me/1234567890" className="flex items-center text-gray-600 hover:text-[#E94560]">
                <MessageCircle className="w-5 h-5 mr-2" />
                <span>WhatsApp Chat</span>
              </a>
              <a href="mailto:info@helpman.com" className="flex items-center text-gray-600 hover:text-[#E94560]">
                <Mail className="w-5 h-5 mr-2" />
                <span>info@helpman.in</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#E94560]">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#E94560]">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#E94560]">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#E94560]">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 mb-4 md:mb-0">
              © {new Date().getFullYear()} Helpman Services. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legal.map((item, index) => (
                <a key={index} href="#" className="text-gray-600 hover:text-[#E94560]">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;