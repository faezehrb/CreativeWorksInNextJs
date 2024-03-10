import type { Metadata } from "next";
import "./globals.css";
import { AppWrapper } from '@/app/context'

export const metadata: Metadata = {
  title: "Creative",
  description: "A Front-end Developer",
};

export default function RootLayout({ children } : Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
