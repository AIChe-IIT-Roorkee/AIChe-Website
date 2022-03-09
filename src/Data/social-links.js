import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  
} from "react-icons/fa"
import {
 GrMail,   
} from "react-icons/gr"
import {
 BsMedium,   
} from "react-icons/bs"
const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/aiche.iitr/",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/company/aiche-iit-roorkee-student-s-chapter/about/",
  },
  {
    id: 3,
    icon: <GrMail className="social-icon"></GrMail>,
    url: "mailto:aiche@ch.iitr.ac.in",
  },
  {
    id: 4,
    icon: <BsMedium className="social-icon"></BsMedium>,
    url: "https://medium.com/aiche-iitr",
  },
  
]

export default data
