import Link from 'next/link';

export default function MobileAppDevelopment() {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="service-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-icon">
              <i className="fa fa-mobile"></i>
            </div>
            <h1>Mobile App Development</h1>
            <p className="hero-subtitle">
              Create powerful, user-friendly mobile applications that work seamlessly across all devices and platforms
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
            <li className="breadcrumb-item active" aria-current="page">Mobile App Development</li>
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
                  <h2>Cross-Platform Mobile Solutions</h2>
                  <p className="lead">
                    We specialize in creating innovative mobile applications that deliver exceptional user experiences 
                    across iOS, Android, and cross-platform devices. From concept to deployment, we build apps that 
                    users love and businesses rely on.
                  </p>
                </section>

                {/* Services Section */}
                <section className="content-section">
                  <h3>What We Offer</h3>
                  <div className="services-grid">
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fab fa-apple"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Native iOS Development</h4>
                        <p>Swift and Objective-C apps for iPhone and iPad with native performance</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fab fa-android"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Native Android Development</h4>
                        <p>Kotlin and Java apps for Android devices with Material Design</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-mobile"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Cross-Platform Development</h4>
                        <p>React Native, Flutter, and Xamarin for multi-platform solutions</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-globe"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Hybrid Apps</h4>
                        <p>PhoneGap and Ionic for web-based mobile applications</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-search"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>App Store Optimization</h4>
                        <p>ASO strategies to improve app visibility and downloads</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fas fa-cog"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>App Maintenance</h4>
                        <p>Regular updates, bug fixes, and performance optimization</p>
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
                        <h4>Market Research</h4>
                        <p>Understanding your target audience, competitors, and market opportunities</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">2</div>
                      <div className="process-content">
                        <h4>UI/UX Design</h4>
                        <p>Creating intuitive and engaging user interfaces with modern design principles</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">3</div>
                      <div className="process-content">
                        <h4>Development</h4>
                        <p>Building robust and scalable mobile applications with clean, maintainable code</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">4</div>
                      <div className="process-content">
                        <h4>Testing</h4>
                        <p>Comprehensive testing across multiple devices, OS versions, and scenarios</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">5</div>
                      <div className="process-content">
                        <h4>Deployment</h4>
                        <p>App store submission, approval process, and launch strategy</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">6</div>
                      <div className="process-content">
                        <h4>Post-Launch Support</h4>
                        <p>Monitoring, updates, user feedback integration, and continuous improvement</p>
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
                    <span className="tech-tag">React Native</span>
                    <span className="tech-tag">Flutter</span>
                    <span className="tech-tag">Xamarin</span>
                    <span className="tech-tag">Swift</span>
                    <span className="tech-tag">Kotlin</span>
                    <span className="tech-tag">Ionic</span>
                    <span className="tech-tag">PhoneGap</span>
                    <span className="tech-tag">Firebase</span>
                    <span className="tech-tag">AWS Mobile</span>
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">Redux</span>
                  </div>
                </div>

                <div className="sidebar-section">
                  <h4>Why Choose Us?</h4>
                  <ul className="benefits-list">
                    <li><i className="fa fa-check"></i> Experienced mobile developers</li>
                    <li><i className="fa fa-check"></i> Cross-platform expertise</li>
                    <li><i className="fa fa-check"></i> App store optimization</li>
                    <li><i className="fa fa-check"></i> 24/7 support</li>
                    <li><i className="fa fa-check"></i> Competitive pricing</li>
                  </ul>
                </div>

                <div className="sidebar-section cta-section">
                  <h4>Ready to Build Your App?</h4>
                  <p>Let&apos;s create a mobile app that your users will love and that drives your business forward.</p>
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