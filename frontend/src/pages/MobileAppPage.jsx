import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Smartphone, Shield, Bell, Fingerprint, MapPin, Clock, Lock, CheckCircle2, ArrowRight, Zap, Eye, Wifi } from 'lucide-react';

const MobileAppPage = () => {
  const features = [
    { icon: Bell, title: "Real-Time Notifications", description: "Instant alerts for every authentication request. Approve or deny from anywhere." },
    { icon: Fingerprint, title: "Biometric Authentication", description: "Secure your consent with fingerprint or facial recognition." },
    { icon: MapPin, title: "Location Verification", description: "Add location-based security layer for suspicious activity detection." },
    { icon: Clock, title: "Time-Bound Consent", description: "180-second activation window ensures minimal exposure." },
    { icon: Lock, title: "Zero-Storage Architecture", description: "No sensitive data stored on the app. Real-time processing only." },
    { icon: Wifi, title: "Offline Capability", description: "Emergency authentication even without internet connection." }
  ];

  const securityLayers = [
    { title: "Device Verification", desc: "Validates device identity and health" },
    { title: "Biometric Confirmation", desc: "Fingerprint or Face ID authentication" },
    { title: "Location Analysis", desc: "Geolocation and network analysis" },
    { title: "Behavioral Patterns", desc: "Continuous behavioral monitoring" },
    { title: "Hardware Integration", desc: "BLE connection with SEC@R devices" },
    { title: "Consent Transmission", desc: "Encrypted consent to AMDA system" }
  ];

  return (
    <div className="min-h-screen bg-white" data-testid="mobile-app-page">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#F5F5F7] relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#0071E3]/10 text-[#0071E3] border-0 mb-4">SEC@R Mobile Application</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">
                Consent Control
                <span className="block text-[#0071E3]">In Your Pocket</span>
              </h1>
              <p className="text-lg text-[#86868B] mb-8 leading-relaxed">
                The SEC@R mobile app is your command center for data consent management with multi-layer security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium px-8 py-6 rounded-full" data-testid="download-app-btn">
                  Download App <ArrowRight className="ml-2" size={18} />
                </Button>
                <Button variant="outline" className="border-gray-300 text-[#1D1D1F] hover:bg-white px-8 py-6 rounded-full">
                  View Demo
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#0071E3]/10 rounded-3xl blur-2xl"></div>
                <img 
                  src="https://images.pexels.com/photos/2048774/pexels-photo-2048774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="SEC@R Mobile App"
                  className="relative w-72 h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="overline text-[#0071E3] mb-4 block">App Features</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">Powerful Security Features</h2>
            <p className="text-lg text-[#86868B] max-w-3xl mx-auto">
              Every feature is designed with privacy-first architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-[#F5F5F7] border-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group rounded-2xl">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 mb-4 bg-[#0071E3]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#0071E3]/20 transition-colors">
                      <Icon className="text-[#0071E3]" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">{feature.title}</h3>
                    <p className="text-[#86868B] text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Layers */}
      <section className="py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="overline text-[#0071E3] mb-4 block">Authentication Flow</span>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">Six Layers of Security</h2>
              <p className="text-lg text-[#86868B] mb-8">
                Every authentication request passes through multiple security layers before consent is granted.
              </p>
              <div className="space-y-4">
                {securityLayers.map((layer, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-8 h-8 bg-[#0071E3] rounded-lg flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-[#1D1D1F] font-semibold">{layer.title}</h4>
                      <p className="text-[#86868B] text-sm">{layer.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="bg-white border-0 shadow-lg rounded-3xl">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1D1D1F] flex items-center tracking-tight">
                  <Smartphone className="text-[#0071E3] mr-3" size={28} />
                  App Specifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: "Platform Support", value: "iOS 14+, Android 9+" },
                  { label: "App Size", value: "< 50 MB" },
                  { label: "Response Time", value: "< 100ms" },
                  { label: "Biometrics", value: "Face ID, Touch ID, Fingerprint" },
                  { label: "BLE Range", value: "Up to 30 meters" },
                  { label: "Battery Impact", value: "< 3% daily" },
                  { label: "Data Storage", value: "Zero sensitive data" }
                ].map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                    <span className="text-[#86868B]">{spec.label}</span>
                    <span className="text-[#0071E3] font-medium">{spec.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Card className="bg-[#0071E3] border-0 rounded-3xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Eye className="text-white" size={32} />
                    <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Privacy by Design</h3>
                  </div>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    The SEC@R app operates on a strict zero-knowledge principle. We authenticate without storing.
                  </p>
                  <div className="space-y-3">
                    {["No user profiles created", "No behavioral tracking", "No location history stored", "No biometric data retained"].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle2 className="text-white" size={18} />
                        <span className="text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                        <Shield className="text-white" size={48} />
                      </div>
                    </div>
                  </div>
                </div>
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
