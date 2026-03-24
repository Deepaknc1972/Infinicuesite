import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { mockData } from '../mock';

export const Hero = () => {
  const { hero } = mockData;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20" data-testid="hero-section">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F7] via-white to-white"></div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 z-10 text-center">
        {/* Product Badge */}
        <div className="inline-flex items-center space-x-2 bg-[#F5F5F7] rounded-full px-5 py-2 mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-[#0071E3] rounded-full"></div>
          <span className="text-[#1D1D1F] font-medium text-sm">SEC@R - Consent at Real-Time</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#1D1D1F] mb-6 leading-tight animate-slide-up tracking-tight">
          Make Stolen Data
          <span className="block text-[#0071E3]">Worthless.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#86868B] mb-12 max-w-3xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
          SEC@R prevents fraud by requiring multi-device authentication before data activation. 
          No consent from the Data Principal means no transaction.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Button 
            size="lg" 
            className="bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium px-8 py-6 text-lg rounded-full group"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            data-testid="hero-cta-btn"
          >
            {hero.cta}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-[#1D1D1F] text-[#1D1D1F] hover:bg-[#F5F5F7] px-8 py-6 text-lg rounded-full"
            data-testid="hero-demo-btn"
          >
            <Play className="mr-2" size={20} />
            {hero.secondaryCta}
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-6 text-[#86868B] animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center space-x-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">✓</div>
            <span className="text-[#1D1D1F] text-sm font-medium">SOC 2 Certified</span>
          </div>
          <div className="flex items-center space-x-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">✓</div>
            <span className="text-[#1D1D1F] text-sm font-medium">GDPR Compliant</span>
          </div>
          <div className="flex items-center space-x-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">✓</div>
            <span className="text-[#1D1D1F] text-sm font-medium">ISO 27001</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#86868B] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#86868B] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
