import { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero-carousel',
  fields: [
    {
      name: 'heroText',
      type: 'text',
      required: true,
    },
    {
      name: 'heroSubText',
      type: 'textarea',
      required: true,
    },
    {
      name: 'carouselImage',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'ctaButton',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'news',
      type: 'array',
      minRows: 2,
      maxRows: 2,
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
