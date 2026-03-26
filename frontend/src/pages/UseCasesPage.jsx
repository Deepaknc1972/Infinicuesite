import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Building2, Landmark, Shield, Heart, Plane, ShoppingCart, CheckCircle2, ArrowRight, Users, Lock, Zap } from 'lucide-react';

const UseCasesPage = () => {
  const useCases = [
    { icon: Landmark, title: "Banking & Financial", badge: "High Security", description: "Protect banking transactions with multi-device authentication.", benefits: ["Zero unauthorized transactions", "Real-time fraud prevention", "PII protection", "Regulatory compliance"], stats: [{ value: "$0", label: "Fraud Losses" }, { value: "100%", label: "Prevention" }] },
    { icon: Shield, title: "Insurance", badge: "Claims Protection", description: "Secure policy activations and claims processing.", benefits: ["Fraudulent claims prevention", "Policy activation control", "Identity verification", "Document authentication"], stats: [{ value: "85%", label: "Fraud Reduction" }, { value: "3x", label: "Faster" }] },
    { icon: Building2, title: "Government", badge: "Citizen Protection", description: "Protect citizen data and prevent identity document fraud.", benefits: ["Citizen identity protection", "Document fraud prevention", "Secure e-governance", "Tax fraud mitigation"], stats: [{ value: "99.9%", label: "Verification" }, { value: "0", label: "Identity Thefts" }] },
    { icon: Heart, title: "Healthcare", badge: "HIPAA Compliant", description: "Protect patient health records with consent-first access.", benefits: ["PHI protection", "Patient consent management", "Medical identity theft prevention", "HIPAA compliance"], stats: [{ value: "100%", label: "PHI Protected" }, { value: "HIPAA", label: "Compliant" }] },
    { icon: Plane, title: "Travel & Hospitality", badge: "Seamless", description: "Secure bookings and prevent travel fraud.", benefits: ["Booking fraud prevention", "Loyalty program protection", "Identity verification", "Secure payments"], stats: [{ value: "95%", label: "Prevention" }, { value: "40%", label: "Faster Check-in" }] },
    { icon: ShoppingCart, title: "E-Commerce", badge: "Transaction Security", description: "Protect high-value transactions and customer accounts.", benefits: ["Account takeover prevention", "Cart fraud protection", "Loyalty point theft prevention", "Secure checkout"], stats: [{ value: "98%", label: "Block Rate" }, { value: "2x", label: "Trust Increase" }] }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }} data-testid="use-cases-page">
      <Header />
      
      <section className="pt-32 pb-16" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)', border: 'none' }}>Industry Solutions</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>SEC@R for Every Industry</h1>
            <p className="text-lg max-w-4xl mx-auto" style={{ color: 'var(--text-secondary)' }}>Consent-first architecture that adapts to your industry's unique security requirements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[{ icon: Lock, title: "Universal Protection", desc: "Same architecture works across all industries" }, { icon: Zap, title: "Rapid Integration", desc: "API-driven integration in weeks" }, { icon: Users, title: "Scalable Solution", desc: "From startups to enterprise" }].map((item, i) => (
              <Card key={i} className="card-hover rounded-xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-light)' }}><item.icon size={28} style={{ color: 'var(--accent)' }} /></div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              const isEven = index % 2 === 0;
              return (
                <Card key={index} className="overflow-hidden rounded-2xl" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    <CardContent className={`p-8 lg:p-12 ${!isEven ? 'lg:order-2' : ''}`} style={{ backgroundColor: 'var(--bg-card)' }}>
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-light)' }}><Icon size={28} style={{ color: 'var(--accent)' }} /></div>
                        <div>
                          <Badge className="mb-1" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)', border: 'none' }}>{useCase.badge}</Badge>
                          <h3 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>{useCase.title}</h3>
                        </div>
                      </div>
                      <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{useCase.description}</p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {useCase.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start space-x-2"><CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} /><span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{benefit}</span></div>
                        ))}
                      </div>
                      <Button className="font-medium rounded-lg" style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF' }} data-testid={`use-case-btn-${index}`}>Learn More <ArrowRight size={18} className="ml-2" /></Button>
                    </CardContent>
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${!isEven ? 'lg:order-1' : ''}`}>
                      <div className="grid grid-cols-2 gap-6">
                        {useCase.stats.map((stat, idx) => (
                          <div key={idx} className="text-center p-6 rounded-xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                            <div className="text-3xl md:text-4xl font-bold mb-2 stat-number" style={{ color: 'var(--accent)' }}>{stat.value}</div>
                            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Card className="rounded-3xl" style={{ backgroundColor: 'var(--accent)' }}>
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Ready to Protect Your Industry?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">Contact our team to learn how SEC@R can be customized for your requirements.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="font-medium px-8 py-6 rounded-lg bg-white hover:bg-gray-100" style={{ color: 'var(--accent)' }} data-testid="schedule-demo-btn">Schedule Demo <ArrowRight size={18} className="ml-2" /></Button>
                <Button variant="outline" className="px-8 py-6 rounded-lg border-white text-white hover:bg-white/10">Contact Sales</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UseCasesPage;
