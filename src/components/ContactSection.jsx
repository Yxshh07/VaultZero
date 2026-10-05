import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  Clock, 
  Shield, 
  Building,
  ArrowRight
} from 'lucide-react';
import { WhatsAppIcon, YouTubeIcon, InstagramIcon, LinkedInIcon } from './SocialIcons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    cloud: 'aws',
    teamSize: '50-250',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag emerald">DIRECT DISPATCH & ARCHITECTURE INQUIRY</div>
          <h2 className="section-title">
            Connect with Our <span className="gradient-text">Zero-Trust Engineering Team</span>
          </h2>
          <p className="section-subtitle">
            Whether you are evaluating a replacement for legacy VPNs or architecting sovereign enclaves, 
            our solutions engineers respond within 2 hours.
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Left Form Box */}
          <div className="contact-form-card glass-card">
            {submitted ? (
              <div className="contact-success-state">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={48} className="text-emerald" />
                </div>
                <h3 className="success-title">Architecture Inquiry Received</h3>
                <p className="success-desc">
                  Thank you, <strong>{formData.name}</strong>. A VaultZero Principal Solutions Architect has been assigned to review your infrastructure profile at <strong>{formData.company || 'your organization'}</strong>.
                </p>
                <div className="success-meta-box font-mono">
                  <div>DISPATCH_TICKET: #VZ-{(Math.random() * 90000 + 10000).toFixed(0)}</div>
                  <div>EXPECTED_RESPONSE: &lt; 120 minutes</div>
                  <div>SLA_STATUS: GUARANTEED</div>
                </div>
                <button 
                  className="btn btn-secondary mt-4"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-heading">Request Architecture Assessment</h3>
                <p className="form-subheading">
                  Submit your details below for a customized zero-trust deployment blueprint.
                </p>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">Full Name *</label>
                    <input 
                      type="text" 
                      id="contact-name" 
                      required 
                      className="form-input" 
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Corporate Work Email *</label>
                    <input 
                      type="email" 
                      id="contact-email" 
                      required 
                      className="form-input" 
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-company">Company / Organization *</label>
                    <input 
                      type="text" 
                      id="contact-company" 
                      required 
                      className="form-input" 
                      placeholder="Acme Financial Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-team">Engineering Team Size</label>
                    <select 
                      id="contact-team" 
                      className="form-input form-select"
                      value={formData.teamSize}
                      onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                    >
                      <option value="10-50">10 – 50 Engineers</option>
                      <option value="50-250">50 – 250 Engineers</option>
                      <option value="250-1000">250 – 1,000 Engineers</option>
                      <option value="1000+">1,000+ Enterprise Scale</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-cloud">Primary Cloud & Infrastructure</label>
                  <select 
                    id="contact-cloud" 
                    className="form-input form-select"
                    value={formData.cloud}
                    onChange={(e) => setFormData({...formData, cloud: e.target.value})}
                  >
                    <option value="aws">Amazon Web Services (AWS Multi-VPC)</option>
                    <option value="gcp">Google Cloud Platform (GCP Anthos / GKE)</option>
                    <option value="azure">Microsoft Azure (AKS / Virtual Networks)</option>
                    <option value="hybrid">Multi-Cloud + On-Premises Datacenter</option>
                    <option value="sovereign">Sovereign / Air-Gapped Private Cloud</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-msg">Architecture Goals or Pain Points</label>
                  <textarea 
                    id="contact-msg" 
                    rows="3" 
                    className="form-input form-textarea"
                    placeholder="e.g. Currently running OpenVPN bastions across 4 AWS accounts; looking to eliminate lateral traversal and achieve SOC 2 Type II compliance..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={submitting}
                  className="btn btn-primary btn-block btn-lg"
                >
                  {submitting ? (
                    <span>Allocating Solutions Architect...</span>
                  ) : (
                    <>
                      <span>Submit Architecture Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                <div className="form-privacy-note">
                  <Shield size={12} className="text-secondary" />
                  <span>Strict enterprise NDA. Your infrastructure details are never shared or sold.</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Direct Dispatch & Social Channels */}
          <div className="contact-channels-col">
            {/* Direct WhatsApp Channel */}
            <div className="channel-card glass-card">
              <div className="channel-icon-wrap whatsapp">
                <WhatsAppIcon size={24} />
              </div>
              <div className="channel-details">
                <div className="channel-badge font-mono">INSTANT RESPONSE</div>
                <h4 className="channel-title">WhatsApp Enterprise Dispatch</h4>
                <p className="channel-desc">
                  Chat directly with our on-call solutions architect for rapid technical evaluation and link sharing.
                </p>
                <a 
                  href="https://wa.me/?text=Hello%20VaultZero%20Team%2C%20I%20would%20like%20to%20schedule%20a%20technical%20architecture%20review%20for%20our%20infrastructure." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary btn-sm channel-btn"
                >
                  <span>Open WhatsApp Direct</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* YouTube Architecture Channel */}
            <div className="channel-card glass-card">
              <div className="channel-icon-wrap youtube">
                <YouTubeIcon size={24} />
              </div>
              <div className="channel-details">
                <div className="channel-badge font-mono">TECH DEEP DIVES</div>
                <h4 className="channel-title">YouTube Engineering Channel</h4>
                <p className="channel-desc">
                  Watch step-by-step eBPF kernel teardowns, WireGuard mesh benchmarking, and live red-team defense walkthroughs.
                </p>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary btn-sm channel-btn"
                >
                  <span>Watch Engineering Talks</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Instagram / Social Engineering Channel */}
            <div className="channel-card glass-card">
              <div className="channel-icon-wrap instagram">
                <InstagramIcon size={24} />
              </div>
              <div className="channel-details">
                <div className="channel-badge font-mono">CULTURE & UPDATES</div>
                <h4 className="channel-title">Instagram & Visual Logs</h4>
                <p className="channel-desc">
                  Follow behind-the-scenes engineering logs, security conference keynotes, and product release highlights.
                </p>
                <a 
                  href="https://www.instagram.com/_yxsh.07_?stkn=eHo1dXlzemJ6OTE1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary btn-sm channel-btn"
                >
                  <span>Connect on Instagram (@_yxsh.07_)</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* LinkedIn Direct Professional Connect */}
            <div className="channel-card glass-card">
              <div className="channel-icon-wrap linkedin">
                <LinkedInIcon size={24} />
              </div>
              <div className="channel-details">
                <div className="channel-badge font-mono">DIRECT PROFESSIONAL CONNECT</div>
                <h4 className="channel-title">LinkedIn Profile</h4>
                <p className="channel-desc">
                  Connect directly with Yash Shinde on LinkedIn for zero-trust architecture consultations and partnerships.
                </p>
                <a 
                  href="https://www.linkedin.com/in/yash-shinde-9b143842b" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary btn-sm channel-btn"
                >
                  <span>Connect with Yash on LinkedIn</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Operations Center SLA Box */}
            <div className="soc-status-box glass-card">
              <div className="soc-left">
                <div className="live-pill">
                  <span className="pulse-dot"></span>
                  <span>SOC GLOBAL ONLINE</span>
                </div>
                <div className="soc-meta font-mono text-secondary">
                  Incident Hotline: +1 (800) 555-VAULT (24/7)
                </div>
              </div>
              <div className="soc-badge font-mono text-cyan">99.999% SLA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
