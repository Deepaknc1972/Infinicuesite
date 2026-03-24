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
    <section className="py-24 bg-[#0A192F] relative overflow-hidden" data-testid="cyber-aura-section">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(100, 255, 218, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 255, 218, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 0.3; }
          100% { transform: scale(0.8); opacity: 0.8; }
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
          50% { transform: translateY(-10px); }
        }
        @keyframes glow-pulse {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(100, 255, 218, 0.5)); }
          50% { filter: drop-shadow(0 0 25px rgba(100, 255, 218, 0.8)); }
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
          <span className="overline text-[#64FFDA] mb-4 block">Multi-Device Authentication</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            The Cyber Aura
            <span className="block text-[#64FFDA] mt-2">Ecosystem</span>
          </h2>
          <p className="text-base md:text-lg text-[#8892B0] max-w-3xl mx-auto">
            SEC@R creates an impenetrable security aura around the Data Principal through seamless integration 
            of FIDO-compliant hardware, mobile app, and BLE proximity authentication.
          </p>
        </div>

        {/* Cyber Aura Visualization */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Shield - The Protected Zone */}
          <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px] mx-auto">
            
            {/* Outer Rotating Ring */}
            <div 
              className="absolute inset-0 rounded-full border-2 border-dashed border-[#64FFDA]/30"
              style={{ animation: 'rotate-slow 30s linear infinite' }}
            ></div>

            {/* Middle Pulse Ring */}
            <div 
              className="absolute inset-8 rounded-full border border-[#64FFDA]/40"
              style={{ animation: 'pulse-ring 3s ease-in-out infinite' }}
            ></div>

            {/* Inner Rotating Ring (reverse) */}
            <div 
              className="absolute inset-16 rounded-full border-2 border-[#64FFDA]/20"
              style={{ animation: 'rotate-reverse 20s linear infinite' }}
            ></div>

            {/* Connection Lines SVG */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600">
              {/* Data flow paths */}
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#64FFDA" stopOpacity="0" />
                  <stop offset="50%" stopColor="#64FFDA" stopOpacity="1" />
                  <stop offset="100%" stopColor="#64FFDA" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Connecting lines between nodes */}
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
                    {/* Static connection line */}
                    <path
                      d={`M ${x1} ${y1} Q 300 300 ${x2} ${y2}`}
                      fill="none"
                      stroke="#1E2D4A"
                      strokeWidth="2"
                    />
                    {/* Animated data flow */}
                    <path
                      d={`M ${x1} ${y1} Q 300 300 ${x2} ${y2}`}
                      fill="none"
                      stroke="url(#flowGradient)"
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
                {/* Glow effect */}
                <div className="absolute -inset-8 bg-[#64FFDA]/20 rounded-full blur-2xl"></div>
                
                {/* Core circle */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 bg-[#112240] border-2 border-[#64FFDA] rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="text-[#64FFDA] mx-auto mb-2" size={40} />
                    <div className="text-white font-bold text-sm">SEC@R</div>
                    <div className="text-[#64FFDA] text-xs">Protected</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Node Positions */}
            {nodes.map((node, index) => {
              const Icon = node.icon;
              const angles = [270, 0, 90, 180]; // top, right, bottom, left
              const radius = 200;
              const angle = angles[index];
              const x = 50 + (radius / 3) * Math.cos((angle * Math.PI) / 180);
              const y = 50 + (radius / 3) * Math.sin((angle * Math.PI) / 180);
              
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
                    {/* Outer glow */}
                    {isActive && (
                      <div className="absolute -inset-4 bg-[#64FFDA]/30 rounded-full blur-xl"></div>
                    )}
                    
                    {/* Node circle */}
                    <div className={`relative w-24 h-24 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#64FFDA]/20 border-2 border-[#64FFDA]' 
                        : 'bg-[#112240]/80 border border-[#1E2D4A] hover:border-[#64FFDA]/50'
                    }`}>
                      <Icon className={`mb-1 transition-colors ${isActive ? 'text-[#64FFDA]' : 'text-[#8892B0] group-hover:text-[#64FFDA]'}`} size={28} />
                      <div className={`text-xs font-semibold text-center transition-colors ${isActive ? 'text-white' : 'text-[#CCD6F6]'}`}>
                        {node.label}
                      </div>
                      <div className={`text-xs transition-colors ${isActive ? 'text-[#64FFDA]' : 'text-[#8892B0]'}`}>
                        {node.sublabel}
                      </div>
                    </div>

                    {/* Tooltip */}
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0A192F] border border-[#64FFDA]/30 rounded-lg p-3 text-center w-48 z-20 pointer-events-none"
                      style={{
                        [node.position === 'top' ? 'top' : node.position === 'bottom' ? 'bottom' : 'top']: node.position === 'top' ? '110%' : node.position === 'bottom' ? '110%' : '50%',
                        [node.position === 'left' ? 'left' : node.position === 'right' ? 'right' : 'left']: node.position === 'left' ? '110%' : node.position === 'right' ? '110%' : '50%',
                        transform: node.position === 'top' || node.position === 'bottom' ? 'translateX(-50%)' : 'translateY(-50%)'
                      }}
                    >
                      <p className="text-[#CCD6F6] text-xs">{node.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* BLE Signal Waves */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute w-8 h-16 border-r-2 border-[#64FFDA]/40 rounded-r-full"
                  style={{
                    left: `${i * 8}px`,
                    animation: `pulse-ring ${1.5 + i * 0.3}s ease-out infinite`,
                    animationDelay: `${i * 0.2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Cards Below */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <div 
                key={node.id}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                  activeNode === index 
                    ? 'bg-[#64FFDA]/10 border border-[#64FFDA]' 
                    : 'bg-[#112240]/60 border border-[#1E2D4A] hover:border-[#64FFDA]/50'
                }`}
                onClick={() => setActiveNode(index)}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeNode === index ? 'bg-[#64FFDA]/20' : 'bg-[#1E2D4A]'
                  }`}>
                    <Icon className="text-[#64FFDA]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{node.label}</h4>
                    <p className="text-[#8892B0] text-xs">{node.sublabel}</p>
                  </div>
                </div>
                <p className="text-[#8892B0] text-sm">{node.description}</p>
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
              <div className="w-16 h-16 mx-auto mb-4 bg-[#64FFDA]/10 rounded-xl flex items-center justify-center">
                <item.icon className="text-[#64FFDA]" size={32} />
              </div>
              <h4 className="text-white font-bold mb-2">{item.title}</h4>
              <p className="text-[#8892B0] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
