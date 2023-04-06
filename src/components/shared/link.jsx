import React from "react"
import { COLOURS } from "../../styles/colours"
import { FONTS } from "../../styles/fonts"
import { Link as GatsbyLink } from "gatsby"

export const Link = ({ href, children }) => (
  <a
    css={{
      ...FONTS.semiBold,
      textDecoration: "underline",
      fontWeight: "bold",
      color: COLOURS.hotPink,
      fontSize: "16px",
    }}
    target="_blank"
    rel="noreferrer"
    href={href}
  >
    {children}
  </a>
)

export const InternalLink = ({ to, children }) => (
  <GatsbyLink
    css={{
      ...FONTS.semiBold,
      textDecoration: "underline",
      fontWeight: "bold",
      color: COLOURS.hotPink,
      fontSize: "16px",
    }}
    to={to}
  >
    {children}
  </GatsbyLink>
)
