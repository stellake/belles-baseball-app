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
import Carousel from "../components/carousel"
import { FONTS } from "../styles/fonts"

const testimonials = [
  {
    text:
      "‘More grateful than ever to know and love this sport- to have a women’s league, to make the final, to play in the final with such a wonderful, welcoming team...\n" +
      "Proud to be a National Champion.\n" +
      "Honoured to know the game in the first place.’",
    author: "Rose | Since 2023",
  },
  {
    text:
      "‘So I play baseball now! Been keeping that one quiet.\n" +
      "Proud to be part of a wicked team, becoming national champs in my first season!\n" +
      "Pretty cool’",
    author: "Lucy | Since 2022",
  },
  {
    text: "‘I've been learning to play Baseball since January this year with the most supportive, talented and all-round awesome group of women. I've still got a lot to learn and improve, but I've had an amazing time and can't wait to do it all again next season! National champions, baby!’",
    author: "Riz | Since 2023",
  },
  {
    text: "‘Get yourself a team that dreams like you do, pushes you to do more, and gets 1% better every day. What a season. What a team.’",
    author: "Oona | Since 2020",
  },
]

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

      <h2 css={{ paddingTop: "2rem" }}>Testimonials</h2>
      <Carousel>
        {testimonials.map(({ text, author }) => (
          <div css={{ display: "flex", flexDirection: "column" }}>
            <p css={{ ...FONTS.italic }}>{text}</p>
            <div css={{ ...FONTS.bold }}>{author}</div>
          </div>
        ))}
      </Carousel>

      <h2 css={{ paddingTop: "4rem" }}>How can you support?</h2>
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
