import * as React from 'react'

import { Text } from '../atoms/Text'

const Footer: React.SFC = () => (
  <footer style={{ textAlign: 'center' }}>
    <h1 style={{ margin: '0px', padding: '4px' }}>
      <Text>(C) 1988-{new Date().getFullYear()} Naoya Otsuka</Text>
    </h1>
  </footer>
)

export default Footer
