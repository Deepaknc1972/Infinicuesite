import React from 'react';
import { mockData } from '../mock';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const { testimonials } = mockData;

  return (
    <section id="testimonials" className="py-24 bg-white relative" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="overline text-[#0071E3] mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">Trusted by Leaders</h2>
          <p className="text-lg text-[#86868B] max-w-3xl mx-auto">
            See what security professionals are saying about SEC@R.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="bg-[#F5F5F7] border-0 shadow-none hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group rounded-2xl"
            >
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={48} className="text-[#0071E3]" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                  ))}
                </div>

                {/* Content */}
                <p className="text-[#1D1D1F] text-lg mb-6 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12 bg-[#0071E3]">
                    <AvatarFallback className="text-white font-semibold">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-[#1D1D1F] font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-[#86868B]">{testimonial.role}</div>
                    <div className="text-sm text-[#0071E3]">{testimonial.company}</div>
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
