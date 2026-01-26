import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  const scrollToSection = (id) => {
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const goToProducts = () => {
    navigate('/products');
    setMobileMenuOpen(false);
  };

  const goToHome = () => {
    navigate('/');
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={goToHome} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg flex items-center justify-center font-bold text-black">
              IS
            </div>
            <div>
              <div className="text-xl font-bold text-white">Infinicue Solutions</div>
              <div className="text-xs text-emerald-400">Simplify | Automate | Resolve</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-emerald-400 transition-colors">
              About Us
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-emerald-400 transition-colors">
              Features
            </button>
            <button onClick={goToProducts} className="text-gray-300 hover:text-emerald-400 transition-colors">
              Hardware
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-emerald-400 transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-emerald-400 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-emerald-400 transition-colors">
              Contact
            </button>
            <Button onClick={() => scrollToSection('contact')} className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-300 hover:text-emerald-400 transition-colors py-2">
              About Us
            </button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left text-gray-300 hover:text-emerald-400 transition-colors py-2">
              Features
            </button>
            <button onClick={goToProducts} className="block w-full text-left text-gray-300 hover:text-emerald-400 transition-colors py-2">
              Hardware
            </button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left text-gray-300 hover:text-emerald-400 transition-colors py-2">
              Pricing
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-300 hover:text-emerald-400 transition-colors py-2">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-300 hover:text-emerald-400 transition-colors py-2">
              Contact
            </button>
            <Button onClick={() => scrollToSection('contact')} className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
              Get Started
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
