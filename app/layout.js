import './globals.css'
import './mediaQueries.css'


export const metadata = {
  title: 'Junior Developer Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  )
}
