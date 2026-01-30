import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, Clock, Server, FileText, AlertCircle } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const PrivacyPolicyPage = () => {
  const lastUpdated = "January 30, 2026";

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: FileText,
      content: `Infinicue Solutions ("we," "our," or "us") operates the SEC@R platform, a consent-first cybersecurity solution designed to protect your digital identity and prevent fraud. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our SEC@R platform, including our mobile applications, smart hardware devices, and backend services.

Our fundamental principle is "Privacy by Design" - we don't store, track, or profile. Privacy isn't just a feature; it's our foundation.`
    },
    {
      id: "consent-first",
      title: "Our Consent-First Approach",
      icon: UserCheck,
      content: `SEC@R revolutionizes data security through real-time consent verification. Unlike traditional security systems that focus on preventing data breaches, SEC@R ensures that even if data is stolen, it cannot be used without your explicit, real-time consent.

Key principles of our consent-first approach:
• Every transaction requires active consent from the legitimate owner
• Consent windows are time-limited (typically 180 seconds / 3 minutes)
• No transaction can proceed without multi-factor verification
• You maintain complete control over how your data is used`
    },
    {
      id: "data-collection",
      title: "Information We Collect",
      icon: Database,
      content: `We collect minimal information necessary to provide our consent verification services:

**Device Information:**
• SEC@R smart device identifiers (Smart Wallets, Smart Rings, Smart USB Drives, Smart Watches)
• BLE (Bluetooth Low Energy) connection data for device authentication
• Device health and security status

**Authentication Data:**
• Biometric verification results (we do NOT store actual biometric data)
• Location verification status (we verify location match, not track location history)
• Multi-factor authentication confirmations

**Transaction Requests:**
• Consent request metadata (timestamp, requesting entity, transaction type)
• Your consent decisions (approve/deny)
• Time-limited session tokens

**What We Do NOT Collect:**
• Personal browsing history
• Social media activity
• Purchase history or financial details
• Biometric templates or raw biometric data
• Continuous location tracking data`
    },
    {
      id: "data-usage",
      title: "How We Use Your Information",
      icon: Eye,
      content: `Your information is used exclusively for:

**Real-Time Consent Verification:**
• Processing consent requests from banks, insurance companies, government authorities, and telecom providers
• Verifying your identity through multi-factor authentication
• Confirming device proximity and security status

**Security Purposes:**
• Detecting and preventing fraudulent consent attempts
• Maintaining the integrity of the SEC@R ecosystem
• Identifying potential security threats

**Service Improvement:**
• Analyzing aggregate, anonymized patterns to improve fraud detection
• Enhancing system performance and response times
• Developing new security features

We will NEVER:
• Sell your personal information to third parties
• Use your data for advertising or marketing profiling
• Share your consent history with unauthorized parties
• Create behavioral profiles based on your activities`
    },
    {
      id: "data-retention",
      title: "Data Retention & Deletion",
      icon: Clock,
      content: `Our data retention policy reflects our commitment to minimal data storage:

**Consent Tokens:** Automatically expire after 180 seconds (3 minutes)
**Session Data:** Deleted immediately after transaction completion
**Authentication Logs:** Retained for 30 days for security audit purposes, then permanently deleted
**Device Registration:** Maintained only while your device is actively registered with SEC@R

**Your Right to Deletion:**
• Request complete deletion of your account and associated data at any time
• Unregister devices remotely through the SEC@R mobile app
• All deletion requests are processed within 48 hours`
    },
    {
      id: "security",
      title: "Security Measures",
      icon: Lock,
      content: `SEC@R employs enterprise-grade security measures:

**Encryption:**
• 256-bit AES encryption for all data at rest
• TLS 1.3 for all data in transit
• End-to-end encryption for consent communications

**Infrastructure:**
• 99.99% uptime guarantee
• Distributed architecture with no single point of failure
• Real-time threat monitoring and response
• Regular third-party security audits

**Hardware Security:**
• Tamper-resistant smart devices
• Secure element chips for cryptographic operations
• Hardware-based key storage`
    },
    {
      id: "third-parties",
      title: "Third-Party Integration",
      icon: Server,
      content: `SEC@R integrates with authorized third parties through secure APIs:

**Authorized Integrators:**
• Banks and financial institutions
• Insurance companies
• Government authorities
• Telecom providers
• Healthcare organizations

**Integration Principles:**
• Third parties only receive consent verification results (approved/denied)
• No personal data is shared beyond what's necessary for verification
• All integrations require contractual privacy obligations
• Regular compliance audits of integration partners

**API Security:**
• OAuth 2.0 authentication for all API access
• Rate limiting and abuse prevention
• Comprehensive audit logging`
    },
    {
      id: "your-rights",
      title: "Your Privacy Rights",
      icon: Shield,
      content: `You have the following rights regarding your data:

**Access:** Request a copy of all data we hold about you
**Correction:** Update or correct inaccurate information
**Deletion:** Request complete deletion of your data
**Portability:** Receive your data in a machine-readable format
**Objection:** Object to specific data processing activities
**Withdrawal:** Withdraw consent for data processing at any time

**Exercising Your Rights:**
Contact our Privacy Officer at privacy@infinicue.com or through the SEC@R mobile app's privacy settings.

We respond to all privacy requests within 30 days.`
    },
    {
      id: "updates",
      title: "Policy Updates",
      icon: AlertCircle,
      content: `We may update this Privacy Policy periodically to reflect:
• Changes in our services or data practices
• New regulatory requirements
• Security enhancements

**Notification of Changes:**
• Material changes will be communicated through the SEC@R app
• Email notification for significant updates
• 30-day notice period before major changes take effect

We encourage you to review this policy regularly.`
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 50%, rgba(22, 163, 74, 0.3) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-2 mb-6">
              <Shield className="text-green-400" size={20} />
              <span className="text-green-400 font-medium">Privacy by Design</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              At SEC@R, we believe privacy is a fundamental right. Our consent-first architecture ensures your data remains yours - always.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-gray-950/50 border-y border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-gray-400 hover:text-green-400 transition-colors px-3 py-1 rounded-full border border-gray-700 hover:border-green-500/50"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                id={section.id}
                className="mb-12 scroll-mt-32"
              >
                <div className="glass-gradient rounded-2xl p-8 border border-green-500/20">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <Icon className="text-green-400" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      {index + 1}. {section.title}
                    </h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {section.content.split('\n').map((paragraph, pIndex) => {
                      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                        return (
                          <h3 key={pIndex} className="text-green-400 font-semibold mt-4 mb-2">
                            {paragraph.replace(/\*\*/g, '')}
                          </h3>
                        );
                      } else if (paragraph.startsWith('**')) {
                        const parts = paragraph.split('**');
                        return (
                          <p key={pIndex} className="mb-2">
                            <span className="text-green-400 font-semibold">{parts[1]}</span>
                            {parts[2]}
                          </p>
                        );
                      } else if (paragraph.startsWith('•')) {
                        return (
                          <p key={pIndex} className="ml-4 mb-1 text-gray-400">
                            {paragraph}
                          </p>
                        );
                      } else if (paragraph.trim() === '') {
                        return <br key={pIndex} />;
                      }
                      return <p key={pIndex} className="mb-2">{paragraph}</p>;
                    })}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Contact Section */}
          <div className="glass-gradient rounded-2xl p-8 border border-green-500/20 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Our Privacy Policy?</h2>
            <p className="text-gray-400 mb-6">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <div className="text-center">
                <p className="text-green-400 font-semibold">Email</p>
                <a href="mailto:privacy@infinicue.com" className="text-gray-300 hover:text-green-400 transition-colors">
                  privacy@infinicue.com
                </a>
              </div>
              <div className="hidden md:block w-px h-12 bg-gray-700"></div>
              <div className="text-center">
                <p className="text-green-400 font-semibold">Address</p>
                <p className="text-gray-300">
                  Infinicue Solutions<br />
                  Bangalore, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
