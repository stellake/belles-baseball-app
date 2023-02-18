// import './meet-the-team.css';
import React from "react"
import Layout from "../components/shared/layout"
import Seo from "../components/shared/seo"
import { coaches2022, teamMembers2022 } from "../data/roster"
import instagram from "../images/instagram.png"
import placeholder from "../images/woman.png"

const SHOULD_SHOW_ROSTER_2022 = false

const UserCard = ({ name, description, src, ig }) => (
  <li className="user-card-item">
    <div style={{ position: "relative" }}>
      <div className="profile-image">
        <img
          width="100%"
          src={src || placeholder}
          alt={"Profile image of " + name}
        />
      </div>
      {ig && (
        <a className="instagram-image" href={ig} target="_blank">
          <img width="100%" src={instagram} alt="Instagram icon" />
        </a>
      )}
    </div>
    <div style={{ marginTop: 10, fontWeight: "bold" }}>{name}</div>
    <div style={{ fontSize: "14px" }}>{description}</div>
  </li>
)

export const MeetTheTeam = () => {
  return (
    <Layout>
      <h1>Meet The Team</h1>
      <h2>2023 Roster</h2>
      <div>Coming soon..</div>
      {SHOULD_SHOW_ROSTER_2022 && (
        <>
          <h2>2022 Roster</h2>
          <h3>Coaches</h3>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              margin: "0 0 25px",
              padding: 0,
            }}
          >
            {coaches2022.map(coach => (
              <UserCard
                name={coach.name}
                description={coach.description}
                src={coach.src}
              />
            ))}
          </ul>
          <h3>Players</h3>
          <ul
            style={{
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
        </>
      )}
    </Layout>
  )
}

export const Head = () => <Seo title="Meet the team" />

export default MeetTheTeam
