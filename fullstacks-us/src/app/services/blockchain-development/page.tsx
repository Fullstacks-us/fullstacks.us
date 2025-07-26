import Link from 'next/link';

export default function BlockchainDevelopment() {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="service-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-icon">
              <i className="fa fa-link"></i>
            </div>
            <h1>Blockchain Development</h1>
            <p className="hero-subtitle">
              Build secure, decentralized applications and smart contracts that transform your business with blockchain technology
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
            <li className="breadcrumb-item active" aria-current="page">Blockchain Development</li>
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
                  <h2>Decentralized Solutions & Smart Contracts</h2>
                  <p className="lead">
                    Our blockchain development services cover everything from smart contracts to decentralized applications (DApps). 
                    Whether you&apos;re looking to launch a token, build a secure wallet, or integrate blockchain into an existing system, 
                    our experts bring deep technical knowledge and hands-on experience to deliver robust solutions.
                  </p>
                </section>

                {/* Services Section */}
                <section className="content-section">
                  <h3>What We Offer</h3>
                  <div className="services-grid">
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-file-contract"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Smart Contract Development</h4>
                        <p>Ethereum, Solana, and other blockchain platforms with secure, audited contracts</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-chart-pie"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>DeFi Applications</h4>
                        <p>Decentralized finance solutions and protocols for modern financial services</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-image"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>NFT Development</h4>
                        <p>Non-fungible token creation and marketplace development</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-wallet"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Cryptocurrency Wallets</h4>
                        <p>Secure wallet applications for various cryptocurrencies</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-coins"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Token Development</h4>
                        <p>Custom token creation and ICO/STO support</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-plug"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Blockchain Integration</h4>
                        <p>Integrate blockchain into existing business systems</p>
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
                        <h4>Requirements Analysis</h4>
                        <p>Understanding your blockchain needs and use cases</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">2</div>
                      <div className="process-content">
                        <h4>Platform Selection</h4>
                        <p>Choosing the right blockchain platform for your project</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">3</div>
                      <div className="process-content">
                        <h4>Architecture Design</h4>
                        <p>Designing secure and scalable blockchain solutions</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">4</div>
                      <div className="process-content">
                        <h4>Smart Contract Development</h4>
                        <p>Writing and testing smart contracts</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">5</div>
                      <div className="process-content">
                        <h4>DApp Development</h4>
                        <p>Building user-friendly decentralized applications</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">6</div>
                      <div className="process-content">
                        <h4>Security Auditing</h4>
                        <p>Comprehensive security testing and auditing</p>
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
                    <span className="tech-tag">Ethereum</span>
                    <span className="tech-tag">Solana</span>
                    <span className="tech-tag">Solidity</span>
                    <span className="tech-tag">Web3.js</span>
                    <span className="tech-tag">Truffle</span>
                    <span className="tech-tag">Hardhat</span>
                    <span className="tech-tag">IPFS</span>
                    <span className="tech-tag">MetaMask</span>
                    <span className="tech-tag">Polygon</span>
                    <span className="tech-tag">Rust</span>
                    <span className="tech-tag">Anchor</span>
                  </div>
                </div>

                <div className="sidebar-section">
                  <h4>Why Choose Us?</h4>
                  <ul className="benefits-list">
                    <li><i className="fa fa-check"></i> Blockchain experts</li>
                    <li><i className="fa fa-check"></i> Security-first approach</li>
                    <li><i className="fa fa-check"></i> Multi-platform expertise</li>
                    <li><i className="fa fa-check"></i> Smart contract auditing</li>
                    <li><i className="fa fa-check"></i> Scalable solutions</li>
                  </ul>
                </div>

                <div className="sidebar-section cta-section">
                  <h4>Ready to Build on Blockchain?</h4>
                  <p>Let&apos;s create innovative blockchain solutions that transform your business.</p>
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