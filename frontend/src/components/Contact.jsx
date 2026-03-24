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
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast.success("Message Sent!", {
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#0A192F]" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="overline text-[#64FFDA] mb-4 block">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Get in Touch</h2>
          <p className="text-base md:text-lg text-[#8892B0] max-w-3xl mx-auto">
            Ready to secure your business? Reach out to our team for a personalized consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="bg-[#112240]/60 border-[#1E2D4A] hover:border-[#64FFDA]/50 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#64FFDA]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#64FFDA]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a href={`mailto:${contactInfo.email}`} className="text-[#8892B0] hover:text-[#64FFDA] transition-colors text-sm">
                    {contactInfo.email}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#112240]/60 border-[#1E2D4A] hover:border-[#64FFDA]/50 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#64FFDA]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#64FFDA]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <a href={`tel:${contactInfo.phone}`} className="text-[#8892B0] hover:text-[#64FFDA] transition-colors text-sm">
                    {contactInfo.phone}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#112240]/60 border-[#1E2D4A] hover:border-[#64FFDA]/50 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#64FFDA]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#64FFDA]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Address</h4>
                  <p className="text-[#8892B0] text-sm">{contactInfo.address}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 bg-[#112240]/80 border-[#1E2D4A]">
            <CardHeader>
              <CardTitle className="text-2xl text-white tracking-tight">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#CCD6F6]">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-[#0A192F] border-[#1E2D4A] text-white focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA]"
                      placeholder="John Doe"
                      data-testid="contact-name-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#CCD6F6]">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[#0A192F] border-[#1E2D4A] text-white focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA]"
                      placeholder="john@company.com"
                      data-testid="contact-email-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-[#CCD6F6]">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-[#0A192F] border-[#1E2D4A] text-white focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA]"
                      placeholder="Your Company"
                      data-testid="contact-company-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#CCD6F6]">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-[#0A192F] border-[#1E2D4A] text-white focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA]"
                      placeholder="+1 (555) 123-4567"
                      data-testid="contact-phone-input"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#CCD6F6]">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-[#0A192F] border-[#1E2D4A] text-white focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA] resize-none"
                    placeholder="Tell us about your security needs..."
                    data-testid="contact-message-input"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#64FFDA] hover:bg-[#4CD9B4] text-[#0A192F] font-semibold py-6 text-lg group"
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
