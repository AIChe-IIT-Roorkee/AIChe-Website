import React from "react"
import Title from "../Title"
import AboutUs from "../../Assets/Images/About-us.png";
//import Seo from "../components/Seo"

const About = () => {
  
  return (
   
   
      <section className="about-page">
        <div className="section-center about-center">
          <img src={AboutUs} alt="" className="about-img-svg" />
          <article className="about-text">
          <Title title="About Us" />
            <p>AIChE is the world's leading organization for chemical engineering professionals, with more than 60,000 members from more than 110 countries.
              <br/>
AIChE IIT Roorkee Chapter is a team of 16 students who aim to promote the professional development of chemical engineering majors at IITR and to build a community among its members through social activities, career-building events, and service opportunities. Our team tries to bring the exciting aspects of chemical engineering by constantly writing blogs and delivering interesting posts through our social media handle. We also conduct events like Alumni talks, quizzes, and workshops to increase the understanding of chemical engineering among its followers. </p>
            
          </article>
        </div>
      </section>
    
  )
}



export default About
