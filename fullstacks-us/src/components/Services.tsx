import Image from 'next/image';

export default function Services() {
  return (
    <div className="pt-5 pb-5" style={{ backgroundColor: '#f2f2f2' }}>
      <div className="container">
        <div className="row">
          <div className="section-head col-sm-12" id="service">
            <h1>Our Services</h1>
            <p>
              We help you to build high-quality digital solutions and products as well as deliver a wide range of related professional services. We are providing world-class service to our clients.
            </p>
          </div>
          <div className="col-lg-4 col-sm-6 mt-2">
            <div className="item">
              <span className="icon feature_box_col_one">
                <i className="fa fa-laptop"></i>
              </span>
              <h6>Web App Development</h6>
              <p>
                Our Custom Web Development Services Include Both Front-End And Back-End Development. Whether It Is Enhancing An Existing App Or Architecting An Enterprise App, Our Developers Are Up For The Challenge.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-2">
            <div className="item">
              <span className="icon feature_box_col_two">
                <i className="fa fa-android"></i>
              </span>
              <h6>Mobile App Development</h6>
              <p>
                We Have Expertise In Creating Multi-Platform Mobile App Solutions For Both Android And IOS Devices. Using PhoneGap, Xamarin, And React Native, We Offer Custom Mobile App That Runs Smoothly On Multiple Platforms.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-2">
            <div className="item">
              <span className="icon feature_box_col_three">
                <i className="fa fa-magic"></i>
              </span>
              <h6>Digital Marketing</h6>
              <p>
                The digital marketing services that we provide have their own set of charms. By taking our digital marketing services, our clients will be able to increase visibility and engage with their customers at the online platform.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-2">
            <div className="item">
              <span className="icon feature_box_col_three">
                <i className="fa fa-chain"></i>
              </span>
              <h6>Blockchain Development</h6>
              <p>
                Our Custom Blockchain Development Services Cover Everything From Smart Contracts To Decentralized Applications (DApps). Whether You're Looking To Launch A Token, Build A Secure Wallet, Or Integrate Blockchain Into An Existing System, Our Experts Bring Deep Technical Knowledge And Hands-On Experience To Deliver Robust Solutions.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-2">
            <div className="item">
              <span className="icon feature_box_col_two">
                <i className="fas fa-robot"></i>
              </span>
              <h6>Bot Development</h6>
              <p>
                We Build Intelligent Bots That Automate Workflows, Enhance Customer Support, And Drive Engagement. From Chatbots And Voice Assistants To Complex Process Automation Bots, Our Developers Design, Train, And Deploy Bots That Seamlessly Integrate With Your Platforms And Deliver Real-Time Value.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-2">
            <div className="item">
              <span className="icon feature_box_col_one">
                <i className="fas fa-brain"></i>
              </span>
              <h6>Artificial Intelligence</h6>
              <p>
                Our AI Development Services Help Businesses Unlock The Power Of Data And Automation. From Predictive Analytics And Machine Learning Models To Natural Language Processing And Computer Vision, Our Team Crafts Scalable AI Solutions That Drive Intelligent Decision-Making And Business Innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 