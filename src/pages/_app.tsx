import * as React from 'react'

import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import * as gtag from '../lib/gtag'

import 'normalize.css'
import './style.css'

const App: React.SFC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = url => gtag.pageview(url)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return <Component {...pageProps} />
}

export default App
