import React from 'react';
import { mockData } from '../mock';
import { Shield } from 'lucide-react';

export const AboutUs = () => {
  const { aboutUs } = mockData;

  return (
    <section id="about" className="py-24" style={{ backgroundColor: 'var(--bg-secondary)' }} data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="overline mb-4 block" style={{ color: 'var(--accent)' }}>About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>{aboutUs.title}</h2>
            </div>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{aboutUs.description}</p>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
              <p className="text-lg italic leading-relaxed" style={{ color: 'var(--text-primary)' }}>"{aboutUs.mission}"</p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-8">
              {aboutUs.stats.map((stat, index) => (
                <div key={index} className="rounded-xl p-6 card-hover" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                  <div className="text-3xl font-bold mb-2 stat-number" style={{ color: 'var(--accent)' }}>{stat.value}</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
              <img src={aboutUs.image} alt="About Infinicue Solutions" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg-primary), transparent)' }}></div>
            </div>
            <div className="absolute -bottom-8 -left-8 rounded-xl p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}>
              <Shield size={32} className="mb-2" style={{ color: 'var(--accent)' }} />
              <div className="text-2xl font-bold stat-number" style={{ color: 'var(--text-primary)' }}>500+</div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Protected Organizations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
