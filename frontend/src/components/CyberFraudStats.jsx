import React from 'react';
import { Card, CardContent } from './ui/card';
import { TrendingUp, DollarSign, Users, Shield, AlertTriangle } from 'lucide-react';

export const CyberFraudStats = () => {
  const globalStats = [
    { icon: DollarSign, value: "$8 Trillion", label: "Global Cybercrime Cost", trend: "+15% YoY" },
    { icon: Users, value: "4.1 Billion", label: "Records Breached", trend: "+72% YoY" },
    { icon: AlertTriangle, value: "493M", label: "Ransomware Attacks", trend: "+37% YoY" },
    { icon: Shield, value: "$4.45M", label: "Avg Breach Cost", trend: "+12% YoY" }
  ];

  const fraudTypes = [
    { type: "Identity Theft", victims: "1.4M cases", percentage: "23%" },
    { type: "Phishing Attacks", victims: "300K+ daily", percentage: "36%" },
    { type: "Card Fraud", victims: "127M victims", percentage: "45%" },
    { type: "Account Takeover", victims: "22.7M accounts", percentage: "72%" },
    { type: "SIM Swap Fraud", victims: "68K reported", percentage: "400%" },
    { type: "Synthetic Identity", victims: "Unknown scale", percentage: "85%" }
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }} data-testid="cyber-fraud-section">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full px-5 py-2 mb-6" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}>
            <AlertTriangle size={18} style={{ color: 'var(--error)' }} />
            <span className="font-medium text-sm" style={{ color: 'var(--error)' }}>Global Crisis</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>
            The Cyber Fraud <span style={{ color: 'var(--error)' }}>Pandemic</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Cybercrime is growing at an alarming rate. Traditional security measures are failing.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {globalStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="card-hover rounded-xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-light)' }}>
                      <Icon size={28} style={{ color: 'var(--accent)' }} />
                    </div>
                    <div className="flex items-center text-xs font-semibold" style={{ color: 'var(--error)' }}>
                      <TrendingUp size={12} className="mr-1" />{stat.trend}
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2 stat-number" style={{ color: 'var(--accent)' }}>{stat.value}</div>
                  <div className="font-medium" style={{ color: 'var(--text-primary)' }}>{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Fraud Types */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center tracking-tight" style={{ color: 'var(--text-primary)' }}>Major Fraud Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fraudTypes.map((fraud, index) => (
              <Card key={index} className="card-hover rounded-xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{fraud.type}</h4>
                    <div className="text-2xl font-bold stat-number" style={{ color: 'var(--error)' }}>{fraud.percentage}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Victims:</span>
                    <span className="font-medium" style={{ color: 'var(--accent)' }}>{fraud.victims}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solution Card */}
        <Card className="rounded-2xl" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <CardContent className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  <Shield size={32} className="mr-3" style={{ color: 'var(--accent)' }} />
                  The SEC@R Solution
                </h3>
                <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Instead of trying to prevent theft, SEC@R makes stolen data completely worthless.
                </p>
                <div className="space-y-3">
                  {["Multi-device authentication required", "Real-time Data Principal verification", "Data remains dormant without consent"].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent)' }}>
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span style={{ color: 'var(--text-primary)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <div className="text-5xl font-bold mb-2 stat-number" style={{ color: 'var(--accent)' }}>$0</div>
                <p className="font-medium text-lg" style={{ color: 'var(--text-primary)' }}>Fraud Losses with SEC@R</p>
                <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>Stolen data = Worthless data</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
