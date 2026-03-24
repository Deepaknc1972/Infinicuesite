import React from 'react';
import { mockData } from '../mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check } from 'lucide-react';

export const Products = () => {
  const { products } = mockData;

  return (
    <section id="products" className="py-24 bg-[#0A192F]" data-testid="products-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="overline text-[#64FFDA] mb-4 block">Products</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">SEC@R Platform Solutions</h2>
          <p className="text-base md:text-lg text-[#8892B0] max-w-3xl mx-auto">
            Choose the perfect SEC@R solution tailored to your organization's security needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className={`bg-[#112240]/60 border-[#1E2D4A] relative overflow-hidden hover:border-[#64FFDA]/50 hover:-translate-y-2 transition-all duration-300 ${
                product.badge ? 'ring-1 ring-[#64FFDA]/30' : ''
              }`}
            >
              {product.badge && (
                <div className="absolute top-0 right-0">
                  <Badge className="bg-[#64FFDA] text-[#0A192F] font-semibold rounded-tl-none rounded-br-none px-3 py-1">
                    {product.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-white mb-2">{product.name}</CardTitle>
                <p className="text-[#8892B0]">{product.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="text-[#64FFDA] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-[#CCD6F6] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-[#64FFDA] hover:bg-[#4CD9B4] text-[#0A192F] font-semibold mt-6"
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
