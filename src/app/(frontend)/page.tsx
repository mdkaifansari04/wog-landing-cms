/* eslint-disable @typescript-eslint/no-unused-vars */
import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './global.css'
import { Hero } from '@/components/section/hero-carousel'
import { Testimonial } from '@/components/section/testimonial'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`
  const {
    docs: [page],
  } = await payload.find({ collection: 'pages' })

  return (
    <div className="w-full h-[calc(100vh-5rem)] bg-blue-300">
      <Hero />
      <Testimonial />
    </div>
  )
}
