import React from 'react'

import { SectionTitle } from '../atoms/Title'
import { Text } from '../atoms/Text'

const skills: string[] = [
  'Java, Kotlin, SpringBoot',
  'Go, Python',
  'Docker, Kubernetes, Microservices',
  'Solr',
  'Information Retrieval',
  'Human Computer Interaction',
  'Exploratory Search',
]

const Skills: React.FC = () => (
  <section>
    <SectionTitle>Skills</SectionTitle>

    <ul>
      {skills.map((e, i) => (
        <li key={i}>
          <Text>{e}</Text>
        </li>
      ))}
    </ul>
  </section>
)

export default Skills
