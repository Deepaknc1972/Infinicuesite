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
    {
      step: 1,
      icon: Wallet,
      title: "Hardware Trigger",
      description: "Data Principal opens SEC@R Wallet",
      detail: "Physical action triggers authentication event",
      color: "cyan"
    },
    {
      step: 2,
      icon: Radio,
      title: "Event Signal",
      description: "Wallet sends event to SEC@R App",
      detail: "Secure BLE/NFC communication",
      color: "purple"
    },
    {
      step: 3,
      icon: Smartphone,
      title: "App Processing",
      description: "SEC@R App initiates authentication",
      detail: "Collects device signals, location, and biometrics",
      color: "cyan"
    },
    {
      step: 4,
      icon: Layers,
      title: "AMDA System",
      description: "Automated Multi-Device-Layer Authentication",
      detail: "AI-powered decision engine processes all signals",
      color: "purple"
    },
    {
      step: 5,
      icon: Server,
      title: "API Call to Bank",
      description: "AMDA makes secure API call",
      detail: "Authorizes data activation for transaction",
      color: "cyan"
    },
    {
      step: 6,
      icon: CheckCircle2,
      title: "Data Activation",
      description: "Bank enables data with 180s threshold",
      detail: "Time-limited transaction window",
      color: "purple"
    }
  ];

  const apiIntegrations = [
    {
      icon: Building2,
      title: "Banking APIs",
      endpoints: [
        "POST /api/auth/enable-data",
        "POST /api/transaction/authorize",
        "GET /api/consent/status"
      ],
      description: "Direct integration with core banking systems for real-time data activation"
    },
    {
      icon: Shield,
      title: "Insurance APIs",
      endpoints: [
        "POST /api/policy/activate",
        "POST /api/claim/authorize",
        "GET /api/principal/verify"
      ],
      description: "Seamless policy and claims authorization through consent verification"
    },
    {
      icon: Lock,
      title: "Government APIs",
      endpoints: [
        "POST /api/identity/verify",
        "POST /api/document/authorize",
        "GET /api/credential/validate"
      ],
      description: "Secure integration with government identity and document systems"
    }
  ];

  return (
    <section id="architecture" className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.4) 0%, transparent 50%),
                           radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-emerald rounded-full px-6 py-2 mb-6">
            <Server className="text-green-400" size={20} />
            <span className="text-green-400 font-medium">API-Driven Architecture</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            How SEC@R Solution Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            API-driven, real-time consent architecture that enables data only when the Data Principal authorizes through 
            multi-device layer authentication.
          </p>
        </div>

        {/* Architecture Flow */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Complete Authentication Flow</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architectureSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === architectureSteps.length - 1;
              
              return (
                <div key={index} className="relative">
                  <Card className={`glass hover:scale-105 transition-all duration-300 ${
                    step.color === 'cyan' ? 'border-green-500/30' : 'border-green-500/30'
                  }`}>
                    <CardContent className="p-6">
                      {/* Step Number */}
                      <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center font-bold text-black ${
                        step.color === 'cyan' ? 'bg-gradient-to-br from-green-400 to-green-600' : 'bg-gradient-to-br from-green-500 to-green-700'
                      }`}>
                        {step.step}
                      </div>

                      {/* Icon */}
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                        step.color === 'cyan' ? 'bg-green-500/20' : 'bg-green-500/20'
                      }`}>
                        <Icon className={step.color === 'cyan' ? 'text-green-400' : 'text-green-400'} size={32} />
                      </div>

                      {/* Content */}
                      <h4 className="text-lg font-bold text-white text-center mb-2">{step.title}</h4>
                      <p className={`text-center mb-2 font-medium ${
                        step.color === 'cyan' ? 'text-green-400' : 'text-green-400'
                      }`}>
                        {step.description}
                      </p>
                      <p className="text-gray-400 text-sm text-center">{step.detail}</p>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow for desktop */}
                  {!isLast && (
                    <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-20">
                      <ArrowRight className="text-green-400" size={32} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* AMDA System Details */}
        <div className="mb-20">
          <Card className="glass-gradient border-green-500/30">
            <CardHeader>
              <CardTitle className="text-3xl text-white flex items-center justify-center">
                <Layers className="text-green-400 mr-3" size={32} />
                AMDA: Automated Multi-Device-Layer Authentication
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-green-500/20 rounded-2xl flex items-center justify-center">
                    <Smartphone className="text-green-400" size={40} />
                  </div>
                  <h5 className="text-white font-bold mb-2">Device Layer</h5>
                  <p className="text-gray-400 text-sm">BLE devices, location, network analysis</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-green-500/20 rounded-2xl flex items-center justify-center">
                    <Shield className="text-green-400" size={40} />
                  </div>
                  <h5 className="text-white font-bold mb-2">Security Layer</h5>
                  <p className="text-gray-400 text-sm">Biometrics, device health, malware scan</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-green-500/20 rounded-2xl flex items-center justify-center">
                    <Zap className="text-green-400" size={40} />
                  </div>
                  <h5 className="text-white font-bold mb-2">Decision Layer</h5>
                  <p className="text-gray-400 text-sm">AI-powered consent decision engine</p>
                </div>
              </div>

              <div className="bg-black/40 rounded-xl p-6 border border-green-500/20">
                <h5 className="text-white font-bold mb-4 flex items-center">
                  <Clock className="text-green-400 mr-2" size={20} />
                  180-Second Time Threshold
                </h5>
                <p className="text-gray-300 mb-4">
                  Once AMDA authorizes and makes the API call to the bank, the Data Principal's data is activated 
                  for exactly <span className="text-green-400 font-bold">180 seconds (3 minutes)</span>. This time-limited 
                  window ensures:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-300 text-sm">Minimum exposure window for sensitive data</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-300 text-sm">Automatic data deactivation after threshold</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-300 text-sm">Real-time consent enforcement</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-300 text-sm">Prevents unauthorized extended access</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* API Integration Architecture */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">API Integration Points</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {apiIntegrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <Card key={index} className="glass hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <div className="w-12 h-12 mr-4 bg-gradient-to-br from-green-500/20 to-green-500/20 rounded-xl flex items-center justify-center">
                        <Icon className="text-green-400" size={24} />
                      </div>
                      {integration.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-4 text-sm">{integration.description}</p>
                    <div className="space-y-2">
                      <div className="text-green-400 text-xs font-semibold mb-2">Key Endpoints:</div>
                      {integration.endpoints.map((endpoint, idx) => (
                        <div key={idx} className="bg-black/40 rounded p-2 border border-green-500/10">
                          <code className="text-green-400 text-xs">{endpoint}</code>
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
          <Card className="glass-strong">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-green-500/10 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-green-400 mb-2">&lt;100ms</div>
                  <div className="text-sm text-gray-400">API Response Time</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-green-500/10 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-green-400 mb-2">180s</div>
                  <div className="text-sm text-gray-400">Data Active Window</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-green-500/10 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-green-400 mb-2">99.99%</div>
                  <div className="text-sm text-gray-400">API Uptime SLA</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-green-500/10 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-green-400 mb-2">256-bit</div>
                  <div className="text-sm text-gray-400">AES Encryption</div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-green-500/10 rounded-xl border border-green-500/20">
                <h5 className="text-white font-bold mb-3 flex items-center">
                  <AlertCircle className="text-green-400 mr-2" size={20} />
                  Security Features
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="text-green-400" size={16} />
                    <span className="text-gray-300 text-sm">OAuth 2.0 + mTLS Authentication</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="text-green-400" size={16} />
                    <span className="text-gray-300 text-sm">End-to-End Encryption</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="text-green-400" size={16} />
                    <span className="text-gray-300 text-sm">Rate Limiting & DDoS Protection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="text-green-400" size={16} />
                    <span className="text-gray-300 text-sm">Real-Time Threat Detection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="text-green-400" size={16} />
                    <span className="text-gray-300 text-sm">Webhook Event Notifications</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="text-green-400" size={16} />
                    <span className="text-gray-300 text-sm">Comprehensive API Logging</span>
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
