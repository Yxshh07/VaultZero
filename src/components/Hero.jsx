import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Zap, 
  Lock, 
  Terminal, 
  RefreshCw, 
  AlertTriangle, 
  Globe2, 
  Server,
  Cpu,
  Layers
} from 'lucide-react';

export default function Hero({ onOpenLeadModal, onOpenDemoModal }) {
  const [activeTopology, setActiveTopology] = useState('multicloud');
  const [logs, setLogs] = useState([
    { id: 1, type: 'allow', text: 'VERIFIED: eng-lead@finscale.io -> aws-us-east-1:k8s-pod-72 [eBPF Layer-7] (0.68ms)' },
    { id: 2, type: 'rekey', text: 'KEY_CYCLE: Ephemeral session #44910 incinerated & re-keyed [Kyber-768 ML-KEM]' },
    { id: 3, type: 'allow', text: 'VERIFIED: automated-ci@vaultzero.internal -> gcp-europe-west3:db-replica [TLS 1.3] (0.74ms)' },
  ]);
  const [threatSimulated, setThreatSimulated] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  // Periodic log pulse
  useEffect(() => {
    const timer = setInterval(() => {
      const sampleEvents = [
        { type: 'allow', text: `VERIFIED: worker-node-${Math.floor(Math.random() * 90 + 10)} -> redis-cluster-ha [Mutual TLS 1.3] (0.${Math.floor(Math.random() * 20 + 65)}ms)` },
        { type: 'rekey', text: `KEY_CYCLE: Micro-segment tunnel #${Math.floor(Math.random() * 80000 + 10000)} auto-rotated. Forward secrecy intact.` },
        { type: 'allow', text: `VERIFIED: lambda-sec-audit -> s3-sovereign-vault [Hardware SGX Attestation] (0.${Math.floor(Math.random() * 15 + 70)}ms)` },
      ];
      const randomEvent = sampleEvents[Math.floor(Math.random() * sampleEvents.length)];
      setLogs(prev => [ { id: Date.now(), ...randomEvent }, prev[0], prev[1] ]);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleSimulateThreat = () => {
    setThreatSimulated(true);
    setLogs(prev => [
      { id: Date.now(), type: 'threat', text: '🚨 CRITICAL INTERCEPT: Rogue lateral lateral traversal attempt from 10.244.3.18 blocked in 11ms via eBPF kernel barrier!' },
      prev[0],
      prev[1]
    ]);
    setTimeout(() => {
      setThreatSimulated(false);
    }, 6000);
  };

  const handleRotateKeys = () => {
    setIsRotating(true);
    setLogs(prev => [
      { id: Date.now(), type: 'rekey', text: '⚡ GLOBAL RE-KEY: 14,892 ephemeral peer connections re-negotiated with zero packet drop.' },
      prev[0],
      prev[1]
    ]);
    setTimeout(() => setIsRotating(false), 800);
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container-wide hero-container">
        {/* Left Column: Value Proposition & Copy */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-pill">VaultZero 3.4 Live</span>
            <span className="hero-badge-text">Post-Quantum Kyber-768 Cryptographic Mesh</span>
          </div>

          <h1 className="hero-title">
            The Zero-Trust Cloud Fabric That Replaces <span className="gradient-text">Legacy VPNs & Static Perimeters</span>
          </h1>

          <p className="hero-description">
            Eliminate lateral breach surfaces, cumbersome bastion hosts, and fragile IP firewalls. 
            VaultZero delivers sub-millisecond, identity-attested ephemeral tunnels connecting 
            distributed engineering teams directly to sovereign cloud workloads.
          </p>

          <div className="hero-cta-group">
            <button 
              className="btn btn-primary btn-lg hero-cta-primary"
              onClick={() => onOpenLeadModal('Hero CTA - Schedule Architecture Review')}
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight size={18} />
            </button>
            <a href="#calculator" className="btn btn-secondary btn-lg">
              <Zap size={18} className="text-cyan" />
              <span>Calculate Security ROI</span>
            </a>
          </div>

          {/* Social Proof / Security Specs Strip */}
          <div className="hero-trust-strip">
            <div className="trust-item">
              <CheckCircle2 size={16} className="trust-icon" />
              <span>&lt;0.8ms eBPF Latency Overhead</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="trust-icon" />
              <span>SOC 2 Type II & ISO 27001 Certified</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="trust-icon" />
              <span>Zero Lateral Breaches Recorded</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Live Telemetry Console */}
        <div className="hero-telemetry-col" id="telemetry">
          <div className={`telemetry-card glass-card ${threatSimulated ? 'threat-border-pulse' : ''}`}>
            {/* Window Header */}
            <div className="telemetry-header">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="telemetry-title">
                <Shield size={14} className="text-indigo" />
                <span>vaultzero-core://mesh-telemetry.production</span>
              </div>
              <div className="live-pill">
                <span className="pulse-dot"></span>
                <span>LIVE</span>
              </div>
            </div>

            {/* Vital Metrics Bar */}
            <div className="telemetry-metrics-bar">
              <div className="metric-box">
                <span className="metric-label">ACTIVE TUNNELS</span>
                <span className="metric-value font-mono">14,892</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">MEDIAN LATENCY</span>
                <span className="metric-value font-mono text-emerald">0.72 ms</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">THREAT QUARANTINE</span>
                <span className="metric-value font-mono text-cyan">&lt; 12 ms</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">CRYPTO ENGINE</span>
                <span className="metric-value font-mono text-indigo">Kyber768</span>
              </div>
            </div>

            {/* Topology Visualizer Preview */}
            <div className="topology-viewport">
              <div className="topology-tabs">
                <button 
                  className={`top-tab-btn ${activeTopology === 'multicloud' ? 'active' : ''}`}
                  onClick={() => setActiveTopology('multicloud')}
                >
                  <Globe2 size={14} /> Multi-Cloud (AWS + GCP)
                </button>
                <button 
                  className={`top-tab-btn ${activeTopology === 'sovereign' ? 'active' : ''}`}
                  onClick={() => setActiveTopology('sovereign')}
                >
                  <Cpu size={14} /> Sovereign Enclave
                </button>
              </div>

              <div className="topology-canvas">
                <div className="mesh-node node-client">
                  <div className="node-icon-circle"><Shield size={16} /></div>
                  <span className="node-label">DevSecOps Workstation</span>
                  <span className="node-status">Attested (Okta + WebAuthn)</span>
                </div>

                <div className="mesh-connection-wire">
                  <div className="packet-anim"></div>
                  <span className="mesh-cipher-pill">WireGuard-v3 / 0.72ms</span>
                </div>

                <div className="mesh-node node-cloud">
                  <div className="node-icon-circle"><Server size={16} /></div>
                  <span className="node-label">
                    {activeTopology === 'multicloud' ? 'AWS eu-west-1 & GCP k8s' : 'Sovereign AMD SEV-SNP Enclave'}
                  </span>
                  <span className="node-status text-emerald">Kernel eBPF Shield Active</span>
                </div>
              </div>
            </div>

            {/* Live Event Stream */}
            <div className="telemetry-logs-window">
              <div className="logs-header">
                <Terminal size={14} className="text-secondary" />
                <span>KERNEL SECURITY AUDIT STREAM</span>
              </div>
              <div className="logs-stream font-mono">
                {logs.map((log) => (
                  <div key={log.id} className={`log-entry log-${log.type}`}>
                    <span className="log-time">[{new Date(log.id).toLocaleTimeString()}]</span>
                    <span className="log-text">{log.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Simulation Controls */}
            <div className="telemetry-controls">
              <button 
                className="btn btn-secondary btn-sm"
                onClick={handleSimulateThreat}
                title="Test how VaultZero automatically isolates unauthorized lateral reconnaissance"
              >
                <AlertTriangle size={14} className="text-rose" />
                <span>Simulate Lateral Threat</span>
              </button>

              <button 
                className={`btn btn-secondary btn-sm ${isRotating ? 'rotating-active' : ''}`}
                onClick={handleRotateKeys}
                title="Rotate cryptographic tunnel session keys"
              >
                <RefreshCw size={14} className={`text-cyan ${isRotating ? 'spin-icon' : ''}`} />
                <span>Rotate Ephemeral Keys</span>
              </button>

              <button 
                className="btn btn-ghost btn-sm text-indigo"
                onClick={() => onOpenDemoModal('Live Telemetry Full Specs')}
              >
                <span>Full Telemetry Spec &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
