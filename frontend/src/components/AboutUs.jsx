import React from 'react';
import { mockData } from '../mock';
import { Shield } from 'lucide-react';

export const AboutUs = () => {
  const { aboutUs } = mockData;

  return (
    <section id="about" className="py-24 bg-[#F5F5F7]" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="overline text-[#0071E3] mb-4 block">About Us</span>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">{aboutUs.title}</h2>
            </div>
            
            <p className="text-lg text-[#86868B] leading-relaxed">
              {aboutUs.description}
            </p>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <p className="text-lg text-[#1D1D1F] italic leading-relaxed">
                "{aboutUs.mission}"
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {aboutUs.stats.map((stat, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="text-3xl font-semibold text-[#0071E3] mb-2 stat-number">{stat.value}</div>
                  <div className="text-sm text-[#86868B]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={aboutUs.image} 
                alt="About Infinicue Solutions" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <Shield className="text-[#0071E3] mb-2" size={32} />
              <div className="text-2xl font-semibold text-[#1D1D1F] stat-number">500+</div>
              <div className="text-sm text-[#86868B]">Protected Organizations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
