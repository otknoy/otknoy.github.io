import 'normalize.css'

import { GA_TRACKING_ID } from '../lib/gtag'

export const metadata = {
  title: 'Naoya Otsuka',
  description: "Naoya Otsuka's profile",
  viewport: {
    width: 'device-width',
    initialScale: 1
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script>
          dangerouslySetInnerHTML=
          {{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
          }}
        </script>
      </head>
      <body>{children}</body>
    </html>
  )
}
