import React, { useState } from 'react';
import { 
  Shield, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle,
  Lock,
  Globe
} from 'lucide-react';
import { WhatsAppIcon, YouTubeIcon, InstagramIcon, LinkedInIcon } from './SocialIcons';

export default function Footer({ onOpenLeadModal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 2000);
    }
  };

  return (
    <footer className="footer-root">
      <div className="container-wide">
        {/* Top Newsletter / Architecture Digest CTA */}
        <div className="footer-digest-card glass-card">
          <div className="digest-left">
            <div className="digest-badge font-mono">
              <Lock size={12} className="text-cyan" />
              <span>THE ZERO-TRUST BLUEPRINT</span>
            </div>
            <h3 className="digest-title">
              Subscribe to the Monthly eBPF & Zero-Trust Cloud Architecture Digest
            </h3>
            <p className="digest-desc">
              Curated technical analyses on Linux kernel network bypasses, WireGuard mesh benchmarking, and adversary lateral defense strategies.
            </p>
          </div>

          <div className="digest-right">
            {subscribed ? (
              <div className="digest-success font-mono text-emerald">
                <CheckCircle size={16} />
                <span>Subscription confirmed. Next dispatch arriving Thursday.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="digest-form">
                <input 
                  type="email" 
                  required 
                  placeholder="engineer@company.com"
                  className="digest-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-primary btn-sm">
                  <span>Subscribe</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Directory Columns */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <a href="#" className="brand-logo footer-logo">
              <div className="logo-icon-wrap">
                <Shield className="logo-shield" />
              </div>
              <div className="logo-text-wrap">
                <span className="brand-name">Vault<span className="brand-highlight">Zero</span></span>
                <span className="brand-sub">by NexusCloud</span>
              </div>
            </a>

            <p className="footer-mission-text">
              The high-performance zero-trust cloud fabric that eliminates lateral breach surfaces, 
              replaces legacy VPN bastions, and delivers sub-millisecond cryptographic mesh connectivity.
            </p>

            <div className="footer-live-status">
              <span className="pulse-dot"></span>
              <span className="font-mono text-emerald">All Global Nodes Operational • 99.999% SLA</span>
            </div>

            {/* Direct Social Buttons */}
            <div className="footer-social-row">
              <a 
                href="https://wa.me/?text=Hello%20VaultZero%20Team%2C%20I%20would%20like%20to%20schedule%20a%20technical%20architecture%20review." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn whatsapp-social"
                title="WhatsApp Enterprise Direct Hotline"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={17} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn youtube-social"
                title="YouTube Engineering Architecture Talks"
                aria-label="YouTube"
              >
                <YouTubeIcon size={17} />
              </a>
              <a 
                href="https://www.instagram.com/_yxsh.07_?stkn=eHo1dXlzemJ6OTE1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn instagram-social"
                title="Connect on Instagram (@_yxsh.07_)"
                aria-label="Instagram"
              >
                <InstagramIcon size={17} />
              </a>
              <a 
                href="https://www.linkedin.com/in/yash-shinde-9b143842b" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn linkedin-social"
                title="Connect on LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={17} />
              </a>
            </div>
          </div>

          {/* Column 1: Solutions */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">ARCHITECTURAL SOLUTIONS</h4>
            <ul className="footer-links-list">
              <li><a href="#platform">eBPF Micro-Segmentation</a></li>
              <li><a href="#platform">Ephemeral WireGuard Mesh</a></li>
              <li><a href="#platform">Sub-12ms Threat Defense</a></li>
              <li><a href="#platform">AMD SEV Sovereign Enclaves</a></li>
              <li><a href="#comparison">Legacy VPN Replacement</a></li>
              <li><a href="#calculator">Multi-Cloud Interconnect</a></li>
            </ul>
          </div>

          {/* Column 2: Security & Trust */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">TRUST & COMPLIANCE</h4>
            <ul className="footer-links-list">
              <li><a href="#testimonials" onClick={() => onOpenLeadModal('SOC 2 Type II Audit Request')}>SOC 2 Type II Certified</a></li>
              <li><a href="#testimonials" onClick={() => onOpenLeadModal('ISO 27001 Blueprint')}>ISO/IEC 27001 Assurance</a></li>
              <li><a href="#testimonials" onClick={() => onOpenLeadModal('HIPAA BAA Request')}>HIPAA BAA Agreement</a></li>
              <li><a href="#comparison">Post-Quantum Cryptography</a></li>
              <li><a href="#faq">Hardware TPM Attestation</a></li>
              <li><a href="#contact">Responsible Disclosure Bounty</a></li>
            </ul>
          </div>

          {/* Column 3: Platform Resources */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">ENGINEERING & PLATFORM</h4>
            <ul className="footer-links-list">
              <li><a href="#telemetry">Live Mesh Telemetry</a></li>
              <li><a href="#calculator">Security ROI Calculator</a></li>
              <li><a href="#faq">Architecture FAQ</a></li>
              <li><a href="#contact">Direct WhatsApp Dispatch</a></li>
              <li><a href="#pricing">Deployment Tiers</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenLeadModal('Client Portal Inquiry'); }}>Client Access Portal</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-text font-mono">
            © 2026 NexusCloud Technologies Inc. VaultZero™ is a registered trademark. All cryptographic algorithms validated under FIPS 140-3.
          </div>
          <div className="footer-legal-links font-mono">
            <a href="#">Privacy Shield</a>
            <span className="dot-sep">•</span>
            <a href="#">Terms of Infrastructure Service</a>
            <span className="dot-sep">•</span>
            <a href="#">Security Policy (v3.4)</a>
            <span className="dot-sep">•</span>
            <a href="#">Status Page (99.999%)</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
