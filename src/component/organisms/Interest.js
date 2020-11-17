import React from 'react'

import { SectionTitle } from '../atoms/Title'
import { Text } from '../atoms/Text'

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
