import React from 'react';
import { Card, CardContent } from './ui/card';
import { Shield, Database, UserX, Lock, Eye, Server, CheckCircle2 } from 'lucide-react';

export const PrivacyFirst = () => {
  const privacyFeatures = [
    {
      icon: UserX,
      title: "Zero Customer Profiling",
      description: "SEC@R never creates user profiles or behavioral patterns. Your activities remain completely private and anonymous."
    },
    {
      icon: Database,
      title: "No Data Storage on App",
      description: "The mobile app stores zero sensitive data locally. All authentication happens in real-time without caching personal information."
    },
    {
      icon: Server,
      title: "No Backend Data Storage",
      description: "Our backend servers don't store any sensitive user data. We verify and authorize without retention."
    },
    {
      icon: Eye,
      title: "Zero Surveillance",
      description: "We don't track, monitor, or analyze your behavior. SEC@R focuses solely on real-time consent verification."
    }
  ];

  const benefits = [
    "Your data never leaves your device",
    "No databases to breach or hack",
    "Complete anonymity preserved",
    "GDPR compliant by design",
    "No data to sell or monetize",
    "Instant data deletion guaranteed"
  ];

  return (
    <section className="py-24 bg-[#0A192F] relative overflow-hidden" data-testid="privacy-section">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.2) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(100, 255, 218, 0.15) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-teal rounded-full px-6 py-2 mb-6">
            <Shield className="text-[#64FFDA]" size={20} />
            <span className="text-[#64FFDA] font-medium">Privacy-First Architecture</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            We Don't Store Your Data.
            <span className="block text-[#64FFDA] mt-2">
              We Don't Need To.
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#8892B0] max-w-3xl mx-auto">
            Unlike traditional security solutions, SEC@R operates without storing any sensitive data on the app or backend servers. 
            No customer profiling, no data retention, no privacy compromise.
          </p>
        </div>

        {/* Privacy Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {privacyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-[#112240]/60 border-[#1E2D4A] hover:border-[#64FFDA]/50 transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#64FFDA]/10 rounded-xl flex items-center justify-center group-hover:bg-[#64FFDA]/20 transition-colors">
                    <Icon className="text-[#64FFDA]" size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{feature.title}</h4>
                  <p className="text-[#8892B0] text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* How It Works - Privacy Edition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Explanation */}
          <div>
            <Card className="bg-[#112240]/60 border-[#1E2D4A]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center tracking-tight">
                  <Lock className="text-[#64FFDA] mr-3" size={28} />
                  How We Achieve Zero Storage
                </h3>
                <div className="space-y-4">
                  {[
                    { num: "1", title: "Real-Time Verification Only", desc: "Authentication happens in real-time. Once verified, the session data is immediately discarded." },
                    { num: "2", title: "Stateless Architecture", desc: "Our system operates without maintaining user state or history. Each request is independent." },
                    { num: "3", title: "Device-Side Processing", desc: "All sensitive operations happen on your device. Only consent decisions are transmitted." },
                    { num: "4", title: "Zero-Knowledge Protocol", desc: "We verify without knowing. Your data remains encrypted end-to-end throughout the process." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-[#64FFDA]/10 rounded-md flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-[#64FFDA] font-bold text-sm">{item.num}</span>
                      </div>
                      <div>
                        <h5 className="text-white font-semibold mb-1">{item.title}</h5>
                        <p className="text-[#8892B0] text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Benefits */}
          <div>
            <Card className="bg-[#112240]/60 border-[#1E2D4A]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center tracking-tight">
                  <CheckCircle2 className="text-[#64FFDA] mr-3" size={28} />
                  Why This Matters
                </h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-[#64FFDA]/5 border border-[#1E2D4A]">
                      <CheckCircle2 className="text-[#64FFDA] flex-shrink-0" size={20} />
                      <span className="text-[#CCD6F6]">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-[#64FFDA]/5 rounded-xl border border-[#64FFDA]/20">
                  <p className="text-white font-semibold mb-2">The Result:</p>
                  <p className="text-[#CCD6F6] text-sm leading-relaxed">
                    Even if attackers breach our systems, they find nothing. No databases, no profiles, no sensitive data. 
                    SEC@R is un-hackable because there's nothing to hack.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Comparison */}
        <div className="max-w-5xl mx-auto">
          <Card className="bg-[#112240]/80 border-[#1E2D4A]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center tracking-tight">Traditional Security vs SEC@R</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Traditional */}
                <div className="space-y-3">
                  <h4 className="text-red-400 font-bold text-lg mb-4 flex items-center">
                    <Database className="mr-2" size={20} />
                    Traditional Security
                  </h4>
                  {["Stores user credentials", "Creates behavioral profiles", "Maintains activity logs", "Vulnerable to database breaches", "Requires data protection compliance"].map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#8892B0] text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* SEC@R */}
                <div className="space-y-3">
                  <h4 className="text-[#64FFDA] font-bold text-lg mb-4 flex items-center">
                    <Shield className="mr-2" size={20} />
                    SEC@R Privacy-First
                  </h4>
                  {["Zero credential storage", "No profiling whatsoever", "No activity tracking", "Nothing to breach or steal", "Privacy by design, not compliance"].map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="text-[#64FFDA] flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-[#CCD6F6] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
