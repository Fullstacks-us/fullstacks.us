import Link from 'next/link';

export default function DataAnalytics() {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="service-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-icon">
              <i className="fa fa-chart-bar"></i>
            </div>
            <h1>Data Analytics</h1>
            <p className="hero-subtitle">
              Transform raw data into actionable insights that drive business growth and informed decision-making
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
            <li className="breadcrumb-item active" aria-current="page">Data Analytics</li>
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
                  <h2>Data-Driven Insights & Business Intelligence</h2>
                  <p className="lead">
                    We transform raw data into actionable insights that drive business growth and informed decision-making. 
                    Our data analytics services help you understand your customers, optimize operations, and identify 
                    new opportunities through comprehensive data analysis and visualization.
                  </p>
                </section>

                {/* Services Section */}
                <section className="content-section">
                  <h3>What We Offer</h3>
                  <div className="services-grid">
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-tachometer-alt"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Business Intelligence</h4>
                        <p>Interactive dashboards and reporting solutions</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-database"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Data Warehousing</h4>
                        <p>Centralized data storage and management systems</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-chart-line"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Predictive Analytics</h4>
                        <p>Forecasting models and trend analysis</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-chart-pie"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Data Visualization</h4>
                        <p>Interactive charts, graphs, and visual reports</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-users"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Customer Analytics</h4>
                        <p>Customer behavior analysis and segmentation</p>
                      </div>
                    </div>
                    
                    <div className="service-item">
                      <div className="service-item-icon">
                        <i className="fa fa-bullseye"></i>
                      </div>
                      <div className="service-item-content">
                        <h4>Performance Metrics</h4>
                        <p>KPI tracking and performance monitoring</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Process Section */}
                <section className="content-section">
                  <h3>Our Analytics Process</h3>
                  <div className="process-timeline">
                    <div className="process-step">
                      <div className="process-number">1</div>
                      <div className="process-content">
                        <h4>Data Assessment</h4>
                        <p>Evaluating data quality, sources, and availability</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">2</div>
                      <div className="process-content">
                        <h4>Requirements Analysis</h4>
                        <p>Understanding business objectives and KPIs</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">3</div>
                      <div className="process-content">
                        <h4>Data Processing</h4>
                        <p>Cleaning, transforming, and preparing data for analysis</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">4</div>
                      <div className="process-content">
                        <h4>Analysis & Modeling</h4>
                        <p>Applying statistical methods and creating predictive models</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">5</div>
                      <div className="process-content">
                        <h4>Visualization</h4>
                        <p>Creating interactive dashboards and reports</p>
                      </div>
                    </div>
                    
                    <div className="process-step">
                      <div className="process-number">6</div>
                      <div className="process-content">
                        <h4>Implementation</h4>
                        <p>Deploying analytics solutions and training users</p>
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
                  <h4>Analytics Tools We Use</h4>
                  <div className="tech-stack">
                    <span className="tech-tag">Tableau</span>
                    <span className="tech-tag">Power BI</span>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">R</span>
                    <span className="tech-tag">SQL</span>
                    <span className="tech-tag">Apache Spark</span>
                    <span className="tech-tag">Hadoop</span>
                    <span className="tech-tag">Google Analytics</span>
                    <span className="tech-tag">Snowflake</span>
                    <span className="tech-tag">Looker</span>
                    <span className="tech-tag">Qlik</span>
                  </div>
                </div>

                <div className="sidebar-section">
                  <h4>Why Choose Us?</h4>
                  <ul className="benefits-list">
                    <li><i className="fa fa-check"></i> Data science experts</li>
                    <li><i className="fa fa-check"></i> Business intelligence</li>
                    <li><i className="fa fa-check"></i> Real-time insights</li>
                    <li><i className="fa fa-check"></i> Scalable solutions</li>
                    <li><i className="fa fa-check"></i> Actionable recommendations</li>
                  </ul>
                </div>

                <div className="sidebar-section cta-section">
                  <h4>Ready to Unlock Your Data?</h4>
                  <p>Let&apos;s transform your data into actionable insights that drive business growth.</p>
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