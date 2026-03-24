import React from 'react';
import { Card, CardContent } from './ui/card';
import { ShieldCheck, Lock, Ban, CheckCircle2 } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      icon: Lock,
      title: "Data Remains Dormant",
      description: "All data is stored in an inactive state. Without proper consent, the data cannot be activated or used for any transaction, making it worthless to attackers."
    },
    {
      icon: ShieldCheck,
      title: "Multi-Device Authentication",
      description: "When a transaction is attempted, SEC@R initiates multi-device layer authentication to identify and verify the Data Principal across multiple security checkpoints."
    },
    {
      icon: CheckCircle2,
      title: "Consent Verification",
      description: "The system collects necessary consent data points from the authenticated Data Principal. Only upon successful verification does the data become active for the specific transaction."
    },
    {
      icon: Ban,
      title: "Failed Authentication Blocks",
      description: "If authentication fails or required consent cannot be obtained, the transaction is immediately blocked. No exceptions, no compromises - stolen data stays unusable."
    }
  ];

  return (
    <section className="py-24 bg-[#0A192F] relative overflow-hidden" data-testid="how-it-works-section">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(30, 45, 74, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 45, 74, 0.4) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="overline text-[#64FFDA] mb-4 block">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Consent-First Architecture in Action
          </h2>
          <p className="text-base md:text-lg text-[#8892B0] max-w-3xl mx-auto">
            SEC@R's revolutionary approach ensures stolen data cannot be activated without the Data Principal's authenticated consent.
          </p>
        </div>

        {/* Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#64FFDA]/50 to-transparent"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className="bg-[#112240]/60 border-[#1E2D4A] hover:border-[#64FFDA]/50 transition-all duration-300 hover:-translate-y-2 relative"
              >
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#64FFDA] rounded-md flex items-center justify-center text-[#0A192F] font-bold text-sm z-20">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#64FFDA]/10 rounded-xl flex items-center justify-center">
                    <Icon className="text-[#64FFDA]" size={32} />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h4>
                  <p className="text-[#8892B0] leading-relaxed text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Benefit Highlight */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="glass-teal">
            <CardContent className="p-8 text-center">
              <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">
                The Result: Stolen Data Becomes Worthless
              </h4>
              <p className="text-lg text-[#CCD6F6] leading-relaxed">
                Even if cybercriminals breach your systems and steal data, they cannot activate it without passing multi-device layer authentication and obtaining consent from the rightful Data Principal. SEC@R eliminates the economic incentive for data theft.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
