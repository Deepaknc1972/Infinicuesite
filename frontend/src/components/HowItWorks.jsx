import React from 'react';
import { Card, CardContent } from './ui/card';
import { ShieldCheck, Lock, Ban, CheckCircle2 } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      icon: Lock,
      title: "Data Remains Dormant",
      description: "All data is stored in an inactive state. Without proper consent, the data cannot be activated or used for any transaction."
    },
    {
      icon: ShieldCheck,
      title: "Multi-Device Authentication",
      description: "When a transaction is attempted, SEC@R initiates multi-device layer authentication to verify the Data Principal."
    },
    {
      icon: CheckCircle2,
      title: "Consent Verification",
      description: "The system collects necessary consent data points. Only upon successful verification does the data become active."
    },
    {
      icon: Ban,
      title: "Failed Authentication Blocks",
      description: "If authentication fails or consent cannot be obtained, the transaction is immediately blocked. No exceptions."
    }
  ];

  return (
    <section className="py-24 bg-white relative" data-testid="how-it-works-section">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="overline text-[#0071E3] mb-4 block">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">
            Consent-First Architecture
          </h2>
          <p className="text-lg text-[#86868B] max-w-3xl mx-auto">
            SEC@R's revolutionary approach ensures stolen data cannot be activated without authenticated consent.
          </p>
        </div>

        {/* Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0071E3]/30 to-transparent"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className="bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 relative rounded-2xl"
              >
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#0071E3] rounded-full flex items-center justify-center text-white font-semibold text-sm z-20">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#0071E3]/10 rounded-2xl flex items-center justify-center">
                    <Icon className="text-[#0071E3]" size={32} />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-semibold text-[#1D1D1F] mb-3">
                    {step.title}
                  </h4>
                  <p className="text-[#86868B] leading-relaxed text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Benefit Highlight */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-[#0071E3] border-0 rounded-3xl">
            <CardContent className="p-8 text-center">
              <h4 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                The Result: Stolen Data Becomes Worthless
              </h4>
              <p className="text-lg text-white/80 leading-relaxed">
                Even if cybercriminals breach your systems, they cannot activate data without the Data Principal's consent. 
                SEC@R eliminates the economic incentive for data theft.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
