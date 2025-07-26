import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className="pt-5 pb-5 portfolio">
      <div className="container">
        <div className="row">
          <div className="section-head-1 col-sm-12" style={{ textAlign: 'center' }}>
            <h4 style={{ marginTop: '-5rem' }} id="portfolio">
              <span>Our</span> Projects
            </h4>
            <p>
              The objective of Fullstacks US is to enable a large number of youth to take up <br />
              industry-relevant skill training that will help them<br /> in securing a better livelihood.
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <a href="https://warbot.cloud" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="item">
                <span className="icon feature_box_col_four">
                  <Image className="project-img" src="/images/warbot.jpg" alt="WarBot" width={300} height={200} />
                </span>
                <h6>WarBot</h6>
                <p>
                  <b>AI-powered battlefield simulation & strategic testing tool</b><br />
                  WarBot lets teams model high-stakes environments, simulate competitive threats, and stress-test ideas before launch. Ideal for product strategy, market readiness, or crisis prep.<br />
                </p>
              </div>
            </a>
          </div>
          
          <div className="col-lg-4 col-sm-6">
            <div className="item">
              <span className="icon feature_box_col_five">
                <Image className="project-img" src="/images/csuite.jpg" alt="C-Suite" width={300} height={200} />
              </span>
              <h6>C-Suite</h6>
              <p>
                <b>AI executive team for rapid decision-making and planning</b><br />
                C-Suite gives you access to virtual CFOs, CMOs, CTOs, and more—each specialized in guiding your org through complex decisions, growth strategy, or operational challenges.<br />
              </p>
            </div>
          </div>
          
          <div className="col-lg-4 col-sm-6">
            <a href="https://grantforge.cloud" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="item">
                <span className="icon feature_box_col_six">
                  <Image className="project-img" src="/images/grantforge.jpg" alt="Grantforge" width={300} height={200} />
                </span>
                <h6>Grantforge</h6>
                <p>
                  <b>Automated grant strategy and writing co-pilot</b><br />
                  Grantforge helps you find, qualify, and apply for grants faster—with AI-assisted writing, deadline tracking, and strategic matching to boost your win rate.<br />
                </p>
              </div>
            </a>
          </div>

          <div className="col-lg-4 col-sm-6">
            <a href="https://www.roxysmoxie.xyz" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="item">
                <span className="icon feature_box_col_one">
                  <Image className="project-img" src="/images/img1.jpg" alt="Roxysmoxie" width={300} height={200} />
                </span>
                <h6>Roxysmoxie</h6>
                <p>
                  <b>Creative digital platform & portfolio showcase</b><br />
                  A modern, responsive website showcasing creative work and digital solutions. Built with cutting-edge web technologies and optimized for performance and user experience.<br />
                </p>
              </div>
            </a>
          </div>

          <div className="col-lg-4 col-sm-6">
            <a href="https://salvatoretrust.ink" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="item">
                <span className="icon feature_box_col_two">
                  <Image className="project-img" src="/images/img2.jpg" alt="Sweet Tease Bakery Boutique" width={300} height={200} />
                </span>
                <h6>Sweet Tease Bakery Boutique</h6>
                <p>
                  <b>Artisanal bakery & boutique website design</b><br />
                  A beautiful, customer-focused website for a premium bakery business. Features online ordering, product showcases, and an elegant design that reflects the quality and craftsmanship of the brand.<br />
                </p>
              </div>
            </a>
          </div>

          <div className="col-lg-4 col-sm-6">
            <a href="https://kmelody.live" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="item">
                <span className="icon feature_box_col_three">
                  <Image className="project-img" src="/images/img3.jpg" alt="K Melody Live" width={300} height={200} />
                </span>
                <h6>K Melody Live</h6>
                <p>
                  <b>Music platform with VR world exploration</b><br />
                  An innovative music platform that combines traditional music services with cutting-edge VR technology. Features include portfolio showcases, product collections, and immersive virtual reality experiences for music enthusiasts.<br />
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 