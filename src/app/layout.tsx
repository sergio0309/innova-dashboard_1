import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Innova Dashboard',
  description: 'Este es el mejor curso de Next.j 13 para aprender',
}

interface Props {
  children: React.ReactNode
}

//RootLayout herada de children que es un componente de react
export default function RootLayout({children} : Props) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {children}
      </body>
    </html>
  )
}
