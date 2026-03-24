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
    <div className="min-h-screen bg-white" data-testid="product-page">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-[#0071E3]/10 text-[#0071E3] border-0 mb-4">SEC@R Hardware Ecosystem</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">Smart Authentication Devices</h1>
            <p className="text-lg text-[#86868B] max-w-4xl mx-auto">
              Multi-device layer authentication powered by cutting-edge hardware.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {productData.products.map((product, index) => {
              const Icon = productIcons[product.name];
              return (
                <Card 
                  key={index}
                  onClick={() => setSelectedProduct(product)}
                  className={`cursor-pointer transition-all duration-300 rounded-2xl ${
                    selectedProduct.name === product.name 
                      ? 'bg-[#0071E3]/10 border-2 border-[#0071E3] shadow-lg' 
                      : 'bg-[#F5F5F7] border-0 hover:shadow-md'
                  }`}
                  data-testid={`product-card-${index}`}
                >
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-2xl flex items-center justify-center ${
                      selectedProduct.name === product.name ? 'bg-[#0071E3]/20' : 'bg-white'
                    }`}>
                      <Icon className="text-[#0071E3]" size={24} />
                    </div>
                    <h3 className="text-sm md:text-base font-semibold text-[#1D1D1F]">{product.name}</h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Selected Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Card className="bg-[#F5F5F7] border-0 overflow-hidden rounded-3xl">
                <div className="relative h-80 md:h-96">
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                  {selectedProduct.badge && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#0071E3] text-white font-medium">{selectedProduct.badge}</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6 md:p-8 bg-white">
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#1D1D1F] mb-4 tracking-tight">{selectedProduct.name}</h2>
                  <p className="text-[#86868B] text-base mb-6">{selectedProduct.description}</p>
                  <div className="flex items-baseline space-x-4 mb-6">
                    <span className="text-3xl font-semibold text-[#0071E3] stat-number">{selectedProduct.price}</span>
                    <span className="text-[#86868B]">Starting price</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1 bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium rounded-full" data-testid="order-now-btn">
                      Order Now <ArrowRight className="ml-2" size={18} />
                    </Button>
                    <Button variant="outline" className="flex-1 border-gray-300 text-[#1D1D1F] hover:bg-[#F5F5F7] rounded-full">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Tabs defaultValue="features" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-[#F5F5F7] border-0 rounded-full p-1">
                  <TabsTrigger value="features" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-[#1D1D1F] data-[state=active]:shadow-sm">Features</TabsTrigger>
                  <TabsTrigger value="specs" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-[#1D1D1F] data-[state=active]:shadow-sm">Specs</TabsTrigger>
                  <TabsTrigger value="security" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-[#1D1D1F] data-[state=active]:shadow-sm">Security</TabsTrigger>
                </TabsList>

                <TabsContent value="features" className="mt-6">
                  <Card className="bg-[#F5F5F7] border-0 rounded-2xl">
                    <CardHeader><CardTitle className="text-[#1D1D1F]">Key Features</CardTitle></CardHeader>
                    <CardContent className="space-y-3">
                      {selectedProduct.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-5 h-5 bg-[#0071E3]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="text-[#0071E3]" size={12} />
                          </div>
                          <span className="text-[#86868B] text-sm">{feature}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="specs" className="mt-6">
                  <Card className="bg-[#F5F5F7] border-0 rounded-2xl">
                    <CardHeader><CardTitle className="text-[#1D1D1F]">Technical Specifications</CardTitle></CardHeader>
                    <CardContent className="space-y-2">
                      {selectedProduct.specifications.map((spec, idx) => (
                        <div key={idx} className="grid grid-cols-2 gap-4 py-3 border-b border-gray-200 last:border-0">
                          <span className="text-[#86868B] text-sm">{spec.label}</span>
                          <span className="text-[#1D1D1F] font-medium text-sm">{spec.value}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="security" className="mt-6">
                  <Card className="bg-[#F5F5F7] border-0 rounded-2xl">
                    <CardHeader><CardTitle className="text-[#1D1D1F]">Security Features</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                      {selectedProduct.security.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-4 bg-white rounded-xl">
                          <Shield className="text-[#0071E3] flex-shrink-0 mt-1" size={20} />
                          <div>
                            <h5 className="text-[#1D1D1F] font-semibold mb-1">{item.title}</h5>
                            <p className="text-[#86868B] text-sm">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <Card className="mt-6 bg-[#0071E3]/5 border border-[#0071E3]/20 rounded-2xl">
                <CardHeader><CardTitle className="text-[#1D1D1F]">Perfect For</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProduct.useCases.map((useCase, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Zap className="text-[#0071E3]" size={16} />
                        <span className="text-[#86868B] text-sm">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">Why Choose SEC@R Hardware?</h2>
            <p className="text-lg text-[#86868B] max-w-3xl mx-auto">Our smart devices form a complete authentication ecosystem.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productData.benefits.map((benefit, index) => {
              const Icon = benefit.icon === 'Shield' ? Shield : benefit.icon === 'Zap' ? Zap : Fingerprint;
              return (
                <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-[#0071E3]/10 rounded-2xl flex items-center justify-center">
                      <Icon className="text-[#0071E3]" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">{benefit.title}</h3>
                    <p className="text-[#86868B] leading-relaxed text-sm">{benefit.description}</p>
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
