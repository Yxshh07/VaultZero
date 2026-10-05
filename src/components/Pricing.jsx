import React, { useState } from 'react';
import { Check, ArrowRight, Shield, Zap, Sparkles, Building } from 'lucide-react';

export default function Pricing({ onOpenLeadModal }) {
  const [annualBilling, setAnnualBilling] = useState(true);

  const tiers = [
    {
      name: 'Growth Pilot',
      desc: 'Ideal for fast-scaling engineering teams looking to replace legacy VPNs and achieve SOC 2 readiness quickly.',
      priceAnnual: '$18',
      priceMonthly: '$24',
      badge: 'QUICK START',
      highlighted: false,
      features: [
        'Up to 100 protected nodes and workloads',
        'Kernel eBPF Layer-4/7 micro-segmentation',
        'Direct WireGuard P2P mesh (<0.8ms latency)',
        'Identity integration (Okta, Google, Azure AD)',
        'Ephemeral keys auto-cycled every 120s',
        'Community & Standard 24h support SLA'
      ],
      ctaText: 'Start 14-Day Pilot',
      ctaType: 'secondary'
    },
    {
      name: 'Enterprise Zero-Trust',
      desc: 'Full-spectrum zero-trust cloud fabric with automated threat defense, multi-cloud mesh, and SOC 2 / HIPAA compliance.',
      priceAnnual: '$36',
      priceMonthly: '$45',
      badge: 'MOST POPULAR',
      highlighted: true,
      features: [
        'Unlimited protected workloads and clusters',
        'Autonomous threat isolation (<12ms response)',
        'Post-Quantum Kyber-768 ML-KEM encryption',
        'Multi-Cloud unified overlay (AWS, GCP, Azure)',
        'Real-time SIEM streaming (Splunk, Datadog)',
        'FIDO2 / WebAuthn hardware token enforcement',
        '99.999% SLA & Dedicated Technical Account Mgr'
      ],
      ctaText: 'Schedule Architecture Review',
      ctaType: 'primary'
    },
    {
      name: 'Sovereign Enclave',
      desc: 'Custom-tailored deployment for banking, healthcare, defense, and air-gapped confidential computing workloads.',
      priceAnnual: 'Custom',
      priceMonthly: 'Custom',
      badge: 'MISSION CRITICAL',
      highlighted: false,
      features: [
        'Confidential Computing (AMD SEV-SNP & Intel SGX)',
        'Air-gapped on-premise datacenter deployment',
        'Dedicated HSM root-of-trust key isolation',
        'Custom regulatory mapping (FedRAMP, PCI-DSS)',
        'Custom BAA & Data Processing Addendum',
        '15-minute emergency incident response SLA',
        'White-glove migration engineering support'
      ],
      ctaText: 'Contact Enterprise Security',
      ctaType: 'secondary'
    }
  ];

  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <div className="section-header">
          <div className="section-tag emerald">TRANSPARENT ARCHITECTURE TIERS</div>
          <h2 className="section-title">
            Predictable Pricing for <span className="gradient-text">Zero-Trust Scale</span>
          </h2>
          <p className="section-subtitle">
            Deploy on your own terms. No opaque bandwidth egress markups, no hidden gateway fees.
          </p>

          {/* Billing Switch */}
          <div className="pricing-toggle-wrap">
            <span className={`toggle-label ${!annualBilling ? 'active' : ''}`}>Monthly</span>
            <button 
              className={`toggle-switch-btn ${annualBilling ? 'checked' : ''}`}
              onClick={() => setAnnualBilling(!annualBilling)}
              aria-label="Toggle annual billing discount"
            >
              <div className="toggle-handle"></div>
            </button>
            <span className={`toggle-label ${annualBilling ? 'active' : ''}`}>
              Annual <span className="discount-pill">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`pricing-card glass-card ${tier.highlighted ? 'tier-highlighted' : ''}`}
            >
              {tier.highlighted && (
                <div className="popular-badge">
                  <Sparkles size={13} />
                  <span>RECOMMENDED FOR ENTERPRISE</span>
                </div>
              )}

              <div className="tier-header">
                <div className="tier-top-row">
                  <h3 className="tier-name">{tier.name}</h3>
                  <span className="tier-flag font-mono">{tier.badge}</span>
                </div>
                <p className="tier-desc">{tier.desc}</p>
              </div>

              <div className="tier-price-row">
                <div className="price-amount font-mono">
                  {annualBilling ? tier.priceAnnual : tier.priceMonthly}
                </div>
                {tier.priceAnnual !== 'Custom' && (
                  <div className="price-unit">
                    <span>/ node</span>
                    <span className="price-sub">billed {annualBilling ? 'annually' : 'monthly'}</span>
                  </div>
                )}
              </div>

              <div className="tier-features-list">
                <div className="features-list-title">INCLUDED CAPABILITIES:</div>
                {tier.features.map((feat, fIdx) => (
                  <div key={fIdx} className="tier-feature-item">
                    <div className="feature-check-icon">
                      <Check size={14} className="text-emerald" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="tier-cta-box">
                <button 
                  className={`btn btn-block ${tier.ctaType === 'primary' ? 'btn-primary btn-lg' : 'btn-secondary'}`}
                  onClick={() => onOpenLeadModal(`Pricing Tier: ${tier.name}`)}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pricing-footer-callout glass-card">
          <div className="callout-text">
            <strong>Need a customized volume assessment for 2,000+ endpoints?</strong>
            <span>Our solutions engineering team can provide custom multi-region architecture sizing within 24 hours.</span>
          </div>
          <button 
            className="btn btn-ghost text-indigo font-semibold"
            onClick={() => onOpenLeadModal('Custom Volume Sizing')}
          >
            Request Custom Architecture Sizing &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
