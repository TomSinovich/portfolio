import React from "react"
import styled from "styled-components"
import SkillTag from "./skillTag"

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
`
export default ({ skills }) => {
  return (
    <Ul>
      {skills.map(skill => (
        <SkillTag key={skill} skill={skill} />
      ))}
    </Ul>
  )
}
