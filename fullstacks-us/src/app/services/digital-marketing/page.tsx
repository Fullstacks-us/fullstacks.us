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
          color: #17a2b8;
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
          background: #17a2b8;
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
          background: #17a2b8;
          border: none;
          padding: 12px 30px;
          border-radius: 5px;
          color: white;
          text-decoration: none;
          display: inline-block;
          margin-top: 15px;
        }
        
        .btn-primary:hover {
          background: #138496;
          color: white;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
} 