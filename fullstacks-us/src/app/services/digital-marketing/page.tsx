import Link from 'next/link';

export default function DigitalMarketing() {
  return (
    <div className="service-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/#service">Services</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Digital Marketing</li>
              </ol>
            </nav>
            
            <div className="service-header">
              <h1>Digital Marketing</h1>
              <div className="service-icon">
                <i className="fa fa-magic"></i>
              </div>
            </div>

            <div className="service-content">
              <div className="row">
                <div className="col-lg-8">
                  <h2>Strategic Digital Marketing Solutions</h2>
                  <p>
                    The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, 
                    our clients will be able to increase visibility and engage with their customers at the online platform.
                  </p>

                  <h3>What We Offer</h3>
                  <ul>
                    <li><strong>Search Engine Optimization (SEO):</strong> Improve your website's visibility in search results</li>
                    <li><strong>Pay-Per-Click (PPC):</strong> Targeted advertising campaigns on Google, Facebook, and other platforms</li>
                    <li><strong>Social Media Marketing:</strong> Build brand presence and engage with your audience</li>
                    <li><strong>Content Marketing:</strong> Create valuable content that attracts and converts customers</li>
                    <li><strong>Email Marketing:</strong> Nurture leads and maintain customer relationships</li>
                    <li><strong>Analytics & Reporting:</strong> Track performance and optimize campaigns for better results</li>
                  </ul>

                  <h3>Our Marketing Process</h3>
                  <ol>
                    <li><strong>Market Analysis:</strong> Research your industry, competitors, and target audience</li>
                    <li><strong>Strategy Development:</strong> Create a comprehensive digital marketing plan</li>
                    <li><strong>Campaign Execution:</strong> Implement multi-channel marketing campaigns</li>
                    <li><strong>Performance Monitoring:</strong> Track key metrics and campaign performance</li>
                    <li><strong>Optimization:</strong> Continuously improve campaigns based on data insights</li>
                    <li><strong>Reporting:</strong> Regular reports on campaign performance and ROI</li>
                  </ol>
                </div>

                <div className="col-lg-4">
                  <div className="service-sidebar">
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
                    </div>

                    <div className="cta-section">
                      <h4>Ready to Grow Your Business?</h4>
                      <p>Let's create a digital marketing strategy that drives real results for your business.</p>
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