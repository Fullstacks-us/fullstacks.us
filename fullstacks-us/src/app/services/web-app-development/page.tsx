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
    </div>
  );
} 