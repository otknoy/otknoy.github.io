import React from 'react'

import { SectionTitle } from '../atoms/Title'
import { Text } from '../atoms/Text'

type Props = {
  jobTitle: string
}

const Profile = ({ jobTitle }: Props) => (
  <section>
    <SectionTitle>Profile</SectionTitle>

    <div>
      <p>
        <Text>{jobTitle}</Text>
      </p>
    </div>
  </section>
)

export default Profile
