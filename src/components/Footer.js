import React from "react";

import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIcon } from 'react-social-icons';
import { faCoffee, faFacebook, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return (
    <div class="footer">
      <div class="container">
        <div class="row">
        <div class="col-lg-3 col-sm-3 col-xs-12">
            <div class="single_footer">
              <h4>Reach Us</h4>
              <p>
                FinTaxical
              </p>
              <p>
                #402,Bijith Tower Babusapaliya
                <p>Bangalore</p>
                <p> PIN-560043
                  +91-7204443000
                  <p>
                    support@fintaxical.com
                  </p>
                </p>
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-3 col-xs-12">
            <div class="single_footer">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Service One</a></li>
                <li><a href="#">Service Two</a></li>
                <li><a href="#">Service Three</a></li>
                <li><a href="#">Service Four</a></li>
                <li><a href="#">Service Five</a></li>
              </ul>
            </div>
          </div>
        
          <div class="col-md-3 col-sm-3 col-xs-12">
            <div class="single_footer single_footer_address">
              <h4>Page Link</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services </a></li>
                <li><a href="#">Articles</a></li>
                <li><a href="#">Membership</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-sm-3 col-xs-12">
            <div class="single_footer single_footer_address">
              <h4>Subscribe today</h4>
              <div class="signup_form">
                <form action="#" class="subscribe">
                  <input type="text" class="subscribe__input" placeholder="Enter Email Address" />
                  <button type="button" class="subscribe__btn"><i class="fas fa-paper-plane"></i></button>
                </form>
              </div>
            </div>
            <div class="social_profile">
              <ul>
                <li><a href="#"><SocialIcon url="https://twitter.com/" /></a></li>
                <li><a href="#"><i class="fab fa-twitter"><SocialIcon url="https://www.instagram.com/" /></i></a></li>
                <li><a href="#"><SocialIcon url="https://www.facebook.com/" /></a></li>
                <li><a href="#"><SocialIcon url="https://gmail.com/" /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12 col-sm-12 col-xs-12">
            <p class="copyright">Copyright © 2023 <a href="#">Fintaxcial</a>.</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Footer;