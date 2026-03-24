import React from 'react';
import { Card, CardContent } from './ui/card';
import { Shield, Database, UserX, Lock, Eye, Server, CheckCircle2 } from 'lucide-react';

export const PrivacyFirst = () => {
  const privacyFeatures = [
    { icon: UserX, title: "Zero Customer Profiling", description: "SEC@R never creates user profiles or behavioral patterns. Your activities remain private." },
    { icon: Database, title: "No Data Storage on App", description: "The mobile app stores zero sensitive data locally. All authentication happens in real-time." },
    { icon: Server, title: "No Backend Data Storage", description: "Our backend servers don't store any sensitive user data. We verify without retention." },
    { icon: Eye, title: "Zero Surveillance", description: "We don't track, monitor, or analyze your behavior. Focus on consent verification only." }
  ];

  const benefits = [
    "Your data never leaves your device",
    "No databases to breach",
    "Complete anonymity preserved",
    "GDPR compliant by design",
    "No data to monetize",
    "Instant data deletion"
  ];

  return (
    <section className="py-24 bg-white relative" data-testid="privacy-section">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#0071E3]/10 rounded-full px-5 py-2 mb-6">
            <Shield className="text-[#0071E3]" size={18} />
            <span className="text-[#0071E3] font-medium text-sm">Privacy-First Architecture</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">
            We Don't Store Your Data.
            <span className="block text-[#0071E3] mt-2">We Don't Need To.</span>
          </h2>
          <p className="text-lg text-[#86868B] max-w-3xl mx-auto">
            SEC@R operates without storing any sensitive data. No customer profiling, no data retention, no privacy compromise.
          </p>
        </div>

        {/* Privacy Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {privacyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-[#F5F5F7] border-0 shadow-none hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#0071E3]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#0071E3]/20 transition-colors">
                    <Icon className="text-[#0071E3]" size={32} />
                  </div>
                  <h4 className="text-lg font-semibold text-[#1D1D1F] mb-3">{feature.title}</h4>
                  <p className="text-[#86868B] text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-[#F5F5F7] border-0 rounded-3xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-6 flex items-center tracking-tight">
                  <Lock className="text-[#0071E3] mr-3" size={28} />
                  How We Achieve Zero Storage
                </h3>
                <div className="space-y-4">
                  {[
                    { num: "1", title: "Real-Time Verification", desc: "Authentication happens in real-time. Session data is immediately discarded." },
                    { num: "2", title: "Stateless Architecture", desc: "Our system operates without maintaining user state or history." },
                    { num: "3", title: "Device-Side Processing", desc: "All sensitive operations happen on your device." },
                    { num: "4", title: "Zero-Knowledge Protocol", desc: "We verify without knowing. Your data remains encrypted end-to-end." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-[#0071E3] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-semibold text-sm">{item.num}</span>
                      </div>
                      <div>
                        <h5 className="text-[#1D1D1F] font-semibold mb-1">{item.title}</h5>
                        <p className="text-[#86868B] text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-white border border-gray-200 shadow-lg rounded-3xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-6 flex items-center tracking-tight">
                  <CheckCircle2 className="text-[#0071E3] mr-3" size={28} />
                  Why This Matters
                </h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-xl bg-[#F5F5F7]">
                      <CheckCircle2 className="text-[#0071E3] flex-shrink-0" size={20} />
                      <span className="text-[#1D1D1F]">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-[#0071E3]/5 rounded-2xl border border-[#0071E3]/20">
                  <p className="text-[#1D1D1F] font-medium mb-2">The Result:</p>
                  <p className="text-[#86868B] text-sm leading-relaxed">
                    Even if attackers breach our systems, they find nothing. SEC@R is un-hackable because there's nothing to hack.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
