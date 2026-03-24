import React from 'react';
import { Card, CardContent } from './ui/card';
import { TrendingUp, DollarSign, Users, Shield, AlertTriangle, Globe } from 'lucide-react';

export const CyberFraudStats = () => {
  const globalStats = [
    {
      icon: DollarSign,
      value: "$8 Trillion",
      label: "Global Cybercrime Cost (2023)",
      description: "Expected to reach $10.5 trillion by 2025",
      trend: "+15% YoY"
    },
    {
      icon: Users,
      value: "4.1 Billion",
      label: "Records Breached (2023)",
      description: "Personal data exposed in data breaches",
      trend: "+72% from 2022"
    },
    {
      icon: AlertTriangle,
      value: "493.33 Million",
      label: "Ransomware Attacks",
      description: "Global ransomware victims in 2023",
      trend: "+37% increase"
    },
    {
      icon: Shield,
      value: "$4.45M",
      label: "Average Data Breach Cost",
      description: "Cost per incident for organizations",
      trend: "+12% from 2022"
    }
  ];

  const fraudTypes = [
    { type: "Identity Theft", victims: "1.4M cases", loss: "$5.8B in losses", percentage: "23%" },
    { type: "Phishing Attacks", victims: "300K+ daily", loss: "$12.5B annually", percentage: "36%" },
    { type: "Card Fraud", victims: "127M victims", loss: "$28.6B globally", percentage: "45%" },
    { type: "Account Takeover", victims: "22.7M accounts", loss: "$11.4B in 2023", percentage: "72%" },
    { type: "SIM Swap Fraud", victims: "68K reported", loss: "$68M stolen", percentage: "400%" },
    { type: "Synthetic Identity", victims: "Unknown scale", loss: "$6B estimated", percentage: "85%" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" data-testid="cyber-fraud-section">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-50 rounded-full px-5 py-2 mb-6">
            <AlertTriangle className="text-red-500" size={18} />
            <span className="text-red-600 font-medium text-sm">Global Crisis</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">
            The Cyber Fraud
            <span className="block text-red-500 mt-2">Pandemic</span>
          </h2>
          <p className="text-lg text-[#86868B] max-w-3xl mx-auto">
            Cybercrime is growing at an alarming rate, costing the global economy trillions annually. 
            Traditional security measures are failing to protect sensitive data.
          </p>
        </div>

        {/* Global Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {globalStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#0071E3]/10">
                      <Icon className="text-[#0071E3]" size={28} />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-red-500 font-semibold flex items-center">
                        <TrendingUp size={12} className="mr-1" />
                        {stat.trend}
                      </div>
                    </div>
                  </div>
                  <div className="text-3xl font-semibold text-[#0071E3] mb-2 stat-number">
                    {stat.value}
                  </div>
                  <div className="text-[#1D1D1F] font-medium mb-2">{stat.label}</div>
                  <div className="text-[#86868B] text-sm">{stat.description}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Fraud Types Breakdown */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-[#1D1D1F] mb-8 text-center tracking-tight">Major Fraud Types & Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fraudTypes.map((fraud, index) => (
              <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-semibold text-[#1D1D1F]">{fraud.type}</h4>
                    <div className="text-right">
                      <div className="text-2xl font-semibold text-red-500 stat-number">{fraud.percentage}</div>
                      <div className="text-xs text-[#86868B]">Growth</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[#86868B] text-sm">Victims:</span>
                      <span className="text-[#0071E3] font-medium">{fraud.victims}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#86868B] text-sm">Financial Loss:</span>
                      <span className="text-[#1D1D1F] font-medium">{fraud.loss}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* The Solution */}
        <Card className="bg-[#F5F5F7] border-0 rounded-3xl">
          <CardContent className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#1D1D1F] mb-6 flex items-center tracking-tight">
                  <Shield className="text-[#0071E3] mr-3" size={32} />
                  The SEC@R Solution
                </h3>
                <p className="text-[#86868B] mb-6">
                  Instead of trying to prevent theft (which often fails), SEC@R makes stolen data completely worthless.
                </p>
                <div className="space-y-3">
                  {["Multi-device authentication required", "Real-time Data Principal verification", "Data remains dormant without consent"].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#0071E3] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-[#1D1D1F]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
                <div className="text-5xl font-semibold text-[#0071E3] mb-2 stat-number">
                  $0
                </div>
                <p className="text-[#1D1D1F] font-medium text-lg">Fraud Losses with SEC@R</p>
                <p className="text-[#86868B] text-sm mt-2">Stolen data = Worthless data</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
