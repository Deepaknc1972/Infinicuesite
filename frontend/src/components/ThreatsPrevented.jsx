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
    <section className="py-24 bg-[#0A192F] relative overflow-hidden" data-testid="threats-section">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="overline text-[#64FFDA] mb-4 block">Threats Prevented</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Protecting Banks and Customers from Cyber Fraud
          </h2>
          <p className="text-base md:text-lg text-[#8892B0] max-w-3xl mx-auto">
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
                className="bg-[#112240]/60 border-[#1E2D4A] hover:border-[#64FFDA]/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="w-14 h-14 mb-4 bg-red-500/10 rounded-xl flex items-center justify-center group-hover:bg-[#64FFDA]/10 transition-colors duration-300">
                    <Icon className="text-red-400 group-hover:text-[#64FFDA] transition-colors duration-300" size={28} />
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#64FFDA] transition-colors">
                    {threat.title}
                  </h4>
                  <p className="text-[#8892B0] text-sm leading-relaxed">
                    {threat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="max-w-5xl mx-auto">
          <Card className="glass-teal">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Shield className="text-[#64FFDA] mr-2" size={24} />
                    Protected Identity Documents
                  </h4>
                  <div className="space-y-2 text-[#CCD6F6]">
                    {["Passport Numbers", "AADHAAR (India)", "PAN Card (India)", "Voter ID", "Social Security Number (SSN)", "Driver's License"].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#64FFDA] rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4">
                    Real-World Impact
                  </h4>
                  <p className="text-[#CCD6F6] leading-relaxed mb-4">
                    By preventing the utility of stolen PII and identity documents, SEC@R protects both financial institutions 
                    and their customers from becoming victims of cyber fraud.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-[#0A192F]/50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-[#64FFDA] stat-number">100%</div>
                      <div className="text-xs text-[#8892B0]">Fraud Prevention Rate</div>
                    </div>
                    <div className="bg-[#0A192F]/50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-[#64FFDA] stat-number">$0</div>
                      <div className="text-xs text-[#8892B0]">Fraud Losses</div>
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
