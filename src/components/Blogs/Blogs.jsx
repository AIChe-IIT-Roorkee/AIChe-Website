import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./blogs.css";

import Footer from "../Footer/Footer.jsx";
import BlogsDataFun from "./BlogsData.jsx";

class Blogs extends React.Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
    };
  }

  componentDidMount() {
    BlogsDataFun.then((allBlogs) => {
      this.setState({ blogs: allBlogs });
    });
  }

  render() {
    return (
      <div>
        <div id="cards_landscape_wrap-2">
          <div className="container Blogs">
            <div className="row" style={{ margin: "auto" }}>
              {this.state.blogs.map((b) => {
                return (
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div className="card-flyer">
                      <div className="text-box">
                        <div className="image-box">
                          <img src={b.thumbnail} alt="" />
                        </div>
                        <div className="text-container">
                          <h6 className="blogTitle">{b.title}</h6>
                          <p className="blogDescription">
                            {b.description}
                            <a className="readmore" href={b.link}>
                              read more
                            </a>
                          </p>
                          <p className="blogAuthor">Written By :{b.author}</p>
                          <p>Date Published :{b.pubDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;
