import React from "react"
import Link from "gatsby-plugin-transition-link/AniLink"

export default function Intent({ children, to }) {
  return (
    <Link
    paintDrip
      hex="#D4A1F7"
      length={.75}
      className="nav-link"
      to={to}
      activeStyle={{
        color: "#D4A1F7",
        textDecoration: "underline"
      }}
      style={{
        color: "#324359",
      }}
    >
      {children}
    </Link>
  )
}
