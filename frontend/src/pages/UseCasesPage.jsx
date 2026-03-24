import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Building2, Landmark, Shield, Heart, Plane, ShoppingCart, CheckCircle2, ArrowRight, Users, Lock, Zap } from 'lucide-react';

const UseCasesPage = () => {
  const useCases = [
    {
      icon: Landmark, title: "Banking & Financial Services", badge: "High Security",
      description: "Protect banking transactions with multi-device authentication. Prevent unauthorized fund transfers and account takeovers.",
      benefits: ["Zero unauthorized transactions", "Real-time fraud prevention", "PII protection", "Regulatory compliance", "Reduced chargebacks", "Customer retention"],
      stats: [{ value: "$0", label: "Fraud Losses" }, { value: "100%", label: "Prevention" }]
    },
    {
      icon: Shield, title: "Insurance", badge: "Claims Protection",
      description: "Secure policy activations and claims processing. Prevent fraudulent claims by verifying policyholder identity.",
      benefits: ["Fraudulent claims prevention", "Policy activation control", "Identity verification", "Document authentication", "Reduced costs", "Faster processing"],
      stats: [{ value: "85%", label: "Fraud Reduction" }, { value: "3x", label: "Faster" }]
    },
    {
      icon: Building2, title: "Government", badge: "Citizen Protection",
      description: "Protect citizen data and prevent identity document fraud. Ensure verified access to government records.",
      benefits: ["Citizen identity protection", "Document fraud prevention", "Secure e-governance", "Tax fraud mitigation", "Benefits protection", "Voter verification"],
      stats: [{ value: "99.9%", label: "Verification" }, { value: "0", label: "Identity Thefts" }]
    },
    {
      icon: Heart, title: "Healthcare", badge: "HIPAA Compliant",
      description: "Protect patient health records with consent-first access. Ensure authorized healthcare provider access only.",
      benefits: ["PHI protection", "Patient consent management", "Medical identity theft prevention", "Prescription fraud prevention", "HIPAA compliance", "Audit trails"],
      stats: [{ value: "100%", label: "PHI Protected" }, { value: "HIPAA", label: "Compliant" }]
    },
    {
      icon: Plane, title: "Travel & Hospitality", badge: "Seamless",
      description: "Secure bookings and prevent travel fraud. Multi-device authentication for legitimate travelers only.",
      benefits: ["Booking fraud prevention", "Loyalty program protection", "Identity verification", "Secure payments", "Reduced chargebacks", "Better experience"],
      stats: [{ value: "95%", label: "Prevention" }, { value: "40%", label: "Faster Check-in" }]
    },
    {
      icon: ShoppingCart, title: "E-Commerce", badge: "Transaction Security",
      description: "Protect high-value transactions and customer accounts. Prevent account takeovers and unauthorized purchases.",
      benefits: ["Account takeover prevention", "Cart fraud protection", "Loyalty point theft prevention", "Gift card fraud mitigation", "Secure checkout", "Data protection"],
      stats: [{ value: "98%", label: "Block Rate" }, { value: "2x", label: "Trust Increase" }]
    }
  ];

  return (
    <div className="min-h-screen bg-white" data-testid="use-cases-page">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-[#0071E3]/10 text-[#0071E3] border-0 mb-4">Industry Solutions</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">SEC@R for Every Industry</h1>
            <p className="text-lg text-[#86868B] max-w-4xl mx-auto">
              Consent-first architecture that adapts to your industry's unique security requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Lock, title: "Universal Protection", desc: "Same architecture works across all industries" },
              { icon: Zap, title: "Rapid Integration", desc: "API-driven integration in weeks" },
              { icon: Users, title: "Scalable Solution", desc: "From startups to enterprise" }
            ].map((item, i) => (
              <Card key={i} className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-[#0071E3]/10 rounded-2xl flex items-center justify-center">
                    <item.icon className="text-[#0071E3]" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">{item.title}</h3>
                  <p className="text-[#86868B] text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              const isEven = index % 2 === 0;
              
              return (
                <Card key={index} className="bg-[#F5F5F7] border-0 overflow-hidden rounded-3xl">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    <CardContent className={`p-8 lg:p-12 bg-white ${!isEven ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-14 h-14 bg-[#0071E3]/10 rounded-2xl flex items-center justify-center">
                          <Icon className="text-[#0071E3]" size={28} />
                        </div>
                        <div>
                          <Badge className="bg-[#0071E3]/10 text-[#0071E3] border-0 mb-1">{useCase.badge}</Badge>
                          <h3 className="text-2xl font-semibold text-[#1D1D1F] tracking-tight">{useCase.title}</h3>
                        </div>
                      </div>
                      <p className="text-[#86868B] mb-6 leading-relaxed">{useCase.description}</p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {useCase.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle2 className="text-[#0071E3] flex-shrink-0 mt-0.5" size={14} />
                            <span className="text-[#86868B] text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium rounded-full" data-testid={`use-case-btn-${index}`}>
                        Learn More <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </CardContent>
                    
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${!isEven ? 'lg:order-1' : ''}`}>
                      <div className="grid grid-cols-2 gap-6">
                        {useCase.stats.map((stat, idx) => (
                          <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow-sm">
                            <div className="text-3xl md:text-4xl font-semibold text-[#0071E3] mb-2 stat-number">{stat.value}</div>
                            <div className="text-sm text-[#86868B]">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 p-6 bg-white rounded-2xl shadow-sm">
                        <h4 className="text-[#1D1D1F] font-semibold mb-3">How SEC@R Protects</h4>
                        <p className="text-[#86868B] text-sm leading-relaxed">
                          Multi-device authentication ensures stolen data cannot be activated without the Data Principal's consent.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6">
          <Card className="bg-[#0071E3] border-0 rounded-3xl">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight">Ready to Protect Your Industry?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Contact our team to learn how SEC@R can be customized for your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white hover:bg-gray-100 text-[#0071E3] font-medium px-8 py-6 rounded-full" data-testid="schedule-demo-btn">
                  Schedule Demo <ArrowRight className="ml-2" size={18} />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-full">
                  Contact Sales
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

export default UseCasesPage;
