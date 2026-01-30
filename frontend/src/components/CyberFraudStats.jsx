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
      color: "cyan",
      trend: "+15% YoY"
    },
    {
      icon: Users,
      value: "4.1 Billion",
      label: "Records Breached (2023)",
      description: "Personal data exposed in data breaches",
      color: "purple",
      trend: "+72% from 2022"
    },
    {
      icon: AlertTriangle,
      value: "493.33 Million",
      label: "Ransomware Attacks",
      description: "Global ransomware victims in 2023",
      color: "cyan",
      trend: "+37% increase"
    },
    {
      icon: Shield,
      value: "$4.45M",
      label: "Average Data Breach Cost",
      description: "Cost per incident for organizations",
      color: "purple",
      trend: "+12% from 2022"
    }
  ];

  const fraudTypes = [
    {
      type: "Identity Theft",
      victims: "1.4M cases",
      loss: "$5.8B in losses",
      percentage: "23%",
      description: "Of all fraud complaints"
    },
    {
      type: "Phishing Attacks",
      victims: "300K+ daily",
      loss: "$12.5B annually",
      percentage: "36%",
      description: "Success rate on employees"
    },
    {
      type: "Card Fraud",
      victims: "127M victims",
      loss: "$28.6B globally",
      percentage: "45%",
      description: "Increase in contactless fraud"
    },
    {
      type: "Account Takeover",
      victims: "22.7M accounts",
      loss: "$11.4B in 2023",
      percentage: "72%",
      description: "Increase from previous year"
    },
    {
      type: "SIM Swap Fraud",
      victims: "68K reported",
      loss: "$68M stolen",
      percentage: "400%",
      description: "Growth in last 3 years"
    },
    {
      type: "Synthetic Identity",
      victims: "Unknown scale",
      loss: "$6B estimated",
      percentage: "85%",
      description: "Undetected by traditional methods"
    }
  ];

  const regionalStats = [
    { region: "North America", cost: "$1.8T", incidents: "1.2B" },
    { region: "Europe", cost: "$1.2T", incidents: "850M" },
    { region: "Asia Pacific", cost: "$2.1T", incidents: "1.5B" },
    { region: "Latin America", cost: "$90B", incidents: "420M" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 via-black to-gray-950 relative overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(239, 68, 68, 0.4) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-emerald rounded-full px-6 py-2 mb-6">
            <AlertTriangle className="text-red-400" size={20} />
            <span className="text-red-400 font-medium">Global Crisis</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Cyber Fraud
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mt-2">
              Pandemic
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cybercrime is growing at an alarming rate, costing the global economy trillions annually. 
            Traditional security measures are failing to protect sensitive data.
          </p>
        </div>

        {/* Global Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {globalStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="glass relative overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  stat.color === 'cyan' 
                    ? 'bg-gradient-to-br from-purple-500/10 to-purple-500/10' 
                    : 'bg-gradient-to-br from-purple-500/10 to-purple-500/10'
                }`}></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      stat.color === 'cyan' ? 'bg-purple-500/20' : 'bg-purple-500/20'
                    }`}>
                      <Icon className={stat.color === 'cyan' ? 'text-purple-400' : 'text-purple-400'} size={28} />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-red-400 font-semibold flex items-center">
                        <TrendingUp size={12} className="mr-1" />
                        {stat.trend}
                      </div>
                    </div>
                  </div>
                  <div className={`text-4xl font-bold mb-2 ${
                    stat.color === 'cyan' ? 'text-purple-400' : 'text-purple-400'
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-white font-semibold mb-2">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Fraud Types Breakdown */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Major Fraud Types & Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fraudTypes.map((fraud, index) => (
              <Card key={index} className="glass hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold text-white">{fraud.type}</h4>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-400">{fraud.percentage}</div>
                      <div className="text-xs text-gray-400">Growth/Impact</div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Victims:</span>
                      <span className="text-purple-400 font-semibold">{fraud.victims}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Financial Loss:</span>
                      <span className="text-purple-400 font-semibold">{fraud.loss}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs">{fraud.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regional Breakdown */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Regional Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionalStats.map((region, index) => (
              <Card key={index} className="glass-gradient text-center hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <Globe className="text-purple-400 mx-auto mb-4" size={32} />
                  <h4 className="text-xl font-bold text-white mb-4">{region.region}</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Annual Cost</div>
                      <div className="text-2xl font-bold text-purple-400">{region.cost}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Fraud Incidents</div>
                      <div className="text-2xl font-bold text-purple-400">{region.incidents}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* The Problem Summary */}
        <Card className="glass-strong border-red-500/30">
          <CardContent className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <AlertTriangle className="text-red-400 mr-3" size={32} />
                  Why Traditional Security Fails
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">Stolen credentials are used immediately:</span> Once data is breached, attackers can access accounts within minutes.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">Data remains valuable after theft:</span> Traditional security tries to prevent breaches but doesn't address what happens after.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">No real-time consent verification:</span> Systems can't differentiate between legitimate users and attackers with stolen credentials.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">Single point of failure:</span> One compromised password or device gives full access to sensitive data.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/10 rounded-2xl p-6 border border-purple-500/20">
                  <h4 className="text-2xl font-bold text-white mb-4">The SEC@R Solution</h4>
                  <p className="text-gray-300 mb-4">
                    Instead of trying to prevent theft (which often fails), SEC@R makes stolen data completely worthless.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Shield className="text-purple-400 flex-shrink-0" size={16} />
                      <span className="text-gray-300 text-sm">Multi-device authentication required</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="text-purple-400 flex-shrink-0" size={16} />
                      <span className="text-gray-300 text-sm">Real-time Data Principal verification</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="text-purple-400 flex-shrink-0" size={16} />
                      <span className="text-gray-300 text-sm">Data remains dormant without consent</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="text-purple-400 flex-shrink-0" size={16} />
                      <span className="text-gray-300 text-sm">180-second time-limited access</span>
                    </div>
                  </div>
                </div>

                <div className="text-center p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl border border-red-500/20">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-400 mb-2">
                    $0 in Losses
                  </div>
                  <p className="text-white font-semibold">With SEC@R's Consent-First Architecture</p>
                  <p className="text-gray-400 text-sm mt-2">Stolen data = Worthless data</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
