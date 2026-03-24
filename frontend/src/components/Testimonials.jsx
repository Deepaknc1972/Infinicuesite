import React from 'react';
import { mockData } from '../mock';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const { testimonials } = mockData;

  return (
    <section id="testimonials" className="py-24 bg-[#0A192F] relative overflow-hidden" data-testid="testimonials-section">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(100, 255, 218, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="overline text-[#64FFDA] mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Trusted by Industry Leaders</h2>
          <p className="text-base md:text-lg text-[#8892B0] max-w-3xl mx-auto">
            See what security professionals are saying about Infinicue Solutions and SEC@R.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="bg-[#112240]/60 border-[#1E2D4A] hover:border-[#64FFDA]/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={64} className="text-[#64FFDA]" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#64FFDA] fill-[#64FFDA]" size={18} />
                  ))}
                </div>

                {/* Content */}
                <p className="text-[#CCD6F6] text-lg mb-6 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12 bg-[#64FFDA]">
                    <AvatarFallback className="text-[#0A192F] font-bold">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-[#8892B0]">{testimonial.role}</div>
                    <div className="text-sm text-[#64FFDA]">{testimonial.company}</div>
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
