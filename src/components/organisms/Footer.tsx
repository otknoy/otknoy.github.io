import React from 'react'

import { Text } from '../atoms/Text'

import { useDateNow } from '../../hooks/date'

const Footer = () => {
  const now = useDateNow()

  return (
    <footer style={{ textAlign: 'center' }}>
      <h1 style={{ margin: '0px', padding: '4px' }}>
        <Text>(C) 1988-{now.getFullYear()} Naoya Otsuka</Text>
      </h1>
    </footer>
  )
}

export default Footer
