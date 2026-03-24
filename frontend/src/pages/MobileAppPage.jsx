import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Smartphone, 
  Shield, 
  Bell, 
  Fingerprint, 
  MapPin, 
  Clock, 
  Lock, 
  CheckCircle2,
  ArrowRight,
  Zap,
  Eye,
  Wifi
} from 'lucide-react';

const MobileAppPage = () => {
  const features = [
    {
      icon: Bell,
      title: "Real-Time Notifications",
      description: "Instant alerts for every authentication request. Approve or deny transactions from anywhere in the world."
    },
    {
      icon: Fingerprint,
      title: "Biometric Authentication",
      description: "Secure your consent with fingerprint or facial recognition. Your biometrics never leave your device."
    },
    {
      icon: MapPin,
      title: "Location Verification",
      description: "Add location-based security layer. Transactions flagged when device is in unexpected locations."
    },
    {
      icon: Clock,
      title: "Time-Bound Consent",
      description: "180-second activation window ensures minimal exposure. Data automatically deactivates after threshold."
    },
    {
      icon: Lock,
      title: "Zero-Storage Architecture",
      description: "No sensitive data stored on the app. All authentication happens in real-time with immediate disposal."
    },
    {
      icon: Wifi,
      title: "Offline Capability",
      description: "Emergency authentication even without internet. Sync when connection is restored."
    }
  ];

  const securityLayers = [
    { title: "Device Verification", desc: "Validates device identity and health status" },
    { title: "Biometric Confirmation", desc: "Fingerprint or Face ID authentication" },
    { title: "Location Analysis", desc: "Geolocation and network analysis" },
    { title: "Behavioral Patterns", desc: "Continuous behavioral monitoring" },
    { title: "Hardware Integration", desc: "BLE connection with SEC@R devices" },
    { title: "Consent Transmission", desc: "Encrypted consent to AMDA system" }
  ];

  return (
    <div className="min-h-screen bg-[#0A192F]" data-testid="mobile-app-page">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(30, 45, 74, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 45, 74, 0.4) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#64FFDA]/20 text-[#64FFDA] border-[#64FFDA]/30 mb-4">
                SEC@R Mobile Application
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                Consent Control
                <span className="block text-[#64FFDA]">In Your Pocket</span>
              </h1>
              <p className="text-base md:text-lg text-[#8892B0] mb-8 leading-relaxed">
                The SEC@R mobile app is your command center for data consent management. 
                Approve or deny data activation requests in real-time, with multi-layer security 
                that makes stolen credentials worthless.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#64FFDA] hover:bg-[#4CD9B4] text-[#0A192F] font-semibold px-8 py-6" data-testid="download-app-btn">
                  Download App
                  <ArrowRight className="ml-2" size={18} />
                </Button>
                <Button variant="outline" className="border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10 px-8 py-6">
                  View Demo
                </Button>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#64FFDA]/20 rounded-3xl blur-xl"></div>
                <img 
                  src="https://images.pexels.com/photos/2048774/pexels-photo-2048774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                  alt="SEC@R Mobile App"
                  className="relative w-72 h-auto rounded-3xl border border-[#1E2D4A] shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="overline text-[#64FFDA] mb-4 block">App Features</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Powerful Security Features
            </h2>
            <p className="text-base md:text-lg text-[#8892B0] max-w-3xl mx-auto">
              Every feature is designed with privacy-first architecture. No data storage, no profiling, just real-time consent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-[#112240]/60 border-[#1E2D4A] hover:border-[#64FFDA]/50 transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 mb-4 bg-[#64FFDA]/10 rounded-xl flex items-center justify-center group-hover:bg-[#64FFDA]/20 transition-colors">
                      <Icon className="text-[#64FFDA]" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-[#8892B0] text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How the App Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="overline text-[#64FFDA] mb-4 block">Authentication Flow</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Six Layers of Security
              </h2>
              <p className="text-base md:text-lg text-[#8892B0] mb-8">
                Every authentication request passes through multiple security layers before consent is granted. 
                Even if one layer is compromised, attackers cannot proceed without passing all verifications.
              </p>
              
              <div className="space-y-4">
                {securityLayers.map((layer, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-[#112240]/60 rounded-lg border border-[#1E2D4A]">
                    <div className="w-8 h-8 bg-[#64FFDA] rounded-md flex items-center justify-center text-[#0A192F] font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{layer.title}</h4>
                      <p className="text-[#8892B0] text-sm">{layer.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Card className="bg-[#112240]/80 border-[#64FFDA]/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center tracking-tight">
                    <Smartphone className="text-[#64FFDA] mr-3" size={28} />
                    App Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: "Platform Support", value: "iOS 14+, Android 9+" },
                    { label: "App Size", value: "< 50 MB" },
                    { label: "Response Time", value: "< 100ms" },
                    { label: "Offline Mode", value: "Emergency auth supported" },
                    { label: "Biometrics", value: "Face ID, Touch ID, Fingerprint" },
                    { label: "BLE Range", value: "Up to 30 meters" },
                    { label: "Battery Impact", value: "< 3% daily" },
                    { label: "Data Storage", value: "Zero sensitive data" }
                  ].map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-center py-3 border-b border-[#1E2D4A] last:border-0">
                      <span className="text-[#8892B0]">{spec.label}</span>
                      <span className="text-[#64FFDA] font-medium">{spec.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Card className="glass-teal">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Eye className="text-[#64FFDA]" size={32} />
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Privacy by Design</h3>
                  </div>
                  <p className="text-[#CCD6F6] mb-6 leading-relaxed">
                    The SEC@R app operates on a strict zero-knowledge principle. We authenticate without storing, 
                    verify without profiling, and protect without compromising your privacy.
                  </p>
                  <div className="space-y-3">
                    {["No user profiles created", "No behavioral tracking", "No location history stored", "No biometric data retained", "All processing happens locally"].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle2 className="text-[#64FFDA]" size={18} />
                        <span className="text-[#CCD6F6]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 bg-[#64FFDA]/10 rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-[#64FFDA]/20 rounded-full flex items-center justify-center">
                        <Shield className="text-[#64FFDA]" size={48} />
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 bg-[#0A192F] p-3 rounded-full border border-[#64FFDA]">
                      <Zap className="text-[#64FFDA]" size={20} />
                    </div>
                    <div className="absolute bottom-0 left-0 bg-[#0A192F] p-3 rounded-full border border-[#64FFDA]">
                      <Lock className="text-[#64FFDA]" size={20} />
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
