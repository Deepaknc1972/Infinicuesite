import React from 'react';
import { mockData } from '../mock';
import { Shield } from 'lucide-react';

export const AboutUs = () => {
  const { aboutUs } = mockData;

  return (
    <section id="about" className="py-24 bg-[#0A192F]" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="overline text-[#64FFDA] mb-4 block">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{aboutUs.title}</h2>
            </div>
            
            <p className="text-lg text-[#8892B0] leading-relaxed">
              {aboutUs.description}
            </p>

            <div className="glass-teal rounded-xl p-6">
              <p className="text-lg text-[#CCD6F6] italic leading-relaxed">
                "{aboutUs.mission}"
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {aboutUs.stats.map((stat, index) => (
                <div key={index} className="bg-[#112240]/60 border border-[#1E2D4A] rounded-xl p-6 hover:border-[#64FFDA]/50 hover:-translate-y-1 transition-all duration-300">
                  <div className="text-3xl font-bold text-[#64FFDA] mb-2 stat-number">{stat.value}</div>
                  <div className="text-sm text-[#8892B0]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden border border-[#1E2D4A]">
              <img 
                src={aboutUs.image} 
                alt="About Infinicue Solutions" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-transparent to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-[#112240]/90 backdrop-blur-md border border-[#1E2D4A] rounded-xl p-6">
              <Shield className="text-[#64FFDA] mb-2" size={32} />
              <div className="text-2xl font-bold text-white stat-number">500+</div>
              <div className="text-sm text-[#8892B0]">Protected Organizations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
