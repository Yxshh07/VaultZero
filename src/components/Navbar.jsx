import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Terminal, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Lock, 
  Zap, 
  Activity,
  Layers,
  Cpu,
  BarChart3,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export default function Navbar({ onOpenDemoModal, onOpenLeadModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container-wide navbar-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo" aria-label="VaultZero Home">
          <div className="logo-icon-wrap">
            <Shield className="logo-shield" />
            <div className="logo-core-pulse"></div>
          </div>
          <div className="logo-text-wrap">
            <span className="brand-name">Vault<span className="brand-highlight">Zero</span></span>
            <span className="brand-sub">by NexusCloud</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <div 
            className="nav-dropdown-wrap"
            onMouseEnter={() => setSolutionsDropdown(true)}
            onMouseLeave={() => setSolutionsDropdown(false)}
          >
            <button className="nav-link dropdown-btn" aria-expanded={solutionsDropdown}>
              Solutions <ChevronDown size={14} className={`chevron-icon ${solutionsDropdown ? 'rotate' : ''}`} />
            </button>

            {solutionsDropdown && (
              <div className="glass-dropdown-menu">
                <a href="#platform" className="dropdown-item" onClick={() => setSolutionsDropdown(false)}>
                  <div className="dropdown-icon-box"><Layers size={18} /></div>
                  <div>
                    <div className="dropdown-item-title">Kernel Micro-Segmentation</div>
                    <div className="dropdown-item-desc">eBPF zero-trust policy enforcement at Layer 4-7</div>
                  </div>
                </a>
                <a href="#platform" className="dropdown-item" onClick={() => setSolutionsDropdown(false)}>
                  <div className="dropdown-icon-box"><Zap size={18} /></div>
                  <div>
                    <div className="dropdown-item-title">Ephemeral WireGuard Mesh</div>
                    <div className="dropdown-item-desc">Sub-millisecond direct P2P cryptographic tunnels</div>
                  </div>
                </a>
                <a href="#platform" className="dropdown-item" onClick={() => setSolutionsDropdown(false)}>
                  <div className="dropdown-icon-box"><Cpu size={18} /></div>
                  <div>
                    <div className="dropdown-item-title">Sovereign Enclaves</div>
                    <div className="dropdown-item-desc">AMD SEV-SNP confidential hardware encryption</div>
                  </div>
                </a>
              </div>
            )}
          </div>

          <a href="#telemetry" className="nav-link">Live Telemetry</a>
          <a href="#comparison" className="nav-link">Why VaultZero</a>
          <a href="#calculator" className="nav-link">ROI Calculator</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>

        {/* Operational Badge & CTAs */}
        <div className="navbar-actions">
          <div className="live-pill hide-tablet">
            <span className="pulse-dot"></span>
            <span>99.999% SLA • &lt;0.8ms Mesh</span>
          </div>

          <button 
            className="btn btn-ghost btn-sm client-portal-btn"
            onClick={() => onOpenDemoModal('Client Portal Access')}
          >
            <Lock size={14} />
            <span>Client Portal</span>
          </button>

          <button 
            className="btn btn-primary btn-sm cta-header-btn"
            onClick={() => onOpenLeadModal('Schedule Architecture Review')}
          >
            <span>Schedule Review</span>
            <ArrowRight size={15} />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="brand-logo">
                <Shield className="logo-shield" />
                <span className="brand-name">Vault<span className="brand-highlight">Zero</span></span>
              </div>
              <button 
                className="close-drawer-btn" 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-nav-links">
              <a href="#platform" onClick={() => setMobileMenuOpen(false)}>Solutions & Capabilities</a>
              <a href="#telemetry" onClick={() => setMobileMenuOpen(false)}>Live Telemetry Console</a>
              <a href="#comparison" onClick={() => setMobileMenuOpen(false)}>Legacy VPN vs VaultZero</a>
              <a href="#calculator" onClick={() => setMobileMenuOpen(false)}>Security & ROI Calculator</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Deployment Tiers</a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Customer Case Studies</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)}>Architecture FAQ</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact & Direct Dispatch</a>
            </div>

            <div className="mobile-drawer-footer">
              <div className="live-pill mb-4">
                <span className="pulse-dot"></span>
                <span>Global Mesh Status: Nominal</span>
              </div>
              <button 
                className="btn btn-primary btn-block mb-3"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal('Mobile CTA - Schedule Review');
                }}
              >
                Schedule Architecture Review
              </button>
              <button 
                className="btn btn-secondary btn-block"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal('Mobile Client Portal');
                }}
              >
                Sign In to VaultZero Portal
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
