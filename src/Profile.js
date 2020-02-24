import React from 'react'
import styled from 'styled-components'

const ProfileCard = (props) => {
  const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

  const Image = styled.img`
  width: 64px;
  height: 64px;
`

  return (
      <Wrapper>
      <Image src="https://pbs.twimg.com/profile_images/538376795251146753/aNwx731b_400x400.png" />
      <ul>
      <li>{props.name}</li>
      <li>{props.email}</li>
      <li><a href={'https://github.com/' + props.github}>GitHub</a></li>
      <li><a href={'https://twitter.com/' + props.twitter}>Twitter</a></li>
      </ul>
      </Wrapper>
  )
}

const Skills = (props) => {
  const Title = styled.h1`
margin: 0px;
`

  return (
      <section>
      <Title>Skills</Title>
      <ul>
      { props.skills.map((e) => <li>{e}</li> )}
    </ul>
      </section>
  )
}

const Interests = (props) => {
  const Title = styled.h1`
margin: 0px;
`

  return (
      <section>
      <Title>Interests</Title>
      <ul>
      { props.interests.map((e) => <li>{e}</li> )}
    </ul>
      </section>
  )
}

export default function Profile() {
  const Section = styled.section`
padding: 8px;
`

  const Title = styled.h1`
margin: 0px;
`

  const profile = {
    name: 'Naoya Otsuka',
    email: 'otknoy@gmail.com',
    twitter: 'otknoy',
    github: 'otknoy',
    skills: [
      'Java, SpringBoot',
      'Node.js, express',
      'Golang, Python',
      'Docker, Kubernetes',
      'HTML, CSS, Javascript, React'
    ],
    interests: [
      'Information Retrieval',
      'Human Computer Interaction',
      'Natural Language Processing',
      'Machine Learning'
    ]
  }

  return (
      <Section>
      <Title>Profile</Title>
      <ProfileCard {...profile} />
      <Skills {...profile} />
      <Interests {...profile} />
      </Section>
  )
}
