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
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4">
              SEC@R Hardware Ecosystem
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Smart Authentication Devices
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
              Multi-device layer authentication powered by cutting-edge hardware. 
              Protect your data with SEC@R's intelligent authentication ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {productData.products.map((product, index) => {
              const Icon = productIcons[product.name];
              return (
                <Card 
                  key={index}
                  onClick={() => setSelectedProduct(product)}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedProduct.name === product.name 
                      ? 'bg-purple-500/20 border-purple-500 scale-105' 
                      : 'bg-gray-900/50 border-gray-800 hover:border-purple-500/50'
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                      selectedProduct.name === product.name 
                        ? 'bg-purple-500/30' 
                        : 'bg-gray-800'
                    }`}>
                      <Icon className="text-purple-400" size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-white">{product.name}</h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Selected Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Product Image & Info */}
            <div>
              <Card className="glass overflow-hidden">
                <div className="relative h-96 bg-gradient-to-br from-gray-900 to-black">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  {selectedProduct.badge && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-purple-500 text-black font-semibold">
                        {selectedProduct.badge}
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-white mb-4">{selectedProduct.name}</h2>
                  <p className="text-gray-400 text-lg mb-6">{selectedProduct.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 uppercase mb-2">Price</h4>
                      <p className="text-2xl font-bold text-white">{selectedProduct.price}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 uppercase mb-2">Availability</h4>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-300">In Stock</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <Button 
                      className="flex-1 bg-purple-500 hover:bg-purple-600 text-black font-semibold"
                      onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    >
                      Order Now
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-purple-500 text-purple-400 hover:bg-purple-500/10"
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
                <TabsList className="grid w-full grid-cols-3 bg-gray-900 border border-gray-800">
                  <TabsTrigger value="features" className="data-[state=active]:bg-purple-500 data-[state=active]:text-black">
                    Features
                  </TabsTrigger>
                  <TabsTrigger value="specs" className="data-[state=active]:bg-purple-500 data-[state=active]:text-black">
                    Specifications
                  </TabsTrigger>
                  <TabsTrigger value="security" className="data-[state=active]:bg-purple-500 data-[state=active]:text-black">
                    Security
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="features" className="mt-6">
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-white">Key Features</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {selectedProduct.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Check className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="specs" className="mt-6">
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-white">Technical Specifications</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {selectedProduct.specifications.map((spec, idx) => (
                        <div key={idx} className="grid grid-cols-2 gap-4 py-3 border-b border-gray-800 last:border-0">
                          <span className="text-gray-400">{spec.label}</span>
                          <span className="text-white font-medium">{spec.value}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="security" className="mt-6">
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-white">Security Features</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {selectedProduct.security.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-4 bg-purple-500/5 rounded-lg border border-purple-500/20">
                          <Shield className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                          <div>
                            <h5 className="text-white font-semibold mb-1">{item.title}</h5>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Use Cases */}
              <Card className="mt-6 bg-gradient-to-r from-purple-500/10 to-purple-500/10 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-white">Perfect For</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedProduct.useCases.map((useCase, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Zap className="text-purple-400" size={16} />
                        <span className="text-gray-300 text-sm">{useCase}</span>
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
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose SEC@R Hardware?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our smart devices form a complete authentication ecosystem that makes stolen data worthless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productData.benefits.map((benefit, index) => {
              const Icon = benefit.icon === 'Shield' ? Shield : benefit.icon === 'Zap' ? Zap : Fingerprint;
              return (
                <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                      <Icon className="text-purple-400" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
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