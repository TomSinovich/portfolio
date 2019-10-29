import React from "react"
import Link from "gatsby-plugin-transition-link/AniLink"

export default function Intent({ children, to }) {
  return (
    <Link
      paintDrip
      hex="#9E66CC"
      length={0.75}
      className="nav-link"
      to={to}
      activeStyle={{
        color: "#324359",
        textDecoration: "none",
      }}
      style={{
        color: "#9E66CC",
        textDecoration: "underline",
      }}
    >
      {children}
    </Link>
  )
}
