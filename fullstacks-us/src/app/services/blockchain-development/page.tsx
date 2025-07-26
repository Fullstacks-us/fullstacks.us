import Link from 'next/link';

export default function BlockchainDevelopment() {
  return (
    <div className="service-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/#service">Services</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Blockchain Development</li>
              </ol>
            </nav>
            
            <div className="service-header">
              <h1>Blockchain Development</h1>
              <div className="service-icon">
                <i className="fa fa-chain"></i>
              </div>
            </div>

            <div className="service-content">
              <div className="row">
                <div className="col-lg-8">
                  <h2>Decentralized Solutions & Smart Contracts</h2>
                  <p>
                    Our Custom Blockchain Development Services Cover Everything From Smart Contracts To Decentralized Applications (DApps). 
                    Whether You&apos;re Looking To Launch A Token, Build A Secure Wallet, Or Integrate Blockchain Into An Existing System, 
                    Our Experts Bring Deep Technical Knowledge And Hands-On Experience To Deliver Robust Solutions.
                  </p>

                  <h3>What We Offer</h3>
                  <ul>
                    <li><strong>Smart Contract Development:</strong> Ethereum, Solana, and other blockchain platforms</li>
                    <li><strong>DeFi Applications:</strong> Decentralized finance solutions and protocols</li>
                    <li><strong>NFT Development:</strong> Non-fungible token creation and marketplace development</li>
                    <li><strong>Cryptocurrency Wallets:</strong> Secure wallet applications for various cryptocurrencies</li>
                    <li><strong>Token Development:</strong> Custom token creation and ICO/STO support</li>
                    <li><strong>Blockchain Integration:</strong> Integrate blockchain into existing business systems</li>
                  </ul>

                  <h3>Our Development Process</h3>
                  <ol>
                    <li><strong>Requirements Analysis:</strong> Understanding your blockchain needs and use cases</li>
                    <li><strong>Platform Selection:</strong> Choosing the right blockchain platform for your project</li>
                    <li><strong>Architecture Design:</strong> Designing secure and scalable blockchain solutions</li>
                    <li><strong>Smart Contract Development:</strong> Writing and testing smart contracts</li>
                    <li><strong>DApp Development:</strong> Building user-friendly decentralized applications</li>
                    <li><strong>Security Auditing:</strong> Comprehensive security testing and auditing</li>
                  </ol>
                </div>

                <div className="col-lg-4">
                  <div className="service-sidebar">
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
                    </div>

                    <div className="cta-section">
                      <h4>Ready to Build on Blockchain?</h4>
                      <p>Let&apos;s create innovative blockchain solutions that transform your business.</p>
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