import 'normalize.css'

export const metadata = {
  title: 'Naoya Otsuka',
  description: "Naoya Otsuka's profile",
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
