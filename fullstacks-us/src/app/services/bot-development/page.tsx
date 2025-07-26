import Link from 'next/link';

export default function BotDevelopment() {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="service-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-icon">
              <i className="fa fa-robot"></i>
            </div>
            <h1>Bot Development</h1>
            <p className="hero-subtitle">
              Create intelligent automation solutions that streamline operations and enhance customer experience
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
            <li className="breadcrumb-item active" aria-current="page">Bot Development</li>
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
                  <h2>Intelligent Automation Solutions</h2>
                  <p className="lead">
                    We build intelligent bots that automate workflows, enhance customer support, and drive engagement. 
                    From chatbots and voice assistants to complex process automation bots, our developers design, train, 
                    and deploy bots that seamlessly integrate with your platforms and deliver real-time value.
                  </p>
                </section>

                {/* Services Section */}
                <section className="content-section">
                  <h3>What We Offer</h3>
                  <div className="services-grid">
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-comments"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Chatbots</h4>
                        <p>AI-powered conversational agents for customer service and support</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-microphone"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Voice Assistants</h4>
                        <p>Voice-activated bots for hands-free interaction and automation</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-cogs"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Process Automation</h4>
                        <p>Bots that automate repetitive business tasks and workflows</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-share-alt"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Social Media Bots</h4>
                        <p>Automated social media management and engagement</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-shopping-cart"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>E-commerce Bots</h4>
                        <p>Shopping assistants and order processing automation</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-chart-bar"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Analytics Bots</h4>
                        <p>Data collection and reporting automation</p>
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
                        <h4>Use Case Analysis</h4>
                        <p>Identifying automation opportunities in your business</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">2</div>
                      <div className="process-content">
                        <h4>Bot Design</h4>
                        <p>Creating conversational flows and user experience</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">3</div>
                      <div className="process-content">
                        <h4>AI Training</h4>
                        <p>Training the bot with relevant data and responses</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">4</div>
                      <div className="process-content">
                        <h4>Integration</h4>
                        <p>Connecting the bot with your existing systems</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">5</div>
                      <div className="process-content">
                        <h4>Testing & Optimization</h4>
                        <p>Ensuring accuracy and performance</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">6</div>
                      <div className="process-content">
                        <h4>Deployment & Monitoring</h4>
                        <p>Launching and maintaining the bot</p>
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
                    <span className="tech-tag">Dialogflow</span>
                    <span className="tech-tag">Botpress</span>
                    <span className="tech-tag">Rasa</span>
                    <span className="tech-tag">Microsoft Bot Framework</span>
                    <span className="tech-tag">OpenAI GPT</span>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Webhooks</span>
                    <span className="tech-tag">API Integration</span>
                    <span className="tech-tag">NLP</span>
                    <span className="tech-tag">Machine Learning</span>
                  </div>
                </div>

                <div className="sidebar-section">
                  <h4>Why Choose Us?</h4>
                  <ul className="benefits-list">
                    <li><i className="fa fa-check"></i> AI/ML expertise</li>
                    <li><i className="fa fa-check"></i> Natural language processing</li>
                    <li><i className="fa fa-check"></i> Multi-platform integration</li>
                    <li><i className="fa fa-check"></i> Continuous learning</li>
                    <li><i className="fa fa-check"></i> Scalable solutions</li>
                  </ul>
                </div>

                <div className="sidebar-section cta-section">
                  <h4>Ready to Automate?</h4>
                  <p>Let&apos;s build intelligent bots that streamline your operations and enhance customer experience.</p>
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