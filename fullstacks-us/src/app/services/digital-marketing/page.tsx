import Link from 'next/link';

export default function DigitalMarketing() {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="service-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-icon">
              <i className="fa fa-bullhorn"></i>
            </div>
            <h1>Digital Marketing</h1>
            <p className="hero-subtitle">
              Drive growth and engagement with strategic digital marketing solutions that connect you with your audience
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
            <li className="breadcrumb-item active" aria-current="page">Digital Marketing</li>
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
                  <h2>Strategic Digital Marketing Solutions</h2>
                  <p className="lead">
                    Our digital marketing services help businesses increase visibility, engage with customers, 
                    and drive measurable results. We create comprehensive strategies that leverage the latest 
                    digital channels and technologies to grow your business.
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
                        <h4>Search Engine Optimization (SEO)</h4>
                        <p>Improve your website&apos;s visibility in search results and drive organic traffic</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-ad"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Pay-Per-Click (PPC)</h4>
                        <p>Targeted advertising campaigns on Google, Facebook, and other platforms</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-share-alt"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Social Media Marketing</h4>
                        <p>Build brand presence and engage with your audience across social platforms</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-pencil-alt"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Content Marketing</h4>
                        <p>Create valuable content that attracts and converts customers</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-envelope"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Email Marketing</h4>
                        <p>Nurture leads and maintain customer relationships through targeted campaigns</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-chart-line"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Analytics & Reporting</h4>
                        <p>Track performance and optimize campaigns for better results</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Process Section */}
                <section className="content-section">
                  <h3>Our Marketing Process</h3>
                  <div className="process-timeline">
                    <div className="process-step">
                      <div className="process-number">1</div>
                      <div className="process-content">
                        <h4>Market Analysis</h4>
                        <p>Research your industry, competitors, and target audience to understand opportunities</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">2</div>
                      <div className="process-content">
                        <h4>Strategy Development</h4>
                        <p>Create a comprehensive digital marketing plan tailored to your business goals</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">3</div>
                      <div className="process-content">
                        <h4>Campaign Execution</h4>
                        <p>Implement multi-channel marketing campaigns across selected platforms</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">4</div>
                      <div className="process-content">
                        <h4>Performance Monitoring</h4>
                        <p>Track key metrics and campaign performance in real-time</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">5</div>
                      <div className="process-content">
                        <h4>Optimization</h4>
                        <p>Continuously improve campaigns based on data insights and performance</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">6</div>
                      <div className="process-content">
                        <h4>Reporting</h4>
                        <p>Regular reports on campaign performance, ROI, and strategic recommendations</p>
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
                  <h4>Platforms We Use</h4>
                  <div className="tech-stack">
                    <span className="tech-tag">Google Ads</span>
                    <span className="tech-tag">Facebook Ads</span>
                    <span className="tech-tag">Instagram</span>
                    <span className="tech-tag">LinkedIn</span>
                    <span className="tech-tag">Twitter</span>
                    <span className="tech-tag">YouTube</span>
                    <span className="tech-tag">Mailchimp</span>
                    <span className="tech-tag">Google Analytics</span>
                    <span className="tech-tag">HubSpot</span>
                    <span className="tech-tag">SEMrush</span>
                    <span className="tech-tag">Ahrefs</span>
                  </div>
                </div>

                <div className="sidebar-section">
                  <h4>Why Choose Us?</h4>
                  <ul className="benefits-list">
                    <li><i className="fa fa-check"></i> Data-driven strategies</li>
                    <li><i className="fa fa-check"></i> Multi-channel expertise</li>
                    <li><i className="fa fa-check"></i> Transparent reporting</li>
                    <li><i className="fa fa-check"></i> ROI-focused campaigns</li>
                    <li><i className="fa fa-check"></i> Continuous optimization</li>
                  </ul>
                </div>

                <div className="sidebar-section cta-section">
                  <h4>Ready to Grow Your Business?</h4>
                  <p>Let&apos;s create a digital marketing strategy that drives real results for your business.</p>
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