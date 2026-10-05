import React, { useState } from 'react';
import { 
  Layers, 
  Zap, 
  ShieldAlert, 
  Cpu, 
  Check, 
  Terminal, 
  ArrowRight, 
  Lock, 
  Network,
  Code2,
  KeyRound
} from 'lucide-react';

export default function PlatformSolutions({ onOpenLeadModal }) {
  const [activeTab, setActiveTab] = useState('microsegmentation');

  const solutions = {
    microsegmentation: {
      id: 'microsegmentation',
      tag: 'KERNEL-LEVEL ENFORCEMENT',
      title: 'Identity-Aware eBPF Micro-Segmentation',
      subtitle: 'Replace brittle CIDR blocks and sprawling security groups with granular, identity-verified Layer 4–7 policies directly in the Linux kernel.',
      icon: Layers,
      color: 'indigo',
      highlights: [
        'Enforces cryptographic zero-trust policies inside kernel space via eBPF without iptables latency',
        'Automatic service-to-service discovery across Kubernetes, bare-metal, and serverless clusters',
        'Protects against unauthorized lateral traversal even if an attacker gains root on a worker node',
        'Native SPIFFE/SPIRE identity attestation with OIDC and hardware TPM verification'
      ],
      codeSnippet: `// VaultZero Zero-Trust Policy Definition
resource "vaultzero_policy" "fintech_core" {
  name        = "pci_payment_gateway"
  enforcement = "KERNEL_EBPF_STRICT"
  
  source_identity = {
    team      = "payments-eng"
    device    = "attested-hardware-tpm"
    mfa_level = "FIDO2_WEBAUTHN"
  }
  
  target_workload = {
    service     = "ledger-db-primary"
    namespace   = "sovereign-prod-eu"
    allowed_ops = ["GET /v2/transactions", "POST /v2/settlement"]
  }
  
  ephemeral_lease_ttl = "120s"
  audit_logging       = "CRYPTOGRAPHIC_IMMUTABLE"
}`,
      diagramType: 'ebpf'
    },
    wireguard: {
      id: 'wireguard',
      tag: 'SUB-MILLISECOND P2P FABRIC',
      title: 'Ephemeral Post-Quantum Cryptographic Mesh',
      subtitle: 'Eliminate central VPN concentrators and public bastion hosts. Every connection is a direct, point-to-point WireGuard tunnel with auto-incinerating keys.',
      icon: Zap,
      color: 'cyan',
      highlights: [
        'Zero open ingress ports on protected infrastructure; completely invisible to external port scans',
        'Sub-millisecond latency overhead (<0.8ms) via direct UDP peer-to-peer hole-punching',
        'Post-quantum ready with hybrid Kyber-768 ML-KEM and Curve25519 key encapsulation',
        'Automatic tunnel re-keying every 120 seconds with forward and future cryptographic secrecy'
      ],
      codeSnippet: `[vaultzero-mesh-agent]
Handshake initiated: peer_id="pk_9f7a...8e21"
Routing: Direct P2P via STUN/ICE (NAT Traversal Succeeded)
Selected Cypher: KYBER-768-ML-KEM + CHACHA20-POLY1305
Direct Ping Latency: 0.69ms (Bypassed AWS NAT Gateway)
Forward Secrecy: Ephemeral session key generated & committed to RAM
Auto-Incineration scheduled in: 119.8s`,
      diagramType: 'mesh'
    },
    threatDefense: {
      id: 'threatDefense',
      tag: 'AUTONOMOUS DEFENSE',
      title: 'Sub-12ms Lateral Threat Neutralization',
      subtitle: 'When an endpoint or container is compromised, VaultZero detects abnormal reconnaissance and severs the blast radius instantly without stopping production.',
      icon: ShieldAlert,
      color: 'rose',
      highlights: [
        'Autonomous behavioral anomaly detection models trained on low-level Linux syscall patterns',
        'Quarantines rogue processes in under 12 milliseconds before lateral scans reach databases',
        'Surgical isolation: freezes suspicious sockets while keeping legitimate customer traffic flowing',
        'Instant webhook dispatch to PagerDuty, Slack, Splunk, Datadog, and SIEM pipelines'
      ],
      codeSnippet: `[ALERT 19:44:02.812] SYSCALL_ANOMALY detected on container "checkout-worker-4"
Target: Internal Port Scan sweep across 10.0.0.0/16
Policy Action: eBPF SOCKET_DROP applied in 9.4ms
Blast Radius: Contained to single isolated container pod
Incident Dossier: Auto-generated cryptographic forensic dump ready
SIEM Notification: Dispatched to SOC via mTLS webhook`,
      diagramType: 'defense'
    },
    enclaves: {
      id: 'enclaves',
      tag: 'HARDWARE-ROOTED SECURITY',
      title: 'Sovereign Confidential Computing Enclaves',
      subtitle: 'Execute high-value proprietary models, patient genomics, and core banking transactions inside hardware-encrypted memory enclaves.',
      icon: Cpu,
      color: 'violet',
      highlights: [
        'Protects data in-use: hypervisors, cloud operators, and compromised OS kernels cannot read RAM',
        'Hardware attestation via AMD SEV-SNP, Intel SGX, and AWS Nitro Enclaves',
        'Compliant with strictest EU Sovereign Cloud, Swiss Banking, and FedRAMP High requirements',
        'Zero code rewrites: drop-in OCI container execution with transparent memory encryption'
      ],
      codeSnippet: `// Confidential Enclave Verification
{
  "attestation_status": "HARDWARE_VERIFIED",
  "processor": "AMD EPYC™ 9004 Series (SEV-SNP)",
  "memory_encryption": "AES-256-XTS Hardware Ring 0",
  "hypervisor_inspection": "STRICTLY_BLOCKED",
  "data_state": "PROTECTED_IN_USE",
  "compliance_mapping": ["EU_GDPR_SOVEREIGN", "FIPS_140_3", "HIPAA_BAA"]
}`,
      diagramType: 'enclaves'
    }
  };

  const current = solutions[activeTab];

  return (
    <section className="section platform-solutions-section" id="platform">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">ARCHITECTURAL CAPABILITIES</div>
          <h2 className="section-title">
            Engineered to Solve the Hardest <span className="gradient-text">Zero-Trust Cloud Challenges</span>
          </h2>
          <p className="section-subtitle">
            Explore how VaultZero replaces fragile perimeters with automated cryptographic security 
            embedded into every cloud layer.
          </p>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="solutions-tabs-nav glass-card">
          {Object.values(solutions).map((sol) => {
            const Icon = sol.icon;
            const isActive = activeTab === sol.id;
            return (
              <button
                key={sol.id}
                className={`solution-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(sol.id)}
              >
                <div className={`tab-icon-box ${isActive ? 'active-icon' : ''}`}>
                  <Icon size={18} />
                </div>
                <div className="tab-btn-text">
                  <span className="tab-btn-title">{sol.title.split(' ')[0]} {sol.title.split(' ')[1]}</span>
                  <span className="tab-btn-sub">{sol.tag}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Tab Content Card */}
        <div className="solution-detail-card glass-card">
          <div className="solution-grid">
            {/* Left Content */}
            <div className="solution-info">
              <span className={`solution-badge ${current.color}`}>
                {current.tag}
              </span>
              <h3 className="solution-heading">{current.title}</h3>
              <p className="solution-desc">{current.subtitle}</p>

              <div className="solution-features-list">
                {current.highlights.map((item, idx) => (
                  <div key={idx} className="feature-check-item">
                    <div className="check-box">
                      <Check size={14} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="solution-cta-box">
                <button 
                  className="btn btn-primary"
                  onClick={() => onOpenLeadModal(`Solution: ${current.title}`)}
                >
                  <span>Request Technical Deep Dive</span>
                  <ArrowRight size={16} />
                </button>
                <span className="solution-support-note">
                  <Lock size={13} className="text-secondary" /> Drop-in deployment with zero code refactoring
                </span>
              </div>
            </div>

            {/* Right Interactive Code / Terminal Visualizer */}
            <div className="solution-visual">
              <div className="code-card">
                <div className="code-header">
                  <div className="terminal-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <span className="code-filename font-mono">
                    {activeTab === 'microsegmentation' ? 'vaultzero_policy.tf' : 
                     activeTab === 'wireguard' ? 'mesh-daemon.log' : 
                     activeTab === 'threatDefense' ? 'kernel-defense.audit' : 'enclave-attest.json'}
                  </span>
                  <span className="code-badge">ACTIVE</span>
                </div>
                <pre className="code-pre font-mono">
                  <code>{current.codeSnippet}</code>
                </pre>
                <div className="code-footer">
                  <span className="text-secondary">● Real-time verification verified by VaultZero eBPF Engine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
