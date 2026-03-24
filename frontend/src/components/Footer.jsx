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
    <footer className="bg-[#0A192F] border-t border-[#1E2D4A]" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#64FFDA] rounded-md flex items-center justify-center font-bold text-[#0A192F] text-lg">
                IS
              </div>
              <div>
                <div className="text-lg font-semibold text-white">{company.name}</div>
                <div className="text-xs text-[#64FFDA]">{company.tagline}</div>
              </div>
            </div>
            <p className="text-[#8892B0] mb-4 max-w-md text-sm leading-relaxed">
              Leading cybersecurity solutions for consent control and fraud mitigation. 
              Protecting your digital assets with SEC@R platform.
            </p>
            <div className="flex items-center space-x-4">
              <a href={contactInfo.socialMedia.linkedin} className="text-[#8892B0] hover:text-[#64FFDA] transition-colors" data-testid="footer-linkedin">
                <Linkedin size={20} />
              </a>
              <a href={contactInfo.socialMedia.twitter} className="text-[#8892B0] hover:text-[#64FFDA] transition-colors" data-testid="footer-twitter">
                <Twitter size={20} />
              </a>
              <a href={contactInfo.socialMedia.github} className="text-[#8892B0] hover:text-[#64FFDA] transition-colors" data-testid="footer-github">
                <Github size={20} />
              </a>
              <a href={`mailto:${contactInfo.email}`} className="text-[#8892B0] hover:text-[#64FFDA] transition-colors" data-testid="footer-email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-[#8892B0] hover:text-[#64FFDA] transition-colors text-sm">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('features')} className="text-[#8892B0] hover:text-[#64FFDA] transition-colors text-sm">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="text-[#8892B0] hover:text-[#64FFDA] transition-colors text-sm">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('architecture')} className="text-[#8892B0] hover:text-[#64FFDA] transition-colors text-sm">
                  Architecture
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#8892B0] hover:text-[#64FFDA] transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-[#8892B0] hover:text-[#64FFDA] transition-colors text-sm">
                  API Reference
                </a>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-[#8892B0] hover:text-[#64FFDA] transition-colors text-sm">
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#" className="text-[#8892B0] hover:text-[#64FFDA] transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1E2D4A] pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-[#8892B0] text-sm">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-[#8892B0] hover:text-[#64FFDA] text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-[#8892B0] hover:text-[#64FFDA] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#8892B0] hover:text-[#64FFDA] text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
