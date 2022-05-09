import React from "react";

import socialLinks from "../../Data/social-links.js";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="footer-inner">
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Roorkee - Haridwar Highway </span>Roorkee, Uttarakhand
              247667
            </p>
          </div>

          <div className="footer-inner">
            <div>
              Mail us at:
              <p>
                <a className="email" href="mailto:aiche.iitr@gmail.com">
                  aiche.iitr@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="footer-inner">
            Follow Us On:
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
        </div>
        <div className="horizontal-rule"></div>
      </div>
    );
  }
}
