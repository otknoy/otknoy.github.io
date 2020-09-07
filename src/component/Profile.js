import React from 'react'

import { SectionTitle } from './atoms/Title'

export default function Profile({name, description, link}) {
  return (
      <section>
        <SectionTitle>Profile</SectionTitle>

        <div>
          <p>{name}</p>
          <p>{description}</p>
        </div>

        <Links {...link}></Links>
      </section>
  )
}

const Links = ({github, twitter, blog}) => (
    <>
      <ul>
        <li><a href={github}>github</a></li>
        <li><a href={twitter}>twitter</a></li>
        <li><a href={blog}>blog</a></li>
      </ul>
    </>
)
 
