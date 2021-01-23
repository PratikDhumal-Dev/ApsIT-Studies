import React from "react";
import "./Footer.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";

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
                  <Link to="/subjects/fe">
                    <a href="">First Year</a>
                  </Link>
                </li>
                <li>
                  <Link to="/subjects/it">
                    <a href="">Information Technology</a>
                  </Link>
                </li>
                <li>
                  <Link to="/subjects/extc">
                    <a href="">Electronics &amp; Telecommunication</a>
                  </Link>
                </li>
                <li>
                  <Link to="/subjects/comps">
                    <a href="">Computer Science Engineering</a>
                  </Link>
                </li>
                <li>
                  <Link to="/subjects/mech">
                    <a href="">Mechanical Engineering</a>
                  </Link>
                </li>

                <li>
                  <Link to="/subjects/civil">
                    <a href="">Civil Engineering</a>
                  </Link>
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
                  <a href="mailto:pratikdhumal2002@gmail.com">Contact Us</a>
                </li>
                <li>
                  <Link to="/notes">
                    <a href="">Notes</a>
                  </Link>
                </li>
                <li>
                  <Link to="/forum">
                    <a href="">Forum</a>
                  </Link>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
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
                  <a
                    class="facebook"
                    href="https://github.com/PratikDhumal-Dev"
                  >
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a
                    class="twitter"
                    href="https://twitter.com/PratikDhumal_71?s=08"
                  >
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a
                    class="dribbble"
                    href="https://www.instagram.com/_pratik_71/?igshid=1xkj2v3nqhpau"
                  >
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a
                    class="linkedin"
                    href="https://www.linkedin.com/in/pratik-dhumal-dev"
                  >
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
