import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function Testimonial() {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({ collection: 'pages' })

  const testimonialSection = docs?.[0]?.layout?.[1]

  if (!testimonialSection || testimonialSection.blockType !== 'testimonial') return null

  return (
    <section className="w-full mt-10">
      <h1 className="text-5xl font-medium text-center">
        {testimonialSection.sectionHeading || 'Testimonials'}
      </h1>
      <AnimatedTestimonials testimonials={testimonialSection.testimonial || []} />
    </section>
  )
}
