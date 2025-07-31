export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>About Us</h4>
              <ul>
                <li><i className="ion-ios-arrow-forward"></i> <a href="#">Home</a></li>
                <li><i className="ion-ios-arrow-forward"></i> <a href="#about">About us</a></li>
                <li><i className="ion-ios-arrow-forward"></i> <a href="#service">Our services</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="ion-ios-arrow-forward"></i> <a href="#portfolio">Portfolio</a></li>
                <li><i className="ion-ios-arrow-forward"></i> <a href="#team">Team</a></li>
                <li><i className="ion-ios-arrow-forward"></i> <a href="#contact">Contact</a></li>
                <li><i className="ion-ios-arrow-forward"></i> <a href="#faq">FAQ</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                3 Germay Dr,<br />
                unit 4#2629<br />
                Wilmington, DE 19804<br />
                United States <br />
                <strong>Phone:</strong> (443) 390-7503<br />
                <strong>Email:</strong> Info@Fullstacks.us<br />
              </p>

              <div className="social-links">
                <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                <a href="https://twitter.com/login?lang=en"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
                <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                <a href="https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin"><i className="fab fa-google"></i></a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>Subscription</h4>
              <p>With Our Skills Put Together, You Get An Ensemble Capable Of Doing Anything And Everything Your Brand Needs. Subscribe Here To Get Our Latest Updates.</p>
              <form action="" method="post" className="flex">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 copyright" style={{ color: '#fff', fontSize: '1.3rem' }}>
            Copyright &copy; 2021 IT Company Website. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
} 