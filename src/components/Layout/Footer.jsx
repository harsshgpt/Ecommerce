import React from 'react';
import { ShoppingCart, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4 space-x-2">
              <ShoppingCart className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">TrendWave</span>
            </div>
            <p className="mb-4 text-gray-400">
              A modern e-commerce platform built with React and integrated with FakeStore API. 
              Explore, manage, and discover products with ease.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 transition-colors hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-400 transition-colors hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="/manage" className="text-gray-400 transition-colors hover:text-white">
                  Manage
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/place/Galgotias+University/data=!4m2!3m1!1s0x0:0xd0d60a62e55ab171?sa=X&ved=1t:2428&ictx=111" target='_blank' className="text-gray-400 transition-colors hover:text-white">
                  Location
                </a>
              </li>
              
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
          <p>&copy; 2025 TrendWave. Built with ❤️ by HARSH.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;