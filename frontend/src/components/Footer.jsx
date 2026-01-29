import React from 'react';
import { mockData } from '../mock';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

export const Footer = () => {
  const { company, contactInfo } = mockData;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center font-bold text-black">
                IS
              </div>
              <div>
                <div className="text-xl font-bold text-white">{company.name}</div>
                <div className="text-xs text-green-400">{company.tagline}</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Leading cybersecurity solutions for consent control and fraud mitigation. 
              Protecting your digital assets with SEC@R platform.
            </p>
            <div className="flex items-center space-x-4">
              <a href={contactInfo.socialMedia.linkedin} className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={contactInfo.socialMedia.twitter} className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href={contactInfo.socialMedia.github} className="text-gray-400 hover:text-green-400 transition-colors">
                <Github size={20} />
              </a>
              <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-green-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-green-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-green-400 transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="text-gray-400 hover:text-green-400 transition-colors">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-green-400 transition-colors">
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-green-400 transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-green-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-green-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-green-400 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
