import type { Metadata } from "next"
import "./globals.css"
import { AppWrapper } from '@/components/context'

export const metadata: Metadata = {
  title: "Creative",
  description: "A Front-end Developer",
}

export default function RootLayout({ children } : Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Scribble&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Madimi+One&family=Rubik+Scribble&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <AppWrapper>
          {children} 
        </AppWrapper>
      </body>
    </html>
  )
}
