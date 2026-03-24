import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  Wallet, 
  Smartphone, 
  Server, 
  Building2, 
  ArrowRight, 
  Clock,
  Shield,
  Zap,
  CheckCircle2,
  AlertCircle,
  Layers,
  Radio,
  Lock
} from 'lucide-react';

export const SolutionArchitecture = () => {
  const architectureSteps = [
    { step: 1, icon: Wallet, title: "Hardware Trigger", description: "Data Principal opens SEC@R Wallet", detail: "Physical action triggers authentication event" },
    { step: 2, icon: Radio, title: "Event Signal", description: "Wallet sends event to SEC@R App", detail: "Secure BLE/NFC communication" },
    { step: 3, icon: Smartphone, title: "App Processing", description: "SEC@R App initiates authentication", detail: "Collects device signals, location, and biometrics" },
    { step: 4, icon: Layers, title: "AMDA System", description: "Automated Multi-Device-Layer Authentication", detail: "AI-powered decision engine processes all signals" },
    { step: 5, icon: Server, title: "API Call to Bank", description: "AMDA makes secure API call", detail: "Authorizes data activation for transaction" },
    { step: 6, icon: CheckCircle2, title: "Data Activation", description: "Bank enables data with 180s threshold", detail: "Time-limited transaction window" }
  ];

  const apiIntegrations = [
    {
      icon: Building2,
      title: "Banking APIs",
      endpoints: ["POST /api/auth/enable-data", "POST /api/transaction/authorize", "GET /api/consent/status"],
      description: "Direct integration with core banking systems for real-time data activation"
    },
    {
      icon: Shield,
      title: "Insurance APIs",
      endpoints: ["POST /api/policy/activate", "POST /api/claim/authorize", "GET /api/principal/verify"],
      description: "Seamless policy and claims authorization through consent verification"
    },
    {
      icon: Lock,
      title: "Government APIs",
      endpoints: ["POST /api/identity/verify", "POST /api/document/authorize", "GET /api/credential/validate"],
      description: "Secure integration with government identity and document systems"
    }
  ];

  return (
    <section id="architecture" className="py-24 bg-[#0A192F] relative overflow-hidden" data-testid="architecture-section">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(100, 255, 218, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 70%, rgba(100, 255, 218, 0.2) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-teal rounded-full px-6 py-2 mb-6">
            <Server className="text-[#64FFDA]" size={20} />
            <span className="text-[#64FFDA] font-medium">API-Driven Architecture</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            How SEC@R Solution Works
          </h2>
          <p className="text-base md:text-lg text-[#8892B0] max-w-3xl mx-auto">
            API-driven, real-time consent architecture that enables data only when the Data Principal authorizes through 
            multi-device layer authentication.
          </p>
        </div>

        {/* Architecture Flow */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center tracking-tight">Complete Authentication Flow</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architectureSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="bg-[#112240]/60 border-[#1E2D4A] hover:border-[#64FFDA]/50 transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      {/* Step Number */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 rounded-md flex items-center justify-center font-bold text-[#0A192F] bg-[#64FFDA]">
                        {step.step}
                      </div>

                      {/* Icon */}
                      <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center bg-[#64FFDA]/10">
                        <Icon className="text-[#64FFDA]" size={32} />
                      </div>

                      {/* Content */}
                      <h4 className="text-lg font-bold text-white text-center mb-2">{step.title}</h4>
                      <p className="text-center mb-2 font-medium text-[#64FFDA] text-sm">
                        {step.description}
                      </p>
                      <p className="text-[#8892B0] text-sm text-center">{step.detail}</p>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow for desktop */}
                  {index < architectureSteps.length - 1 && (index + 1) % 3 !== 0 && (
                    <div className="hidden lg:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-20">
                      <ArrowRight className="text-[#64FFDA]" size={24} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* AMDA System Details */}
        <div className="mb-20">
          <Card className="bg-[#112240]/60 border-[#64FFDA]/30">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-white flex items-center justify-center tracking-tight">
                <Layers className="text-[#64FFDA] mr-3" size={32} />
                AMDA: Automated Multi-Device-Layer Authentication
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {[
                  { icon: Smartphone, title: "Device Layer", desc: "BLE devices, location, network analysis" },
                  { icon: Shield, title: "Security Layer", desc: "Biometrics, device health, malware scan" },
                  { icon: Zap, title: "Decision Layer", desc: "AI-powered consent decision engine" }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-[#64FFDA]/10 rounded-xl flex items-center justify-center">
                      <item.icon className="text-[#64FFDA]" size={40} />
                    </div>
                    <h5 className="text-white font-bold mb-2">{item.title}</h5>
                    <p className="text-[#8892B0] text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#0A192F]/60 rounded-xl p-6 border border-[#64FFDA]/20">
                <h5 className="text-white font-bold mb-4 flex items-center">
                  <Clock className="text-[#64FFDA] mr-2" size={20} />
                  180-Second Time Threshold
                </h5>
                <p className="text-[#CCD6F6] mb-4">
                  Once AMDA authorizes and makes the API call to the bank, the Data Principal's data is activated 
                  for exactly <span className="text-[#64FFDA] font-bold">180 seconds (3 minutes)</span>. This time-limited 
                  window ensures:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Minimum exposure window for sensitive data", "Automatic data deactivation after threshold", "Real-time consent enforcement", "Prevents unauthorized extended access"].map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="text-[#64FFDA] flex-shrink-0 mt-1" size={16} />
                      <span className="text-[#CCD6F6] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* API Integration Architecture */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center tracking-tight">API Integration Points</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {apiIntegrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <Card key={index} className="bg-[#112240]/60 border-[#1E2D4A] hover:border-[#64FFDA]/50 transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <div className="w-12 h-12 mr-4 bg-[#64FFDA]/10 rounded-xl flex items-center justify-center">
                        <Icon className="text-[#64FFDA]" size={24} />
                      </div>
                      {integration.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#8892B0] mb-4 text-sm">{integration.description}</p>
                    <div className="space-y-2">
                      <div className="overline text-[#64FFDA] mb-2">Key Endpoints:</div>
                      {integration.endpoints.map((endpoint, idx) => (
                        <div key={idx} className="bg-[#0A192F]/60 rounded p-2 border border-[#1E2D4A]">
                          <code className="text-[#64FFDA] text-xs font-mono">{endpoint}</code>
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
        <div>
          <Card className="bg-[#112240]/80 border-[#1E2D4A]">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center tracking-tight">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { value: "<100ms", label: "API Response Time" },
                  { value: "180s", label: "Data Active Window" },
                  { value: "99.99%", label: "API Uptime SLA" },
                  { value: "256-bit", label: "AES Encryption" }
                ].map((spec, i) => (
                  <div key={i} className="text-center p-4 bg-[#64FFDA]/5 rounded-xl border border-[#1E2D4A]">
                    <div className="text-3xl font-bold text-[#64FFDA] mb-2 stat-number">{spec.value}</div>
                    <div className="text-sm text-[#8892B0]">{spec.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-[#64FFDA]/5 rounded-xl border border-[#64FFDA]/20">
                <h5 className="text-white font-bold mb-3 flex items-center">
                  <AlertCircle className="text-[#64FFDA] mr-2" size={20} />
                  Security Features
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {["OAuth 2.0 + mTLS Authentication", "End-to-End Encryption", "Rate Limiting & DDoS Protection", "Real-Time Threat Detection", "Webhook Event Notifications", "Comprehensive API Logging"].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="text-[#64FFDA]" size={16} />
                      <span className="text-[#CCD6F6] text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
