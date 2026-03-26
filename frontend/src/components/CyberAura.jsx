import React, { useEffect, useState } from 'react';
import { User, Smartphone, Fingerprint, Radio, Shield, Lock, Wifi } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const CyberAura = () => {
  const [activeNode, setActiveNode] = useState(0);
  const { isDark } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => setActiveNode((prev) => (prev + 1) % 4), 2000);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { id: 0, icon: User, label: "Data Principal", sublabel: "You", position: "top", description: "The rightful owner of the data" },
    { id: 1, icon: Fingerprint, label: "FIDO Device", sublabel: "Hardware Key", position: "right", description: "Secure FIDO2 compliant authenticator" },
    { id: 2, icon: Smartphone, label: "SEC@R App", sublabel: "Mobile", position: "bottom", description: "Proximity sensor & consent manager" },
    { id: 3, icon: Radio, label: "BLE Connection", sublabel: "Wireless", position: "left", description: "Secure Bluetooth Low Energy link" }
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }} data-testid="cyber-aura-section">
      <style>{`
        @keyframes pulse-ring { 0% { transform: scale(0.95); opacity: 0.8; } 50% { transform: scale(1.05); opacity: 0.3; } 100% { transform: scale(0.95); opacity: 0.8; } }
        @keyframes rotate-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes rotate-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        .float-animation { animation: float 3s ease-in-out infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="overline mb-4 block" style={{ color: 'var(--accent)' }}>Multi-Device Authentication</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>
            The Cyber Aura <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            SEC@R creates an impenetrable security aura through FIDO-compliant hardware, mobile app, and BLE proximity authentication.
          </p>
        </div>

        {/* Visualization */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px] mx-auto">
            {/* Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed" style={{ borderColor: 'var(--border)', animation: 'rotate-slow 30s linear infinite' }}></div>
            <div className="absolute inset-8 rounded-full" style={{ border: '1px solid var(--accent)', opacity: 0.4, animation: 'pulse-ring 3s ease-in-out infinite' }}></div>
            <div className="absolute inset-16 rounded-full border-2" style={{ borderColor: 'var(--border-light)', animation: 'rotate-reverse 20s linear infinite' }}></div>

            {/* Central Shield */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative" style={{ filter: activeNode === -1 ? 'drop-shadow(0 0 20px var(--accent))' : 'none' }}>
                <div className="absolute -inset-8 rounded-full blur-2xl" style={{ backgroundColor: 'var(--accent-light)' }}></div>
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center" style={{ 
                  backgroundColor: 'var(--bg-card)', 
                  border: '2px solid var(--accent)',
                  boxShadow: 'var(--shadow-lg)'
                }}>
                  <div className="text-center">
                    <Shield size={40} style={{ color: 'var(--accent)' }} className="mx-auto mb-2" />
                    <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>SEC@R</div>
                    <div className="text-xs" style={{ color: 'var(--accent)' }}>Protected</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nodes */}
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
                <div key={node.id} className="absolute float-animation" style={{ ...positions[node.position], animationDelay: `${index * 0.5}s` }}>
                  <div className={`relative cursor-pointer transition-all duration-300 ${isActive ? 'scale-110' : 'hover:scale-105'}`}>
                    {isActive && <div className="absolute -inset-4 rounded-full blur-xl" style={{ backgroundColor: 'var(--accent-light)' }}></div>}
                    <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center transition-all duration-300" style={{ 
                      backgroundColor: isActive ? 'var(--accent-light)' : 'var(--bg-card)',
                      border: isActive ? '2px solid var(--accent)' : '1px solid var(--border)',
                      boxShadow: isActive ? 'var(--shadow-lg)' : 'var(--shadow-md)'
                    }}>
                      <Icon size={28} className="mb-1" style={{ color: isActive ? 'var(--accent)' : 'var(--text-muted)' }} />
                      <div className="text-xs font-semibold text-center" style={{ color: 'var(--text-primary)' }}>{node.label}</div>
                      <div className="text-xs" style={{ color: isActive ? 'var(--accent)' : 'var(--text-muted)' }}>{node.sublabel}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <div 
                key={node.id}
                className="p-6 rounded-xl transition-all duration-300 cursor-pointer card-hover"
                style={{ 
                  backgroundColor: activeNode === index ? 'var(--accent-light)' : 'var(--bg-card)',
                  border: activeNode === index ? '2px solid var(--accent)' : '1px solid var(--border)'
                }}
                onClick={() => setActiveNode(index)}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-light)' }}>
                    <Icon size={20} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{node.label}</h4>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{node.sublabel}</p>
                  </div>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{node.description}</p>
              </div>
            );
          })}
        </div>

        {/* Key Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Lock, title: "FIDO2 Certified", desc: "Hardware authenticator meets the highest security standards" },
            { icon: Wifi, title: "BLE Proximity", desc: "Ensures the Data Principal is physically present" },
            { icon: Shield, title: "Zero Trust", desc: "Every request verified across multiple device layers" }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-light)' }}>
                <item.icon size={32} style={{ color: 'var(--accent)' }} />
              </div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h4>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
