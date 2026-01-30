import React from 'react';
import { Card, CardContent } from './ui/card';
import { Shield, Database, UserX, Lock, Eye, Server, Smartphone, CheckCircle2 } from 'lucide-react';

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
    <section className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-emerald rounded-full px-6 py-2 mb-6">
            <Shield className="text-green-400" size={20} />
            <span className="text-green-400 font-medium">Privacy-First Architecture</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            We Don't Store Your Data.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500 mt-2">
              We Don't Need To.
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Unlike traditional security solutions, SEC@R operates without storing any sensitive data on the app or backend servers. 
            No customer profiling, no data retention, no privacy compromise.
          </p>
        </div>

        {/* Privacy Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {privacyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="glass group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500/20 to-green-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="text-green-400" size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{feature.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* How It Works - Privacy Edition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Explanation */}
          <div>
            <Card className="glass-gradient">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Lock className="text-green-400 mr-3" size={28} />
                  How We Achieve Zero Storage
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-400 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">Real-Time Verification Only</h5>
                      <p className="text-gray-400 text-sm">Authentication happens in real-time. Once verified, the session data is immediately discarded.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-400 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">Stateless Architecture</h5>
                      <p className="text-gray-400 text-sm">Our system operates without maintaining user state or history. Each request is independent.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-400 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">Device-Side Processing</h5>
                      <p className="text-gray-400 text-sm">All sensitive operations happen on your device. Only consent decisions are transmitted.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-400 font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">Zero-Knowledge Protocol</h5>
                      <p className="text-gray-400 text-sm">We verify without knowing. Your data remains encrypted end-to-end throughout the process.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Benefits */}
          <div>
            <Card className="glass">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <CheckCircle2 className="text-green-500 mr-3" size={28} />
                  Why This Matters
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-green-500/5 to-green-500/5 border border-white/5">
                      <CheckCircle2 className="text-green-400 flex-shrink-0" size={20} />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-green-500/10 rounded-xl border border-green-500/20">
                  <p className="text-white font-semibold mb-2">The Result:</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
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
          <Card className="glass-strong">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Traditional Security vs SEC@R</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Traditional */}
                <div className="space-y-3">
                  <h4 className="text-red-400 font-bold text-lg mb-4 flex items-center">
                    <Database className="mr-2" size={20} />
                    Traditional Security
                  </h4>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-400 text-sm">Stores user credentials</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-400 text-sm">Creates behavioral profiles</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-400 text-sm">Maintains activity logs</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-400 text-sm">Vulnerable to database breaches</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-400 text-sm">Requires data protection compliance</span>
                  </div>
                </div>

                {/* SEC@R */}
                <div className="space-y-3">
                  <h4 className="text-green-400 font-bold text-lg mb-4 flex items-center">
                    <Shield className="mr-2" size={20} />
                    SEC@R Privacy-First
                  </h4>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-300 text-sm">Zero credential storage</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-300 text-sm">No profiling whatsoever</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-300 text-sm">No activity tracking</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-300 text-sm">Nothing to breach or steal</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-gray-300 text-sm">Privacy by design, not compliance</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
