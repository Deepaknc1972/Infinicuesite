import React from 'react';
import { Card, CardContent } from './ui/card';
import { UserX, Fingerprint, Mail, Smartphone, Radio, CreditCard, Shield, FileWarning, CheckCircle2 } from 'lucide-react';

export const ThreatsPrevented = () => {
  const threats = [
    { icon: UserX, title: "Impersonation Attacks", description: "Multi-device authentication prevents attackers from impersonating legitimate users." },
    { icon: Fingerprint, title: "Synthetic Identity Fraud", description: "SEC@R's Data Principal verification blocks fraudulent identities." },
    { icon: Mail, title: "Phishing Scams", description: "Even if credentials are stolen, data cannot be activated without consent." },
    { icon: Smartphone, title: "SIM Swap Attacks", description: "Multi-layer authentication prevents SIM swapping techniques." },
    { icon: Radio, title: "SS7 Attacks", description: "Consent-first architecture neutralizes SS7 protocol vulnerabilities." },
    { icon: CreditCard, title: "BIN Attacks", description: "Transaction blocking prevents unauthorized financial transactions." },
    { icon: FileWarning, title: "PII Data Misuse", description: "Stolen PII becomes unusable without Data Principal consent." },
    { icon: Shield, title: "Identity Document Fraud", description: "Real-time authentication protects against document misuse." }
  ];

  return (
    <section className="py-24 bg-[#F5F5F7] relative" data-testid="threats-section">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="overline text-[#0071E3] mb-4 block">Threats Prevented</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">
            Comprehensive Protection
          </h2>
          <p className="text-lg text-[#86868B] max-w-3xl mx-auto">
            SEC@R prevents sophisticated fraud attacks by making stolen data and credentials completely worthless.
          </p>
        </div>

        {/* Threats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {threats.map((threat, index) => {
            const Icon = threat.icon;
            return (
              <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group rounded-2xl">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mb-4 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-[#0071E3]/10 transition-colors">
                    <Icon className="text-red-400 group-hover:text-[#0071E3] transition-colors" size={28} />
                  </div>
                  <h4 className="text-lg font-semibold text-[#1D1D1F] mb-2 group-hover:text-[#0071E3] transition-colors">
                    {threat.title}
                  </h4>
                  <p className="text-[#86868B] text-sm leading-relaxed">
                    {threat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="max-w-5xl mx-auto">
          <Card className="bg-white border border-gray-200 shadow-lg rounded-3xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-[#1D1D1F] mb-4 flex items-center">
                    <Shield className="text-[#0071E3] mr-2" size={24} />
                    Protected Identity Documents
                  </h4>
                  <div className="space-y-2 text-[#86868B]">
                    {["Passport Numbers", "AADHAAR (India)", "PAN Card", "Voter ID", "Social Security Number", "Driver's License"].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle2 className="text-[#0071E3]" size={16} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#F5F5F7] rounded-2xl p-6 text-center">
                      <div className="text-3xl font-semibold text-[#0071E3] stat-number">100%</div>
                      <div className="text-xs text-[#86868B] mt-1">Fraud Prevention</div>
                    </div>
                    <div className="bg-[#F5F5F7] rounded-2xl p-6 text-center">
                      <div className="text-3xl font-semibold text-[#0071E3] stat-number">$0</div>
                      <div className="text-xs text-[#86868B] mt-1">Fraud Losses</div>
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
