import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Building2, 
  Landmark, 
  Shield, 
  Heart,
  Plane,
  ShoppingCart,
  CheckCircle2,
  ArrowRight,
  Users,
  Lock,
  Zap
} from 'lucide-react';

const UseCasesPage = () => {
  const useCases = [
    {
      icon: Landmark,
      title: "Banking & Financial Services",
      badge: "High Security",
      description: "Protect banking transactions with multi-device authentication. Prevent unauthorized fund transfers, account takeovers, and fraudulent loan applications.",
      benefits: [
        "Zero unauthorized transactions",
        "Real-time fraud prevention",
        "PII protection for customers",
        "Regulatory compliance (PCI-DSS)",
        "Reduced chargeback rates",
        "Customer trust & retention"
      ],
      stats: [
        { value: "$0", label: "Fraud Losses" },
        { value: "100%", label: "Prevention Rate" }
      ]
    },
    {
      icon: Shield,
      title: "Insurance",
      badge: "Claims Protection",
      description: "Secure policy activations and claims processing. Prevent fraudulent claims by verifying the policyholder's identity before any data activation.",
      benefits: [
        "Fraudulent claims prevention",
        "Policy activation control",
        "Identity verification",
        "Document authentication",
        "Reduced investigation costs",
        "Faster legitimate claims"
      ],
      stats: [
        { value: "85%", label: "Fraud Reduction" },
        { value: "3x", label: "Faster Processing" }
      ]
    },
    {
      icon: Building2,
      title: "Government & Public Sector",
      badge: "Citizen Protection",
      description: "Protect citizen data and prevent identity document fraud. Ensure only verified individuals can access or modify their government records.",
      benefits: [
        "Citizen identity protection",
        "Document fraud prevention",
        "Secure e-governance",
        "Tax fraud mitigation",
        "Benefits fraud prevention",
        "Voter identity verification"
      ],
      stats: [
        { value: "99.9%", label: "Verification Rate" },
        { value: "0", label: "Identity Thefts" }
      ]
    },
    {
      icon: Heart,
      title: "Healthcare",
      badge: "HIPAA Compliant",
      description: "Protect patient health records with consent-first access. Ensure only authorized healthcare providers can access sensitive medical data.",
      benefits: [
        "PHI protection",
        "Patient consent management",
        "Medical identity theft prevention",
        "Prescription fraud prevention",
        "HIPAA compliance",
        "Audit trail generation"
      ],
      stats: [
        { value: "100%", label: "PHI Protection" },
        { value: "HIPAA", label: "Compliant" }
      ]
    },
    {
      icon: Plane,
      title: "Travel & Hospitality",
      badge: "Seamless Security",
      description: "Secure bookings and prevent travel fraud. Multi-device authentication ensures only legitimate travelers can modify reservations.",
      benefits: [
        "Booking fraud prevention",
        "Loyalty program protection",
        "Identity verification at check-in",
        "Secure payment processing",
        "Reduced chargebacks",
        "Enhanced customer experience"
      ],
      stats: [
        { value: "95%", label: "Fraud Prevention" },
        { value: "40%", label: "Faster Check-in" }
      ]
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce & Retail",
      badge: "Transaction Security",
      description: "Protect high-value transactions and customer accounts. Prevent account takeovers and unauthorized purchases with real-time consent.",
      benefits: [
        "Account takeover prevention",
        "Cart fraud protection",
        "Loyalty point theft prevention",
        "Gift card fraud mitigation",
        "Secure checkout process",
        "Customer data protection"
      ],
      stats: [
        { value: "98%", label: "Fraud Block Rate" },
        { value: "2x", label: "Trust Increase" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A192F]" data-testid="use-cases-page">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-[#64FFDA]/20 text-[#64FFDA] border-[#64FFDA]/30 mb-4">
              Industry Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              SEC@R for Every Industry
            </h1>
            <p className="text-base md:text-lg text-[#8892B0] max-w-4xl mx-auto">
              From banking to healthcare, SEC@R's consent-first architecture adapts to your industry's 
              unique security requirements while making stolen data worthless across all sectors.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Lock, title: "Universal Protection", desc: "Same consent-first architecture works across all industries" },
              { icon: Zap, title: "Rapid Integration", desc: "API-driven integration with existing systems in weeks" },
              { icon: Users, title: "Scalable Solution", desc: "From startups to enterprise, scale without compromise" }
            ].map((item, i) => (
              <Card key={i} className="bg-[#112240]/60 border-[#1E2D4A] hover:border-[#64FFDA]/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-[#64FFDA]/10 rounded-xl flex items-center justify-center">
                    <item.icon className="text-[#64FFDA]" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-[#8892B0] text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              const isEven = index % 2 === 0;
              
              return (
                <Card key={index} className="bg-[#112240]/60 border-[#1E2D4A] hover:border-[#64FFDA]/50 transition-all duration-300 overflow-hidden">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    <CardContent className={`p-8 lg:p-12 ${!isEven ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-14 h-14 bg-[#64FFDA]/10 rounded-xl flex items-center justify-center">
                          <Icon className="text-[#64FFDA]" size={28} />
                        </div>
                        <div>
                          <Badge className="bg-[#64FFDA]/20 text-[#64FFDA] border-[#64FFDA]/30 mb-1">
                            {useCase.badge}
                          </Badge>
                          <h3 className="text-2xl font-bold text-white tracking-tight">{useCase.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-[#8892B0] mb-6 leading-relaxed">{useCase.description}</p>
                      
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {useCase.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle2 className="text-[#64FFDA] flex-shrink-0 mt-0.5" size={16} />
                            <span className="text-[#CCD6F6] text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button className="bg-[#64FFDA] hover:bg-[#4CD9B4] text-[#0A192F] font-semibold" data-testid={`use-case-btn-${index}`}>
                        Learn More
                        <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </CardContent>
                    
                    <div className={`bg-[#0A192F]/50 p-8 lg:p-12 flex flex-col justify-center ${!isEven ? 'lg:order-1' : ''}`}>
                      <div className="grid grid-cols-2 gap-6">
                        {useCase.stats.map((stat, idx) => (
                          <div key={idx} className="text-center p-6 bg-[#64FFDA]/5 rounded-xl border border-[#64FFDA]/20">
                            <div className="text-3xl md:text-4xl font-bold text-[#64FFDA] mb-2 stat-number">{stat.value}</div>
                            <div className="text-sm text-[#8892B0]">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-6 bg-[#112240]/60 rounded-xl border border-[#1E2D4A]">
                        <h4 className="text-white font-semibold mb-3">How SEC@R Protects {useCase.title.split(' ')[0]}</h4>
                        <p className="text-[#8892B0] text-sm leading-relaxed">
                          SEC@R's multi-device authentication ensures that even if attackers obtain customer data, 
                          they cannot activate or use it without the legitimate data principal's consent through verified devices.
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Card className="glass-teal">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                Ready to Protect Your Industry?
              </h2>
              <p className="text-[#CCD6F6] mb-8 max-w-2xl mx-auto">
                Contact our team to learn how SEC@R can be customized for your specific industry requirements. 
                Schedule a demo and see consent-first security in action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#64FFDA] hover:bg-[#4CD9B4] text-[#0A192F] font-semibold px-8 py-6" data-testid="schedule-demo-btn">
                  Schedule Demo
                  <ArrowRight className="ml-2" size={18} />
                </Button>
                <Button variant="outline" className="border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10 px-8 py-6">
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
