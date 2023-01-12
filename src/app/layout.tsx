import RootProvider from './RootProvider'
import './styles/global.css'

enum ColorTheme {
  Light = 'light',
  Dark = 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const colorTheme: ColorTheme = ColorTheme.Light
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>your-title</title>
      </head>
      <body className={`theme-${colorTheme}`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
