import React from 'react';
import { Card, CardContent } from './ui/card';
import { UserX, Fingerprint, Mail, Smartphone, Radio, CreditCard, Shield, FileWarning } from 'lucide-react';

export const ThreatsPrevented = () => {
  const threats = [
    {
      icon: UserX,
      title: "Impersonation Attacks",
      description: "Multi-device authentication prevents attackers from impersonating legitimate users, even with stolen credentials."
    },
    {
      icon: Fingerprint,
      title: "Synthetic Identity Fraud",
      description: "SEC@R's Data Principal verification blocks fraudulent identities created from combining real and fake information."
    },
    {
      icon: Mail,
      title: "Phishing Scams",
      description: "Even if phishing attacks succeed in stealing credentials, the data cannot be activated without proper multi-device consent."
    },
    {
      icon: Smartphone,
      title: "SIM Swap Attacks",
      description: "Multi-layer authentication prevents attackers from hijacking accounts through SIM swapping techniques."
    },
    {
      icon: Radio,
      title: "SS7 Attacks",
      description: "Consent-first architecture neutralizes SS7 protocol vulnerabilities that intercept SMS and calls for authentication bypass."
    },
    {
      icon: CreditCard,
      title: "BIN Attacks",
      description: "Transaction blocking prevents Bank Identification Number attacks from processing unauthorized financial transactions."
    },
    {
      icon: FileWarning,
      title: "PII Data Misuse",
      description: "Stolen PII data (Passport, AADHAAR, PAN, Voter ID, SSN) becomes unusable without Data Principal consent verification."
    },
    {
      icon: Shield,
      title: "Identity Document Fraud",
      description: "Protects against misuse of identity documents by requiring real-time authentication from the rightful owner."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">Threats Prevented</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Protecting Banks and Customers from Cyber Fraud
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            SEC@R prevents the most sophisticated fraud attacks by making stolen data and credentials worthless. 
            Even with compromised PII or identity documents, attackers cannot proceed without Data Principal consent.
          </p>
        </div>

        {/* Threats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {threats.map((threat, index) => {
            const Icon = threat.icon;
            return (
              <Card 
                key={index}
                className="glass group hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="w-14 h-14 mb-4 bg-red-500/10 rounded-xl flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                    <Icon className="text-red-400 group-hover:text-purple-400 transition-colors duration-300" size={28} />
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {threat.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {threat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="max-w-5xl mx-auto">
          <Card className="glass-emerald">
            <CardContent className="p-12 text-center">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                    <Shield className="text-purple-400 mr-2" size={24} />
                    Protected Identity Documents
                  </h4>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Passport Numbers</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>AADHAAR (India)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>PAN Card (India)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Voter ID</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Social Security Number (SSN)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Driver's License</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    Real-World Impact
                  </h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    By preventing the utility of stolen PII and identity documents, SEC@R protects both financial institutions 
                    and their customers from becoming victims of cyber fraud. The consent-first approach ensures that even in 
                    the event of a data breach, the stolen information remains useless to attackers.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-black/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-purple-400">100%</div>
                      <div className="text-xs text-gray-400">Fraud Prevention Rate</div>
                    </div>
                    <div className="bg-black/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-purple-400">$0</div>
                      <div className="text-xs text-gray-400">Fraud Losses</div>
                    </div>
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
