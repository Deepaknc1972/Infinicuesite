import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Shield, AlertTriangle, Check } from 'lucide-react';

const UseCasesPage = () => {
  const useCases = [
    {
      id: 1,
      title: "Phishing Frauds",
      image: "https://images.unsplash.com/photo-1674049404913-2005c02245fa?crop=entropy&cs=srgb&fm=jpg&q=85",
      problem: "Attackers trick users into revealing credentials through fake emails, websites, and social engineering tactics. Traditional security fails because once credentials are stolen, they're immediately usable.",
      impact: "$12.5 billion in annual losses, 300,000+ phishing attempts daily, 36% success rate",
      howSecarHelps: [
        "Even with stolen credentials, data remains dormant without Data Principal consent",
        "Multi-device authentication prevents attackers from accessing accounts",
        "Real-time consent verification blocks unauthorized login attempts",
        "Phished credentials become worthless without physical device possession"
      ],
      result: "Phishing attacks fail because stolen passwords alone cannot activate data or complete transactions."
    },
    {
      id: 2,
      title: "SIM Swap Fraud",
      image: "https://images.unsplash.com/photo-1624969862644-791f3dc98927?crop=entropy&cs=srgb&fm=jpg&q=85",
      problem: "Attackers convince telecom providers to transfer victim's phone number to attacker's SIM card, bypassing SMS-based two-factor authentication and gaining account access.",
      impact: "68,000+ reported cases, $68 million stolen, 400% growth in 3 years",
      howSecarHelps: [
        "Multi-device layer authentication requires more than just phone number control",
        "Hardware wallet + app + biometric verification needed for consent",
        "AMDA system detects unauthorized device changes and blocks transactions",
        "SMS-based 2FA is not the only authentication factor"
      ],
      result: "SIM swap becomes ineffective as attackers need physical SEC@R hardware devices, not just phone control."
    },
    {
      id: 3,
      title: "Net Banking Frauds",
      image: "https://images.unsplash.com/photo-1642783327704-2500e96fe3d9?crop=entropy&cs=srgb&fm=jpg&q=85",
      problem: "Compromised banking credentials allow attackers to transfer funds, make payments, and drain accounts. Traditional authentication (username + password + OTP) is insufficient.",
      impact: "$28.6 billion in card and banking fraud globally, 127 million victims",
      howSecarHelps: [
        "Bank APIs integrate with AMDA for real-time consent verification",
        "Data Principal opens SEC@R wallet to trigger authentication event",
        "Transaction authorized only with 180-second time-limited consent",
        "Stolen banking credentials cannot activate account data"
      ],
      result: "Banking credentials become useless without Data Principal's real-time, multi-device consent approval."
    },
    {
      id: 4,
      title: "Account Takeover",
      image: "https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?crop=entropy&cs=srgb&fm=jpg&q=85",
      problem: "Attackers use stolen credentials, session hijacking, or credential stuffing to take complete control of user accounts, changing passwords and locking out legitimate owners.",
      impact: "22.7 million accounts compromised, $11.4 billion losses, 72% increase from previous year",
      howSecarHelps: [
        "Account changes require Data Principal consent verification",
        "Session hijacking blocked by continuous device authentication",
        "Credential stuffing fails as passwords alone don't grant access",
        "Any suspicious activity triggers multi-device verification"
      ],
      result: "Account takeover attempts fail at verification stage - stolen sessions and credentials are insufficient."
    },
    {
      id: 5,
      title: "Identity Theft & Synthetic ID Frauds",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=srgb&fm=jpg&q=85",
      problem: "Attackers use stolen PII (SSN, AADHAAR, PAN, Passport) to create fake identities or synthetic identities by combining real and fabricated information to open accounts and obtain credit.",
      impact: "1.4 million identity theft cases, $5.8 billion losses, $6 billion in synthetic ID fraud (85% undetected)",
      howSecarHelps: [
        "Stolen PII cannot be activated without Data Principal's biometric consent",
        "Government ID authorities integrate with SEC@R for real-time verification",
        "Synthetic identities fail multi-device layer authentication",
        "Data Principal verification required for any identity document usage"
      ],
      result: "Stolen identity documents become worthless as they cannot be activated without the real Data Principal."
    },
    {
      id: 6,
      title: "BIN Attacks",
      image: "https://images.unsplash.com/photo-1533709752211-118fcaf03312?crop=entropy&cs=srgb&fm=jpg&q=85",
      problem: "Attackers use Bank Identification Numbers (BIN) to generate valid card numbers, testing them rapidly to find active cards and execute fraudulent transactions before detection.",
      impact: "Part of $28.6 billion card fraud, automated attacks generate thousands of valid card numbers",
      howSecarHelps: [
        "Card data remains dormant without Data Principal consent",
        "Transaction requires SEC@R wallet opening + app verification + AMDA approval",
        "Generated card numbers cannot activate without legitimate device possession",
        "180-second time window prevents automated mass testing"
      ],
      result: "BIN-generated cards are useless as transactions require real-time Data Principal consent verification."
    },
    {
      id: 7,
      title: "SS7 Attacks",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?crop=entropy&cs=srgb&fm=jpg&q=85",
      problem: "Attackers exploit vulnerabilities in SS7 (Signaling System 7) protocol to intercept SMS messages, calls, and location data, bypassing SMS-based authentication and tracking users.",
      impact: "Global telecommunications infrastructure vulnerable, enables SIM swap and OTP interception",
      howSecarHelps: [
        "Multi-device authentication doesn't rely on SMS alone",
        "BLE, NFC, and app-based verification immune to SS7 attacks",
        "Hardware wallet + biometric consent required regardless of SMS interception",
        "Telecom API integration adds additional verification layer"
      ],
      result: "SS7 vulnerabilities become irrelevant as SEC@R uses hardware + biometric authentication, not SMS."
    },
    {
      id: 8,
      title: "Insider Threat Fraud",
      image: "https://images.unsplash.com/photo-1542903660-eedba2cda473?crop=entropy&cs=srgb&fm=jpg&q=85",
      problem: "Malicious insiders with legitimate access credentials exploit their position to conduct unauthorized transactions, steal sensitive data, or commit fraud. Even if they obtain consent from the Data Principal through coercion or deception, traditional systems cannot detect this abuse.",
      impact: "60% of data breaches involve insiders, $15.4 million average cost per incident, 85% go undetected for months",
      howSecarHelps: [
        "Location-based verification requires Data Principal to be physically present at the same location for any transaction",
        "Even with obtained consent, transactions are blocked if the Data Principal is not co-located",
        "Real-time geolocation matching between insider device and Data Principal device",
        "AMDA system flags anomalies when consent location differs from transaction location"
      ],
      result: "Insider threats are neutralized because SEC@R requires the Data Principal to be physically present at the same location - consent alone is not enough."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 50%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 glass-emerald rounded-full px-6 py-2 mb-6">
              <AlertTriangle className="text-red-400" size={20} />
              <span className="text-red-400 font-medium">Real-World Fraud Prevention</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              How SEC@R Stops
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500 mt-2">
                Every Major Fraud
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-world use cases showing how SEC@R's consent-first architecture neutralizes the most sophisticated cyber fraud attacks.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {useCases.map((useCase, index) => (
              <div key={useCase.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden group">
                    <img 
                      src={useCase.image} 
                      alt={useCase.title}
                      className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-bold text-white mb-2">{useCase.title}</h3>
                      <div className="flex items-center space-x-2 text-red-400">
                        <AlertTriangle size={16} />
                        <span className="text-sm font-semibold">Critical Threat</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Card className="glass-gradient border-green-500/30">
                    <CardHeader>
                      <CardTitle className="text-2xl text-white">The Problem</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-300 leading-relaxed">{useCase.problem}</p>
                      
                      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                        <div className="text-sm font-semibold text-red-400 mb-2">Impact:</div>
                        <p className="text-gray-300 text-sm">{useCase.impact}</p>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 mb-4">
                          <Shield className="text-green-400" size={24} />
                          <h4 className="text-xl font-bold text-white">How SEC@R Helps</h4>
                        </div>
                        <div className="space-y-3">
                          {useCase.howSecarHelps.map((help, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <Check className="text-green-400 flex-shrink-0 mt-1" size={16} />
                              <span className="text-gray-300 text-sm">{help}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-500/10 to-green-500/10 border border-green-500/30 rounded-xl p-4">
                        <div className="text-sm font-semibold text-green-400 mb-2">Result:</div>
                        <p className="text-white font-medium">{useCase.result}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <Card className="glass-strong border-green-500/30">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Make Fraud Impossible?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of organizations protecting their users with SEC@R's consent-first architecture.
              </p>
              <button 
                onClick={() => {
                  window.scrollTo(0, 0);
                  window.location.href = '/#contact';
                }}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-12 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UseCasesPage;