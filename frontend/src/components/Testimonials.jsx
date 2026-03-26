import React from 'react';
import { mockData } from '../mock';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const { testimonials } = mockData;

  return (
    <section id="testimonials" className="py-24 relative" style={{ backgroundColor: 'var(--bg-primary)' }} data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="overline mb-4 block" style={{ color: 'var(--accent)' }}>Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>Trusted by Leaders</h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            See what security professionals are saying about SEC@R.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-hover group rounded-xl" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
              <CardContent className="p-8 relative">
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={48} style={{ color: 'var(--accent)' }} />
                </div>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed relative z-10" style={{ color: 'var(--text-primary)' }}>
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12" style={{ backgroundColor: 'var(--accent)' }}>
                    <AvatarFallback className="text-white font-semibold">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>{testimonial.name}</div>
                    <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{testimonial.role}</div>
                    <div className="text-sm" style={{ color: 'var(--accent)' }}>{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
