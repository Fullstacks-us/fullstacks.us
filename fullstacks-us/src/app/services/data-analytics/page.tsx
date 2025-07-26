import Link from 'next/link';

export default function DataAnalytics() {
  return (
    <div className="service-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/#service">Services</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Data Analytics</li>
              </ol>
            </nav>
            
            <div className="service-header">
              <h1>Data Analytics</h1>
              <div className="service-icon">
                <i className="fas fa-chart-bar"></i>
              </div>
            </div>

            <div className="service-content">
              <div className="row">
                <div className="col-lg-8">
                  <h2>Data-Driven Insights & Business Intelligence</h2>
                  <p>
                    We transform raw data into actionable insights that drive business growth and informed decision-making. 
                    Our data analytics services help you understand your customers, optimize operations, 
                    and identify new opportunities through comprehensive data analysis and visualization.
                  </p>

                  <h3>What We Offer</h3>
                  <ul>
                    <li><strong>Business Intelligence:</strong> Interactive dashboards and reporting solutions</li>
                    <li><strong>Data Warehousing:</strong> Centralized data storage and management systems</li>
                    <li><strong>Predictive Analytics:</strong> Forecasting models and trend analysis</li>
                    <li><strong>Data Visualization:</strong> Interactive charts, graphs, and visual reports</li>
                    <li><strong>Customer Analytics:</strong> Customer behavior analysis and segmentation</li>
                    <li><strong>Performance Metrics:</strong> KPI tracking and performance monitoring</li>
                  </ul>

                  <h3>Our Analytics Process</h3>
                  <ol>
                    <li><strong>Data Assessment:</strong> Evaluating data quality, sources, and availability</li>
                    <li><strong>Requirements Analysis:</strong> Understanding business objectives and KPIs</li>
                    <li><strong>Data Processing:</strong> Cleaning, transforming, and preparing data for analysis</li>
                    <li><strong>Analysis & Modeling:</strong> Applying statistical methods and creating predictive models</li>
                    <li><strong>Visualization:</strong> Creating interactive dashboards and reports</li>
                    <li><strong>Implementation:</strong> Deploying analytics solutions and training users</li>
                  </ol>
                </div>

                <div className="col-lg-4">
                  <div className="service-sidebar">
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
                    </div>

                    <div className="cta-section">
                      <h4>Ready to Unlock Your Data?</h4>
                      <p>Let&apos;s transform your data into actionable insights that drive business growth.</p>
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