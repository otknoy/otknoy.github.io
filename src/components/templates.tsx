import * as React from 'react'

import Header from './organisms/Header'
import Footer from './organisms/Footer'

const Template: React.SFC = ({ children }) =>  (
  <>
    <Header />

    {children}

    <Footer />
  </>
)

export default Template
