import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { COLOURS } from "../../../styles/colours"
import { mq } from "../../../styles/mediaQuery"

const navItemStyle = active =>
  mq({
    padding: "5px 10px",
    borderWidth: 4,
    borderBottomStyle: ["none", "solid"],
    borderLeftStyle: ["solid", "none"],
    borderColor: active ? COLOURS.hotPink : "transparent",
  })

export const NavItem = ({ to, title, onClick }) => {
  const currentPath = useLocation().pathname
  return (
    <li css={navItemStyle(currentPath === to)}>
      <Link
        to={to}
        onClick={onClick}
        css={{ textDecoration: "none", color: "black" }}
      >
        {title}
      </Link>
    </li>
  )
}
