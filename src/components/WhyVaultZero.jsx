import React from 'react';
import { Check, X, Shield, ArrowRight, Zap, AlertTriangle, Layers } from 'lucide-react';

export default function WhyVaultZero({ onOpenLeadModal }) {
  const comparisonRows = [
    {
      metric: 'Access Model & Blast Radius',
      legacy: 'Broad subnet access upon login; compromised endpoint can laterally traverse entire VPC',
      vaultzero: 'Strict identity-verified micro-segmentation; zero lateral traversal capability',
      impact: 'Eliminates 99.8% of internal lateral attack surface'
    },
    {
      metric: 'Latency & Throughput Overhead',
      legacy: '45ms – 110ms added latency due to centralized VPN gateway choke points & hairpins',
      vaultzero: '< 0.8ms median overhead via direct P2P mesh & Linux eBPF kernel acceleration',
      impact: '10x faster developer IDE & CI/CD workflow speeds'
    },
    {
      metric: 'Credential Security & Rotation',
      legacy: 'Static certificates, config files stored on laptops, long-lived SSH bastion keys',
      vaultzero: 'Zero standing credentials; ephemeral keys auto-incinerated from RAM every 120 seconds',
      impact: 'Stolen keys become useless in 2 minutes'
    },
    {
      metric: 'Public Port Exposure',
      legacy: 'Requires open inbound ports (443, 1194, 22) for bastions and VPN gateways',
      vaultzero: 'Zero open public inbound ports; protected workloads are completely invisible to port scans',
      impact: 'Immune to automated zero-day perimeter probes'
    },
    {
      metric: 'Multi-Cloud Interconnect',
      legacy: 'Brittle IPSec tunnels, cloud NAT gateways, complex cross-VPC route table maintenance',
      vaultzero: 'Universal cryptographic overlay connecting AWS, GCP, Azure, and on-prem in 1 command',
      impact: 'Reduces multi-cloud networking setup from weeks to minutes'
    },
    {
      metric: 'Compliance & Audit Trail',
      legacy: 'Disjointed logs across firewalls, cloud trail, and bastions; weeks of manual audit work',
      vaultzero: 'Cryptographically signed, immutable event stream ready for SOC 2 Type II and HIPAA',
      impact: 'Continuous automated compliance proof'
    }
  ];

  return (
    <section className="section why-vaultzero-section" id="comparison">
      <div className="container">
        <div className="section-header">
          <div className="section-tag violet">ARCHITECTURAL BENCHMARK</div>
          <h2 className="section-title">
            Why Modern Security Teams are <span className="gradient-text">Retiring Legacy VPNs</span>
          </h2>
          <p className="section-subtitle">
            See how VaultZero transforms slow, perimeter-based security into high-speed, 
            automated zero-trust infrastructure.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="comparison-table-wrapper glass-card">
          <div className="table-header-grid">
            <div className="table-col-header feature-col">CAPABILITY / ARCHITECTURE</div>
            <div className="table-col-header legacy-col">
              <div className="col-badge-legacy">LEGACY VPNS & BASTIONS</div>
              <span>OpenVPN / IPSec / Cloud Bastions</span>
            </div>
            <div className="table-col-header vaultzero-col">
              <div className="col-badge-vaultzero">VAULTZERO ARCHITECTURE</div>
              <span className="font-semibold text-white">Ephemeral Zero-Trust Mesh</span>
            </div>
          </div>

          <div className="table-body">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="table-row-grid">
                <div className="table-cell feature-cell">
                  <div className="cell-metric-title">{row.metric}</div>
                  <div className="cell-impact-tag font-mono">{row.impact}</div>
                </div>

                <div className="table-cell legacy-cell">
                  <div className="cell-icon-status bad">
                    <X size={15} />
                  </div>
                  <span className="cell-text">{row.legacy}</span>
                </div>

                <div className="table-cell vaultzero-cell">
                  <div className="cell-icon-status good">
                    <Check size={15} />
                  </div>
                  <span className="cell-text font-medium">{row.vaultzero}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="migration-banner glass-card">
          <div className="migration-banner-left">
            <div className="migration-icon-box">
              <Zap size={24} className="text-cyan" />
            </div>
            <div>
              <h4 className="migration-title">Ready to transition from your current VPN with zero downtime?</h4>
              <p className="migration-desc">
                VaultZero runs in parallel with your existing VPCs and network stacks. Onboard a pilot cluster in under 15 minutes.
              </p>
            </div>
          </div>
          <button 
            className="btn btn-primary migration-btn"
            onClick={() => onOpenLeadModal('Migration Blueprint Request')}
          >
            <span>Request Migration Blueprint</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
