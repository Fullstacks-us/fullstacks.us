import Link from 'next/link';

export default function CloudComputing() {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="service-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-icon">
              <i className="fa fa-cloud"></i>
            </div>
            <h1>Cloud Computing</h1>
            <p className="hero-subtitle">
              Scalable cloud infrastructure solutions that help businesses grow efficiently and reduce costs
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
            <li className="breadcrumb-item active" aria-current="page">3. Cloud Computing</li>
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
                  <h2>Scalable Cloud Infrastructure Solutions</h2>
                  <p className="lead">
                    We provide comprehensive cloud computing services that help businesses scale efficiently, 
                    reduce costs, and improve performance. From cloud migration to managed services, 
                    our experts ensure your applications run smoothly in the cloud environment.
                  </p>
                </section>

                {/* Services Section */}
                <section className="content-section">
                  <h3>What We Offer</h3>
                  <div className="services-grid">
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-exchange"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Cloud Migration</h4>
                        <p>Seamless migration from on-premise to cloud infrastructure</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-sitemap"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Cloud Architecture</h4>
                        <p>Design and implementation of scalable cloud solutions</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-cogs"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>DevOps & CI/CD</h4>
                        <p>Automated deployment and continuous integration pipelines</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-bolt"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Serverless Computing</h4>
                        <p>Event-driven, scalable serverless applications</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-cube"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Container Orchestration</h4>
                        <p>Kubernetes and Docker container management</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-shield"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Cloud Security</h4>
                        <p>Comprehensive security and compliance solutions</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Process Section */}
                <section className="content-section">
                  <h3>Our Cloud Services Process</h3>
                  <div className="process-timeline">
                    <div className="process-step">
                      <div className="process-number">1</div>
                      <div className="process-content">
                        <h4>Assessment</h4>
                        <p>Evaluating your current infrastructure and cloud readiness</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">2</div>
                      <div className="process-content">
                        <h4>Strategy Planning</h4>
                        <p>Developing a comprehensive cloud migration strategy</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">3</div>
                      <div className="process-content">
                        <h4>Architecture Design</h4>
                        <p>Designing scalable and secure cloud architecture</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">4</div>
                      <div className="process-content">
                        <h4>Migration & Deployment</h4>
                        <p>Executing the migration with minimal downtime</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">5</div>
                      <div className="process-content">
                        <h4>Optimization</h4>
                        <p>Performance tuning and cost optimization</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">6</div>
                      <div className="process-content">
                        <h4>Monitoring & Support</h4>
                        <p>24/7 monitoring and ongoing support</p>
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
                </div>

                <div className="sidebar-section">
                  <h4>Why Choose Our Cloud Services?</h4>
                  <ul className="benefits-list">
                    <li><i className="fa fa-check"></i> Experienced cloud architects</li>
                    <li><i className="fa fa-check"></i> Cost optimization strategies</li>
                    <li><i className="fa fa-check"></i> Scalable infrastructure</li>
                    <li><i className="fa fa-check"></i> 24/7 monitoring</li>
                    <li><i className="fa fa-check"></i> Security-first approach</li>
                  </ul>
                </div>

                <div className="sidebar-section cta-section">
                  <h4>Ready to Scale in the Cloud?</h4>
                  <p>Let&apos;s build a robust cloud infrastructure that grows with your business.</p>
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