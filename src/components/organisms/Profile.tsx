import * as React from 'react'

import { SectionTitle } from '../atoms/Title'
import { Text, LinkText } from '../atoms/Text'

const Profile: React.SFC = () => (
  <section>
    <SectionTitle>Profile</SectionTitle>

    <div>
      <p>
        <Text>Naoya Otsuka</Text>
      </p>
      <p>
        <Text>web engineer, architect</Text>
      </p>
    </div>

    <ul>
      <li>
        <LinkText href="https://github.com/otknoy">github</LinkText>
      </li>
      <li>
        <LinkText href="https://twitter.com/otknoy">twitter</LinkText>
      </li>
      <li>
        <LinkText href="https://otknoy.hatenablog.com">blog</LinkText>
      </li>
    </ul>
  </section>
)

export default Profile
