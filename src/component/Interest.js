import React from 'react'

import { SectionTitle } from './atom/Title'
import { Text } from './atom/Text'

const Interest = ({ interest }) => (
  <section>
    <SectionTitle>Interest</SectionTitle>

    <ul>
      {interest.map((e, i) => (
        <li key={i}>
          <Text>{e}</Text>
        </li>
      ))}
    </ul>
  </section>
)

export default Interest
