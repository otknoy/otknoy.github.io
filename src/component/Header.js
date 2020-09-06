import React from "react"

import { HugeText } from './atoms/Text'

export default function Header() {
  return (
    <header style={{textAlign: 'center'}}>
      <h1 style={{margin: '0px', padding: '4px'}}><HugeText>Naoya Otsuka</HugeText></h1>
    </header>
  )
}
