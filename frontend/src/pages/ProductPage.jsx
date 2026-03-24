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

  const productIcons = {
    'Smart Wallets': Wallet,
    'Smart Rings': Fingerprint,
    'Smart USB Drives': Usb,
    'Smart USB for Digital Signature': FileSignature,
    'Smart Watches': Watch
  };

  return (
    <div className="min-h-screen bg-[#0A192F]" data-testid="product-page">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-[#64FFDA]/20 text-[#64FFDA] border-[#64FFDA]/30 mb-4">
              SEC@R Hardware Ecosystem
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Smart Authentication Devices
            </h1>
            <p className="text-base md:text-lg text-[#8892B0] max-w-4xl mx-auto">
              Multi-device layer authentication powered by cutting-edge hardware. 
              Protect your data with SEC@R's intelligent authentication ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {productData.products.map((product, index) => {
              const Icon = productIcons[product.name];
              return (
                <Card 
                  key={index}
                  onClick={() => setSelectedProduct(product)}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedProduct.name === product.name 
                      ? 'bg-[#64FFDA]/10 border-[#64FFDA]' 
                      : 'bg-[#112240]/60 border-[#1E2D4A] hover:border-[#64FFDA]/50'
                  }`}
                  data-testid={`product-card-${index}`}
                >
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-xl flex items-center justify-center ${
                      selectedProduct.name === product.name 
                        ? 'bg-[#64FFDA]/20' 
                        : 'bg-[#1E2D4A]'
                    }`}>
                      <Icon className="text-[#64FFDA]" size={24} />
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white">{product.name}</h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Selected Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Product Image & Info */}
            <div>
              <Card className="bg-[#112240]/60 border-[#1E2D4A] overflow-hidden">
                <div className="relative h-80 md:h-96">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-transparent to-transparent"></div>
                  {selectedProduct.badge && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#64FFDA] text-[#0A192F] font-semibold">
                        {selectedProduct.badge}
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">{selectedProduct.name}</h2>
                  <p className="text-[#8892B0] text-base mb-6">{selectedProduct.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="overline text-[#64FFDA] mb-2 block">Price</span>
                      <p className="text-2xl font-bold text-white stat-number">{selectedProduct.price}</p>
                    </div>
                    
                    <div>
                      <span className="overline text-[#64FFDA] mb-2 block">Availability</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#64FFDA] rounded-full animate-pulse"></div>
                        <span className="text-[#CCD6F6]">In Stock</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button 
                      className="flex-1 bg-[#64FFDA] hover:bg-[#4CD9B4] text-[#0A192F] font-semibold"
                      data-testid="order-now-btn"
                    >
                      Order Now
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Detailed Tabs */}
            <div>
              <Tabs defaultValue="features" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-[#112240] border border-[#1E2D4A]">
                  <TabsTrigger value="features" className="data-[state=active]:bg-[#64FFDA] data-[state=active]:text-[#0A192F]">
                    Features
                  </TabsTrigger>
                  <TabsTrigger value="specs" className="data-[state=active]:bg-[#64FFDA] data-[state=active]:text-[#0A192F]">
                    Specs
                  </TabsTrigger>
                  <TabsTrigger value="security" className="data-[state=active]:bg-[#64FFDA] data-[state=active]:text-[#0A192F]">
                    Security
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="features" className="mt-6">
                  <Card className="bg-[#112240]/60 border-[#1E2D4A]">
                    <CardHeader>
                      <CardTitle className="text-white">Key Features</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {selectedProduct.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Check className="text-[#64FFDA] flex-shrink-0 mt-1" size={18} />
                          <span className="text-[#CCD6F6] text-sm">{feature}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="specs" className="mt-6">
                  <Card className="bg-[#112240]/60 border-[#1E2D4A]">
                    <CardHeader>
                      <CardTitle className="text-white">Technical Specifications</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {selectedProduct.specifications.map((spec, idx) => (
                        <div key={idx} className="grid grid-cols-2 gap-4 py-3 border-b border-[#1E2D4A] last:border-0">
                          <span className="text-[#8892B0] text-sm">{spec.label}</span>
                          <span className="text-white font-medium text-sm">{spec.value}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="security" className="mt-6">
                  <Card className="bg-[#112240]/60 border-[#1E2D4A]">
                    <CardHeader>
                      <CardTitle className="text-white">Security Features</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {selectedProduct.security.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-4 bg-[#64FFDA]/5 rounded-lg border border-[#64FFDA]/20">
                          <Shield className="text-[#64FFDA] flex-shrink-0 mt-1" size={20} />
                          <div>
                            <h5 className="text-white font-semibold mb-1">{item.title}</h5>
                            <p className="text-[#8892B0] text-sm">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Use Cases */}
              <Card className="mt-6 bg-[#64FFDA]/5 border-[#64FFDA]/30">
                <CardHeader>
                  <CardTitle className="text-white">Perfect For</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProduct.useCases.map((useCase, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Zap className="text-[#64FFDA]" size={16} />
                        <span className="text-[#CCD6F6] text-sm">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SEC@R Hardware */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Why Choose SEC@R Hardware?
            </h2>
            <p className="text-base md:text-lg text-[#8892B0] max-w-3xl mx-auto">
              Our smart devices form a complete authentication ecosystem that makes stolen data worthless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productData.benefits.map((benefit, index) => {
              const Icon = benefit.icon === 'Shield' ? Shield : benefit.icon === 'Zap' ? Zap : Fingerprint;
              return (
                <Card key={index} className="bg-[#112240]/60 border-[#1E2D4A] hover:border-[#64FFDA]/50 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-[#64FFDA]/10 rounded-xl flex items-center justify-center">
                      <Icon className="text-[#64FFDA]" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-[#8892B0] leading-relaxed text-sm">{benefit.description}</p>
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
