import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Smartphone, Shield, Bell, Fingerprint, MapPin, Clock, Lock, CheckCircle2, ArrowRight, Eye, Wifi } from 'lucide-react';

const MobileAppPage = () => {
  const features = [
    { icon: Bell, title: "Real-Time Notifications", description: "Instant alerts for every authentication request." },
    { icon: Fingerprint, title: "Biometric Authentication", description: "Secure with fingerprint or facial recognition." },
    { icon: MapPin, title: "Location Verification", description: "Location-based security layer." },
    { icon: Clock, title: "Time-Bound Consent", description: "180-second activation window." },
    { icon: Lock, title: "Zero-Storage Architecture", description: "No sensitive data stored on app." },
    { icon: Wifi, title: "Offline Capability", description: "Emergency auth without internet." }
  ];

  const securityLayers = [
    { title: "Device Verification", desc: "Validates device identity" },
    { title: "Biometric Confirmation", desc: "Fingerprint or Face ID" },
    { title: "Location Analysis", desc: "Geolocation verification" },
    { title: "Behavioral Patterns", desc: "Continuous monitoring" },
    { title: "Hardware Integration", desc: "BLE device connection" },
    { title: "Consent Transmission", desc: "Encrypted to AMDA" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }} data-testid="mobile-app-page">
      <Header />
      
      <section className="pt-32 pb-16 relative" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)', border: 'none' }}>SEC@R Mobile Application</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                Consent Control <span className="text-gradient">In Your Pocket</span>
              </h1>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                The SEC@R mobile app is your command center for data consent management with multi-layer security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="font-semibold px-8 py-6 rounded-lg" style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF' }} data-testid="download-app-btn">Download App <ArrowRight size={18} className="ml-2" /></Button>
                <Button variant="outline" className="px-8 py-6 rounded-lg" style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}>View Demo</Button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl blur-2xl" style={{ backgroundColor: 'var(--accent-light)' }}></div>
                <img src="https://images.pexels.com/photos/2048774/pexels-photo-2048774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="SEC@R Mobile App" className="relative w-72 h-auto rounded-3xl" style={{ boxShadow: 'var(--shadow-lg)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="overline mb-4 block" style={{ color: 'var(--accent)' }}>App Features</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>Powerful Security Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="card-hover group rounded-xl" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                  <CardContent className="p-6">
                    <div className="w-14 h-14 mb-4 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-light)' }}><Icon size={28} style={{ color: 'var(--accent)' }} /></div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{feature.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="overline mb-4 block" style={{ color: 'var(--accent)' }}>Authentication Flow</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>Six Layers of Security</h2>
              <div className="space-y-4">
                {securityLayers.map((layer, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center font-semibold text-sm flex-shrink-0" style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF' }}>{index + 1}</div>
                    <div>
                      <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{layer.title}</h4>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{layer.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="rounded-2xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center tracking-tight" style={{ color: 'var(--text-primary)' }}><Smartphone size={28} className="mr-3" style={{ color: 'var(--accent)' }} />App Specifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[["Platform Support", "iOS 14+, Android 9+"], ["App Size", "< 50 MB"], ["Response Time", "< 100ms"], ["Biometrics", "Face ID, Touch ID"], ["BLE Range", "Up to 30 meters"], ["Battery Impact", "< 3% daily"], ["Data Storage", "Zero sensitive data"]].map(([label, value], idx) => (
                  <div key={idx} className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid var(--border)' }}>
                    <span style={{ color: 'var(--text-muted)' }}>{label}</span>
                    <span className="font-medium" style={{ color: 'var(--accent)' }}>{value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Card className="rounded-3xl" style={{ backgroundColor: 'var(--accent)' }}>
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-6"><Eye size={32} className="text-white" /><h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Privacy by Design</h3></div>
                  <p className="text-white/80 mb-6 leading-relaxed">SEC@R app operates on a strict zero-knowledge principle.</p>
                  <div className="space-y-3">
                    {["No user profiles created", "No behavioral tracking", "No location history stored", "No biometric data retained"].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2"><CheckCircle2 size={18} className="text-white" /><span className="text-white">{item}</span></div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center"><Shield size={48} className="text-white" /></div>
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
