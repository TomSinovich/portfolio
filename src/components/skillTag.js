import React from "react"
import styled from "styled-components"

const Li = styled.li`
font-size: 1rem;
float: left;
background: #eee;
border-radius: 3px 0 0 3px;
color: #737373;
display: inline-block;
height: 28px;
line-height: 26px;
padding: 0 20px 0 23px;
position: relative;
margin: 0 10px 10px 0;
text-decoration: none;
-webkit-transition: color 0.2s;
`

export default ({ skill }) => {
return (
  <Li className="tag">{skill}</Li>
)
}
