import type { Metadata } from "next"
import "./globals.css"
import { AppWrapper } from '@/components/context'

export const metadata: Metadata = {
  title: "Faezeh Roohbakhsh",
  description: "A Front-end Developer",
}

export default function RootLayout({ children } : Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=IM+Fell+DW+Pica+SC&family=NTR&display=swap" rel="stylesheet"></link>
        {/* <link href="https://fonts.googleapis.com/css2?family=NTR&display=swap" rel="stylesheet"></link> */}
      </head>
        <AppWrapper>
          {children} 
        </AppWrapper>
    </html>
  )
}
