import React, { useState, useEffect } from 'react';
import { 
  X, 
  Shield, 
  CheckCircle2, 
  Send, 
  Calendar, 
  Clock, 
  Lock, 
  Sparkles,
  ArrowRight,
  Download
} from 'lucide-react';

export default function LeadCaptureModal({ isOpen, onClose, modalData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    cloud: 'AWS Multi-VPC',
    timeframe: 'Immediately (Next 1-2 weeks)',
    notes: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop-overlay" onClick={handleResetAndClose}>
      <div className="modal-dialog glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={handleResetAndClose} aria-label="Close dialog">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success-screen">
            <div className="success-badge-wrap">
              <CheckCircle2 size={56} className="text-emerald" />
            </div>

            <h3 className="modal-title text-center">Architecture Session Confirmed</h3>
            <p className="modal-desc text-center">
              Thank you, <strong>{formData.name}</strong>. We've reserved a technical architecture slot for <strong>{formData.company || 'your team'}</strong>.
            </p>

            <div className="confirmation-card font-mono">
              <div className="conf-row">
                <span className="conf-label">REFERENCE:</span>
                <span className="conf-val text-cyan">VZ-ARCH-{(Math.random() * 89999 + 10000).toFixed(0)}</span>
              </div>
              <div className="conf-row">
                <span className="conf-label">ASSIGNED LEAD:</span>
                <span className="conf-val text-white">Principal Cloud SecOps Team</span>
              </div>
              <div className="conf-row">
                <span className="conf-label">CALENDAR INVITE:</span>
                <span className="conf-val text-emerald">Dispatched to {formData.email}</span>
              </div>
              {modalData?.annualRiskReduction && (
                <div className="conf-row">
                  <span className="conf-label">CALCULATED SAVINGS:</span>
                  <span className="conf-val text-accent">{modalData.annualRiskReduction} / yr</span>
                </div>
              )}
            </div>

            <div className="modal-actions-center">
              <button 
                className="btn btn-primary btn-block"
                onClick={handleResetAndClose}
              >
                <span>Return to Overview</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ) : (
          <div className="modal-form-screen">
            <div className="modal-header">
              <div className="modal-icon-title">
                <Shield size={22} className="text-indigo" />
                <h3 className="modal-title">
                  {modalData?.title || 'Schedule Technical Architecture Review'}
                </h3>
              </div>
              <p className="modal-desc">
                Review your infrastructure topology directly with a VaultZero Principal Security Architect.
              </p>
            </div>

            {/* Context Dossier Pill if launched from ROI Calculator */}
            {modalData?.annualRiskReduction && (
              <div className="dossier-preview-banner">
                <div className="dossier-pill-icon"><Sparkles size={16} className="text-cyan" /></div>
                <div className="dossier-pill-text">
                  <strong>Attached ROI Assessment:</strong> {modalData.annualRiskReduction} risk reduction • {modalData.monthlyHoursSaved} for {modalData.engineers} nodes ({modalData.activeClouds}).
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Alex Chen"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Corporate Work Email *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="alex@fintechscale.io"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Organization Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="FinScale Global"
                    className="form-input"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Target Cloud Environment</label>
                  <select 
                    className="form-input form-select"
                    value={formData.cloud}
                    onChange={(e) => setFormData({...formData, cloud: e.target.value})}
                  >
                    <option value="AWS Multi-VPC">AWS Multi-Account / Multi-VPC</option>
                    <option value="Google Cloud / GKE">Google Cloud / Anthos / GKE</option>
                    <option value="Microsoft Azure">Microsoft Azure / AKS</option>
                    <option value="Multi-Cloud Hybrid">Multi-Cloud + Hybrid On-Prem</option>
                    <option value="Sovereign Enclave">Sovereign Air-Gapped Cloud</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Project Timeline / Urgency</label>
                <select 
                  className="form-input form-select"
                  value={formData.timeframe}
                  onChange={(e) => setFormData({...formData, timeframe: e.target.value})}
                >
                  <option value="Immediately (Next 1-2 weeks)">Immediately (Next 1–2 weeks)</option>
                  <option value="Upcoming Quarter (1-3 months)">Upcoming Quarter (1–3 months)</option>
                  <option value="SOC 2 / Regulatory Audit Deadline">Under SOC 2 / HIPAA Audit Deadline</option>
                  <option value="Exploratory Architecture Research">Exploratory Architecture Research</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Key Infrastructure Goals (Optional)</label>
                <textarea 
                  rows="2"
                  placeholder="e.g. Decommissioning OpenVPN bastions, eliminating lateral movement, automating WireGuard mesh..."
                  className="form-input form-textarea"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={submitting}
                className="btn btn-primary btn-block btn-lg"
              >
                {submitting ? (
                  <span>Securing Calendar Slot...</span>
                ) : (
                  <>
                    <span>Confirm Architecture Review Request</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              <div className="modal-privacy-footer font-mono">
                <Lock size={12} className="text-secondary" />
                <span>NDA Protected • Zero Sales Spam • 100% Technical Discussion</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
