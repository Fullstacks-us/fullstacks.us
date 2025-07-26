import Link from 'next/link';

export default function Cybersecurity() {
  return (
    <div className="service-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/#service">Services</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Cybersecurity</li>
              </ol>
            </nav>
            
            <div className="service-header">
              <h1>Cybersecurity</h1>
              <div className="service-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
            </div>

            <div className="service-content">
              <div className="row">
                <div className="col-lg-8">
                  <h2>Comprehensive Security Solutions</h2>
                  <p>
                    We provide robust cybersecurity services to protect your digital assets, applications, and infrastructure. 
                    Our security experts implement comprehensive protection strategies to safeguard your business 
                    from evolving cyber threats and ensure compliance with industry standards.
                  </p>

                  <h3>What We Offer</h3>
                  <ul>
                    <li><strong>Security Audits:</strong> Comprehensive vulnerability assessments and penetration testing</li>
                    <li><strong>Application Security:</strong> Secure code review and application hardening</li>
                    <li><strong>Network Security:</strong> Firewall configuration and network monitoring</li>
                    <li><strong>Data Protection:</strong> Encryption, backup, and disaster recovery solutions</li>
                    <li><strong>Compliance:</strong> GDPR, HIPAA, SOC 2, and other regulatory compliance</li>
                    <li><strong>Security Training:</strong> Employee cybersecurity awareness and training programs</li>
                  </ul>

                  <h3>Our Security Process</h3>
                  <ol>
                    <li><strong>Risk Assessment:</strong> Identifying potential security vulnerabilities and threats</li>
                    <li><strong>Security Strategy:</strong> Developing comprehensive security policies and procedures</li>
                    <li><strong>Implementation:</strong> Deploying security measures and monitoring systems</li>
                    <li><strong>Testing & Validation:</strong> Conducting security tests and validating protection</li>
                    <li><strong>Monitoring:</strong> 24/7 security monitoring and threat detection</li>
                    <li><strong>Incident Response:</strong> Rapid response and recovery from security incidents</li>
                  </ol>
                </div>

                <div className="col-lg-4">
                  <div className="service-sidebar">
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
                    </div>

                    <div className="cta-section">
                      <h4>Ready to Secure Your Business?</h4>
                      <p>Let's implement robust cybersecurity measures to protect your digital assets.</p>
                      <Link href="/#contact" className="btn btn-primary">Get Started</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 