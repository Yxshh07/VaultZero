import React, { useState } from 'react';
import { 
  X, 
  Shield, 
  KeyRound, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  Fingerprint,
  Cpu
} from 'lucide-react';

export default function ClientPortalModal({ isOpen, onClose }) {
  const [authStep, setAuthStep] = useState('initial'); // 'initial', 'authenticating', 'success'
  const [selectedProvider, setSelectedProvider] = useState('okta');

  if (!isOpen) return null;

  const handleSimulateLogin = (provider) => {
    setSelectedProvider(provider);
    setAuthStep('authenticating');
    setTimeout(() => {
      setAuthStep('success');
    }, 1200);
  };

  const handleReset = () => {
    setAuthStep('initial');
    onClose();
  };

  return (
    <div className="modal-backdrop-overlay" onClick={handleReset}>
      <div className="modal-dialog glass-card portal-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleReset} aria-label="Close portal modal">
          <X size={20} />
        </button>

        <div className="portal-modal-content">
          <div className="portal-header">
            <div className="portal-shield-icon">
              <Shield size={28} className="text-indigo" />
            </div>
            <h3 className="modal-title">VaultZero Client Access Fabric</h3>
            <p className="modal-desc font-mono">
              ZERO-TRUST IDENTITY ATTESTATION • FIPS 140-3
            </p>
          </div>

          {authStep === 'initial' && (
            <div className="portal-body">
              <div className="portal-notice-box font-mono">
                <span>🔐 Cryptographic Ephemeral Lease Required</span>
              </div>

              <div className="sso-providers-list">
                <button 
                  className="sso-btn glass-card"
                  onClick={() => handleSimulateLogin('Okta Enterprise SSO')}
                >
                  <div className="sso-icon">O</div>
                  <span>Authenticate with Okta Universal Directory</span>
                  <ArrowRight size={16} />
                </button>

                <button 
                  className="sso-btn glass-card"
                  onClick={() => handleSimulateLogin('Google Workspace Enterprise')}
                >
                  <div className="sso-icon google">G</div>
                  <span>Authenticate with Google Workspace SAML</span>
                  <ArrowRight size={16} />
                </button>

                <button 
                  className="sso-btn glass-card"
                  onClick={() => handleSimulateLogin('Microsoft Entra ID')}
                >
                  <div className="sso-icon microsoft">M</div>
                  <span>Authenticate with Microsoft Entra (Azure AD)</span>
                  <ArrowRight size={16} />
                </button>

                <button 
                  className="sso-btn glass-card fido-btn"
                  onClick={() => handleSimulateLogin('FIDO2 WebAuthn Token')}
                >
                  <Fingerprint size={20} className="text-cyan" />
                  <span>Hardware YubiKey / WebAuthn Biometric</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              <div className="portal-sub-note font-mono text-center">
                Need to provision a new tenant? Contact your enterprise platform administrator.
              </div>
            </div>
          )}

          {authStep === 'authenticating' && (
            <div className="portal-authenticating-screen">
              <div className="auth-spinner-ring"></div>
              <h4 className="auth-step-title">Attesting Device & Cryptographic State</h4>
              <p className="auth-step-desc font-mono text-cyan">
                Verifying TPM 2.0 PCR registers & negotiating Kyber-768 session keys with {selectedProvider}...
              </p>
            </div>
          )}

          {authStep === 'success' && (
            <div className="portal-success-screen">
              <div className="success-badge-wrap">
                <CheckCircle2 size={48} className="text-emerald" />
              </div>
              <h4 className="auth-step-title text-emerald">Zero-Trust Ephemeral Tunnel Established</h4>
              <p className="modal-desc font-mono">
                LEASE_ID: vz_peer_{(Math.random()*89999+10000).toFixed(0)} • DURATION: 120s (Auto-Rotating)
              </p>
              <div className="portal-demo-dashboard font-mono">
                <div className="p-dash-row"><span>STATUS:</span> <span className="text-emerald">CONNECTED (Direct P2P WireGuard)</span></div>
                <div className="p-dash-row"><span>LATENCY OVERHEAD:</span> <span className="text-cyan">0.71 ms</span></div>
                <div className="p-dash-row"><span>INGRESS SURFACE:</span> <span className="text-white">0 Ports Open (Stealth Mode)</span></div>
              </div>
              <button className="btn btn-primary btn-block mt-4" onClick={handleReset}>
                <span>Close Portal Session</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
