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
    <section id="features" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">Features</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Comprehensive Security Solutions</h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                className="glass overflow-hidden group cursor-pointer hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 glass-emerald rounded-lg flex items-center justify-center">
                    <Icon className="text-cyan-400" size={24} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
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
