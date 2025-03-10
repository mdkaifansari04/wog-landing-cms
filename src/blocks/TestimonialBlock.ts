import { Block } from 'payload'

export const TestimonialBlock: Block = {
  slug: 'testimonial',
  fields: [
    {
      name: 'sectionHeading',
      type: 'text',
      label: 'Section Heading',
      required: true,
    },
    {
      name: 'testimonial',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'clientName',
          type: 'text',
          required: true,
        },
        {
          name: 'clientRole',
          type: 'text',
          required: true,
        },
        {
          name: 'message',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
