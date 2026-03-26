import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { mockData } from '../mock';
import { useTheme } from '../context/ThemeContext';

export const Hero = () => {
  const { hero } = mockData;
  const { isDark } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ backgroundColor: 'var(--bg-primary)' }} data-testid="hero-section">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{
          background: isDark 
            ? 'radial-gradient(ellipse at top, rgba(14, 165, 233, 0.15) 0%, transparent 50%)' 
            : 'radial-gradient(ellipse at top, rgba(0, 113, 227, 0.08) 0%, transparent 50%)'
        }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 z-0 opacity-30 bg-grid-pattern"></div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 z-10 text-center">
        {/* Product Badge */}
        <div className="inline-flex items-center space-x-2 rounded-full px-5 py-2 mb-8 animate-fade-in" style={{ 
          backgroundColor: 'var(--accent-light)',
          border: '1px solid var(--accent)'
        }}>
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent)' }}></div>
          <span className="font-medium text-sm" style={{ color: 'var(--accent)' }}>SEC@R - Consent at Real-Time</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-slide-up tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Complete
          <span className="text-gradient"> Digital Trust.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto animate-slide-up leading-relaxed" style={{ color: 'var(--text-secondary)', animationDelay: '0.1s' }}>
          End-to-end consent governance with multi-device authentication. 
          Make stolen data worthless with SEC@R's consent-first architecture.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Button 
            size="lg" 
            className="font-semibold px-8 py-6 text-lg rounded-lg group"
            style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF' }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            data-testid="hero-cta-btn"
          >
            Request Demo
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 py-6 text-lg rounded-lg"
            style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
            data-testid="hero-demo-btn"
          >
            <Play className="mr-2" size={20} />
            Explore Platform
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {[
            { value: '5', label: 'BOM Types' },
            { value: '97%', label: 'Self-Hosted' },
            { value: '3', label: 'Indian Frameworks' },
            { value: '99.9%', label: 'Uptime SLA' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold stat-number mb-1" style={{ color: 'var(--accent)' }}>{stat.value}</div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {['CERT-In v2.0 Compliant', 'RBI Advisory', '100% Self-Hosted', 'Air-Gapped Ready'].map((item, i) => (
            <div key={i} className="flex items-center space-x-2 px-4 py-2 rounded-lg" style={{ 
              backgroundColor: 'var(--bg-secondary)', 
              border: '1px solid var(--border)' 
            }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--success)' }}></div>
              <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full flex items-start justify-center p-2" style={{ border: '2px solid var(--border)' }}>
          <div className="w-1 h-3 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
        </div>
      </div>
    </section>
  );
};
