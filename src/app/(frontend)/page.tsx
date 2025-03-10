/* eslint-disable @typescript-eslint/no-unused-vars */
import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './global.css'
import { Hero } from '@/components/section/hero-carousel'
import { Testimonial } from '@/components/section/testimonial'
import { Page } from '@/payload-types'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  //prettier-ignore
  const { docs: [page]} = await payload.find({ collection: 'pages' })
  console.log('page', page)

  // const renderBlock = (page: Page) => {
  //   switch (page) {
  //     case 'value':
  //       break

  //     default:
  //       break
  //   }
  // }
  return (
    <div className="w-full">
      <Hero />
      <Testimonial />
    </div>
  )
}
