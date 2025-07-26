import Link from 'next/link';

export default function WebAppDevelopment() {
  return (
    <div className="service-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/#service">Services</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Web App Development</li>
              </ol>
            </nav>
            
            <div className="service-header">
              <h1>Web App Development</h1>
              <div className="service-icon">
                <i className="fa fa-laptop"></i>
              </div>
            </div>

            <div className="service-content">
              <div className="row">
                <div className="col-lg-8">
                  <h2>Custom Web Development Solutions</h2>
                  <p>
                    Our Custom Web Development Services Include Both Front-End And Back-End Development. 
                    Whether It Is Enhancing An Existing App Or Architecting An Enterprise App, Our Developers 
                    Are Up For The Challenge.
                  </p>

                  <h3>What We Offer</h3>
                  <ul>
                    <li><strong>Frontend Development:</strong> React, Angular, Vue.js, and modern JavaScript frameworks</li>
                    <li><strong>Backend Development:</strong> Node.js, Python, PHP, Java, and .NET solutions</li>
                    <li><strong>Database Design:</strong> SQL and NoSQL database architecture and optimization</li>
                    <li><strong>API Development:</strong> RESTful and GraphQL APIs for seamless integration</li>
                    <li><strong>E-commerce Solutions:</strong> Custom online stores and payment processing</li>
                    <li><strong>Progressive Web Apps:</strong> Cross-platform applications with native app-like experience</li>
                  </ul>

                  <h3>Our Process</h3>
                  <ol>
                    <li><strong>Discovery & Planning:</strong> Understanding your requirements and creating a roadmap</li>
                    <li><strong>Design & Prototyping:</strong> Creating wireframes and interactive prototypes</li>
                    <li><strong>Development:</strong> Building your application with clean, scalable code</li>
                    <li><strong>Testing & Quality Assurance:</strong> Thorough testing across all devices and browsers</li>
                    <li><strong>Deployment & Launch:</strong> Smooth deployment to production environment</li>
                    <li><strong>Maintenance & Support:</strong> Ongoing support and updates</li>
                  </ol>
                </div>

                <div className="col-lg-4">
                  <div className="service-sidebar">
                    <h4>Technologies We Use</h4>
                    <div className="tech-stack">
                      <span className="tech-tag">React</span>
                      <span className="tech-tag">Angular</span>
                      <span className="tech-tag">Vue.js</span>
                      <span className="tech-tag">Node.js</span>
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">PHP</span>
                      <span className="tech-tag">MySQL</span>
                      <span className="tech-tag">MongoDB</span>
                      <span className="tech-tag">AWS</span>
                      <span className="tech-tag">Docker</span>
                    </div>

                    <div className="cta-section">
                      <h4>Ready to Start Your Project?</h4>
                      <p>Let's discuss your web application needs and create something amazing together.</p>
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
          color: #007bff;
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
          background: #007bff;
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
          background: #007bff;
          border: none;
          padding: 12px 30px;
          border-radius: 5px;
          color: white;
          text-decoration: none;
          display: inline-block;
          margin-top: 15px;
        }
        
        .btn-primary:hover {
          background: #0056b3;
          color: white;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
} 