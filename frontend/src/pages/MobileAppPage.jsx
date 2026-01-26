import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Smartphone, 
  Bluetooth, 
  Wifi, 
  MapPin, 
  Shield, 
  Activity,
  Server,
  Building2,
  FileCheck,
  Landmark,
  CreditCard,
  AlertTriangle,
  Check,
  ArrowRight,
  MonitorSmartphone,
  Zap,
  Eye,
  Lock,
  Bug
} from 'lucide-react';

const MobileAppPage = () => {
  const appFeatures = [
    {
      icon: Bluetooth,
      title: "Multi-BLE Device Detection",
      description: "Continuously scans and detects multiple Bluetooth Low Energy devices in proximity. Creates a device fingerprint mesh for enhanced authentication verification.",
      technical: "Supports up to 20 concurrent BLE connections with sub-second latency"
    },
    {
      icon: Wifi,
      title: "Local Network Analysis",
      description: "Monitors local network environment to detect unusual network behavior, unauthorized devices, and man-in-the-middle attempts during authentication.",
      technical: "Real-time network topology mapping with anomaly detection"
    },
    {
      icon: MapPin,
      title: "Geolocation Intelligence",
      description: "Precise location tracking with behavior pattern analysis. Detects impossible travel scenarios and location-based fraud attempts in real-time.",
      technical: "GPS, Wi-Fi, and cell tower triangulation with 10m accuracy"
    },
    {
      icon: Activity,
      title: "Real-Time Event Triggering",
      description: "Instantly triggers consent events to the backend decision engine. Sub-second communication ensures seamless transaction approval or denial.",
      technical: "WebSocket connections with <100ms response time"
    },
    {
      icon: Bug,
      title: "Malware & RAT Detection",
      description: "Advanced security scanning detects Remote Access Trojans, malware, and device infections that could compromise authentication integrity.",
      technical: "Behavioral analysis with 99.7% detection accuracy"
    },
    {
      icon: Shield,
      title: "Device Health Monitoring",
      description: "Continuous monitoring of device security posture including root/jailbreak detection, screen lock status, and security patch levels.",
      technical: "Real-time security score with automatic risk assessment"
    }
  ];

  const backendCapabilities = [
    {
      icon: Server,
      title: "Intelligent Decision Engine",
      description: "AI-powered decision-making analyzes all data points from the mobile app to make instant consent decisions. Machine learning models adapt to user behavior patterns."
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Processes authentication requests in milliseconds. Evaluates device signals, location data, behavioral patterns, and threat intelligence simultaneously."
    },
    {
      icon: Eye,
      title: "Consent Orchestration",
      description: "Coordinates consent verification across multiple devices and channels. Ensures all authentication factors are validated before granting access."
    },
    {
      icon: Lock,
      title: "Zero-Trust Architecture",
      description: "Never trusts, always verifies. Every transaction requires fresh consent validation regardless of previous successful authentications."
    }
  ];

  const integrations = [
    {
      icon: CreditCard,
      title: "Banking Systems",
      description: "Direct API integration with core banking systems for transaction authorization, account access, and payment consent verification.",
      features: ["Transaction approval", "Account authentication", "Payment authorization", "Fraud prevention"]
    },
    {
      icon: Building2,
      title: "Insurance Companies",
      description: "Seamless API connectivity with insurance providers for policy management, claims processing, and secure customer verification.",
      features: ["Policy authentication", "Claims approval", "Customer verification", "Premium payments"]
    },
    {
      icon: Landmark,
      title: "Government Authorities",
      description: "Integration with national identity systems and government agencies for secure identity verification and document authentication.",
      features: ["AADHAAR verification", "Voter ID authentication", "PAN validation", "Passport verification"]
    },
    {
      icon: FileCheck,
      title: "Certificate Authorities (CA)",
      description: "Government CA API integration for digital signatures, ensuring legally binding electronic document signing.",
      features: ["Digital signatures", "Document signing", "PKI management", "Certificate validation"]
    },
    {
      icon: Smartphone,
      title: "Telecom Service Providers",
      description: "Direct API integration with telecom operators for SIM verification, mobile number authentication, and network-based security.",
      features: ["SIM authentication", "Mobile number verification", "Network validation", "SS7 attack prevention"]
    },
    {
      icon: Shield,
      title: "Enterprise Systems",
      description: "Universal API framework for integration with any enterprise system requiring consent-based authentication and authorization.",
      features: ["Custom integrations", "API gateway", "Webhook support", "Real-time events"]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 80% 50%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)`,
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-6">
                <MonitorSmartphone className="mr-2" size={16} />
                Complete SEC@R Solution
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                End-to-End Consent Control
                <span className="block text-emerald-400 mt-2">Ecosystem</span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Complete solution combining mobile apps (iOS & Android), smart hardware, and backend decision engine. 
                Connect seamlessly with banks, insurance, government authorities, telecom providers, and more through secure APIs.
              </p>

              <div className="mb-8">
                <h3 className="text-white font-semibold mb-3">Available On:</h3>
                <div className="flex gap-4">
                  <Button className="bg-black hover:bg-gray-900 text-white font-semibold px-6 py-6 border border-gray-700">
                    <div className="flex items-center space-x-3">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs text-gray-400">Download on the</div>
                        <div className="text-sm font-bold">App Store</div>
                      </div>
                    </div>
                  </Button>
                  <Button className="bg-black hover:bg-gray-900 text-white font-semibold px-6 py-6 border border-gray-700">
                    <div className="flex items-center space-x-3">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs text-gray-400">GET IT ON</div>
                        <div className="text-sm font-bold">Google Play</div>
                      </div>
                    </div>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-emerald-400">99.7%</div>
                  <div className="text-sm text-gray-400">Threat Detection</div>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-emerald-400">&lt;100ms</div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-emerald-400">24/7</div>
                  <div className="text-sm text-gray-400">Protection</div>
                </div>
              </div>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="relative">
              <div className="relative mx-auto w-80 h-[600px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] border-8 border-gray-700 shadow-2xl overflow-hidden">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20"></div>
                
                {/* Screen Content */}
                <div className="h-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-8 pt-12">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 mx-auto bg-emerald-500 rounded-3xl flex items-center justify-center mb-4">
                      <Shield className="text-black" size={40} />
                    </div>
                    <h3 className="text-white text-xl font-bold">SEC@R</h3>
                    <p className="text-emerald-400 text-sm">Consent Controller</p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-black/40 backdrop-blur rounded-xl p-4 border border-emerald-500/30">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-emerald-500/30 rounded-lg flex items-center justify-center">
                            <Bluetooth className="text-emerald-400" size={20} />
                          </div>
                          <div>
                            <div className="text-white text-sm font-semibold">BLE Devices</div>
                            <div className="text-emerald-400 text-xs">8 devices detected</div>
                          </div>
                        </div>
                        <Check className="text-emerald-400" size={20} />
                      </div>
                    </div>

                    <div className="bg-black/40 backdrop-blur rounded-xl p-4 border border-emerald-500/30">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-emerald-500/30 rounded-lg flex items-center justify-center">
                            <MapPin className="text-emerald-400" size={20} />
                          </div>
                          <div>
                            <div className="text-white text-sm font-semibold">Location</div>
                            <div className="text-emerald-400 text-xs">Verified</div>
                          </div>
                        </div>
                        <Check className="text-emerald-400" size={20} />
                      </div>
                    </div>

                    <div className="bg-black/40 backdrop-blur rounded-xl p-4 border border-emerald-500/30">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-emerald-500/30 rounded-lg flex items-center justify-center">
                            <Shield className="text-emerald-400" size={20} />
                          </div>
                          <div>
                            <div className="text-white text-sm font-semibold">Security Scan</div>
                            <div className="text-emerald-400 text-xs">No threats</div>
                          </div>
                        </div>
                        <Check className="text-emerald-400" size={20} />
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-8 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
                    Approve Transaction
                  </Button>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">Powerful Features</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Detection & Monitoring
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              SEC@R app uses cutting-edge technology to detect threats, monitor environment, and ensure secure consent decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 mb-4 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                      <Icon className="text-emerald-400" size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                    <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>
                    <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-3">
                      <p className="text-emerald-400 text-sm">
                        <span className="font-semibold">Technical:</span> {feature.technical}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consent Controller vs Manager */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Consent <span className="text-emerald-400">Controller</span>, Not Manager
              </h2>
              <p className="text-xl text-gray-400">
                SEC@R doesn't just manage consent - it controls and enforces it at every transaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Consent Manager */}
              <Card className="bg-red-500/5 border-red-500/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <AlertTriangle className="text-red-400 mr-2" size={24} />
                    Traditional Consent Manager
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-400">Passive consent storage</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-400">One-time verification</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-400">Cannot block transactions</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-400">No real-time enforcement</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-400">Relies on trust</span>
                  </div>
                </CardContent>
              </Card>

              {/* Consent Controller */}
              <Card className="bg-emerald-500/5 border-emerald-500/30">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Shield className="text-emerald-400 mr-2" size={24} />
                    SEC@R Consent Controller
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Check className="text-emerald-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Active consent enforcement</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="text-emerald-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Continuous verification</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="text-emerald-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Instant transaction blocking</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="text-emerald-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Real-time decision making</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="text-emerald-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Zero-trust architecture</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Backend Decision Engine */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">Backend Architecture</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Intelligent Decision Engine with API Gateway
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The SEC@R backend processes signals from mobile apps and smart hardware, makes instant consent decisions, 
              and communicates with integrated authorities through secure API connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {backendCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                      <Icon className="text-emerald-400" size={32} />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{capability.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{capability.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Architecture Diagram */}
          <Card className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-emerald-500/30">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                {/* Mobile App */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                    <Smartphone className="text-emerald-400" size={40} />
                  </div>
                  <h4 className="text-white font-bold mb-2">Mobile App</h4>
                  <p className="text-gray-400 text-sm">iOS & Android</p>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="text-emerald-400 hidden md:block" size={32} />
                </div>

                {/* Backend */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                    <Server className="text-emerald-400" size={40} />
                  </div>
                  <h4 className="text-white font-bold mb-2">Decision Engine</h4>
                  <p className="text-gray-400 text-sm">AI-Powered Backend</p>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="text-emerald-400 hidden md:block" size={32} />
                </div>

                {/* Authorities */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                    <Building2 className="text-emerald-400" size={40} />
                  </div>
                  <h4 className="text-white font-bold mb-2">Authorities</h4>
                  <p className="text-gray-400 text-sm">Banks, Govt, Telecom</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h5 className="text-white font-semibold mb-4 text-center">Complete Data Flow</h5>
                <p className="text-gray-400 text-center text-sm max-w-3xl mx-auto">
                  Mobile app detects BLE devices, network, location, and threats → Backend engine processes signals and makes consent decision → 
                  APIs notify connected authorities (banks, insurance, govt, telecom) → Transaction approved or blocked based on consent
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* API Architecture Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">API Architecture</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise-Grade REST APIs
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Secure, scalable, and easy-to-integrate APIs designed for seamless connectivity with any authority or institution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                  <Shield className="text-emerald-400" size={32} />
                </div>
                <h4 className="text-white font-bold mb-2">Secure</h4>
                <p className="text-gray-400 text-sm">OAuth 2.0, mTLS, end-to-end encryption</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                  <Zap className="text-emerald-400" size={32} />
                </div>
                <h4 className="text-white font-bold mb-2">Fast</h4>
                <p className="text-gray-400 text-sm">Sub-100ms latency, real-time webhooks</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                  <Server className="text-emerald-400" size={32} />
                </div>
                <h4 className="text-white font-bold mb-2">Scalable</h4>
                <p className="text-gray-400 text-sm">Handles millions of requests per day</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                  <FileCheck className="text-emerald-400" size={32} />
                </div>
                <h4 className="text-white font-bold mb-2">Documented</h4>
                <p className="text-gray-400 text-sm">Comprehensive API docs & SDKs</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-emerald-500/30">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold text-white mb-6">Key API Endpoints</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="bg-black/40 rounded-lg p-4 border border-gray-800">
                    <code className="text-emerald-400 text-sm">POST /api/consent/request</code>
                    <p className="text-gray-400 text-xs mt-2">Initiate consent verification request</p>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border border-gray-800">
                    <code className="text-emerald-400 text-sm">GET /api/consent/status</code>
                    <p className="text-gray-400 text-xs mt-2">Check consent verification status</p>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border border-gray-800">
                    <code className="text-emerald-400 text-sm">POST /api/device/verify</code>
                    <p className="text-gray-400 text-xs mt-2">Verify device authenticity and health</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-black/40 rounded-lg p-4 border border-gray-800">
                    <code className="text-emerald-400 text-sm">POST /api/transaction/authorize</code>
                    <p className="text-gray-400 text-xs mt-2">Request transaction authorization</p>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border border-gray-800">
                    <code className="text-emerald-400 text-sm">POST /api/identity/verify</code>
                    <p className="text-gray-400 text-xs mt-2">Verify Data Principal identity</p>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border border-gray-800">
                    <code className="text-emerald-400 text-sm">POST /api/webhook/register</code>
                    <p className="text-gray-400 text-xs mt-2">Register webhook for real-time events</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">API Integrations</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Connect with Any Authority or Institution
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              SEC@R provides secure REST APIs for seamless integration with banks, insurance companies, government authorities, 
              telecom providers, and enterprise systems for real-time consent control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <div className="w-12 h-12 mr-4 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                        <Icon className="text-emerald-400" size={24} />
                      </div>
                      {integration.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-4">{integration.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {integration.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Check className="text-emerald-400 flex-shrink-0" size={16} />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-6">
          <Card className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/30">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Take Control?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Download SEC@R mobile app today and experience true consent control with advanced threat detection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-8 border-2 border-white">
                  <div className="flex items-center space-x-3">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-400">Download on the</div>
                      <div className="text-lg font-bold">App Store</div>
                    </div>
                  </div>
                </Button>
                <Button className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-8 border-2 border-white">
                  <div className="flex items-center space-x-3">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-400">GET IT ON</div>
                      <div className="text-lg font-bold">Google Play</div>
                    </div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileAppPage;