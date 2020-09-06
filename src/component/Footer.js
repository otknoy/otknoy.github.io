import React from "react"

import { MediumText } from './atoms/Text'

export default function Footer() {
  return (
    <footer style={{textAlign: 'center'}}>
      <h1 style={{margin: '0px', padding: '4px'}}><MediumText>(C) 1988-2020 Naoya Otsuka</MediumText></h1>
    </footer>
  )
}
