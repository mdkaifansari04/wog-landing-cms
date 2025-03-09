import type { CollectionConfig } from 'payload'

export const Footer: CollectionConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'primary-text',
      type: 'text',
      label: 'Footer Label',
    },
  ],
}
