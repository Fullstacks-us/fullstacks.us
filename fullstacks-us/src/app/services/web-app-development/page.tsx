import Link from 'next/link';

export default function WebAppDevelopment() {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="service-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-icon">
              <i className="fa fa-laptop"></i>
            </div>
            <h1>Web App Development</h1>
            <p className="hero-subtitle">
              Transform your ideas into powerful, scalable web applications that drive business growth
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
            <li className="breadcrumb-item active" aria-current="page">Web App Development</li>
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
                  <h2>Custom Web Development Solutions</h2>
                  <p className="lead">
                    We specialize in building cutting-edge web applications that combine stunning design 
                    with powerful functionality. From simple business websites to complex enterprise 
                    applications, we deliver solutions that exceed expectations.
                  </p>
                </section>

                {/* Services Section */}
                <section className="content-section">
                  <h3>What We Offer</h3>
                  <div className="services-grid">
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-code"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Frontend Development</h4>
                        <p>React, Angular, Vue.js, and modern JavaScript frameworks</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-server"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Backend Development</h4>
                        <p>Node.js, Python, PHP, Java, and .NET solutions</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-database"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Database Design</h4>
                        <p>SQL and NoSQL database architecture and optimization</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-plug"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>API Development</h4>
                        <p>RESTful and GraphQL APIs for seamless integration</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-shopping-cart"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>E-commerce Solutions</h4>
                        <p>Custom online stores and payment processing</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-mobile"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Progressive Web Apps</h4>
                        <p>Cross-platform applications with native app-like experience</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Process Section */}
                <section className="content-section">
                  <h3>Our Development Process</h3>
                  <div className="process-timeline">
                    <div className="process-step">
                      <div className="process-number">1</div>
                      <div className="process-content">
                        <h4>Discovery & Planning</h4>
                        <p>Understanding your requirements and creating a comprehensive roadmap</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">2</div>
                      <div className="process-content">
                        <h4>Design & Prototyping</h4>
                        <p>Creating wireframes and interactive prototypes for your approval</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">3</div>
                      <div className="process-content">
                        <h4>Development</h4>
                        <p>Building your application with clean, scalable, and maintainable code</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">4</div>
                      <div className="process-content">
                        <h4>Testing & Quality Assurance</h4>
                        <p>Thorough testing across all devices, browsers, and scenarios</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">5</div>
                      <div className="process-content">
                        <h4>Deployment & Launch</h4>
                        <p>Smooth deployment to production environment with zero downtime</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">6</div>
                      <div className="process-content">
                        <h4>Maintenance & Support</h4>
                        <p>Ongoing support, updates, and performance optimization</p>
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
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">GraphQL</span>
                  </div>
                </div>

                <div className="sidebar-section">
                  <h4>Why Choose Us?</h4>
                  <ul className="benefits-list">
                    <li><i className="fa fa-check"></i> Experienced development team</li>
                    <li><i className="fa fa-check"></i> Agile methodology</li>
                    <li><i className="fa fa-check"></i> Scalable architecture</li>
                    <li><i className="fa fa-check"></i> 24/7 support</li>
                    <li><i className="fa fa-check"></i> Competitive pricing</li>
                  </ul>
                </div>

                <div className="sidebar-section cta-section">
                  <h4>Ready to Start Your Project?</h4>
                  <p>Let&apos;s discuss your web application needs and create something amazing together.</p>
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