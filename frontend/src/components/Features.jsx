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
    <section id="features" className="py-24 bg-[#F5F5F7]" data-testid="features-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="overline text-[#0071E3] mb-4 block">Features</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">Comprehensive Security</h2>
          <p className="text-lg text-[#86868B] max-w-3xl mx-auto">
            Protect your business with our advanced suite of cybersecurity features.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <Card 
                key={feature.id} 
                className="bg-white border border-gray-200 overflow-hidden group cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="text-[#0071E3]" size={24} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-[#1D1D1F] mb-3 group-hover:text-[#0071E3] transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-[#86868B] leading-relaxed text-sm">
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
