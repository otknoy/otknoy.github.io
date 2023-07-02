import 'normalize.css'

export const metadata = {
  title: 'Naoya Otsuka',
  description: "Naoya Otsuka's profile"
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
