import React from "react"
import Layout from "../components/shared/layout"
import Seo from "../components/shared/seo"
import { teamMembers2022 } from "../data/roster"
import instagram from "../images/instagram.png"
import placeholder from "../images/woman.png"
import { FONTS } from "../styles/fonts"
import { mq } from "../styles/mediaQuery"

const UserCard = ({ name, description, src, ig }) => (
  <li css={mq({
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    textAlign: 'center',
    width: ['100px', '120px'],
    flex: 1,
  })}>
    <div css={mq({ position: "relative", width: [80, 100], height: [80, 100], margin: 'auto' })}>
      <div css={mq({
        width: [80, 100],
        height: [80, 100],
        borderRadius: '50%',
        border: '2px solid grey',
        overflow: 'hidden',
        margin: 'auto'
        })}
      >
        <img
          width="100%"
          src={src || placeholder}
          alt={"Profile image of " + name}
        />
      </div>
      {ig && (
        <a
          css={mq({
            width: [25, 30],
            height: [25, 30],
            position: 'absolute',
            bottom: 0,
            right: 0
          })}
          href={ig}
          target="_blank"
          rel="noreferrer"
        >
          <img width="100%" src={instagram} alt="Instagram icon" />
        </a>
      )}
    </div>
    <div css={{ ...FONTS.bold, fontSize: 20, marginTop: 10, lineHeight: '1.1' }}>{name}</div>
    <div css={{ ...FONTS.regular, fontSize: 16 }}>{description}</div>
  </li>
)

export default function MeetTheTeam () {
  return (
    <Layout>
      <h1>Meet The Team</h1>
      <h2>Our 2023 WBL Roster</h2>
      <ul
        css={{
          listStyle: "none",
          display: "flex",
          margin: "0 0 25px",
          padding: 0,
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {teamMembers2022.map(person => (
          <UserCard {...person} />
        ))}
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="Meet the team" />
