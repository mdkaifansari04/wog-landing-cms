import React from 'react'
import { BackgroundLines } from '@/components/ui/background-lines'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function Hero() {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({ collection: 'pages' })

  const hero = docs?.[0]?.layout?.[0]

  if (!hero || hero.blockType !== 'hero-carousel') return null

  return (
    <BackgroundLines className="flex flex-col items-center justify-center w-full px-4">
      <h2 className="relative z-20 py-2 text-5xl font-normal tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white md:text-4xl lg:text-7xl md:py-10">
        {hero.heroText?.split(' ')[0] || ''} <br />
        {hero.heroText?.split(' ')[1] || ''}
      </h2>
      <p className="max-w-xl mx-auto text-sm text-center md:text-lg text-neutral-700 dark:text-neutral-400">
        {hero.heroSubText || ''}
      </p>
    </BackgroundLines>
  )
}
