import React from "react"
import styled from 'styled-components'

import { HugeText } from './atoms/Text'

const Wrapper = styled.header`
text-align: center;
`

const Title = styled.h1`
margin: 0px;
padding: 4px;
`

export default function Header() {
  return (
      <Wrapper>
        <Title><HugeText>Naoya Otsuka</HugeText></Title>
      </Wrapper>
  )
}
