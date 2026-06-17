import { defineField, defineType } from 'sanity';

export const product = defineType({
  name: 'product',
  title: 'Fragrance',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'family',
      title: 'Olfactive Family',
      type: 'string',
      description: 'e.g. Aromatic Fougère',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'e.g. For Him / Unisex',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'productImage',
          fields: [
            {
              name: 'asset',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
            { name: 'alt', title: 'Alt text', type: 'string' },
            { name: 'isPrimary', title: 'Primary image', type: 'boolean' },
          ],
          preview: {
            select: { title: 'alt', media: 'asset' },
          },
        },
      ],
      validation: (R) => R.min(1),
    }),
    defineField({
      name: 'notes',
      title: 'Fragrance Notes',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'top', title: 'Top Notes', type: 'array', of: [{ type: 'string' }] },
        { name: 'heart', title: 'Heart Notes', type: 'array', of: [{ type: 'string' }] },
        { name: 'base', title: 'Base Notes', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
    defineField({
      name: 'pricing',
      title: 'Pricing',
      type: 'object',
      fields: [
        {
          name: 'basePrice',
          title: 'Base Price (PKR)',
          type: 'number',
          validation: (R) => R.required(),
        },
        {
          name: 'discountPercent',
          title: 'Discount %',
          type: 'number',
          initialValue: 0,
        },
      ],
    }),
    defineField({
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'size',
          fields: [
            { name: 'volume', title: 'Volume', type: 'string' },
            {
              name: 'concentration',
              title: 'Concentration',
              type: 'string',
              initialValue: 'Eau de Parfum',
            },
          ],
          preview: {
            select: { title: 'volume', subtitle: 'concentration' },
          },
        },
      ],
      initialValue: [{ volume: '50 ML', concentration: 'Eau de Parfum' }],
    }),
    defineField({
      name: 'badges',
      title: 'Badges',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Bestseller', value: 'bestseller' },
          { title: 'New', value: 'new' },
          { title: 'Sale', value: 'sale' },
        ],
      },
    }),
    defineField({ name: 'rating', title: 'Rating', type: 'number', initialValue: 4.8 }),
    defineField({
      name: 'reviewCount',
      title: 'Review Count',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'longevity',
      title: 'Longevity (hours)',
      type: 'number',
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'family', media: 'images.0.asset' },
  },
});
