import React from "react";

import Hero from "./Hero.js";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import Team from "../Team/Team.jsx";
export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="Home">
        <Hero />
      </div>
    );
  }
}
