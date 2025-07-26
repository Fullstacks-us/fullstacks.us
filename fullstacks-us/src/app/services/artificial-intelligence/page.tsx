import Link from 'next/link';

export default function ArtificialIntelligence() {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="service-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h1>Artificial Intelligence</h1>
            <p className="hero-subtitle">
              Unlock the power of data and automation with intelligent AI solutions that drive business innovation
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
            <li className="breadcrumb-item active" aria-current="page">Artificial Intelligence</li>
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
                  <h2>Intelligent Solutions for Modern Business</h2>
                  <p className="lead">
                    Our AI development services help businesses unlock the power of data and automation. 
                    From predictive analytics and machine learning models to natural language processing 
                    and computer vision, our team crafts scalable AI solutions that drive intelligent 
                    decision-making and business innovation.
                  </p>
                </section>

                {/* Services Section */}
                <section className="content-section">
                  <h3>What We Offer</h3>
                  <div className="services-grid">
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Machine Learning</h4>
                        <p>Custom ML models for prediction and pattern recognition</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fas fa-language"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Natural Language Processing</h4>
                        <p>Text analysis, sentiment analysis, and language understanding</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fas fa-eye"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Computer Vision</h4>
                        <p>Image and video analysis, object detection, and facial recognition</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-chart-bar"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Predictive Analytics</h4>
                        <p>Data-driven insights and forecasting models</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fas fa-thumbs-up"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Recommendation Systems</h4>
                        <p>Personalized content and product recommendations</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fas fa-plug"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>AI Integration</h4>
                        <p>Seamless integration of AI into existing business processes</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Process Section */}
                <section className="content-section">
                  <h3>Our AI Development Process</h3>
                  <div className="process-timeline">
                    <div className="process-step">
                      <div className="process-number">1</div>
                      <div className="process-content">
                        <h4>Data Assessment</h4>
                        <p>Evaluating your data quality and availability</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">2</div>
                      <div className="process-content">
                        <h4>Problem Definition</h4>
                        <p>Clearly defining AI objectives and success metrics</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">3</div>
                      <div className="process-content">
                        <h4>Model Development</h4>
                        <p>Building and training AI models with your data</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">4</div>
                      <div className="process-content">
                        <h4>Testing & Validation</h4>
                        <p>Ensuring model accuracy and reliability</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">5</div>
                      <div className="process-content">
                        <h4>Deployment</h4>
                        <p>Integrating AI solutions into your business workflow</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">6</div>
                      <div className="process-content">
                        <h4>Monitoring & Optimization</h4>
                        <p>Continuous improvement and performance tracking</p>
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
                    <span className="tech-tag">TensorFlow</span>
                    <span className="tech-tag">PyTorch</span>
                    <span className="tech-tag">Scikit-learn</span>
                    <span className="tech-tag">OpenCV</span>
                    <span className="tech-tag">NLTK</span>
                    <span className="tech-tag">SpaCy</span>
                    <span className="tech-tag">OpenAI API</span>
                    <span className="tech-tag">AWS SageMaker</span>
                    <span className="tech-tag">Google Cloud AI</span>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">R</span>
                  </div>
                </div>

                <div className="sidebar-section">
                  <h4>Why Choose Us?</h4>
                  <ul className="benefits-list">
                    <li><i className="fas fa-check"></i> AI/ML specialists</li>
                                          <li><i className="fas fa-check"></i> Data science expertise</li>
                      <li><i className="fas fa-check"></i> Scalable solutions</li>
                      <li><i className="fas fa-check"></i> Continuous learning</li>
                      <li><i className="fas fa-check"></i> Business-focused approach</li>
                  </ul>
                </div>

                <div className="sidebar-section cta-section">
                  <h4>Ready to Harness AI?</h4>
                  <p>Let&apos;s build intelligent solutions that transform your business with the power of AI.</p>
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