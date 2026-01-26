import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { mockData } from '../mock';

export const Hero = () => {
  const { hero } = mockData;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={hero.image} 
          alt="Cybersecurity Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        {/* Product Badge */}
        <div className="inline-flex items-center space-x-2 glass-emerald rounded-full px-6 py-2 mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-emerald-400 font-medium">SEC@R - Consent at Real-Time</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
          {hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Button 
            size="lg" 
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-6 text-lg group"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            {hero.cta}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-8 py-6 text-lg"
          >
            <Play className="mr-2" size={20} />
            {hero.secondaryCta}
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-500 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-emerald-500/20 rounded flex items-center justify-center text-emerald-400 text-xs font-bold">✓</div>
            <span>SOC 2 Certified</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-emerald-500/20 rounded flex items-center justify-center text-emerald-400 text-xs font-bold">✓</div>
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-emerald-500/20 rounded flex items-center justify-center text-emerald-400 text-xs font-bold">✓</div>
            <span>ISO 27001</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-emerald-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
