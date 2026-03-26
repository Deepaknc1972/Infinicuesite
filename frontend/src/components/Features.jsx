import React from 'react';
import { mockData } from '../mock';
import { Shield, Smartphone, UserCheck, Ban, Eye, ShieldAlert } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const iconMap = { Shield, Smartphone, UserCheck, Ban, Eye, ShieldAlert };

export const Features = () => {
  const { features } = mockData;

  return (
    <section id="features" className="py-24" style={{ backgroundColor: 'var(--bg-secondary)' }} data-testid="features-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="overline mb-4 block" style={{ color: 'var(--accent)' }}>Features</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>Comprehensive Security</h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Protect your business with our advanced cybersecurity features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <Card key={feature.id} className="card-hover overflow-hidden cursor-pointer rounded-xl group" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg-card), transparent)' }}></div>
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-light)', backdropFilter: 'blur(8px)' }}>
                    <Icon size={24} style={{ color: 'var(--accent)' }} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3 transition-colors" style={{ color: 'var(--text-primary)' }}>{feature.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
