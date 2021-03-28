import * as React from 'react'

import { SectionTitle } from '../atoms/Title'
import { Text } from '../atoms/Text'

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
  </section>
)

export default Profile
