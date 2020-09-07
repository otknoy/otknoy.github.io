import React from 'react'

import { SectionTitle } from './atoms/Title'
import { MediumText } from './atoms/Text'

export default function Profile({name, description, link}) {
  return (
      <section>
        <SectionTitle>Profile</SectionTitle>

        <div>
          <p><MediumText>{name}</MediumText></p>
          <p><MediumText>{description}</MediumText></p>
        </div>

        <Links {...link}></Links>
      </section>
  )
}

const LinkText = ({href, children}) => <a href={href}><MediumText>{children}</MediumText></a>

const Links = ({github, twitter, blog}) => (
    <>
      <ul>
        <li><LinkText href={github}>github</LinkText></li>
        <li><LinkText href={twitter}>twitter</LinkText></li>
        <li><LinkText href={blog}>blog</LinkText></li>
      </ul>
    </>
)
 
