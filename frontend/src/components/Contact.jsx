import React, { useState } from 'react';
import { mockData } from '../mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const { contactInfo } = mockData;
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message Sent!", { description: "We'll get back to you within 24 hours." });
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-[#F5F5F7]" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="overline text-[#0071E3] mb-4 block">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">Get in Touch</h2>
          <p className="text-lg text-[#86868B] max-w-3xl mx-auto">
            Ready to secure your business? Reach out for a personalized consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#0071E3]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#0071E3]" size={24} />
                </div>
                <div>
                  <h4 className="text-[#1D1D1F] font-semibold mb-1">Email</h4>
                  <a href={`mailto:${contactInfo.email}`} className="text-[#86868B] hover:text-[#0071E3] transition-colors text-sm">
                    {contactInfo.email}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#0071E3]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#0071E3]" size={24} />
                </div>
                <div>
                  <h4 className="text-[#1D1D1F] font-semibold mb-1">Phone</h4>
                  <a href={`tel:${contactInfo.phone}`} className="text-[#86868B] hover:text-[#0071E3] transition-colors text-sm">
                    {contactInfo.phone}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#0071E3]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#0071E3]" size={24} />
                </div>
                <div>
                  <h4 className="text-[#1D1D1F] font-semibold mb-1">Address</h4>
                  <p className="text-[#86868B] text-sm">{contactInfo.address}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 bg-white border border-gray-200 shadow-lg rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl text-[#1D1D1F] tracking-tight">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#1D1D1F]">Full Name *</Label>
                    <Input
                      id="name" name="name" value={formData.name} onChange={handleChange} required
                      className="bg-[#F5F5F7] border-0 text-[#1D1D1F] focus:ring-2 focus:ring-[#0071E3] rounded-xl"
                      placeholder="John Doe" data-testid="contact-name-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#1D1D1F]">Email *</Label>
                    <Input
                      id="email" name="email" type="email" value={formData.email} onChange={handleChange} required
                      className="bg-[#F5F5F7] border-0 text-[#1D1D1F] focus:ring-2 focus:ring-[#0071E3] rounded-xl"
                      placeholder="john@company.com" data-testid="contact-email-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-[#1D1D1F]">Company</Label>
                    <Input
                      id="company" name="company" value={formData.company} onChange={handleChange}
                      className="bg-[#F5F5F7] border-0 text-[#1D1D1F] focus:ring-2 focus:ring-[#0071E3] rounded-xl"
                      placeholder="Your Company" data-testid="contact-company-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#1D1D1F]">Phone</Label>
                    <Input
                      id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange}
                      className="bg-[#F5F5F7] border-0 text-[#1D1D1F] focus:ring-2 focus:ring-[#0071E3] rounded-xl"
                      placeholder="+1 (555) 123-4567" data-testid="contact-phone-input"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#1D1D1F]">Message *</Label>
                  <Textarea
                    id="message" name="message" value={formData.message} onChange={handleChange} required rows={6}
                    className="bg-[#F5F5F7] border-0 text-[#1D1D1F] focus:ring-2 focus:ring-[#0071E3] resize-none rounded-xl"
                    placeholder="Tell us about your security needs..." data-testid="contact-message-input"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium py-6 text-lg group rounded-full"
                  data-testid="contact-submit-btn"
                >
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
