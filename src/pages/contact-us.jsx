import React from "react"
import Layout from "../components/shared/layout"
import Seo from "../components/shared/seo"
import { SOCIAL_MEDIA } from "../data/links"
import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import baseball from "../images/baseball.png"
import { Link } from "../components/shared/link"
import { mq } from "../styles/mediaQuery"

const SocialMediaLink = ({ src, href, title }) => (
  <li css={{ display: "flex", alignItems: "center" }}>
    <img
      css={{ marginRight: 10, marginBottom: 0 }}
      width={20}
      height={20}
      src={src}
      alt={`${title} icon`}
    />
    <Link href={href}>{title}</Link>
  </li>
)

const socialMediaData = [
  { src: instagram, href: SOCIAL_MEDIA.instagram, title: "Instagram" },
  { src: facebook, href: SOCIAL_MEDIA.facebook, title: "Facebook" },
  { src: twitter, href: SOCIAL_MEDIA.twitter, title: "Twitter" },
]

export default function ContactUs() {
  return (
    <Layout>
      <h1>Contact us</h1>
      <p>
        Best way to contact us is to either drop us an email on{" "}
        <Link href="mailto:BellesBaseball@gmail.com">
          bellesbaseball@gmail.com
        </Link>{" "}
        or message us on social media:
      </p>
      <ul css={{ listStyle: "none", margin: 0 }}>
        {socialMediaData.map(item => (
          <SocialMediaLink key={item.title} {...item} />
        ))}
      </ul>
      <img
        css={mq({ width: [250, 400], float: "right", marginTop: "-50px" })}
        src={baseball}
        alt="Baseballer"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Contact us" />
