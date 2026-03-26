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
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message Sent!", { description: "We'll get back to you within 24 hours." });
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: 'var(--bg-secondary)' }} data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="overline mb-4 block" style={{ color: 'var(--accent)' }}>Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>Get in Touch</h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Ready to secure your business? Reach out for a personalized consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            {[
              { icon: Mail, title: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
              { icon: Phone, title: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
              { icon: MapPin, title: "Address", value: contactInfo.address }
            ].map((item, i) => (
              <Card key={i} className="card-hover rounded-xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--accent-light)' }}>
                    <item.icon size={24} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-sm transition-colors hover:underline" style={{ color: 'var(--text-secondary)' }}>{item.value}</a>
                    ) : (
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="lg:col-span-2 rounded-2xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}>
            <CardHeader>
              <CardTitle className="text-2xl tracking-tight" style={{ color: 'var(--text-primary)' }}>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { id: 'name', label: 'Full Name *', type: 'text', placeholder: 'John Doe', required: true },
                    { id: 'email', label: 'Email *', type: 'email', placeholder: 'john@company.com', required: true },
                    { id: 'company', label: 'Company', type: 'text', placeholder: 'Your Company' },
                    { id: 'phone', label: 'Phone', type: 'tel', placeholder: '+1 (555) 123-4567' }
                  ].map((field) => (
                    <div key={field.id} className="space-y-2">
                      <Label htmlFor={field.id} style={{ color: 'var(--text-primary)' }}>{field.label}</Label>
                      <Input
                        id={field.id} name={field.id} type={field.type} value={formData[field.id]} onChange={handleChange} required={field.required}
                        className="rounded-lg" placeholder={field.placeholder} data-testid={`contact-${field.id}-input`}
                        style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" style={{ color: 'var(--text-primary)' }}>Message *</Label>
                  <Textarea
                    id="message" name="message" value={formData.message} onChange={handleChange} required rows={6}
                    className="rounded-lg resize-none" placeholder="Tell us about your security needs..." data-testid="contact-message-input"
                    style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                  />
                </div>
                <Button type="submit" className="w-full font-semibold py-6 text-lg group rounded-lg" style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF' }} data-testid="contact-submit-btn">
                  Send Message <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
