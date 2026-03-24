import React from 'react';
import { mockData } from '../mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check } from 'lucide-react';

export const Products = () => {
  const { products } = mockData;

  return (
    <section id="products" className="py-24 bg-white" data-testid="products-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="overline text-[#0071E3] mb-4 block">Products</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">SEC@R Platform Solutions</h2>
          <p className="text-lg text-[#86868B] max-w-3xl mx-auto">
            Choose the perfect SEC@R solution for your organization's security needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className={`bg-white border overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-2xl ${
                product.badge ? 'border-[#0071E3] shadow-lg' : 'border-gray-200'
              }`}
            >
              {product.badge && (
                <div className="bg-[#0071E3] text-white text-center py-2 text-sm font-medium">
                  {product.badge}
                </div>
              )}
              
              <CardHeader className="pb-4 pt-6">
                <CardTitle className="text-2xl text-[#1D1D1F] mb-2">{product.name}</CardTitle>
                <p className="text-[#86868B]">{product.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-[#0071E3]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="text-[#0071E3]" size={12} />
                      </div>
                      <span className="text-[#86868B] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full font-medium mt-6 rounded-full ${
                    product.badge 
                      ? 'bg-[#0071E3] hover:bg-[#0077ED] text-white' 
                      : 'bg-[#F5F5F7] hover:bg-gray-200 text-[#1D1D1F]'
                  }`}
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  data-testid={`product-learn-more-${product.id}`}
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
