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
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950 opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">How It Works</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Consent-First Architecture in Action
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            SEC@R's revolutionary approach ensures stolen data cannot be activated without the Data Principal's authenticated consent.
          </p>
        </div>

        {/* Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0" style={{ top: '80px' }}></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className="glass relative group hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-sm z-20">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-emerald-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-emerald-400" size={32} />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Benefit Highlight */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="glass-emerald">
            <CardContent className="p-8 text-center">
              <h4 className="text-2xl font-bold text-white mb-4">
                The Result: Stolen Data Becomes Worthless
              </h4>
              <p className="text-lg text-gray-300">
                Even if cybercriminals breach your systems and steal data, they cannot activate it without passing multi-device layer authentication and obtaining consent from the rightful Data Principal. SEC@R eliminates the economic incentive for data theft.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
