import '@styles/global.css'
import localFont from '@next/font/local'

const pretendard = localFont({ src: 'font/PretendardVariable.woff2' })

enum ColorTheme {
  Light = 'light',
  Dark = 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const colorTheme: ColorTheme = ColorTheme.Light
  return (
    <html className={pretendard.className}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>your-title</title>
      </head>
      <body className={`theme-${colorTheme}`}>{children}</body>
    </html>
  )
}
