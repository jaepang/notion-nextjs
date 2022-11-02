import '@styles/global.css'
import { DetailedHTMLProps, LinkHTMLAttributes } from 'react'

enum ColorTheme {
  Light = 'light',
  Dark = 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const colorTheme: ColorTheme = ColorTheme.Light
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard-dynamic-subset.css"
          data-precedence="preload"
        />
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>your-title</title>
      </head>
      <body className={`theme-${colorTheme}`}>{children}</body>
    </html>
  )
}
