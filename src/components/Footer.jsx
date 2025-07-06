import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Package className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">ShopHub</span>
            </div>
            <p className="leading-relaxed text-gray-300">
              Your premier destination for quality products at unbeatable prices. 
              We're committed to providing exceptional shopping experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 transition-colors hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/products/electronics" className="text-gray-300 transition-colors hover:text-white">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products/clothing" className="text-gray-300 transition-colors hover:text-white">
                  Fashion
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 transition-colors hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 transition-colors hover:text-white">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 transition-colors hover:text-white">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 transition-colors hover:text-white">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 transition-colors hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="flex-shrink-0 w-5 h-5 text-blue-400" />
                <a className="text-gray-300"href="https://www.google.com/maps/place/Galgotias+University/@28.3668904,77.5413398,17z/data=!3m1!4b1!4m6!3m5!1s0x390cc7365a740e65:0xd0d60a62e55ab171!8m2!3d28.3668904!4d77.5413398!16s%2Fm%2F0gff9fz?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D" target='_blank'>Galgotias Universty</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="flex-shrink-0 w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+91 999999999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="flex-shrink-0 w-5 h-5 text-blue-400" />
                <span className="text-gray-300">harsh@shophub.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between pt-8 mt-8 border-t border-gray-800 md:flex-row">
          <p className="text-sm text-gray-400">
            © 2024 Harsh. All rights reserved.
          </p>
          <div className="flex mt-4 space-x-6 md:mt-0">
            <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;