import React from "react"
import {
  FaGithub as Github,
  FaYoutube as Youtube,
  FaArrowsAltV,
  FaExternalLinkAlt as ExternalLink
} from "react-icons/fa"
import styled from "styled-components"
import SkillTags from "./skillTags"

function card(props) {
  const { cardTitle, cardSubtitle, link, text, skills, video, repo } = props
  const nameJoin = cardTitle.split(" ").join("")

  const ExpLabel = styled.label`
    margin-bottom: 0.2;
    display: block;
    box-sizing: border-box;
    text-align: center;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
    label::before {
    }
  `

  const ExpInput = styled.input`
    display: none;
    visibility: hidden;
    &:checked ~ #${`${nameJoin}-expand`} {
      height: 250px;
      @media (max-width: 768px) {
        height: 350px;
      }
    }
    &:checked ~ label::before {
      content: "-";
    }
  `

  const ExpDiv = styled.div`
    height: 0px;
    overflow: hidden;
    transition: height 0.5s;
  `

  return (
    <div className="col-lg-4">
      <div className="card mx-3 my-5">
        <div className="card-body" style={{ paddingBottom: 0 }}>
          <h2 className="card-title">{cardTitle}</h2>
          <p className="card-text" style={{ minHeight: "0px" }}>
            {cardSubtitle}
          </p>
          <div>
            <ExpInput type="checkbox" id={`${nameJoin}-toggle`} />
            <ExpDiv id={`${nameJoin}-expand`}>
              <section>
                <p>{text}</p>
              </section>
              <section>
                <SkillTags skills={skills}/>
              </section>
            </ExpDiv>

            <section className="card-footer-wrapper">
              <ExpLabel className="card-link" htmlFor={`${nameJoin}-toggle`}>
                <FaArrowsAltV />
              </ExpLabel>
              <div>
                {video && (
                  <a href={video} className="card-link">
                    <Youtube size="2em" />
                  </a>
                )}
                {link && <a href={link} className="card-link">
                  <ExternalLink size="2em"/>
                </a>}
                <a href={repo} className="card-link">
                  <Github size="2em" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default card
