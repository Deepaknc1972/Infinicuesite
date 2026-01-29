import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CyberFraudStats } from '../components/CyberFraudStats';
import { AboutUs } from '../components/AboutUs';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 glass-emerald rounded-full px-6 py-2 mb-6">
              <span className="text-cyan-400 font-medium">About Infinicue Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Revolutionizing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mt-2">
                Data Security
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Understanding the global cyber threat landscape and how SEC@R is changing the game with consent-first architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Cyber Fraud Statistics */}
      <CyberFraudStats />

      {/* About Us Section */}
      <AboutUs />

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="glass-gradient rounded-2xl p-8">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To eliminate the economic value of stolen data through consent-first architecture, making data breaches 
                pointless for cybercriminals. We don't just protect data - we make it worthless without the Data Principal's consent.
              </p>
            </div>

            {/* Vision */}
            <div className="glass-gradient rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                A world where data theft is no longer profitable. Where stolen credentials, breached databases, and compromised 
                identities become instantly worthless. Where Data Principals have absolute control over their information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Privacy by Design",
                description: "We don't store, track, or profile. Privacy isn't a feature - it's our foundation.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )
              },
              {
                title: "Innovation First",
                description: "We don't follow industry standards - we set them. Consent-first is the future.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                title: "User Empowerment",
                description: "Data Principals control their data. Always. No exceptions, no compromises.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <div key={index} className="glass text-center p-8 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center text-cyan-400">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass-strong rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Why We Built SEC@R</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                After witnessing countless data breaches where stolen information was immediately exploited, we realized 
                the fundamental flaw in traditional security: it assumes prevention is enough.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                But what happens when prevention fails? What happens when credentials are stolen, databases are breached, 
                or identities are compromised?
              </p>
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
                With SEC@R, the answer is simple: Nothing.
              </p>
              <p className="text-lg text-gray-400">
                Stolen data cannot be activated. Compromised credentials are worthless. Breached databases contain 
                nothing of value. Because without the Data Principal's real-time, multi-device consent - data stays dormant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
