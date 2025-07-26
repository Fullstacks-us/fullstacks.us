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
                      <p>Let&apos;s build intelligent bots that streamline your operations and enhance customer experience.</p>
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