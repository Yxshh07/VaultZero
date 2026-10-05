import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Shield, ArrowRight } from 'lucide-react';

export default function FaqAccordion({ onOpenLeadModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How does VaultZero achieve <0.8ms latency overhead compared to traditional VPNs?",
      a: "Traditional VPNs route all packet traffic through centralized gateway concentrators (often in a remote geographical region), causing severe network hairpins and throughput bottlenecks. VaultZero bypasses central concentrators using direct, peer-to-peer WireGuard tunnels accelerated by Linux eBPF kernel socket redirection. Once identity is attested, packets flow directly between nodes at native wire speed without userspace context-switch penalties."
    },
    {
      q: "Do we need to re-architect our cloud infrastructure or tear down existing VPCs?",
      a: "No. VaultZero operates as a non-invasive cryptographic overlay fabric. It can be installed in minutes as a Kubernetes DaemonSet, a systemd service on Linux/Windows VMs, or a container sidecar. It runs concurrently with your existing VPCs, security groups, and cloud route tables, enabling a zero-downtime, phased migration service-by-service."
    },
    {
      q: "How does VaultZero integrate with Okta, Azure AD, and our existing Identity Providers?",
      a: "VaultZero provides turnkey native integrations with Okta, Microsoft Entra ID (Azure AD), Google Workspace, Ping Identity, and Keycloak via standard OIDC and SAML 2.0 protocols. In addition, you can enforce hardware-rooted device posture checks (WebAuthn, FIDO2 YubiKeys, Apple Secure Enclave, and TPM 2.0) before any ephemeral session tunnel is authorized."
    },
    {
      q: "How are ephemeral session keys rotated, and what happens if a laptop is lost?",
      a: "VaultZero completely eliminates static, long-lived client certificates and standing SSH keys. Cryptographic session keys exist strictly in volatile RAM, are automatically re-keyed every 120 seconds, and are permanently incinerated upon session conclusion. If a device is reported lost or flagged by your MDM, its identity lease can be revoked in under 1 second globally."
    },
    {
      q: "Can VaultZero be deployed in air-gapped on-premise environments or sovereign clouds?",
      a: "Yes. VaultZero Sovereign Edition is engineered for air-gapped defense networks, sovereign healthcare enclaves, and strict banking environments. It supports self-hosted control planes, private PKI roots-of-trust, dedicated Hardware Security Modules (HSMs), and hardware confidential computing memory encryption (AMD SEV-SNP & Intel SGX)."
    },
    {
      q: "What happens to active tunnels if a node temporarily loses connection to the control plane?",
      a: "VaultZero strictly separates the Control Plane from the Data Plane. All policy rules and peer cryptographic states are compiled into local eBPF kernel maps. If a temporary network partition disconnects a node from the control plane, active peer-to-peer cryptographic tunnels continue routing uninterrupted until their ephemeral policy leases expire."
    }
  ];

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="section-title">
            Answers for <span className="gradient-text">Security Architects & CISOs</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about implementing zero-trust cryptographic mesh infrastructure 
            in complex enterprise environments.
          </p>
        </div>

        <div className="faq-accordion-container">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item glass-card ${isOpen ? 'faq-item-open' : ''}`}
              >
                <button 
                  className="faq-question-btn"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <div className={`faq-chevron-box ${isOpen ? 'rotate' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer-content">
                    <p className="faq-answer-text">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="faq-support-box glass-card">
          <div className="support-box-left">
            <HelpCircle size={24} className="text-cyan" />
            <div>
              <h4 className="support-title">Have a specific architectural or compliance requirement?</h4>
              <p className="support-desc">
                Speak directly with one of our principal zero-trust security architects. No sales pressure.
              </p>
            </div>
          </div>
          <button 
            className="btn btn-secondary"
            onClick={() => onOpenLeadModal('FAQ Architecture Question')}
          >
            <span>Ask an Architect</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
