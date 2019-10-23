import React from "react"
import { FaGithub as Github, FaYoutube as Youtube } from "react-icons/fa"
import styled from "styled-components"

function card(props) {
  const { cardTitle, cardSubtitle, link } = props

  const encodeName = cardTitle.split(" ").join("")

  console.log(encodeName)

  const ExpLabel = styled.label`
    margin-bottom: 0;
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
    &:checked ~ #${`${encodeName}-expand`} {
      height: 200px;
    }
    &:checked ~ label::before {
      content: "-";
    }
  `

  const ExpDiv = styled.div`
    max-height: 0px;
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
            <ExpInput type="checkbox" id={`${encodeName}-toggle`} />
            <ExpDiv id={`${encodeName}-expand`}>
              <section>
                <p>fuck</p>
              </section>
            </ExpDiv>

            <section className="card-footer-wrapper">
              {/* <label className="card-link" > */}
              <ExpLabel className="card-link" htmlFor={`${encodeName}-toggle`}>
                See
              </ExpLabel>
              {/* </label> */}
              <a href={link} className="card-link">
                <Github size="1.8em" />
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default card
