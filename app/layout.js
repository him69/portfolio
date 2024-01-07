import { Inter } from 'next/font/google'
import './globals.css'



export const metadata = {
  title: 'my portfolio',
  description: 'himanshu portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
