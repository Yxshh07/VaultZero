import React from 'react';
import { Quote, Star, ShieldCheck, CheckCircle2, Building2 } from 'lucide-react';

export default function Testimonials({ onOpenLeadModal }) {
  const testimonials = [
    {
      quote: "VaultZero allowed us to achieve SOC 2 Type II certification in less than three weeks while decommissioning our fragile OpenVPN bastion infrastructure. Our lateral attack surface blast radius is practically zero.",
      author: "Dr. Marcus Vance",
      role: "Chief Information Security Officer",
      company: "FinScale Capital",
      industry: "Quantitative FinTech & Asset Management",
      avatarInitials: "MV",
      badge: "SOC 2 Type II Deployed",
      metrics: "Reduced audit preparation by 85% • 0 Breaches"
    },
    {
      quote: "Our distributed ML engineers previously suffered from 90ms VPN gateway hairpins. VaultZero's direct eBPF WireGuard mesh cut network latency to sub-millisecond speeds. The team didn't even realize they were inside an airtight zero-trust perimeter.",
      author: "Elena Rostova",
      role: "VP of Cloud Platform & DevSecOps",
      company: "NeuroLink Health",
      industry: "Genomics & Healthcare Intelligence",
      avatarInitials: "ER",
      badge: "HIPAA & Multi-Cloud Mesh",
      metrics: "40% increase in developer deployment velocity"
    },
    {
      quote: "During our latest black-box red-team penetration assessment, VaultZero intercepted and quarantined every lateral reconnaissance attempt in under 12 milliseconds. It is the gold standard for zero-trust cloud infrastructure.",
      author: "Tariq Al-Mansoor",
      role: "Principal Infrastructure Architect",
      company: "Apex Defense Systems",
      industry: "Autonomous Aerospace & Edge Systems",
      avatarInitials: "TA",
      badge: "FedRAMP High Blueprint",
      metrics: "100% of adversarial lateral traversal attempts blocked"
    }
  ];

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">VERIFIED ENTERPRISE RESULTS</div>
          <h2 className="section-title">
            Validated by <span className="gradient-text">Engineering & Security Leaders</span>
          </h2>
          <p className="section-subtitle">
            See how high-growth platforms and regulated enterprises eliminated lateral breach risks 
            without slowing down developer velocity.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="testimonials-grid">
          {testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card glass-card">
              <div className="testimonial-top">
                <div className="quote-icon-box">
                  <Quote size={20} className="text-indigo" />
                </div>
                <span className="testimonial-badge font-mono">{item.badge}</span>
              </div>

              <p className="testimonial-quote">
                "{item.quote}"
              </p>

              <div className="testimonial-impact-pill">
                <CheckCircle2 size={14} className="text-emerald" />
                <span>{item.metrics}</span>
              </div>

              <div className="testimonial-author-block">
                <div className="author-avatar">{item.avatarInitials}</div>
                <div className="author-info">
                  <h4 className="author-name">{item.author}</h4>
                  <div className="author-role">{item.role}</div>
                  <div className="author-company font-mono text-cyan">{item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CISO Case Study Spotlight Banner */}
        <div className="case-study-spotlight glass-card">
          <div className="spotlight-content">
            <span className="spotlight-tag font-mono">TECHNICAL CASE STUDY</span>
            <h3 className="spotlight-title">
              How FinScale Migrated 450+ Microservices from OpenVPN to VaultZero with 0 Seconds of Production Downtime
            </h3>
            <p className="spotlight-desc">
              Discover the exact architecture rollout strategy, Terraform configurations, and eBPF policy rules used to eliminate standing privileges across 3 cloud regions.
            </p>
          </div>
          <button 
            className="btn btn-secondary btn-lg"
            onClick={() => onOpenLeadModal('FinScale 450-Node Case Study')}
          >
            <span>Read Architecture Case Study</span>
            <Building2 size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
