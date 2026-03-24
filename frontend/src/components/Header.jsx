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
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200/50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={goToHome} 
            className="flex items-center space-x-3 group"
            data-testid="logo-home-btn"
          >
            <div className="w-10 h-10 bg-[#1D1D1F] rounded-xl flex items-center justify-center font-bold text-white text-lg tracking-tight">
              IS
            </div>
            <div>
              <div className="text-lg font-semibold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors">Infinicue Solutions</div>
              <div className="text-xs text-[#86868B] tracking-wide">Simplify | Automate | Resolve</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-[#1D1D1F] hover:text-[#0071E3] transition-colors text-sm font-medium"
              data-testid="nav-about"
            >
              About Us
            </button>
            <button 
              onClick={() => navigate('/use-cases')} 
              className="text-[#1D1D1F] hover:text-[#0071E3] transition-colors text-sm font-medium"
              data-testid="nav-use-cases"
            >
              Use Cases
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-[#1D1D1F] hover:text-[#0071E3] transition-colors text-sm font-medium"
              data-testid="nav-features"
            >
              Features
            </button>
            <button 
              onClick={goToProducts} 
              className="text-[#1D1D1F] hover:text-[#0071E3] transition-colors text-sm font-medium"
              data-testid="nav-products"
            >
              Products
            </button>
            <button 
              onClick={() => navigate('/mobile-app')} 
              className="text-[#1D1D1F] hover:text-[#0071E3] transition-colors text-sm font-medium"
              data-testid="nav-solution"
            >
              Solution
            </button>
            <button 
              onClick={() => scrollToSection('architecture')} 
              className="text-[#1D1D1F] hover:text-[#0071E3] transition-colors text-sm font-medium"
              data-testid="nav-architecture"
            >
              Architecture
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-[#1D1D1F] hover:text-[#0071E3] transition-colors text-sm font-medium"
              data-testid="nav-contact"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium px-6 rounded-full"
              data-testid="nav-get-started-btn"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#1D1D1F] p-2"
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-gray-200 pt-4" data-testid="mobile-menu">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-[#1D1D1F] hover:text-[#0071E3] transition-colors py-2">
              About Us
            </button>
            <button onClick={() => { navigate('/use-cases'); setMobileMenuOpen(false); }} className="block w-full text-left text-[#1D1D1F] hover:text-[#0071E3] transition-colors py-2">
              Use Cases
            </button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left text-[#1D1D1F] hover:text-[#0071E3] transition-colors py-2">
              Features
            </button>
            <button onClick={goToProducts} className="block w-full text-left text-[#1D1D1F] hover:text-[#0071E3] transition-colors py-2">
              Products
            </button>
            <button onClick={() => { navigate('/mobile-app'); setMobileMenuOpen(false); }} className="block w-full text-left text-[#1D1D1F] hover:text-[#0071E3] transition-colors py-2">
              Solution
            </button>
            <button onClick={() => scrollToSection('architecture')} className="block w-full text-left text-[#1D1D1F] hover:text-[#0071E3] transition-colors py-2">
              Architecture
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-[#1D1D1F] hover:text-[#0071E3] transition-colors py-2">
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="w-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium rounded-full"
            >
              Get Started
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
