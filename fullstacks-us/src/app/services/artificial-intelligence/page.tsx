import Link from 'next/link';

export default function ArtificialIntelligence() {
  return (
    <div className="service-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/#service">Services</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Artificial Intelligence</li>
              </ol>
            </nav>
            
            <div className="service-header">
              <h1>Artificial Intelligence</h1>
              <div className="service-icon">
                <i className="fas fa-brain"></i>
              </div>
            </div>

            <div className="service-content">
              <div className="row">
                <div className="col-lg-8">
                  <h2>Intelligent Solutions for Modern Business</h2>
                  <p>
                    Our AI Development Services Help Businesses Unlock The Power Of Data And Automation. 
                    From Predictive Analytics And Machine Learning Models To Natural Language Processing And Computer Vision, 
                    Our Team Crafts Scalable AI Solutions That Drive Intelligent Decision-Making And Business Innovation.
                  </p>

                  <h3>What We Offer</h3>
                  <ul>
                    <li><strong>Machine Learning:</strong> Custom ML models for prediction and pattern recognition</li>
                    <li><strong>Natural Language Processing:</strong> Text analysis, sentiment analysis, and language understanding</li>
                    <li><strong>Computer Vision:</strong> Image and video analysis, object detection, and facial recognition</li>
                    <li><strong>Predictive Analytics:</strong> Data-driven insights and forecasting models</li>
                    <li><strong>Recommendation Systems:</strong> Personalized content and product recommendations</li>
                    <li><strong>AI Integration:</strong> Seamless integration of AI into existing business processes</li>
                  </ul>

                  <h3>Our AI Development Process</h3>
                  <ol>
                    <li><strong>Data Assessment:</strong> Evaluating your data quality and availability</li>
                    <li><strong>Problem Definition:</strong> Clearly defining AI objectives and success metrics</li>
                    <li><strong>Model Development:</strong> Building and training AI models with your data</li>
                    <li><strong>Testing & Validation:</strong> Ensuring model accuracy and reliability</li>
                    <li><strong>Deployment:</strong> Integrating AI solutions into your business workflow</li>
                    <li><strong>Monitoring & Optimization:</strong> Continuous improvement and performance tracking</li>
                  </ol>
                </div>

                <div className="col-lg-4">
                  <div className="service-sidebar">
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
                    </div>

                    <div className="cta-section">
                      <h4>Ready to Harness AI?</h4>
                      <p>Let&apos;s build intelligent solutions that transform your business with the power of AI.</p>
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