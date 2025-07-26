import Link from 'next/link';

export default function MobileAppDevelopment() {
  return (
    <div className="service-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/#service">Services</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Mobile App Development</li>
              </ol>
            </nav>
            
            <div className="service-header">
              <h1>Mobile App Development</h1>
              <div className="service-icon">
                <i className="fa fa-android"></i>
              </div>
            </div>

            <div className="service-content">
              <div className="row">
                <div className="col-lg-8">
                  <h2>Cross-Platform Mobile Solutions</h2>
                  <p>
                    We Have Expertise In Creating Multi-Platform Mobile App Solutions For Both Android And IOS Devices. 
                    Using PhoneGap, Xamarin, And React Native, We Offer Custom Mobile App That Runs Smoothly On Multiple Platforms.
                  </p>

                  <h3>What We Offer</h3>
                  <ul>
                    <li><strong>Native iOS Development:</strong> Swift and Objective-C apps for iPhone and iPad</li>
                    <li><strong>Native Android Development:</strong> Kotlin and Java apps for Android devices</li>
                    <li><strong>Cross-Platform Development:</strong> React Native, Flutter, and Xamarin solutions</li>
                    <li><strong>Hybrid Apps:</strong> PhoneGap and Ionic for web-based mobile applications</li>
                    <li><strong>App Store Optimization:</strong> ASO strategies to improve app visibility</li>
                    <li><strong>App Maintenance:</strong> Regular updates, bug fixes, and performance optimization</li>
                  </ul>

                  <h3>Our Development Process</h3>
                  <ol>
                    <li><strong>Market Research:</strong> Understanding your target audience and competitors</li>
                    <li><strong>UI/UX Design:</strong> Creating intuitive and engaging user interfaces</li>
                    <li><strong>Development:</strong> Building robust and scalable mobile applications</li>
                    <li><strong>Testing:</strong> Comprehensive testing across multiple devices and OS versions</li>
                    <li><strong>Deployment:</strong> App store submission and approval process</li>
                    <li><strong>Post-Launch Support:</strong> Monitoring, updates, and user feedback integration</li>
                  </ol>
                </div>

                <div className="col-lg-4">
                  <div className="service-sidebar">
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
                    </div>

                    <div className="cta-section">
                      <h4>Ready to Build Your App?</h4>
                      <p>Let's create a mobile app that your users will love and that drives your business forward.</p>
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
          color: #28a745;
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
          background: #28a745;
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
          background: #28a745;
          border: none;
          padding: 12px 30px;
          border-radius: 5px;
          color: white;
          text-decoration: none;
          display: inline-block;
          margin-top: 15px;
        }
        
        .btn-primary:hover {
          background: #1e7e34;
          color: white;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
} 