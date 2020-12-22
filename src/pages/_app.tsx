import * as React from 'react'

import { AppProps } from 'next/app'

import 'normalize.css'
import './style.css'

const App: React.SFC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default App
