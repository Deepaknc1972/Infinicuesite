import React from 'react';
import { mockData } from '../mock';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const { testimonials } = mockData;

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Trusted by Industry Leaders</h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See what security professionals are saying about Infinicue Solutions and SEC@R.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="glass group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={64} className="text-purple-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-purple-400 fill-purple-400" size={18} />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 text-lg mb-6 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600">
                    <AvatarFallback className="text-black font-bold">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-purple-400">{testimonial.company}</div>
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
