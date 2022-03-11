import React from "react";
import "../Team/Team.css";
import Navbar from "../Navbar/Navbar.jsx";

import Footer from "../Footer/Footer.jsx";

import Members from "./TeamData.js";

var faculty_coordinator = Members.faculty_coordinator;
var alumni = Members.alumni;

var third_year = Members.third_year;

var second_year = Members.second_year;

export default class Team extends React.Component {
  render() {
    return (
      <div className="Team">
        <Navbar active={"Team"} />

        <center>
          <h2 id="team">FACULTY COORDINATOR</h2>
          <br />
          <div class="container mt-50">
            <div class="col-md-3 col-sm-6">
              <div class="box16">
                <img src={`..${faculty_coordinator.image}`} />
                <div class="box-content">
                  <h3 class="title">{faculty_coordinator.name}</h3>
                  <span class="post">{faculty_coordinator.designation}</span>
                  <ul class="social">
                    <li>
                      <a href="https://www.linkedin.com/in/vimal-singh-3b83644/">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href={"mailto:" + faculty_coordinator.mail}>
                        <i class="fa fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 id="team">THIRD YEAR</h2>
          <br />
          <div class="container mt-40">
            <div class="row mt-30">
              {third_year.map((m, index) => {
                return (
                  <div class="col-lg-3 col-md-6 col-sm-6 ">
                    <div class="box16">
                      <img src={`..${m.image}`} />
                      <div class="box-content">
                        <h3 class="title">{m.name}</h3>
                        <span class="post">{m.designation}</span>
                        <ul class="social">
                          <li>
                            <a href={m.linkedin}>
                              <i class="fa fa-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a href={"mailto:" + m.mail}>
                              <i class="fa fa-envelope"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {index % 4 == 3 && <br />}
                  </div>
                );
              })}
            </div>
          </div>

          <h2 id="team">SECOND YEAR</h2>
          <br />
          <div class="container mt-40">
            <div class="row">
              {second_year.map((m, index) => {
                return (
                  <div class="col-md-4 col-sm-6 col-lg-3">
                    <div className="box16">
                      <img src={`..${m.image}`} />
                      <div class="box-content">
                        <h3 class="title">{m.name}</h3>
                        <span class="post">{m.designation}</span>
                        <ul class="social">
                          <li>
                            <a href={m.linkedin}>
                              <i class="fa fa-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a href={"mailto:" + m.mail}>
                              <i class="fa fa-envelope"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {index % 4 == 3 && <br />}
                  </div>
                );
              })}
            </div>
          </div>

          <h2 id="team">PREVIOUS MEMBERS</h2>
          <br />
          <div class="container mt-40">
            <div class="row mt-30">
              {alumni.map((m, index) => {
                return (
                  <div class="col-lg-3 col-md-6 col-sm-6 ">
                    <div class="box16">
                      <img src={`..${m.image}`} />
                      <div class="box-content">
                        <h3 class="title">{m.name}</h3>

                        <ul class="social">
                          <li>
                            <a href={m.linkedin}>
                              <i class="fa fa-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a href={"mailto:" + m.mail}>
                              <i class="fa fa-envelope"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {index % 4 == 3 && <br />}
                  </div>
                );
              })}
            </div>
          </div>
        </center>
      </div>
    );
  }
}
