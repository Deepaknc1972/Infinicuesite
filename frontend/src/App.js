import './App.css';

import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import { Contact } from './components/Contact';
import { CyberFraudStats } from './components/CyberFraudStats';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { PrivacyFirst } from './components/PrivacyFirst';
import { ThreatsPrevented } from './components/ThreatsPrevented';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './context/ThemeContext';
import AboutUsPage from './pages/AboutUsPage';
import MobileAppPage from './pages/MobileAppPage';
import ProductPage from './pages/ProductPage';
import UseCasesPage from './pages/UseCasesPage';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CyberFraudStats />
      <HowItWorks />
      <ThreatsPrevented />
      <PrivacyFirst />
      {/* <Features /> */}
      {/* <Products /> */}
      {/* <SolutionArchitecture /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AboutUsPage />} />
            <Route path="/approach" element={<Home />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/mobile-app" element={<MobileAppPage />} />
            <Route path="/use-cases" element={<UseCasesPage />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
