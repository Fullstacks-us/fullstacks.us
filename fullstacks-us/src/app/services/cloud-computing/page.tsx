import Link from 'next/link';

export default function CloudComputing() {
  return (
    <div className="service-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/#service">Services</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Cloud Computing</li>
              </ol>
            </nav>
            
            <div className="service-header">
              <h1>Cloud Computing</h1>
              <div className="service-icon">
                <i className="fas fa-cloud"></i>
              </div>
            </div>

            <div className="service-content">
              <div className="row">
                <div className="col-lg-8">
                  <h2>Scalable Cloud Infrastructure Solutions</h2>
                  <p>
                    We provide comprehensive cloud computing services that help businesses scale efficiently, 
                    reduce costs, and improve performance. From cloud migration to managed services, 
                    our experts ensure your applications run smoothly in the cloud environment.
                  </p>

                  <h3>What We Offer</h3>
                  <ul>
                    <li><strong>Cloud Migration:</strong> Seamless migration from on-premise to cloud infrastructure</li>
                    <li><strong>Cloud Architecture:</strong> Design and implementation of scalable cloud solutions</li>
                    <li><strong>DevOps & CI/CD:</strong> Automated deployment and continuous integration pipelines</li>
                    <li><strong>Serverless Computing:</strong> Event-driven, scalable serverless applications</li>
                    <li><strong>Container Orchestration:</strong> Kubernetes and Docker container management</li>
                    <li><strong>Cloud Security:</strong> Comprehensive security and compliance solutions</li>
                  </ul>

                  <h3>Our Cloud Services Process</h3>
                  <ol>
                    <li><strong>Assessment:</strong> Evaluating your current infrastructure and cloud readiness</li>
                    <li><strong>Strategy Planning:</strong> Developing a comprehensive cloud migration strategy</li>
                    <li><strong>Architecture Design:</strong> Designing scalable and secure cloud architecture</li>
                    <li><strong>Migration & Deployment:</strong> Executing the migration with minimal downtime</li>
                    <li><strong>Optimization:</strong> Performance tuning and cost optimization</li>
                    <li><strong>Monitoring & Support:</strong> 24/7 monitoring and ongoing support</li>
                  </ol>
                </div>

                <div className="col-lg-4">
                  <div className="service-sidebar">
                    <h4>Cloud Platforms We Use</h4>
                    <div className="tech-stack">
                      <span className="tech-tag">AWS</span>
                      <span className="tech-tag">Azure</span>
                      <span className="tech-tag">Google Cloud</span>
                      <span className="tech-tag">Kubernetes</span>
                      <span className="tech-tag">Docker</span>
                      <span className="tech-tag">Terraform</span>
                      <span className="tech-tag">Jenkins</span>
                      <span className="tech-tag">GitLab CI</span>
                      <span className="tech-tag">Ansible</span>
                    </div>

                    <div className="cta-section">
                      <h4>Ready to Scale in the Cloud?</h4>
                      <p>Let's build a robust cloud infrastructure that grows with your business.</p>
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
          color: #20c997;
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
          background: #20c997;
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
          background: #20c997;
          border: none;
          padding: 12px 30px;
          border-radius: 5px;
          color: white;
          text-decoration: none;
          display: inline-block;
          margin-top: 15px;
        }
        
        .btn-primary:hover {
          background: #1ba085;
          color: white;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
} 