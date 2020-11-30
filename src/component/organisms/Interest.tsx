import * as React from 'react'

import { SectionTitle } from '../atoms/Title'
import { Text } from '../atoms/Text'

const interest: Array<string> = [
  'Java, Kotlin, SpringBoot',
  'Python, Node.js, Go',
  'Docker, Kubernetes',
  'Microservices, Test-driven Development',
  'Information Retrieval',
  'Human Computer Interaction',
]

const Interest: React.FC = () => (
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
