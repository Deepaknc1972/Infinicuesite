import React from 'react';
import { Card, CardContent } from './ui/card';
import { Shield, Database, UserX, Lock, Eye, CheckCircle2 } from 'lucide-react';

export const PrivacyFirst = () => {
  const privacyFeatures = [
    { icon: UserX, title: "Zero Customer Profiling", description: "No user profiles or behavioral patterns created." },
    { icon: Database, title: "No Data Storage on App", description: "Zero sensitive data stored locally." },
    { icon: Eye, title: "Zero Surveillance", description: "No tracking, monitoring, or behavior analysis." },
    { icon: Lock, title: "Zero-Knowledge Protocol", description: "We verify without knowing your data." }
  ];

  const benefits = ["Your data never leaves your device", "No databases to breach", "Complete anonymity preserved", "GDPR compliant by design", "No data to monetize", "Instant data deletion"];

  return (
    <section className="py-24 relative" style={{ backgroundColor: 'var(--bg-primary)' }} data-testid="privacy-section">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full px-5 py-2 mb-6" style={{ backgroundColor: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
            <Shield size={18} style={{ color: 'var(--accent)' }} />
            <span className="font-medium text-sm" style={{ color: 'var(--accent)' }}>Privacy-First Architecture</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>
            We Don't Store Your Data. <span className="text-gradient">We Don't Need To.</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            SEC@R operates without storing any sensitive data. No profiling, no retention, no compromise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {privacyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="card-hover group rounded-xl text-center" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-light)' }}>
                    <Icon size={32} style={{ color: 'var(--accent)' }} />
                  </div>
                  <h4 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{feature.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="rounded-2xl" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center tracking-tight" style={{ color: 'var(--text-primary)' }}>
                <Lock size={28} className="mr-3" style={{ color: 'var(--accent)' }} />How We Achieve Zero Storage
              </h3>
              <div className="space-y-4">
                {[
                  { num: "1", title: "Real-Time Verification", desc: "Authentication in real-time, data discarded immediately." },
                  { num: "2", title: "Stateless Architecture", desc: "No user state or history maintained." },
                  { num: "3", title: "Device-Side Processing", desc: "All sensitive operations on your device." },
                  { num: "4", title: "Zero-Knowledge Protocol", desc: "Your data remains encrypted end-to-end." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--accent)' }}>
                      <span className="text-white font-semibold text-sm">{item.num}</span>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{item.title}</h5>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center tracking-tight" style={{ color: 'var(--text-primary)' }}>
                <CheckCircle2 size={28} className="mr-3" style={{ color: 'var(--accent)' }} />Why This Matters
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-xl" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--accent)' }} />
                    <span style={{ color: 'var(--text-primary)' }}>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
                <p className="font-medium mb-2" style={{ color: 'var(--text-primary)' }}>The Result:</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Even if attackers breach our systems, they find nothing. SEC@R is un-hackable because there's nothing to hack.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
