import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Wallet, Watch, Usb, FileSignature, Fingerprint, Shield, Zap, Check, ArrowRight } from 'lucide-react';
import { productData } from '../productData';

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(productData.products[0]);
  const productIcons = { 'Smart Wallets': Wallet, 'Smart Rings': Fingerprint, 'Smart USB Drives': Usb, 'Smart USB for Digital Signature': FileSignature, 'Smart Watches': Watch };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }} data-testid="product-page">
      <Header />
      
      <section className="pt-32 pb-16" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)', border: 'none' }}>SEC@R Hardware Ecosystem</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>Smart Authentication Devices</h1>
            <p className="text-lg max-w-4xl mx-auto" style={{ color: 'var(--text-secondary)' }}>Multi-device layer authentication powered by cutting-edge hardware.</p>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {productData.products.map((product, index) => {
              const Icon = productIcons[product.name];
              const isSelected = selectedProduct.name === product.name;
              return (
                <Card key={index} onClick={() => setSelectedProduct(product)} className="cursor-pointer transition-all duration-300 rounded-xl card-hover"
                  style={{ backgroundColor: isSelected ? 'var(--accent-light)' : 'var(--bg-secondary)', border: isSelected ? '2px solid var(--accent)' : '1px solid var(--border)' }}
                  data-testid={`product-card-${index}`}>
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-xl flex items-center justify-center" style={{ backgroundColor: isSelected ? 'var(--accent)' : 'var(--bg-card)' }}>
                      <Icon size={24} style={{ color: isSelected ? '#FFFFFF' : 'var(--accent)' }} />
                    </div>
                    <h3 className="text-sm md:text-base font-semibold" style={{ color: 'var(--text-primary)' }}>{product.name}</h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Card className="overflow-hidden rounded-2xl" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
              <div className="relative h-80 md:h-96">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                {selectedProduct.badge && <Badge className="absolute top-4 right-4" style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF' }}>{selectedProduct.badge}</Badge>}
              </div>
              <CardContent className="p-6 md:p-8" style={{ backgroundColor: 'var(--bg-card)' }}>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight" style={{ color: 'var(--text-primary)' }}>{selectedProduct.name}</h2>
                <p className="text-base mb-6" style={{ color: 'var(--text-secondary)' }}>{selectedProduct.description}</p>
                <div className="flex items-baseline space-x-4 mb-6">
                  <span className="text-3xl font-bold stat-number" style={{ color: 'var(--accent)' }}>{selectedProduct.price}</span>
                  <span style={{ color: 'var(--text-muted)' }}>Starting price</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 font-medium rounded-lg" style={{ backgroundColor: 'var(--accent)', color: '#FFFFFF' }} data-testid="order-now-btn">Order Now <ArrowRight size={18} className="ml-2" /></Button>
                  <Button variant="outline" className="flex-1 rounded-lg" style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}>Learn More</Button>
                </div>
              </CardContent>
            </Card>

            <div>
              <Tabs defaultValue="features" className="w-full">
                <TabsList className="grid w-full grid-cols-3 rounded-lg p-1" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  {['features', 'specs', 'security'].map((tab) => (
                    <TabsTrigger key={tab} value={tab} className="rounded-md capitalize data-[state=active]:shadow-sm" style={{ '--tw-bg-opacity': 1 }}>{tab}</TabsTrigger>
                  ))}
                </TabsList>
                {['features', 'specs', 'security'].map((tab) => (
                  <TabsContent key={tab} value={tab} className="mt-6">
                    <Card className="rounded-xl" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                      <CardHeader><CardTitle style={{ color: 'var(--text-primary)' }}>{tab === 'features' ? 'Key Features' : tab === 'specs' ? 'Technical Specifications' : 'Security Features'}</CardTitle></CardHeader>
                      <CardContent className="space-y-3">
                        {tab === 'features' && selectedProduct.features.map((f, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'var(--accent-light)' }}><Check size={12} style={{ color: 'var(--accent)' }} /></div>
                            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{f}</span>
                          </div>
                        ))}
                        {tab === 'specs' && selectedProduct.specifications.map((s, idx) => (
                          <div key={idx} className="grid grid-cols-2 gap-4 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
                            <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{s.label}</span>
                            <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{s.value}</span>
                          </div>
                        ))}
                        {tab === 'security' && selectedProduct.security.map((s, idx) => (
                          <div key={idx} className="flex items-start space-x-3 p-4 rounded-xl" style={{ backgroundColor: 'var(--bg-card)' }}>
                            <Shield size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--accent)' }} />
                            <div>
                              <h5 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{s.title}</h5>
                              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{s.description}</p>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
              <Card className="mt-6 rounded-xl" style={{ backgroundColor: 'var(--accent-light)', border: '1px solid var(--accent)' }}>
                <CardHeader><CardTitle style={{ color: 'var(--text-primary)' }}>Perfect For</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProduct.useCases.map((u, idx) => (
                      <div key={idx} className="flex items-center space-x-2"><Zap size={16} style={{ color: 'var(--accent)' }} /><span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{u}</span></div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>Why Choose SEC@R Hardware?</h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>Our smart devices form a complete authentication ecosystem.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productData.benefits.map((benefit, index) => {
              const Icon = benefit.icon === 'Shield' ? Shield : benefit.icon === 'Zap' ? Zap : Fingerprint;
              return (
                <Card key={index} className="card-hover rounded-xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-light)' }}><Icon size={32} style={{ color: 'var(--accent)' }} /></div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{benefit.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductPage;
