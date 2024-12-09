"use client";
import { useState } from "react";
import {
  Building2,
  Ruler,
  HardHat,
  Menu,
  X,
  Paintbrush,
  LayoutGrid,
  Wrench,
  GlassWater,
  Droplets,
  Grid3X3,
  Pipette,
  Plug,
  Hammer,
  Maximize,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Construction & Renovation",
    items: [
      {
        name: "Painting",
        icon: <Paintbrush className="w-6 h-6 text-[#E94560]" />,
        description: "Expert painting services for all needs",
        href: "/services/painting",
      },
      {
        name: "False Ceiling",
        icon: <LayoutGrid className="w-6 h-6 text-[#E94560]" />,
        description: "Stylish and durable ceiling solutions",
        href: "/services/false-ceiling",
      },
      {
        name: "Fabrication",
        icon: <Wrench className="w-6 h-6 text-[#E94560]" />,
        description: "Custom metal and glass fabrication",
        href: "/services/fabrication",
      },
      {
        name: "Glass Work",
        icon: <GlassWater className="w-6 h-6 text-[#E94560]" />,
        description: "High-quality glass installations",
        href: "/services/glass-work",
      },
      {
        name: "Waterproofing",
        icon: <Droplets className="w-6 h-6 text-[#E94560]" />,
        description: "Reliable waterproofing solutions",
        href: "/services/waterproofing",
      },
      {
        name: "Tiles & Granite Work",
        icon: <Grid3X3 className="w-6 h-6 text-[#E94560]" />,
        description: "Elegant tile and granite designs",
        href: "/services/tiles",
      },
      {
        name: "Plumbing",
        icon: <Pipette className="w-6 h-6 text-[#E94560]" />,
        description: "Comprehensive plumbing services",
        href: "/services/plumbing",
      },
      {
        name: "Electrical",
        icon: <Plug className="w-6 h-6 text-[#E94560]" />,
        description: "Efficient and safe electrical work",
        href: "/services/electrical",
      },
      {
        name: "Carpentry",
        icon: <Hammer className="w-6 h-6 text-[#E94560]" />,
        description: "Skilled woodwork and carpentry",
        href: "/services/carpentry",
      },
      {
        name: "Area Extension",
        icon: <Maximize className="w-6 h-6 text-[#E94560]" />,
        description: "Expand your living spaces seamlessly",
        href: "/services/area-extension",
      },
    ],
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/helpman-logo.png"
              width={200}
              height={100}
              alt="Helpman Logo"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            <nav className="flex space-x-8 items-center">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#E94560] py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 group-hover:text-[#E94560] py-2 text-sm font-medium transition-colors">
                  <span>Services</span>
                  <svg
                    className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Mega Menu */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-4xl mt-2 py-4 px-4 bg-white rounded-lg shadow-xl border-t-2 border-[#E94560] grid grid-cols-2 gap-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-50">
                  {services[0].items.map((subItem, idx) => (
                    <Link
                      key={idx}
                      href={subItem.href}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-[#E94560] transition-all duration-200"
                    >
                      <div className="flex-shrink-0">{subItem.icon}</div>
                      <div>
                        <h3 className="text-sm font-medium">{subItem.name}</h3>
                        <p className="text-xs text-gray-500 line-clamp-1">
                          {subItem.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/process"
                className="text-gray-700 hover:text-[#E94560] py-2 text-sm font-medium transition-colors"
              >
                Our Process
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#E94560] py-2 text-sm font-medium transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#E94560] py-2 text-sm font-medium transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>
          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-8 py-3 bg-[#E94560] text-white rounded-lg text-sm font-medium hover:bg-[#d63d56] transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 top-20 bg-white z-50 transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="container mx-auto p-6 space-y-6">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-xl text-gray-700 hover:text-[#E94560] font-medium transition-colors"
            >
              Home
            </Link>
            <div className="space-y-4">
              <span className="block text-xl text-gray-700 font-medium">
                Services
              </span>
              <div className="grid gap-4 pl-4">
                {services[0].items.map((subItem, idx) => (
                  <Link
                    key={idx}
                    href={subItem.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 text-gray-600 hover:text-[#E94560] transition-colors"
                  >
                    {subItem.icon}
                    <span className="text-base">{subItem.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/process"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-xl text-gray-700 hover:text-[#E94560] font-medium transition-colors"
            >
              Our Process
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-xl text-gray-700 hover:text-[#E94560] font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-xl text-gray-700 hover:text-[#E94560] font-medium transition-colors"
            >
              Contact Us
            </Link>

            {/* Mobile CTA Buttons */}
            <div className="space-y-4 pt-6">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-4 bg-[#E94560] text-white text-center rounded-lg font-medium hover:bg-[#d63d56] transition-colors"
              >
                Get Quote
              </Link>
              <Link
                href="/calculator"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-4 border-2 border-[#E94560] text-[#E94560] text-center rounded-lg font-medium hover:bg-[#E94560]/5 transition-colors"
              >
                Cost Calculator
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
