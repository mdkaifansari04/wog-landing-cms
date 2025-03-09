import type { CollectionConfig } from 'payload'

export const Header: CollectionConfig = {
  slug: 'header',
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'header-cta',
      type: 'text',
      required: true,
    },
    {
      name: 'links',
      type: 'array',
      fields: [
        {
          name: 'menu',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          label: 'Custom URL',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
