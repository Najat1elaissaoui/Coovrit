import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Best IPTV Service | Watch Live TV Anytime',
  description: 'Enjoy high-quality IPTV streaming with affordable plans. Watch live TV, movies, and sports anytime, anywhere.',
  keywords: ['IPTV', 'live TV', 'streaming service', 'premium IPTV plans'],
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Best IPTV Service | Watch Live TV Anytime</title>
        <meta name="description" content="Enjoy high-quality IPTV streaming with affordable plans. Watch live TV, movies, and sports anytime, anywhere." />
        <meta name="keywords" content="IPTV, live TV, streaming service, premium IPTV plans" />
      </head>
      <body>{children}</body>
    </html>
  )
}
