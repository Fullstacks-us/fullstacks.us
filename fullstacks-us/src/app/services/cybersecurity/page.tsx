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

      <style jsx>{`
        .service-page {
          padding: 80px 0;
          background: #f8f9fa;
        }
        
        .breadcrumb {
          background: transparent;
          padding: 0;
          margin-bottom: 30px;
        }
        
        .breadcrumb-item a {
          color: #007bff;
          text-decoration: none;
        }
        
        .service-header {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .service-header h1 {
          color: #333;
          margin-bottom: 20px;
        }
        
        .service-icon {
          font-size: 4rem;
          color: #dc3545;
          margin-bottom: 20px;
        }
        
        .service-content {
          background: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .service-content h2 {
          color: #333;
          margin-bottom: 20px;
        }
        
        .service-content h3 {
          color: #555;
          margin: 30px 0 15px 0;
        }
        
        .service-content p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .service-content ul, .service-content ol {
          color: #666;
          line-height: 1.6;
        }
        
        .service-content li {
          margin-bottom: 10px;
        }
        
        .service-sidebar {
          background: #f8f9fa;
          padding: 30px;
          border-radius: 10px;
          height: fit-content;
        }
        
        .tech-stack {
          margin: 20px 0;
        }
        
        .tech-tag {
          display: inline-block;
          background: #dc3545;
          color: white;
          padding: 5px 12px;
          border-radius: 20px;
          margin: 5px;
          font-size: 0.9rem;
        }
        
        .cta-section {
          margin-top: 30px;
          text-align: center;
        }
        
        .btn-primary {
          background: #dc3545;
          border: none;
          padding: 12px 30px;
          border-radius: 5px;
          color: white;
          text-decoration: none;
          display: inline-block;
          margin-top: 15px;
        }
        
        .btn-primary:hover {
          background: #c82333;
          color: white;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
} 