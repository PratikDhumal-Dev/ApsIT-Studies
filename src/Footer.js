import React from "react";
import "./Footer.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <div>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                ApsIt Studies is an initiative to help the upcoming Engineers
                with the their Problems. ApsIt Studies focuses on providing
                engineering related Solutions and Latest Updates. We started
                this site with the motive of helping our fellow classmates and
                our future batches.
              </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul class="footer-links">
                <li>
                  <a href="">First Year</a>
                </li>
                <li>
                  <a href="">Information Technology</a>
                </li>
                <li>
                  <a href="">Electronics &amp; Telecommunication</a>
                </li>
                <li>
                  <a href="">Computer Science Engineering</a>
                </li>
                <li>
                  <a href="">Mechanical Engineering</a>
                </li>
                <li>
                  <a href="">Civil Engineering</a>
                </li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">Notes</a>
                </li>
                <li>
                  <a href="">Forum</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/sitemap/">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <hr></hr>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2020 All Rights Reserved by
                <a href="#"> ApsIT Studies</a>.
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                  <a class="facebook" href="#">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a class="twitter" href="#">
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a class="dribbble" href="#">
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a class="linkedin" href="#">
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
