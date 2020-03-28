import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Tile from './Tile'
import Footer from './Footer'

const Container = styled.div`
display: flex;
flex-direction: column;
padding: 8px;
`

const Page = () => (
    <>
      <Header />
    
      <Container>
        <Tile href="https://twitter.com/otknoy">twitter</Tile>
        <Tile href="https://github.com/otknoy/">github</Tile>
        <Tile href="https://otknoy.hatenablog.com/">blog</Tile>
      </Container>

      <Footer />
    </>
)

export default Page
