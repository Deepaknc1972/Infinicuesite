import React from 'react';
import { Card, CardContent } from './ui/card';
import { UserX, Fingerprint, Mail, Smartphone, Radio, CreditCard, Shield, FileWarning, CheckCircle2 } from 'lucide-react';

export const ThreatsPrevented = () => {
  const threats = [
    { icon: UserX, title: "Impersonation Attacks", description: "Multi-device auth prevents impersonation." },
    { icon: Fingerprint, title: "Synthetic Identity", description: "Data Principal verification blocks fraud." },
    { icon: Mail, title: "Phishing Scams", description: "Stolen credentials can't activate data." },
    { icon: Smartphone, title: "SIM Swap Attacks", description: "Multi-layer auth prevents hijacking." },
    { icon: Radio, title: "SS7 Attacks", description: "Consent-first neutralizes vulnerabilities." },
    { icon: CreditCard, title: "BIN Attacks", description: "Transaction blocking prevents fraud." },
    { icon: FileWarning, title: "PII Data Misuse", description: "Stolen PII unusable without consent." },
    { icon: Shield, title: "Document Fraud", description: "Real-time auth protects documents." }
  ];

  return (
    <section className="py-24 relative" style={{ backgroundColor: 'var(--bg-secondary)' }} data-testid="threats-section">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="overline mb-4 block" style={{ color: 'var(--accent)' }}>Threats Prevented</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>Comprehensive Protection</h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            SEC@R prevents sophisticated fraud attacks by making stolen data worthless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {threats.map((threat, index) => {
            const Icon = threat.icon;
            return (
              <Card key={index} className="card-hover group rounded-xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 mb-4 rounded-xl flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}>
                    <Icon size={28} style={{ color: 'var(--error)' }} className="group-hover:hidden" />
                    <Icon size={28} style={{ color: 'var(--accent)' }} className="hidden group-hover:block" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 transition-colors" style={{ color: 'var(--text-primary)' }}>{threat.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{threat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="rounded-2xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}>
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center" style={{ color: 'var(--text-primary)' }}>
                    <Shield size={24} className="mr-2" style={{ color: 'var(--accent)' }} />Protected Documents
                  </h4>
                  <div className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                    {["Passport Numbers", "AADHAAR (India)", "PAN Card", "Voter ID", "Social Security Number", "Driver's License"].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle2 size={16} style={{ color: 'var(--accent)' }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl p-6 text-center" style={{ backgroundColor: 'var(--accent-light)' }}>
                      <div className="text-3xl font-bold stat-number" style={{ color: 'var(--accent)' }}>100%</div>
                      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Fraud Prevention</div>
                    </div>
                    <div className="rounded-xl p-6 text-center" style={{ backgroundColor: 'var(--accent-light)' }}>
                      <div className="text-3xl font-bold stat-number" style={{ color: 'var(--accent)' }}>$0</div>
                      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Fraud Losses</div>
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
