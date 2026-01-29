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
    navigate('/approach');
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={goToHome} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center font-bold text-black">
              IS
            </div>
            <div>
              <div className="text-xl font-bold text-white">Infinicue Solutions</div>
              <div className="text-xs bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">Simplify | Automate | Resolve</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => navigate('/')} className="text-gray-300 hover:text-green-400 transition-colors text-base">
              About Us
            </button>
            <button onClick={goToHome} className="text-gray-300 hover:text-green-400 transition-colors text-base">
              Approach
            </button>
            <button onClick={() => navigate('/use-cases')} className="text-gray-300 hover:text-green-400 transition-colors text-base">
              Use Cases
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-green-400 transition-colors text-base">
              Features
            </button>
            <button onClick={goToProducts} className="text-gray-300 hover:text-green-400 transition-colors text-base">
              Products
            </button>
            <button onClick={() => navigate('/mobile-app')} className="text-gray-300 hover:text-green-400 transition-colors text-base">
              Solution
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-green-400 transition-colors text-base">
              Contact
            </button>
            <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold">
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
            <button onClick={() => { navigate('/'); setMobileMenuOpen(false); }} className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors py-2 text-base">
              About Us
            </button>
            <button onClick={goToHome} className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors py-2 text-base">
              Approach
            </button>
            <button onClick={() => { navigate('/use-cases'); setMobileMenuOpen(false); }} className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors py-2 text-base">
              Use Cases
            </button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors py-2 text-base">
              Features
            </button>
            <button onClick={goToProducts} className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors py-2 text-base">
              Products
            </button>
            <button onClick={() => { navigate('/mobile-app'); setMobileMenuOpen(false); }} className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors py-2 text-base">
              Solution
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors py-2 text-base">
              Contact
            </button>
            <Button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold">
              Get Started
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
