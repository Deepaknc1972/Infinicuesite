import React from 'react';
import { Card, CardContent } from './ui/card';
import { ShieldCheck, Lock, Ban, CheckCircle2 } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    { icon: Lock, title: "Data Remains Dormant", description: "All data is stored inactive. Without consent, it cannot be used." },
    { icon: ShieldCheck, title: "Multi-Device Authentication", description: "SEC@R initiates multi-device layer authentication to verify identity." },
    { icon: CheckCircle2, title: "Consent Verification", description: "System collects consent data points. Only then does data become active." },
    { icon: Ban, title: "Failed Auth Blocks", description: "If authentication fails, transaction is immediately blocked." }
  ];

  return (
    <section className="py-24 relative" style={{ backgroundColor: 'var(--bg-primary)' }} data-testid="how-it-works-section">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="overline mb-4 block" style={{ color: 'var(--accent)' }}>How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>Consent-First Architecture</h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Stolen data cannot be activated without the Data Principal's authenticated consent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(to right, transparent, var(--accent), transparent)', opacity: 0.3 }}></div>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="card-hover relative rounded-xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <CardContent className="p-8 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm z-20" style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF' }}>
                    {index + 1}
                  </div>
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-light)' }}>
                    <Icon size={32} style={{ color: 'var(--accent)' }} />
                  </div>
                  <h4 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{step.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="rounded-2xl" style={{ backgroundColor: 'var(--accent)' }}>
            <CardContent className="p-8 text-center">
              <h4 className="text-2xl font-semibold mb-4 tracking-tight text-white">The Result: Stolen Data Becomes Worthless</h4>
              <p className="text-lg leading-relaxed text-white/80">
                SEC@R eliminates the economic incentive for data theft by making stolen data unusable.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
