import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { mockData } from '../mock';

export const Hero = () => {
  const { hero } = mockData;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A192F] pt-20" data-testid="hero-section">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={hero.image} 
          alt="Cybersecurity Background" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0A192F]/95 to-[#0A192F]"></div>
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(30, 45, 74, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 45, 74, 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 z-10 text-center">
        {/* Product Badge */}
        <div className="inline-flex items-center space-x-2 glass-teal rounded-full px-6 py-2 mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-[#64FFDA] rounded-full animate-pulse"></div>
          <span className="text-[#64FFDA] font-medium tracking-wide">SEC@R - Consent at Real-Time</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up tracking-tight">
          {hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-[#8892B0] mb-12 max-w-4xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
          {hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Button 
            size="lg" 
            className="bg-[#64FFDA] hover:bg-[#4CD9B4] text-[#0A192F] font-semibold px-8 py-6 text-lg group"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            data-testid="hero-cta-btn"
          >
            {hero.cta}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10 px-8 py-6 text-lg"
            data-testid="hero-demo-btn"
          >
            <Play className="mr-2" size={20} />
            {hero.secondaryCta}
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-[#8892B0] animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center space-x-2 bg-[#112240]/60 backdrop-blur-md border border-[#1E2D4A] px-4 py-2 rounded-md">
            <div className="w-5 h-5 bg-[#64FFDA]/20 rounded flex items-center justify-center text-[#64FFDA] text-xs font-bold">✓</div>
            <span className="text-[#CCD6F6] text-sm">SOC 2 Certified</span>
          </div>
          <div className="flex items-center space-x-2 bg-[#112240]/60 backdrop-blur-md border border-[#1E2D4A] px-4 py-2 rounded-md">
            <div className="w-5 h-5 bg-[#64FFDA]/20 rounded flex items-center justify-center text-[#64FFDA] text-xs font-bold">✓</div>
            <span className="text-[#CCD6F6] text-sm">GDPR Compliant</span>
          </div>
          <div className="flex items-center space-x-2 bg-[#112240]/60 backdrop-blur-md border border-[#1E2D4A] px-4 py-2 rounded-md">
            <div className="w-5 h-5 bg-[#64FFDA]/20 rounded flex items-center justify-center text-[#64FFDA] text-xs font-bold">✓</div>
            <span className="text-[#CCD6F6] text-sm">ISO 27001</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#64FFDA] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#64FFDA] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
