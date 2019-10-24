import React from "react"
import {
  FaGithub as Github,
  FaInstagram as Insta,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default () => {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#D4A1F7" }}>
        <span style={{ color: "#324359" }}>Hey, I'm</span> <br />
        Tom.
      </div>
      <div className="h1 code mt-4 mb-3">{"<>"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        Savvy Full Stack Engineer
        <br />
        and a
        <br />
        <div className="slider">
          <div className="caption">
            <div className="text-box">
              <div>Advocate for Social Justice </div>
              <div>Cat Dad</div>
              <div>Piano Student</div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="h1 code mt-2 mb-3">{"</>"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://github.com/tomsinovich">
          <Github />
        </a>
        <a className="mr-5 icon" href="https://www.instagram.com/tomspinach/">
          <Insta />
        </a>
        <a className="mr-5 icon" href="mailto:tomsinovich@gmail.com">
          <Mail />
        </a>
      </div>
    </div>
  )
}
