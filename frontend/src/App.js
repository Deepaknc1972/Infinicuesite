import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CyberFraudStats } from "./components/CyberFraudStats";
import { AboutUs } from "./components/AboutUs";
import { HowItWorks } from "./components/HowItWorks";
import { ThreatsPrevented } from "./components/ThreatsPrevented";
import { PrivacyFirst } from "./components/PrivacyFirst";
import { Features } from "./components/Features";
import { Products } from "./components/Products";
import { SolutionArchitecture } from "./components/SolutionArchitecture";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import ProductPage from "./pages/ProductPage";
import MobileAppPage from "./pages/MobileAppPage";
import UseCasesPage from "./pages/UseCasesPage";
import AboutUsPage from "./pages/AboutUsPage";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CyberFraudStats />
      <AboutUs />
      <HowItWorks />
      <ThreatsPrevented />
      <PrivacyFirst />
      <Features />
      <Products />
      <SolutionArchitecture />
      <Testimonials />
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
            <Route path="/" element={<Home />} />
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
