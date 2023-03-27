import React from "react"
import { PrimaryLinkButton } from "../components/shared/button"
import Layout from "../components/shared/layout"
import Seo from "../components/shared/seo"
import { REGISTER_INTEREST_FORM } from "../data/links"
import community from '../images/community.png';
import baseballGlove from '../images/baseball-glove.png';
import exercise from '../images/exercise.png';
import checkmark from '../images/check.png'
import { mq } from "../styles/mediaQuery"
import { Link } from "../components/shared/link"
import { InformationCard } from "../components/shared/informationCard"

const ChecklistItem = ({ children }) => (
  <li css={{ display: 'flex', marginBottom: 20, alignItems: 'center' }}>
    <img src={checkmark} width={30} height={30} css={{ margin: 'auto 0' }} alt="Checkmark"/>
    <div css={{ marginLeft: 20 }}>{children}</div>
  </li>
);

const newStarterChecklist = [
  'Make sure you are in our private Facebook group',
  'Join our Whatsapp chat',
  'Accept your Teamer invite'
];

const whyJoinUs = [
  {src: community, title: 'Community', description: 'We aren’t just a team, we’re a family, and we support each other with everything. Good day? bad day? Need advice? You can bet that The Belles are there to support you.'},
  {src: baseballGlove, title: 'Learning about the game', description: 'We LOVE baseball, and we love learning from each other. Collectively we have a wealth of knowledge about baseball, and we spend time together on and off (via zoom) the field working on our game, and bonding as a team. '},
  { src: exercise, title: 'Exercise', description: 'Get stronger with us. All you need to do is strive to be 1% better, and you will see results. We are proud to have a throwing programme that is available to our players, and have strength and conditioning sessions planned throughout the year.'}
]

export default function Membership() {
  return (
    <Layout>
      <h1>Membership</h1>
      <p>Use the button below register your interest for 2023 season.</p>
      <div css={{ marginBottom: '3rem' }}>
        <PrimaryLinkButton href={REGISTER_INTEREST_FORM}>Register</PrimaryLinkButton>
      </div>
      <h2>Why join us?</h2>
      <div css={mq({ display: 'flex', flexDirection: ['column', 'row']})}>
        {whyJoinUs.map((item, index) => <InformationCard key={item.title} {...item} reverse={index % 2 === 0} last={index === whyJoinUs.length - 1} />)}
      </div>
      <h2>New starter checklist</h2>
      <ul css={{ listStyle: 'none', margin: 0 }}>
        <ChecklistItem>Register your interest using <Link href={REGISTER_INTEREST_FORM}>our online form</Link></ChecklistItem>
        {newStarterChecklist.map((item, index) => <ChecklistItem key={index}>{item}</ChecklistItem>)}
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="New members" />
