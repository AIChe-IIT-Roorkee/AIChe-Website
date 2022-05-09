import React from "react";
import "./Events.css";

export default class Events extends React.PureComponent {
  render() {
    return (
      <>
        <h1 className="events-title">Events</h1>
        
        <div className="body1">
          <div className="card">
            <div className="imgbox">
              <img
                className="img-mission"
                src={`../home_page_images/chem.png`}
              />
            </div>
            <div className="content">
              <h2>CHEM-E-JEOPARDY</h2>
              <p>
                AIChE IIT Roorkee Chapter bagged Gold Medal at the Student’s
                Regional conference 2020,conducted by AIChE Ahmedabad University
                Chapter for the Southern Asia Region. It is an International
                Quiz competition between Chemical Engineers that earn wings to
                the Annual Students’ Conference held at Boston, USA.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imgbox">
              <img
                className="img-mission"
                src={`../home_page_images/quiz.png`}
              />
            </div>
            <div className="content">
              <h2>CHEM-E-QUIZ</h2>
              <p>
                AIChE IITR Chapter conducted the first ever Chem-E-Quiz
                Competition, testing the theoretical knowledge of Chemical
                Engineering undergrad students from across the country.
              </p>
            </div>
          </div>
        </div>
        <div className="body2">
          <div className="card">
            <div className="imgbox">
              <img
                className="img-mission"
                src={`../home_page_images/blog.png`}
              />
            </div>
            <div className="content">
              <h2>BLOGS</h2>
              <p>
                A virtual hot off the press ideas of AIChE IITR’s students put
                together intricately in form of virtual pages and bonus visual
                representations, discussing the past major Chemical Engineering
                events as well as the latest developments in the field of
                Chemical Engineering.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imgbox">
              <img
                className="img-mission"
                src={`../home_page_images/Alumni.jpg`}
              />
            </div>
            <div className="content">
              <h2>ALUMNI TALKS</h2>
              <p>
                AIChE IITR Chapter interacted with IIT Roorkee Alumni discussing
                their IITR memories and seeking knowledge on how to succeed in
                career and life.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
