import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
display: flex;
justify-content: center;
align-items: center;

width: auto;
height: 192px;
background-color: #efefef;
`

const Title = styled.h1`
width: 128px;
line-height: 128px;

text-align: center;
background-color: #9f9f9f;
`

const Link = styled.a`
display: inline-block;
width: 100%;
text-decoration: none;
background-color: inherit;
`

const Tile = ({link, children}) => (
    <Section>
      <Title>
        <Link href={link}>
          {children}
        </Link>
      </Title>
    </Section>
)

export default Tile
