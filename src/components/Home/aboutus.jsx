import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import "./Mission.css";

export default class Aboutus extends React.PureComponent {
  render() {
    return (
      <div className="body">
        <div className="blog-post">
          <div className="blog-post_img">
            <img src={`../home_page_images/mission.jpg`} alt="" />
          </div>
          <div className="blog-post_info">
            <h1 className="blog-post_title">Mission</h1>
            <p className="blog-post_text">
              Our mission is to inspire aspiring chemical engineers to build
              technologies that leverage green supply chains, which are
              sustainable in nature to produce safer and eco-friendly products
              that not only fulfill human needs but also promote a healthy and
              sustainable environment. Hence we work towards promoting the
              agenda of a greener and a more eco-friendly world.
            </p>
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-post_img">
            <img src={`../home_page_images/vision.jpg`} alt="" />
          </div>
          <div className="blog-post_info">
            <h1 className="blog-post_title">vision</h1>
            <p className="blog-post_text">
              <ul>
                <li>
                  {" "}
                  Our vision is to educate and empower the future generation of
                  chemical engineers, as well as engineers in other fields to
                  find better alternatives to combat global challenges.
                </li>
                <li>
                  {" "}
                  We strive for excellence in chemical engineering education and
                  related fields by staying updated and working towards becoming
                  an outstanding chapter.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
