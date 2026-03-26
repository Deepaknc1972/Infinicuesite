import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Wallet, Smartphone, Server, Building2, Clock, Shield, Zap, CheckCircle2, Layers, Radio, Lock } from 'lucide-react';

export const SolutionArchitecture = () => {
  const steps = [
    { step: 1, icon: Wallet, title: "Hardware Trigger", description: "Data Principal opens SEC@R Wallet" },
    { step: 2, icon: Radio, title: "Event Signal", description: "Wallet sends event to SEC@R App" },
    { step: 3, icon: Smartphone, title: "App Processing", description: "SEC@R App initiates authentication" },
    { step: 4, icon: Layers, title: "AMDA System", description: "Multi-Device-Layer Authentication" },
    { step: 5, icon: Server, title: "API Call to Bank", description: "AMDA makes secure API call" },
    { step: 6, icon: CheckCircle2, title: "Data Activation", description: "Bank enables data (180s threshold)" }
  ];

  const apis = [
    { icon: Building2, title: "Banking APIs", endpoints: ["POST /api/auth/enable-data", "POST /api/transaction/authorize"] },
    { icon: Shield, title: "Insurance APIs", endpoints: ["POST /api/policy/activate", "POST /api/claim/authorize"] },
    { icon: Lock, title: "Government APIs", endpoints: ["POST /api/identity/verify", "POST /api/document/authorize"] }
  ];

  return (
    <section id="architecture" className="py-24 relative" style={{ backgroundColor: 'var(--bg-secondary)' }} data-testid="architecture-section">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full px-5 py-2 mb-6" style={{ backgroundColor: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
            <Server size={18} style={{ color: 'var(--accent)' }} />
            <span className="font-medium text-sm" style={{ color: 'var(--accent)' }}>API-Driven Architecture</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>
            How SEC@R Works
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Real-time consent architecture that enables data only with Data Principal authorization.
          </p>
        </div>

        {/* Flow */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center tracking-tight" style={{ color: 'var(--text-primary)' }}>Authentication Flow</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, index) => {
              const Icon = s.icon;
              return (
                <Card key={index} className="card-hover relative rounded-xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                  <CardContent className="p-6">
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white" style={{ backgroundColor: 'var(--accent)' }}>{s.step}</div>
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-light)' }}>
                      <Icon size={28} style={{ color: 'var(--accent)' }} />
                    </div>
                    <h4 className="text-lg font-semibold text-center mb-2" style={{ color: 'var(--text-primary)' }}>{s.title}</h4>
                    <p className="text-sm text-center" style={{ color: 'var(--text-secondary)' }}>{s.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* AMDA */}
        <div className="mb-20">
          <Card className="rounded-2xl" style={{ backgroundColor: 'var(--bg-card)', border: '2px solid var(--accent)' }}>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center justify-center tracking-tight" style={{ color: 'var(--text-primary)' }}>
                <Layers size={32} className="mr-3" style={{ color: 'var(--accent)' }} />AMDA: Automated Multi-Device Authentication
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {[
                  { icon: Smartphone, title: "Device Layer", desc: "BLE devices, location, network" },
                  { icon: Shield, title: "Security Layer", desc: "Biometrics, device health" },
                  { icon: Zap, title: "Decision Layer", desc: "AI-powered consent engine" }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-light)' }}>
                      <item.icon size={40} style={{ color: 'var(--accent)' }} />
                    </div>
                    <h5 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h5>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                <h5 className="font-semibold mb-4 flex items-center" style={{ color: 'var(--text-primary)' }}>
                  <Clock size={20} className="mr-2" style={{ color: 'var(--accent)' }} />180-Second Time Threshold
                </h5>
                <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Once AMDA authorizes, data is activated for exactly <span className="font-semibold" style={{ color: 'var(--accent)' }}>180 seconds</span>.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Minimum exposure", "Auto deactivation", "Real-time enforcement", "No extended access"].map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* APIs */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center tracking-tight" style={{ color: 'var(--text-primary)' }}>API Integrations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {apis.map((api, index) => {
              const Icon = api.icon;
              return (
                <Card key={index} className="card-hover rounded-xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center" style={{ color: 'var(--text-primary)' }}>
                      <div className="w-12 h-12 mr-4 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-light)' }}>
                        <Icon size={24} style={{ color: 'var(--accent)' }} />
                      </div>
                      {api.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {api.endpoints.map((endpoint, idx) => (
                        <div key={idx} className="rounded-lg p-2" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                          <code className="text-xs font-mono" style={{ color: 'var(--accent)' }}>{endpoint}</code>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Specs */}
        <Card className="rounded-2xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}>
          <CardHeader>
            <CardTitle className="text-2xl text-center tracking-tight" style={{ color: 'var(--text-primary)' }}>Technical Specifications</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "<100ms", label: "API Response" },
                { value: "180s", label: "Active Window" },
                { value: "99.99%", label: "Uptime SLA" },
                { value: "256-bit", label: "AES Encryption" }
              ].map((spec, i) => (
                <div key={i} className="text-center p-6 rounded-xl" style={{ backgroundColor: 'var(--accent-light)' }}>
                  <div className="text-3xl font-bold mb-2 stat-number" style={{ color: 'var(--accent)' }}>{spec.value}</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{spec.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
