import Link from 'next/link';

export default function Cybersecurity() {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="service-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-icon">
              <i className="fa fa-shield-alt"></i>
            </div>
            <h1>Cybersecurity</h1>
            <p className="hero-subtitle">
              Protect your digital assets with comprehensive security solutions that safeguard your business from evolving threats
            </p>
            <div className="hero-cta">
              <Link href="/#contact" className="btn btn-primary btn-lg">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container">
        <nav aria-label="breadcrumb" className="service-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item"><Link href="/#service">Services</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Cybersecurity</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="service-content-wrapper">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              <div className="service-main-content">
                {/* Overview Section */}
                <section className="content-section">
                  <h2>Comprehensive Security Solutions</h2>
                  <p className="lead">
                    We provide robust cybersecurity services to protect your digital assets, applications, and infrastructure. 
                    Our security experts implement comprehensive protection strategies to safeguard your business from 
                    evolving cyber threats and ensure compliance with industry standards.
                  </p>
                </section>

                {/* Services Section */}
                <section className="content-section">
                  <h3>What We Offer</h3>
                  <div className="services-grid">
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-search"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Security Audits</h4>
                        <p>Comprehensive vulnerability assessments and penetration testing</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-code"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Application Security</h4>
                        <p>Secure code review and application hardening</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-network-wired"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Network Security</h4>
                        <p>Firewall configuration and network monitoring</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-lock"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Data Protection</h4>
                        <p>Encryption, backup, and disaster recovery solutions</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-certificate"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Compliance</h4>
                        <p>GDPR, HIPAA, SOC 2, and other regulatory compliance</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-graduation-cap"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Security Training</h4>
                        <p>Employee cybersecurity awareness and training programs</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Process Section */}
                <section className="content-section">
                  <h3>Our Security Process</h3>
                  <div className="process-timeline">
                    <div className="process-step">
                      <div className="process-number">1</div>
                      <div className="process-content">
                        <h4>Risk Assessment</h4>
                        <p>Identifying potential security vulnerabilities and threats</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">2</div>
                      <div className="process-content">
                        <h4>Security Strategy</h4>
                        <p>Developing comprehensive security policies and procedures</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">3</div>
                      <div className="process-content">
                        <h4>Implementation</h4>
                        <p>Deploying security measures and monitoring systems</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">4</div>
                      <div className="process-content">
                        <h4>Testing & Validation</h4>
                        <p>Conducting security tests and validating protection</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">5</div>
                      <div className="process-content">
                        <h4>Monitoring</h4>
                        <p>24/7 security monitoring and threat detection</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">6</div>
                      <div className="process-content">
                        <h4>Incident Response</h4>
                        <p>Rapid response and recovery from security incidents</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="sidebar-section">
                  <h4>Security Tools We Use</h4>
                  <div className="tech-stack">
                    <span className="tech-tag">Nessus</span>
                    <span className="tech-tag">Metasploit</span>
                    <span className="tech-tag">Wireshark</span>
                    <span className="tech-tag">Snort</span>
                    <span className="tech-tag">OpenVAS</span>
                    <span className="tech-tag">Burp Suite</span>
                    <span className="tech-tag">Splunk</span>
                    <span className="tech-tag">ELK Stack</span>
                    <span className="tech-tag">CrowdStrike</span>
                    <span className="tech-tag">Qualys</span>
                    <span className="tech-tag">Rapid7</span>
                  </div>
                </div>

                <div className="sidebar-section">
                  <h4>Why Choose Us?</h4>
                  <ul className="benefits-list">
                    <li><i className="fa fa-check"></i> Security experts</li>
                    <li><i className="fa fa-check"></i> Proactive approach</li>
                    <li><i className="fa fa-check"></i> 24/7 monitoring</li>
                    <li><i className="fa fa-check"></i> Compliance expertise</li>
                    <li><i className="fa fa-check"></i> Rapid incident response</li>
                  </ul>
                </div>

                <div className="sidebar-section cta-section">
                  <h4>Ready to Secure Your Business?</h4>
                  <p>Let&apos;s implement robust cybersecurity measures to protect your digital assets.</p>
                  <Link href="/#contact" className="btn btn-primary btn-block">
                    Get Started Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 