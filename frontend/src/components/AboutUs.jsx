import React from 'react';
import { mockData } from '../mock';
import { Users, Target, Award, Shield } from 'lucide-react';

export const AboutUs = () => {
  const { aboutUs } = mockData;

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">{aboutUs.title}</h3>
            </div>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              {aboutUs.description}
            </p>

            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-6">
              <p className="text-lg text-gray-300 italic">
                {aboutUs.mission}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {aboutUs.stats.map((stat, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={aboutUs.image} 
                alt="About Infinicue Solutions" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-8 -left-8 bg-gray-900 border border-emerald-500/30 rounded-xl p-6 backdrop-blur-xl">
              <Shield className="text-emerald-400 mb-2" size={32} />
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-400">Protected Organizations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
