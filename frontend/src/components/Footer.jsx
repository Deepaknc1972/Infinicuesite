import React from 'react';
import { mockData } from '../mock';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

export const Footer = () => {
  const { company, contactInfo } = mockData;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: 'var(--footer-bg)', borderTop: '1px solid var(--border)' }} data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg" style={{ background: 'linear-gradient(135deg, var(--accent), #22D3EE)', color: '#090B10' }}>
                IS
              </div>
              <div>
                <div className="text-lg font-semibold" style={{ color: 'var(--footer-text)' }}>{company.name}</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{company.tagline}</div>
              </div>
            </div>
            <p className="text-sm mb-4 max-w-md leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Leading cybersecurity solutions for consent control and fraud mitigation.
            </p>
            <div className="flex items-center space-x-4">
              {[
                { icon: Linkedin, href: contactInfo.socialMedia.linkedin, id: 'linkedin' },
                { icon: Twitter, href: contactInfo.socialMedia.twitter, id: 'twitter' },
                { icon: Github, href: contactInfo.socialMedia.github, id: 'github' },
                { icon: Mail, href: `mailto:${contactInfo.email}`, id: 'email' }
              ].map((s) => (
                <a key={s.id} href={s.href} className="transition-colors" style={{ color: 'var(--text-muted)' }} data-testid={`footer-${s.id}`}>
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--footer-text)' }}>Quick Links</h4>
            <ul className="space-y-2">
              {['about', 'features', 'products', 'architecture'].map((item) => (
                <li key={item}>
                  <button onClick={() => scrollToSection(item)} className="text-sm transition-colors capitalize" style={{ color: 'var(--text-muted)' }}>
                    {item === 'about' ? 'About Us' : item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--footer-text)' }}>Support</h4>
            <ul className="space-y-2">
              {['Documentation', 'API Reference', 'Contact Us', 'Privacy Policy'].map((item, i) => (
                <li key={i}>
                  {item === 'Contact Us' ? (
                    <button onClick={() => scrollToSection('contact')} className="text-sm transition-colors" style={{ color: 'var(--text-muted)' }}>{item}</button>
                  ) : (
                    <a href="#" className="text-sm transition-colors" style={{ color: 'var(--text-muted)' }}>{item}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            {['Terms', 'Privacy', 'Cookies'].map((item, i) => (
              <a key={i} href="#" className="text-sm transition-colors" style={{ color: 'var(--text-muted)' }}>{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
