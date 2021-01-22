import React from "react";
import "./OurTeamCard.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MyPhotoNew from "./images/MyPhotoNew.jpeg";
import kushal from "./images/kushal.jpg";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
function OurTeamCard() {
  return (
    <div className="OurTeamCard">
      <div class="container">
        <h1 class="title"></h1>
        <div class="team">
          <div class="team-img">
            <img src={MyPhotoNew} alt="Team Image" />
            <div class="team-social">
              <a class="social-tw" href="">
                <div className="ourTeam__logo">
                  <TwitterIcon />
                </div>
              </a>
              <a class="social-fb" href="">
                <FacebookIcon />
              </a>
              <a class="social-li" href="">
                <LinkedInIcon />
              </a>
              <a class="social-in" href="">
                <InstagramIcon />
              </a>
              <a class="social-yt" href="">
                <GitHubIcon />
              </a>
            </div>
          </div>
          <div class="team-content">
            <h2>Pratik Dhumal</h2>
            <h3>CEO &amp; Founder</h3>
            <p>Freelance React Web developer</p>
            <div class="team-skill">
              <div class="skill-name">
                <p>HTML</p>
                <p>90%</p>
              </div>
              <div class="progress">
                <div class="progress-bar w-90"></div>
              </div>
              <div class="skill-name">
                <p>CSS</p>
                <p>80%</p>
              </div>
              <div class="progress">
                <div class="progress-bar w-80"></div>
              </div>
              <div class="skill-name">
                <p>React</p>
                <p>80%</p>
              </div>
              <div class="progress">
                <div class="progress-bar w-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <h1 class="title"></h1>
        <div class="team">
          <div class="team-img">
            <img src={kushal} alt="Team Image" />
            <div class="team-social">
              <a class="social-tw" href="">
                <TwitterIcon />
              </a>
              <a class="social-fb" href="">
                <FacebookIcon />
              </a>
              <a class="social-li" href="">
                <LinkedInIcon />
              </a>
              <a class="social-in" href="">
                <InstagramIcon />
              </a>
              <a class="social-yt" href="">
                <GitHubIcon />
              </a>
            </div>
          </div>
          <div class="team-content">
            <h2>Kushal Todi</h2>
            <h3>Co-Founder</h3>
            <p>Content Finder</p>
            <div class="team-skill">
              <div class="skill-name">
                <p>HTML</p>
                <p>90%</p>
              </div>
              <div class="progress">
                <div class="progress-bar w-90"></div>
              </div>
              <div class="skill-name">
                <p>CSS</p>
                <p>70%</p>
              </div>
              <div class="progress">
                <div class="progress-bar w-70"></div>
              </div>
              <div class="skill-name">
                <p>React</p>
                <p>70%</p>
              </div>
              <div class="progress">
                <div class="progress-bar w-70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <h1 class="title"></h1>
        <div class="team">
          <div class="team-img">
            <img
              src="https://demo.htmlcodex.com/660/team-page-html-template/img/team-2-2.jpg"
              alt="Team Image"
            />
            <div class="team-social">
              <a class="social-tw" href="">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="social-fb" href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="social-li" href="">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-in" href="">
                <i class="fab fa-instagram"></i>
              </a>
              <a class="social-yt" href="">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div class="team-content">
            <h2>Josh Dunn</h2>
            <h3>CEO &amp; Founder</h3>
            <p>Some text goes here that describes about team member</p>
            <div class="team-skill">
              <div class="skill-name">
                <p>HTML</p>
                <p>90%</p>
              </div>
              <div class="progress">
                <div class="progress-bar w-90"></div>
              </div>
              <div class="skill-name">
                <p>CSS</p>
                <p>80%</p>
              </div>
              <div class="progress">
                <div class="progress-bar w-80"></div>
              </div>
              <div class="skill-name">
                <p>jQuery</p>
                <p>70%</p>
              </div>
              <div class="progress">
                <div class="progress-bar w-70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeamCard;
