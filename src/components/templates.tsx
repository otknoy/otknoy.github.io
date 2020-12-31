import * as React from 'react'

import Header from './organisms/Header'
import Footer from './organisms/Footer'

const Template: React.SFC = ({ children }) =>  (
  <div>
    <Header />

    {children}

    <Footer />
    <style jsx>{`
      div {
        max-width: 410px;
        margin: 0 auto;
        padding: 0 8px;
      }
      `}</style>
  </div>
)

export default Template
