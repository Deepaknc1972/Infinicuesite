import React from 'react';
import { mockData } from '../mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const { pricing } = mockData;

  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">Pricing</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the plan that fits your organization. All plans include 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map((plan, index) => (
            <Card 
              key={plan.id}
              className={`glass relative hover:scale-105 ${
                plan.popular ? 'ring-2 ring-emerald-500 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-emerald-500 text-black font-semibold px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl text-white mb-4">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400 text-lg">{plan.period}</span>}
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="text-emerald-400" size={14} />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full font-semibold ${
                    plan.popular 
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-black' 
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">Need a custom solution?</p>
          <Button 
            variant="outline" 
            className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};
