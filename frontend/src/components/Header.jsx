import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme, isDark } = useTheme();
  
  const isHomePage = location.pathname === '/';

  const scrollToSection = (id) => {
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'About Us', action: () => scrollToSection('about') },
    { label: 'Use Cases', action: () => navigate('/use-cases') },
    { label: 'Features', action: () => scrollToSection('features') },
    { label: 'Products', action: () => navigate('/products') },
    { label: 'Solution', action: () => navigate('/mobile-app') },
    { label: 'Architecture', action: () => scrollToSection('architecture') },
    { label: 'Contact', action: () => scrollToSection('contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b" style={{ 
      backgroundColor: 'var(--header-bg)', 
      borderColor: 'var(--border)' 
    }}>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => navigate('/')} className="flex items-center space-x-3 group" data-testid="logo-home-btn">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg" style={{ 
              background: 'linear-gradient(135deg, var(--accent), #22D3EE)',
              color: isDark ? '#090B10' : '#FFFFFF'
            }}>
              IS
            </div>
            <div>
              <div className="text-lg font-semibold transition-colors" style={{ color: 'var(--text-primary)' }}>
                Infinicue Solutions
              </div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Simplify | Automate | Resolve</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, i) => (
              <button 
                key={i} 
                onClick={item.action} 
                className="text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                {item.label}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme} 
              className="theme-toggle"
              data-testid="theme-toggle"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} style={{ color: 'var(--text-primary)' }} /> : <Moon size={20} style={{ color: 'var(--text-primary)' }} />}
            </button>
            
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="font-semibold px-6 rounded-lg"
              style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF' }}
              data-testid="nav-get-started-btn"
            >
              Request Demo
            </Button>
          </div>

          {/* Mobile: Theme Toggle + Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              {isDark ? <Sun size={18} style={{ color: 'var(--text-primary)' }} /> : <Moon size={18} style={{ color: 'var(--text-primary)' }} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2" style={{ color: 'var(--text-primary)' }} data-testid="mobile-menu-toggle">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t pt-4" style={{ borderColor: 'var(--border)' }} data-testid="mobile-menu">
            {navItems.map((item, i) => (
              <button 
                key={i} 
                onClick={() => { item.action(); setMobileMenuOpen(false); }} 
                className="block w-full text-left py-2 transition-colors"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="w-full font-semibold"
              style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF' }}
            >
              Request Demo
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
