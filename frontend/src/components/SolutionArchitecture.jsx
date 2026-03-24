import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  Wallet, Smartphone, Server, Building2, ArrowRight, Clock,
  Shield, Zap, CheckCircle2, AlertCircle, Layers, Radio, Lock
} from 'lucide-react';

export const SolutionArchitecture = () => {
  const architectureSteps = [
    { step: 1, icon: Wallet, title: "Hardware Trigger", description: "Data Principal opens SEC@R Wallet", detail: "Physical action triggers authentication" },
    { step: 2, icon: Radio, title: "Event Signal", description: "Wallet sends event to SEC@R App", detail: "Secure BLE/NFC communication" },
    { step: 3, icon: Smartphone, title: "App Processing", description: "SEC@R App initiates authentication", detail: "Collects device signals & biometrics" },
    { step: 4, icon: Layers, title: "AMDA System", description: "Multi-Device-Layer Authentication", detail: "AI-powered decision engine" },
    { step: 5, icon: Server, title: "API Call to Bank", description: "AMDA makes secure API call", detail: "Authorizes data activation" },
    { step: 6, icon: CheckCircle2, title: "Data Activation", description: "Bank enables data with 180s threshold", detail: "Time-limited transaction window" }
  ];

  const apiIntegrations = [
    { icon: Building2, title: "Banking APIs", endpoints: ["POST /api/auth/enable-data", "POST /api/transaction/authorize"], description: "Direct integration with core banking" },
    { icon: Shield, title: "Insurance APIs", endpoints: ["POST /api/policy/activate", "POST /api/claim/authorize"], description: "Claims authorization through consent" },
    { icon: Lock, title: "Government APIs", endpoints: ["POST /api/identity/verify", "POST /api/document/authorize"], description: "Secure identity verification" }
  ];

  return (
    <section id="architecture" className="py-24 bg-[#F5F5F7] relative" data-testid="architecture-section">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#0071E3]/10 rounded-full px-5 py-2 mb-6">
            <Server className="text-[#0071E3]" size={18} />
            <span className="text-[#0071E3] font-medium text-sm">API-Driven Architecture</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">
            How SEC@R Works
          </h2>
          <p className="text-lg text-[#86868B] max-w-3xl mx-auto">
            API-driven, real-time consent architecture that enables data only when the Data Principal authorizes.
          </p>
        </div>

        {/* Architecture Flow */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-[#1D1D1F] mb-8 text-center tracking-tight">Authentication Flow</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architectureSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl">
                    <CardContent className="p-6">
                      <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white bg-[#0071E3]">
                        {step.step}
                      </div>
                      <div className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-[#0071E3]/10">
                        <Icon className="text-[#0071E3]" size={28} />
                      </div>
                      <h4 className="text-lg font-semibold text-[#1D1D1F] text-center mb-2">{step.title}</h4>
                      <p className="text-center mb-1 font-medium text-[#0071E3] text-sm">{step.description}</p>
                      <p className="text-[#86868B] text-sm text-center">{step.detail}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* AMDA System Details */}
        <div className="mb-20">
          <Card className="bg-white border border-[#0071E3]/30 shadow-lg rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-[#1D1D1F] flex items-center justify-center tracking-tight">
                <Layers className="text-[#0071E3] mr-3" size={32} />
                AMDA: Automated Multi-Device Authentication
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
                    <div className="w-20 h-20 mx-auto mb-4 bg-[#0071E3]/10 rounded-2xl flex items-center justify-center">
                      <item.icon className="text-[#0071E3]" size={40} />
                    </div>
                    <h5 className="text-[#1D1D1F] font-semibold mb-2">{item.title}</h5>
                    <p className="text-[#86868B] text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#F5F5F7] rounded-2xl p-6">
                <h5 className="text-[#1D1D1F] font-semibold mb-4 flex items-center">
                  <Clock className="text-[#0071E3] mr-2" size={20} />
                  180-Second Time Threshold
                </h5>
                <p className="text-[#86868B] mb-4">
                  Once AMDA authorizes, data is activated for exactly <span className="text-[#0071E3] font-semibold">180 seconds</span>. 
                  This time-limited window ensures minimal exposure.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Minimum exposure window", "Automatic deactivation", "Real-time enforcement", "No extended access"].map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="text-[#0071E3] flex-shrink-0 mt-0.5" size={14} />
                      <span className="text-[#86868B] text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* API Integration */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-[#1D1D1F] mb-8 text-center tracking-tight">API Integrations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {apiIntegrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-[#1D1D1F]">
                      <div className="w-12 h-12 mr-4 bg-[#0071E3]/10 rounded-xl flex items-center justify-center">
                        <Icon className="text-[#0071E3]" size={24} />
                      </div>
                      {integration.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#86868B] mb-4 text-sm">{integration.description}</p>
                    <div className="space-y-2">
                      <div className="overline text-[#0071E3] mb-2">Key Endpoints:</div>
                      {integration.endpoints.map((endpoint, idx) => (
                        <div key={idx} className="bg-[#F5F5F7] rounded-lg p-2">
                          <code className="text-[#0071E3] text-xs font-mono">{endpoint}</code>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Technical Specifications */}
        <Card className="bg-white border border-gray-200 shadow-lg rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1D1D1F] text-center tracking-tight">Technical Specifications</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "<100ms", label: "API Response" },
                { value: "180s", label: "Active Window" },
                { value: "99.99%", label: "Uptime SLA" },
                { value: "256-bit", label: "AES Encryption" }
              ].map((spec, i) => (
                <div key={i} className="text-center p-6 bg-[#F5F5F7] rounded-2xl">
                  <div className="text-3xl font-semibold text-[#0071E3] mb-2 stat-number">{spec.value}</div>
                  <div className="text-sm text-[#86868B]">{spec.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
