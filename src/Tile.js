import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
display: flex;
justify-content: center;
align-items: center;

background-color: #efefef;
padding: 32px 0;
`

const Link = styled.a`
text-decoration: none;
`

const Square = styled.div`
width: 128px;
height: 128px;
background-color: #9f9f9f;
text-align: center;
`

const Title = styled.h1`
display: inline-block;
word-break: break-word;
background-color: inherit;
position: relative;
top: 50%;
transform: translateY(-50%);
`

const Tile = ({link, children}) => (
    <Section>
      <Link href={link}>
        <Square>
          <Title>{children}</Title>
        </Square>
      </Link>
    </Section>
)

export default Tile
