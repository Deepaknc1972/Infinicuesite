import React, { useEffect, useState } from 'react';
import { User, Smartphone, Fingerprint, Radio, Shield, Lock, Wifi } from 'lucide-react';

export const CyberAura = () => {
  const [activeNode, setActiveNode] = useState(0);
  const [pulseActive, setPulseActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseActive((prev) => !prev);
    }, 1500);
    return () => clearInterval(pulseInterval);
  }, []);

  const nodes = [
    { 
      id: 0, 
      icon: User, 
      label: "Data Principal", 
      sublabel: "You",
      position: "top",
      description: "The rightful owner of the data"
    },
    { 
      id: 1, 
      icon: Fingerprint, 
      label: "FIDO Device", 
      sublabel: "Hardware Key",
      position: "right",
      description: "Secure FIDO2 compliant authenticator"
    },
    { 
      id: 2, 
      icon: Smartphone, 
      label: "SEC@R App", 
      sublabel: "Mobile",
      position: "bottom",
      description: "Proximity sensor & consent manager"
    },
    { 
      id: 3, 
      icon: Radio, 
      label: "BLE Connection", 
      sublabel: "Wireless",
      position: "left",
      description: "Secure Bluetooth Low Energy link"
    }
  ];

  return (
    <section className="py-24 bg-[#F5F5F7] relative overflow-hidden" data-testid="cyber-aura-section">
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 0.3; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotate-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes data-flow {
          0% { stroke-dashoffset: 100; opacity: 0; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 113, 227, 0.2); }
          50% { box-shadow: 0 0 40px rgba(0, 113, 227, 0.4); }
        }
        .node-active {
          animation: glow-pulse 1.5s ease-in-out infinite;
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="overline text-[#0071E3] mb-4 block">Multi-Device Authentication</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1D1D1F] mb-6 tracking-tight">
            The Cyber Aura
            <span className="block text-[#0071E3]">Ecosystem</span>
          </h2>
          <p className="text-lg text-[#86868B] max-w-3xl mx-auto">
            SEC@R creates an impenetrable security aura around the Data Principal through seamless integration 
            of FIDO-compliant hardware, mobile app, and BLE proximity authentication.
          </p>
        </div>

        {/* Cyber Aura Visualization */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px] mx-auto">
            
            {/* Outer Rotating Ring */}
            <div 
              className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300"
              style={{ animation: 'rotate-slow 30s linear infinite' }}
            ></div>

            {/* Middle Pulse Ring */}
            <div 
              className="absolute inset-8 rounded-full border border-[#0071E3]/30"
              style={{ animation: 'pulse-ring 3s ease-in-out infinite' }}
            ></div>

            {/* Inner Rotating Ring */}
            <div 
              className="absolute inset-16 rounded-full border-2 border-gray-200"
              style={{ animation: 'rotate-reverse 20s linear infinite' }}
            ></div>

            {/* Connection Lines SVG */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600">
              <defs>
                <linearGradient id="flowGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0071E3" stopOpacity="0" />
                  <stop offset="50%" stopColor="#0071E3" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0071E3" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {[0, 1, 2, 3].map((i) => {
                const nextI = (i + 1) % 4;
                const angles = [270, 0, 90, 180];
                const radius = 200;
                const x1 = 300 + radius * Math.cos((angles[i] * Math.PI) / 180);
                const y1 = 300 + radius * Math.sin((angles[i] * Math.PI) / 180);
                const x2 = 300 + radius * Math.cos((angles[nextI] * Math.PI) / 180);
                const y2 = 300 + radius * Math.sin((angles[nextI] * Math.PI) / 180);
                
                return (
                  <g key={i}>
                    <path
                      d={`M ${x1} ${y1} Q 300 300 ${x2} ${y2}`}
                      fill="none"
                      stroke="#E5E5E5"
                      strokeWidth="2"
                    />
                    <path
                      d={`M ${x1} ${y1} Q 300 300 ${x2} ${y2}`}
                      fill="none"
                      stroke="url(#flowGradientLight)"
                      strokeWidth="3"
                      strokeDasharray="20 80"
                      style={{
                        animation: `data-flow 2s ease-in-out infinite`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Central Core - Shield Icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className={`relative ${pulseActive ? 'node-active' : ''}`}>
                <div className="absolute -inset-8 bg-[#0071E3]/10 rounded-full blur-2xl"></div>
                <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white border-2 border-[#0071E3] rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <Shield className="text-[#0071E3] mx-auto mb-2" size={40} />
                    <div className="text-[#1D1D1F] font-semibold text-sm">SEC@R</div>
                    <div className="text-[#0071E3] text-xs font-medium">Protected</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Node Positions */}
            {nodes.map((node, index) => {
              const Icon = node.icon;
              const positions = {
                top: { top: '0%', left: '50%', transform: 'translate(-50%, 0)' },
                right: { top: '50%', right: '0%', transform: 'translate(0, -50%)' },
                bottom: { bottom: '0%', left: '50%', transform: 'translate(-50%, 0)' },
                left: { top: '50%', left: '0%', transform: 'translate(0, -50%)' }
              };

              const isActive = activeNode === index;

              return (
                <div
                  key={node.id}
                  className={`absolute float-animation ${isActive ? 'node-active' : ''}`}
                  style={{
                    ...positions[node.position],
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  <div className={`relative group cursor-pointer transition-all duration-300 ${isActive ? 'scale-110' : 'hover:scale-105'}`}>
                    {isActive && (
                      <div className="absolute -inset-4 bg-[#0071E3]/20 rounded-full blur-xl"></div>
                    )}
                    
                    <div className={`relative w-24 h-24 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#0071E3]/10 border-2 border-[#0071E3] shadow-lg' 
                        : 'bg-white border border-gray-200 shadow-md hover:border-[#0071E3]/50 hover:shadow-lg'
                    }`}>
                      <Icon className={`mb-1 transition-colors ${isActive ? 'text-[#0071E3]' : 'text-[#86868B] group-hover:text-[#0071E3]'}`} size={28} />
                      <div className={`text-xs font-semibold text-center transition-colors ${isActive ? 'text-[#1D1D1F]' : 'text-[#1D1D1F]'}`}>
                        {node.label}
                      </div>
                      <div className={`text-xs transition-colors ${isActive ? 'text-[#0071E3]' : 'text-[#86868B]'}`}>
                        {node.sublabel}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Info Cards Below */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <div 
                key={node.id}
                className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                  activeNode === index 
                    ? 'bg-white border-2 border-[#0071E3] shadow-lg' 
                    : 'bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-[#0071E3]/30'
                }`}
                onClick={() => setActiveNode(index)}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    activeNode === index ? 'bg-[#0071E3]/10' : 'bg-[#F5F5F7]'
                  }`}>
                    <Icon className="text-[#0071E3]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#1D1D1F] font-semibold">{node.label}</h4>
                    <p className="text-[#86868B] text-xs">{node.sublabel}</p>
                  </div>
                </div>
                <p className="text-[#86868B] text-sm">{node.description}</p>
              </div>
            );
          })}
        </div>

        {/* Key Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Lock, title: "FIDO2 Certified", desc: "Hardware authenticator meets the highest security standards for passwordless authentication" },
            { icon: Wifi, title: "BLE Proximity", desc: "Bluetooth Low Energy ensures the Data Principal is physically present during authentication" },
            { icon: Shield, title: "Zero Trust", desc: "Every authentication request is verified across multiple device layers before consent" }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#0071E3]/10 rounded-2xl flex items-center justify-center">
                <item.icon className="text-[#0071E3]" size={32} />
              </div>
              <h4 className="text-[#1D1D1F] font-semibold mb-2">{item.title}</h4>
              <p className="text-[#86868B] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
