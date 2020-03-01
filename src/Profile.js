import React from 'react'
import styled from 'styled-components'

import { SmallText, MediumText, LargeText } from './atoms/Text'

const Wrapper = styled.div`
display: flex;
align-items: center;
`

const Image = styled.img`
width: 64px;
height: 64px;
`

const Title = styled.h1`
margin: 0px;
`

const Section = styled.section`
padding: 8px;
`

const ProfileCard = (props) => (
    <Wrapper>
    <Image src="https://pbs.twimg.com/profile_images/538376795251146753/aNwx731b_400x400.png" />
    <ul>
    <li><MediumText>{props.name}</MediumText></li>
    <li><MediumText>{props.email}</MediumText></li>
    <li><a href={'https://github.com/' + props.github}><MediumText>GitHub</MediumText></a></li>
    <li><a href={'https://twitter.com/' + props.twitter}><MediumText>Twitter</MediumText></a></li>
    </ul>
    </Wrapper>
)

const Skills = (props) => (
    <section>
    <Title><MediumText>Skills</MediumText></Title>
    <ul>
    { props.skills.map((e, i) => <li key={i}><MediumText>{e}</MediumText></li> )}
    </ul>
    </section>
)

const Interests = (props) => (
    <section>
    <Title><MediumText>Interests</MediumText></Title>
    <ul>
    { props.interests.map((e, i) => <li key={i}><MediumText>{e}</MediumText></li> )}
    </ul>
    </section>
)

export default function Profile(props) {
  return (
      <Section>
        <Title><LargeText>Profile</LargeText></Title>
        <ProfileCard
          name={props.name}
          email={props.email}
          github={props.github}
          twitter={props.twitter} />
        <Skills skills={props.skills} />
        <Interests interests={props.interests} />
      </Section>
  )
}
