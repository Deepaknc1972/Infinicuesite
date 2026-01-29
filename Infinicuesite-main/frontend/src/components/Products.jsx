import React from 'react';
import { mockData } from '../mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check } from 'lucide-react';

export const Products = () => {
  const { products } = mockData;

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">Products</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">SEC@R Platform Solutions</h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect SEC@R solution tailored to your organization's security needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className={`glass relative overflow-hidden group hover:scale-105 ${
                product.badge ? 'ring-2 ring-cyan-500/30' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {product.badge && (
                <div className="absolute top-0 right-0">
                  <Badge className="bg-cyan-500 text-black font-semibold rounded-tl-none rounded-br-none">
                    {product.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-white mb-2">{product.name}</CardTitle>
                <p className="text-gray-400">{product.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="text-cyan-400 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-cyan-500 hover:bg-purple-600 text-black font-semibold mt-6"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
