import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import PlatformSolutions from './components/PlatformSolutions';
import WhyVaultZero from './components/WhyVaultZero';
import RoiCalculator from './components/RoiCalculator';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FaqAccordion from './components/FaqAccordion';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LeadCaptureModal from './components/LeadCaptureModal';
import ClientPortalModal from './components/ClientPortalModal';
import './App.css';

export default function App() {
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadModalData, setLeadModalData] = useState({ title: 'Schedule Architecture Review' });
  const [portalModalOpen, setPortalModalOpen] = useState(false);

  const handleOpenLeadModal = (title = 'Schedule Architecture Review') => {
    setLeadModalData({ title });
    setLeadModalOpen(true);
  };

  const handleOpenLeadModalWithData = (data) => {
    setLeadModalData({
      title: 'Your Customized Zero-Trust ROI & Architecture Dossier',
      ...data
    });
    setLeadModalOpen(true);
  };

  const handleOpenPortalModal = () => {
    setPortalModalOpen(true);
  };

  return (
    <div className="vaultzero-app">
      {/* Navigation Bar */}
      <Navbar 
        onOpenDemoModal={handleOpenPortalModal}
        onOpenLeadModal={handleOpenLeadModal}
      />

      <main id="main-content">
        {/* Hero Section with Live Telemetry Console */}
        <Hero 
          onOpenLeadModal={handleOpenLeadModal}
          onOpenDemoModal={handleOpenPortalModal}
        />

        {/* Enterprise Logos & Verified Metrics */}
        <TrustBar />

        {/* Core Platform Solutions & eBPF Capabilities */}
        <PlatformSolutions 
          onOpenLeadModal={handleOpenLeadModal}
        />

        {/* Architectural Benchmark: Legacy VPNs vs VaultZero */}
        <WhyVaultZero 
          onOpenLeadModal={handleOpenLeadModal}
        />

        {/* Interactive Lead-Generation ROI & Risk Calculator */}
        <RoiCalculator 
          onOpenLeadModalWithData={handleOpenLeadModalWithData}
        />

        {/* Verified Customer Testimonials & Case Studies */}
        <Testimonials 
          onOpenLeadModal={handleOpenLeadModal}
        />

        {/* Transparent Enterprise Deployment Tiers */}
        <Pricing 
          onOpenLeadModal={handleOpenLeadModal}
        />

        {/* Accessible FAQ for Security Architects */}
        <FaqAccordion 
          onOpenLeadModal={handleOpenLeadModal}
        />

        {/* Direct Contact & Enterprise Dispatch Channels */}
        <ContactSection />
      </main>

      {/* Refined Footer */}
      <Footer 
        onOpenLeadModal={handleOpenLeadModal}
      />

      {/* Global Modals */}
      <LeadCaptureModal 
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        modalData={leadModalData}
      />

      <ClientPortalModal 
        isOpen={portalModalOpen}
        onClose={() => setPortalModalOpen(false)}
      />
    </div>
  );
}
