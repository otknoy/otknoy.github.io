import React from "react"
import styled from 'styled-components'

import { MediumText } from './atoms/Text'

const Wrapper = styled.footer`
text-align: center;
margin-top: auth;
`

const Text = styled.h1`
  margin: 0px;
  padding: 4px;
`

export default function Footer() {
  return (
      <Wrapper>
        <Text><MediumText>(C) 1988-2020 Naoya Otsuka</MediumText></Text>
      </Wrapper>
  )
}
