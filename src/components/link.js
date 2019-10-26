import React from "react"
import Link from "gatsby-plugin-transition-link/AniLink"

export default function Intent({ children, to }) {
  return (
    <Link
      paintDrip
      hex="#B34A44"
      length={0.75}
      className="nav-link"
      to={to}
      activeStyle={{
        color: "#324359",
        textDecoration: "none",
      }}
      style={{
        color: "#B34A44",
        textDecoration: "underline",
      }}
    >
      {children}
    </Link>
  )
}
