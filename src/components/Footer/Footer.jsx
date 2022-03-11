import React from "react";
import "./Footer.css";
import socialLinks from "../../Data/social-links.js";
export default class Footer extends React.Component {
  render() {
    return (
      <footer class="footer-distributed">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Cookie"
          rel="stylesheet"
          type="text/css"
        ></link>
        <div class="footer-left">
          <img src={`../AIChE_logo.png`} id="aiche_logo" />
          <br />
          <br />

          <p class="footer-company-name">
            AIChE IITR &copy; {new Date().getFullYear()}
          </p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>Roorkee - Haridwar Highway </span>Roorkee, Uttarakhand
              247667
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+91 9116880783</p>
          </div>

          <div>
            <a href="mailto:aiche.iitr@gmail.com">
              <i class="fa fa-envelope"></i>
            </a>
            <p>
              <a className="email" href="mailto:aiche.iitr@gmail.com">
                aiche@ch.iitr.ac.in
              </a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>ABOUT</span>
            The American Institute of Chemical Engineers Chapter | IIT Roorkee
            is a student run chemical engineering professional organization.{" "}
          </p>

          <div className="footer-links social-links">
            {socialLinks.map((link) => {
              return (
                <a href={link.url} key={link.id} className="social-link">
                  {link.icon}
                </a>
              );
            })}
          </div>
        </div>
        <script
          data-cfasync="false"
          src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
        ></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script
          src="https://cdn.tutorialzine.com/misc/enhance/v2.js"
          async
        ></script>
      </footer>
    );
  }
}
