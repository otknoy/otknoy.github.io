import React from "react"
import styled from 'styled-components'

const Wrapper = styled.header`
text-align: center;
`

const Title = styled.h1`
margin: 0px;
padding: 4px;
font-size: 24px;
`

export default function Header() {
  return (
      <Wrapper>
        <Title>Naoya Otsuka</Title>
      </Wrapper>
  )
}
