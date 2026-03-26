import React from 'react';
import { mockData } from '../mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

export const Products = () => {
  const { products } = mockData;

  return (
    <section id="products" className="py-24" style={{ backgroundColor: 'var(--bg-primary)' }} data-testid="products-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="overline mb-4 block" style={{ color: 'var(--accent)' }}>Products</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>SEC@R Platform Solutions</h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Choose the perfect SEC@R solution for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id}
              className={`card-hover overflow-hidden rounded-xl ${product.badge ? 'ring-2' : ''}`}
              style={{ 
                backgroundColor: 'var(--bg-card)', 
                border: '1px solid var(--border)',
                ...(product.badge && { '--tw-ring-color': 'var(--accent)' })
              }}
            >
              {product.badge && (
                <div className="text-center py-2 text-sm font-medium text-white" style={{ backgroundColor: 'var(--accent)' }}>
                  {product.badge}
                </div>
              )}
              <CardHeader className="pb-4 pt-6">
                <CardTitle className="text-2xl mb-2" style={{ color: 'var(--text-primary)' }}>{product.name}</CardTitle>
                <p style={{ color: 'var(--text-secondary)' }}>{product.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'var(--accent-light)' }}>
                        <Check size={12} style={{ color: 'var(--accent)' }} />
                      </div>
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full font-medium mt-6 rounded-lg ${product.badge ? '' : ''}`}
                  style={{ 
                    backgroundColor: product.badge ? 'var(--accent)' : 'var(--bg-secondary)',
                    color: product.badge ? '#FFFFFF' : 'var(--text-primary)'
                  }}
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
