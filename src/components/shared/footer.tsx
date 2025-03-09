import { getPayload } from 'payload'
import React from 'react'
import configPromise from '@payload-config'

async function Footer() {
  const payload = await getPayload({ config: configPromise })
  //prettier-ignore
  const { docs: [footer]} = await payload.find({ collection: 'footer' })
  return (
    <footer className="w-full py-10 bg-secondary">
      <h5 className="text-center !capitalize text-9xl text-white/50">
        {footer['primary-text'] || 'WOG GROUP'}
      </h5>
    </footer>
  )
}

export default Footer
