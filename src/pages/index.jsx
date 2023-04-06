import React from "react"
import Layout from "../components/shared/layout"
import Seo from "../components/shared/seo"
import { EASY_FUNDRAISING, MERCH } from "../data/links"
import { InformationCard } from "../components/shared/informationCard"
import { InternalPrimaryLinkButton } from "../components/shared/button"
import { mq } from "../styles/mediaQuery"
import money from "../images/money.png"
import heart from "../images/heart.png"
import happyBox from "../images/happyBox.png"
import homePageImg from "../images/homePage.png"

const howCanYouSupport = [
  {
    src: money,
    title: "Easy fundraising",
    description: "Support our club without paying anything extra",
    link: {
      href: EASY_FUNDRAISING,
      text: "Join Easy fundraising",
    },
  },
  {
    src: happyBox,
    title: "Get our merch",
    description: "Wear our merch when supporting us on game days",
    link: {
      href: MERCH,
      text: "Buy merch",
    },
  },
  {
    src: heart,
    title: "Follow us",
    description: "Give us a like and a follow on social media.",
    link: {
      to: "/contact-us/",
      text: "Get details",
    },
  },
]

export default function Main() {
  return (
    <Layout>
      <div
        css={mq({
          display: "flex",
          flexDirection: ["column", "row"],
          marginBottom: ["2rem", 0],
        })}
      >
        <div>
          <h1>Belles Baseball</h1>
          <div css={{ marginBottom: 20 }}>
            Interested in upcoming baseball and softball opportunities?
          </div>
          <div css={{ marginBottom: "3rem" }}>
            <InternalPrimaryLinkButton
              to="/membership"
              css={{ textDecoration: "none" }}
            >
              Learn more
            </InternalPrimaryLinkButton>
          </div>
        </div>
        <div css={{ maxWidth: 400, margin: "auto" }}>
          <img width="100%" src={homePageImg} alt="Photos of Belles" />
        </div>
      </div>
      <h2>How can you support?</h2>
      <div css={mq({ display: "flex", flexDirection: ["column", "row"] })}>
        {howCanYouSupport.map((item, index) => (
          <InformationCard
            key={item.title}
            {...item}
            reverse={index % 2 === 1}
            last={index === howCanYouSupport.length - 1}
          />
        ))}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />
