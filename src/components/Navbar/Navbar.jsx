import React from "react";

import "./Navbar.css";
import { Link } from "react-router-dom";

class NavigationBar extends React.Component {
  render() {
    const routes = ["Home", "Blogs", "Activities", "Team", "Contact"];

    return (
      <nav className="navbar ">
        <div className="nav-center">
          <div className="nav-header">
            {/* <a className="navbar-brand" href="/">
              <img
                alt=""
                src={`../AIChE_logo.png`}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              &nbsp;AIChE IIT Roorkee{" "}
            </a> */}
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="nav-links">
            {routes.map((r) => {
              return (
                <div>
                  {r != "Home" && (
                    <Link class="nav-link" to={"/" + r}>
                      {r}
                    </Link>
                  )}
                  {r == "Home" && (
                    <Link class="nav-link" to={"/"}>
                      {r}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <button
            type="button"
            className="toggle-btn"
            onClick={toggleSidebar}
          ></button>
        </div>
        <div className="nav-links"></div>
      </div>
    </nav>
  );
};
