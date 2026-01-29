import React, { useState } from 'react';
import { mockData } from '../mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

export const Contact = () => {
  const { contactInfo } = mockData;
  const { toast } = useToast();
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
    toast({
      title: "Message Sent!",
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
    <section id="contact" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">Contact Us</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to secure your business? Reach out to our team for a personalized consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="glass hover:scale-105">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="glass hover:scale-105">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <a href={`tel:${contactInfo.phone}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="glass hover:scale-105">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Address</h4>
                  <p className="text-gray-400">{contactInfo.address}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 glass-strong">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white focus:border-cyan-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white focus:border-cyan-500"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-300">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white focus:border-cyan-500"
                      placeholder="Your Company"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-300">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white focus:border-cyan-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-gray-800 border-gray-700 text-white focus:border-cyan-500 resize-none"
                    placeholder="Tell us about your security needs..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-cyan-500 hover:bg-purple-600 text-black font-semibold py-6 text-lg group"
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
