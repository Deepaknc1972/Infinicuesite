import React from 'react';
import { mockData } from '../mock';
import { Shield, Smartphone, UserCheck, Ban, Eye, ShieldAlert } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const iconMap = {
  Shield: Shield,
  Smartphone: Smartphone,
  UserCheck: UserCheck,
  Ban: Ban,
  Eye: Eye,
  ShieldAlert: ShieldAlert
};

export const Features = () => {
  const { features } = mockData;

  return (
    <section id="features" className="py-24 bg-[#0A192F]" data-testid="features-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="overline text-[#64FFDA] mb-4 block">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Comprehensive Security Solutions</h2>
          <p className="text-base md:text-lg text-[#8892B0] max-w-3xl mx-auto">
            Protect your business with our advanced suite of cybersecurity features designed for the modern enterprise.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <Card 
                key={feature.id} 
                className="bg-[#112240]/60 border-[#1E2D4A] overflow-hidden group cursor-pointer hover:border-[#64FFDA]/50 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] to-transparent"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 glass-teal rounded-lg flex items-center justify-center">
                    <Icon className="text-[#64FFDA]" size={24} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#64FFDA] transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-[#8892B0] leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
