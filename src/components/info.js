import React from "react"
import {
  FaGithub as Github,
  FaInstagram as Insta,
  FaEnvelope as Mail,
  FaLinkedin as LinkedIn,
  FaFileDownload as FileDownload,
} from "react-icons/fa"

export default () => {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-4" style={{ color: "#9E66CC" }}>
        <span style={{ color: "#324359" }}>Hey, I'm</span> <br />
        Tom
        <br /> Sinovich.
      </div>
      <div className="h1 code mt-4 mb-3">{"<>"}</div>
      <div className="text-muted mx-5 my-4 h3 info">
        Savvy Full Stack Engineer
        <br />
        <div className="hide-mobile">
          and
          <br />
          <div className="slider">
            <div className="caption">
              <div className="text-box">
                <div>Advocate for Social Justice </div>
                <div>Cat Dad</div>
                <div>Kombucha Brewer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="h1 code mt-2 mb-3">{"</>"}</div>
      <div className="h1 mt-5 icon-wrapper">
        <a
          className="mr-5 icon"
          href="../../content/Tom_Sinovich_Resume.pdf"
          download
        >
          <FileDownload />
        </a>
        <a
          className="mr-5 icon"
          href="https://github.com/tomsinovich"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          className="mr-5 icon"
          href="https://www.instagram.com/tomspinach/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Insta />
        </a>
        <a
          className="mr-5 icon"
          href="mailto:tomsinovich@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
        </a>
        <a
          className="mr-5 icon"
          href="https://www.linkedin.com/in/tom-sinovich-25b4a3112/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
      </div>
    </div>
  )
}
