import Link from 'next/link';

export default function BotDevelopment() {
  return (
    <div className="service-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/#service">Services</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Bot Development</li>
              </ol>
            </nav>
            
            <div className="service-header">
              <h1>Bot Development</h1>
              <div className="service-icon">
                <i className="fas fa-robot"></i>
              </div>
            </div>

            <div className="service-content">
              <div className="row">
                <div className="col-lg-8">
                  <h2>Intelligent Automation Solutions</h2>
                  <p>
                    We Build Intelligent Bots That Automate Workflows, Enhance Customer Support, And Drive Engagement. 
                    From Chatbots And Voice Assistants To Complex Process Automation Bots, Our Developers Design, Train, 
                    And Deploy Bots That Seamlessly Integrate With Your Platforms And Deliver Real-Time Value.
                  </p>

                  <h3>What We Offer</h3>
                  <ul>
                    <li><strong>Chatbots:</strong> AI-powered conversational agents for customer service</li>
                    <li><strong>Voice Assistants:</strong> Voice-activated bots for hands-free interaction</li>
                    <li><strong>Process Automation:</strong> Bots that automate repetitive business tasks</li>
                    <li><strong>Social Media Bots:</strong> Automated social media management and engagement</li>
                    <li><strong>E-commerce Bots:</strong> Shopping assistants and order processing automation</li>
                    <li><strong>Analytics Bots:</strong> Data collection and reporting automation</li>
                  </ul>

                  <h3>Our Development Process</h3>
                  <ol>
                    <li><strong>Use Case Analysis:</strong> Identifying automation opportunities in your business</li>
                    <li><strong>Bot Design:</strong> Creating conversational flows and user experience</li>
                    <li><strong>AI Training:</strong> Training the bot with relevant data and responses</li>
                    <li><strong>Integration:</strong> Connecting the bot with your existing systems</li>
                    <li><strong>Testing & Optimization:</strong> Ensuring accuracy and performance</li>
                    <li><strong>Deployment & Monitoring:</strong> Launching and maintaining the bot</li>
                  </ol>
                </div>

                <div className="col-lg-4">
                  <div className="service-sidebar">
                    <h4>Technologies We Use</h4>
                    <div className="tech-stack">
                      <span className="tech-tag">Dialogflow</span>
                      <span className="tech-tag">Botpress</span>
                      <span className="tech-tag">Rasa</span>
                      <span className="tech-tag">Microsoft Bot Framework</span>
                      <span className="tech-tag">OpenAI GPT</span>
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">Node.js</span>
                      <span className="tech-tag">Webhooks</span>
                      <span className="tech-tag">API Integration</span>
                    </div>

                    <div className="cta-section">
                      <h4>Ready to Automate?</h4>
                      <p>Let's build intelligent bots that streamline your operations and enhance customer experience.</p>
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
          color: #fd7e14;
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
          background: #fd7e14;
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
          background: #fd7e14;
          border: none;
          padding: 12px 30px;
          border-radius: 5px;
          color: white;
          text-decoration: none;
          display: inline-block;
          margin-top: 15px;
        }
        
        .btn-primary:hover {
          background: #e8690b;
          color: white;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
} 