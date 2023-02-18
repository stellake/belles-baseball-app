import React from "react"
import Layout from "../components/shared/layout"
import Seo from "../components/shared/seo"
import { Link } from "gatsby"
import { PrimaryButton } from "../components/shared/primaryButton"
import backgroundImage from "../images/baseball.png"
import "./main.css"

export default function Main() {
  return (
    <Layout>
      <div css={{ position: "relative", paddingTop: 20, paddingBottom: 40 }}>
        <div className="intro-section">
          <h1>Belles Baseball</h1>
          <div css={{ marginBottom: 20 }}>
            Interested in upcoming baseball and softball opportunities?
          </div>
          <div css={{ maxWidth: 200, width: "100%" }}>
            <Link to="/new-members" css={{ textDecoration: "none" }}>
              <PrimaryButton text="Join us" />
            </Link>
          </div>
        </div>
        <div className="main-background-image">
          <img src={backgroundImage} alt="Baseball player" />
        </div>
      </div>
      <h2>How can you support us?</h2>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.easyfundraising.org.uk/causes/bellesbaseball/"
          >
            Easy fundraising
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.baseballoutlet.co.uk/team-shops/belles-baseball.html"
          >
            Get our merch
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />
