import React from 'react'
import './global.css'
import Header from '../../components/shared/header'
import { Questrial } from 'next/font/google'
import Footer from '@/components/shared/footer'

export const metadata = {
  description:
    'WOG Granulated seeding sludge is another product plays a vital role in water and treatment process by enhancing Digestors startup &ensure its best performance',
  title: 'Effluent Water Treatment Plant',
}

const questrial = Questrial({
  subsets: ['latin'],
  weight: '400',
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`${questrial.className} scroll-smooth`}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
