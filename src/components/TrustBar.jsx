import React from 'react';
import { ShieldCheck, Award, Lock, CheckCircle, Server, Database, Globe } from 'lucide-react';

export default function TrustBar() {
  const enterprises = [
    { name: 'FinScale Capital', sector: 'Quantitative FinTech', flag: 'FINTECH' },
    { name: 'Apex Defense Labs', sector: 'Aerospace & Edge Systems', flag: 'DEFENSE' },
    { name: 'NeuroLink Health', sector: 'Healthcare & Genomics', flag: 'HIPAA READY' },
    { name: 'Hyperion Cloud', sector: 'Global Multi-Tenant AI', flag: 'ENTERPRISE' },
    { name: 'Vectra Sovereign', sector: 'EU Sovereign Enclaves', flag: 'GDPR/EU' },
    { name: 'QuantumLedger', sector: 'Institutional Asset Custody', flag: 'SOC 2 TYPE II' },
  ];

  return (
    <section className="trustbar-section">
      <div className="container-wide">
        <p className="trustbar-caption">
          TRUSTED BY CHIEF INFORMATION SECURITY OFFICERS AND PLATFORM ENGINEERS WORLDWIDE
        </p>

        {/* Enterprise Logos Grid */}
        <div className="trustbar-grid">
          {enterprises.map((org, index) => (
            <div key={index} className="trust-card">
              <div className="trust-card-inner">
                <span className="trust-flag">{org.flag}</span>
                <span className="trust-name">{org.name}</span>
                <span className="trust-sector">{org.sector}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quantified Performance Banner */}
        <div className="metrics-banner glass-card">
          <div className="metrics-banner-item">
            <div className="metrics-stat font-mono gradient-text">1.4B+</div>
            <div className="metrics-meta">Cryptographically Verified Requests / Day</div>
          </div>
          <div className="metrics-banner-divider"></div>
          <div className="metrics-banner-item">
            <div className="metrics-stat font-mono text-emerald">0.00%</div>
            <div className="metrics-meta">Lateral Breach Success Across 450+ Enclaves</div>
          </div>
          <div className="metrics-banner-divider"></div>
          <div className="metrics-banner-item">
            <div className="metrics-stat font-mono text-cyan">&lt; 0.8ms</div>
            <div className="metrics-meta">Kernel eBPF Direct Peer-to-Peer Latency</div>
          </div>
          <div className="metrics-banner-divider"></div>
          <div className="metrics-banner-item">
            <div className="metrics-stat font-mono text-indigo">3.5 min</div>
            <div className="metrics-meta">Average Zero-Touch Node Onboarding Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}
