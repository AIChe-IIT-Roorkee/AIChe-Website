import React from "react"
import { Link } from "react-router-dom";
import socialLinks from "../../Data/social-links.js"
// import heroImg from "../assets/images/hero.svg"


const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>AIChE IITR</h1>
            <h4>Think | Innovate | Change</h4>
           <Link to="/contact" className="btn">
              contact us
            </Link>
            <div className="social-links">
              {socialLinks.map(link => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                )
              })}
            </div>
            
            
          </div>
        </article>
        {/* <img
              alt=""
              src={`../AIChE_logo.png`}
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> */}
        {/* <img src={heroImg} alt="portfolio" className="hero-img-svg" /> */}
      </section>
    </header>
  )
}

export default Hero
