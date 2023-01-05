import React from "react";



function Footer() {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row mainFooter">
          <div className="col-lg-4 mb-5 mb-lg-0 ">
            <h3>Reach Us</h3>
            <p>
              FinTaxical
            </p>
            <p>
              #402,Bijith Tower Babusapaliya,Bangalore
              <p> PIN-560043
                +91-7204443000
                <p>
                  support@fintaxical.com
                </p>
              </p>
            </p>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0 ">
            <h3>Site Links</h3>
            <p>Home</p>
            <p>About Us</p>
            <p> Services</p>
            <p>Articles</p>
            <p>Membership

            </p>
          </div>
          <div className="col-lg-3 mb-5 mb-lg-0 ">
            <h3>Quick links</h3>
            <p>Blog</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Term & Conditions</p>
          </div>
          {/* <div className="col-md-3">
          <h3>Follow Us</h3>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;