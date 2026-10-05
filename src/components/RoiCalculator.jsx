import React, { useState } from 'react';
import { 
  Calculator, 
  ArrowRight, 
  DollarSign, 
  Clock, 
  Zap, 
  ShieldCheck, 
  Layers, 
  CheckSquare, 
  Square,
  HelpCircle
} from 'lucide-react';

export default function RoiCalculator({ onOpenLeadModalWithData }) {
  const [engineers, setEngineers] = useState(120);
  const [clouds, setClouds] = useState({
    aws: true,
    gcp: true,
    azure: false,
    onprem: false
  });
  const [compliance, setCompliance] = useState({
    soc2: true,
    hipaa: false,
    iso: true,
    pci: false
  });

  // Calculate dynamic metrics based on inputs
  const cloudCount = Object.values(clouds).filter(Boolean).length || 1;
  const complianceCount = Object.values(compliance).filter(Boolean).length || 1;

  // Formula grounded in industry breach benchmarks and platform ops time
  const annualRiskReduction = Math.round(
    (engineers * 4800 + cloudCount * 95000 + complianceCount * 65000) / 1000
  ) * 1000;

  const monthlyHoursSaved = Math.round(engineers * 2.8 + cloudCount * 25);
  const annualCostSavings = Math.round((engineers * 1250 + cloudCount * 28000) / 1000) * 1000;
  const latencyImprovementMs = Math.round(65 + cloudCount * 8);

  const toggleCloud = (key) => {
    setClouds(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleCompliance = (key) => {
    setCompliance(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleExportDossier = () => {
    onOpenLeadModalWithData({
      source: 'Interactive ROI Calculator',
      engineers,
      cloudCount,
      activeClouds: Object.keys(clouds).filter(k => clouds[k]).join(', ').toUpperCase(),
      activeCompliance: Object.keys(compliance).filter(k => compliance[k]).join(', ').toUpperCase(),
      annualRiskReduction: `$${annualRiskReduction.toLocaleString()}`,
      monthlyHoursSaved: `${monthlyHoursSaved} hrs/mo`,
      annualCostSavings: `$${annualCostSavings.toLocaleString()}`
    });
  };

  return (
    <section className="section roi-calculator-section" id="calculator">
      <div className="container">
        <div className="section-header">
          <div className="section-tag emerald">LEAD ASSESSMENT ENGINE</div>
          <h2 className="section-title">
            Quantify Your Enterprise <span className="gradient-text">Zero-Trust ROI</span>
          </h2>
          <p className="section-subtitle">
            Configure your infrastructure profile below to model lateral breach risk reduction, 
            engineering velocity recovery, and cloud networking savings.
          </p>
        </div>

        <div className="calculator-layout-card glass-card">
          <div className="calculator-grid">
            {/* Left Controls Column */}
            <div className="calc-inputs-col">
              <h3 className="calc-col-title">
                <Calculator size={18} className="text-cyan" />
                <span>Infrastructure Parameters</span>
              </h3>

              {/* Slider: Protected Engineers & Workload Nodes */}
              <div className="calc-control-group">
                <div className="calc-label-row">
                  <label htmlFor="engineer-slider" className="calc-label">
                    Protected Engineers & Workloads
                  </label>
                  <span className="calc-slider-val font-mono text-cyan">{engineers} nodes</span>
                </div>
                <input 
                  type="range" 
                  id="engineer-slider"
                  min="20" 
                  max="1500" 
                  step="10" 
                  value={engineers} 
                  onChange={(e) => setEngineers(Number(e.target.value))}
                  className="calc-range-slider"
                />
                <div className="slider-ticks font-mono">
                  <span>20</span>
                  <span>500</span>
                  <span>1,000</span>
                  <span>1,500+</span>
                </div>
              </div>

              {/* Checkboxes: Cloud Environments */}
              <div className="calc-control-group">
                <label className="calc-label mb-2">Cloud & Infrastructure Footprint</label>
                <div className="calc-chip-grid">
                  <button 
                    type="button"
                    className={`calc-chip ${clouds.aws ? 'selected' : ''}`}
                    onClick={() => toggleCloud('aws')}
                  >
                    {clouds.aws ? <CheckSquare size={16} /> : <Square size={16} />}
                    <span>AWS (Multi-VPC)</span>
                  </button>
                  <button 
                    type="button"
                    className={`calc-chip ${clouds.gcp ? 'selected' : ''}`}
                    onClick={() => toggleCloud('gcp')}
                  >
                    {clouds.gcp ? <CheckSquare size={16} /> : <Square size={16} />}
                    <span>Google Cloud</span>
                  </button>
                  <button 
                    type="button"
                    className={`calc-chip ${clouds.azure ? 'selected' : ''}`}
                    onClick={() => toggleCloud('azure')}
                  >
                    {clouds.azure ? <CheckSquare size={16} /> : <Square size={16} />}
                    <span>Microsoft Azure</span>
                  </button>
                  <button 
                    type="button"
                    className={`calc-chip ${clouds.onprem ? 'selected' : ''}`}
                    onClick={() => toggleCloud('onprem')}
                  >
                    {clouds.onprem ? <CheckSquare size={16} /> : <Square size={16} />}
                    <span>Private DC / Hybrid</span>
                  </button>
                </div>
              </div>

              {/* Checkboxes: Target Compliance Frameworks */}
              <div className="calc-control-group">
                <label className="calc-label mb-2">Target Compliance & Regulatory Audits</label>
                <div className="calc-chip-grid">
                  <button 
                    type="button"
                    className={`calc-chip ${compliance.soc2 ? 'selected' : ''}`}
                    onClick={() => toggleCompliance('soc2')}
                  >
                    {compliance.soc2 ? <CheckSquare size={16} /> : <Square size={16} />}
                    <span>SOC 2 Type II</span>
                  </button>
                  <button 
                    type="button"
                    className={`calc-chip ${compliance.hipaa ? 'selected' : ''}`}
                    onClick={() => toggleCompliance('hipaa')}
                  >
                    {compliance.hipaa ? <CheckSquare size={16} /> : <Square size={16} />}
                    <span>HIPAA BAA</span>
                  </button>
                  <button 
                    type="button"
                    className={`calc-chip ${compliance.iso ? 'selected' : ''}`}
                    onClick={() => toggleCompliance('iso')}
                  >
                    {compliance.iso ? <CheckSquare size={16} /> : <Square size={16} />}
                    <span>ISO/IEC 27001</span>
                  </button>
                  <button 
                    type="button"
                    className={`calc-chip ${compliance.pci ? 'selected' : ''}`}
                    onClick={() => toggleCompliance('pci')}
                  >
                    {compliance.pci ? <CheckSquare size={16} /> : <Square size={16} />}
                    <span>PCI-DSS v4</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Projected Results Column */}
            <div className="calc-results-col">
              <div className="calc-results-card">
                <div className="results-header">
                  <span className="results-pre">PROJECTED ANNUAL IMPACT</span>
                  <h4 className="results-title">Calculated Value Summary</h4>
                </div>

                <div className="results-stats-stack">
                  {/* Metric 1 */}
                  <div className="result-metric-row">
                    <div className="metric-left">
                      <div className="metric-icon-wrap emerald"><DollarSign size={18} /></div>
                      <div>
                        <div className="res-metric-name">Lateral Breach Risk Reduction</div>
                        <div className="res-metric-sub">Based on average blast radius models</div>
                      </div>
                    </div>
                    <div className="res-metric-value text-emerald font-mono">
                      ${annualRiskReduction.toLocaleString()}
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="result-metric-row">
                    <div className="metric-left">
                      <div className="metric-icon-wrap indigo"><Clock size={18} /></div>
                      <div>
                        <div className="res-metric-name">Platform Engineering Hours Saved</div>
                        <div className="res-metric-sub">Eliminates manual bastion & VPN tickets</div>
                      </div>
                    </div>
                    <div className="res-metric-value text-indigo font-mono">
                      {monthlyHoursSaved} hrs/mo
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="result-metric-row">
                    <div className="metric-left">
                      <div className="metric-icon-wrap cyan"><Zap size={18} /></div>
                      <div>
                        <div className="res-metric-name">IDE & Workload Latency Saved</div>
                        <div className="res-metric-sub">Bypasses centralized gateway hairpins</div>
                      </div>
                    </div>
                    <div className="res-metric-value text-cyan font-mono">
                      -{latencyImprovementMs} ms
                    </div>
                  </div>
                </div>

                {/* Primary Conversion Action */}
                <div className="calc-action-box">
                  <button 
                    className="btn btn-primary btn-block btn-lg"
                    onClick={handleExportDossier}
                  >
                    <span>Export Full ROI & Architecture Dossier</span>
                    <ArrowRight size={18} />
                  </button>
                  <p className="calc-disclaimer">
                    Includes tailored executive slides, breach cost breakdown, and step-by-step migration blueprint for your team size.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
