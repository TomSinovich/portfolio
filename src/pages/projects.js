import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import { graphql } from "gatsby"
import Card from "../components/card"
import { Helmet } from "react-helmet"

function Projects({ data }) {
  const projectList = data.allProjectsYaml.edges

  return (
    <div>
      <div className="container-fluid">
        <Appbar />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Projects | Tom Sinovich</title>
        </Helmet>
        <div className="row">
          {projectList.map(({ node }) => {
            return (
              <Card
                cardTitle={node.title}
                cardSubtitle={node.subtitle}
                link={node.link}
                key={node.id}
                text={node.text}
                skills={node.skills}
                video={node.video}
                repo={node.repo}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects

export const query = graphql`
  {
    allProjectsYaml {
      edges {
        node {
          title
          subtitle
          repo
          link
          id
          date
          text
          skills
          video
        }
      }
    }
  }
`
