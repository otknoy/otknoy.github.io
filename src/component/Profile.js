import React from 'react'

import { SectionTitle } from './atom/Title'
import { Text, LinkText } from './atom/Text'

export default function Profile({name, description, link}) {
  return (
      <section>
        <SectionTitle>Profile</SectionTitle>

        <div>
          <p><Text>{name}</Text></p>
          <p><Text>{description}</Text></p>
        </div>

        <Links {...link}></Links>
      </section>
  )
}



const Links = ({github, twitter, blog}) => (
    <>
      <ul>
        <li><LinkText href={github}>github</LinkText></li>
        <li><LinkText href={twitter}>twitter</LinkText></li>
        <li><LinkText href={blog}>blog</LinkText></li>
      </ul>
    </>
)
 
