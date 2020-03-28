import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Tile from './Tile'
import Footer from './Footer'

const Container = styled.div`
display: flex;
flex-direction: column;
`

const Page = () => (
    <>
      <Header />
    
      <Container>
        <Tile link="https://twitter.com/otknoy">twitter</Tile>
        <Tile link="https://github.com/otknoy/">github</Tile>
        <Tile link="https://otknoy.hatenablog.com/">blog</Tile>
      </Container>

      <Footer />
    </>
)

export default Page
