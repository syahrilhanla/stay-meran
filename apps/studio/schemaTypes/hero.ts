import { defineField, defineType } from "sanity";

export const heroSchema = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ]
})
export const schemaTypes = [
  heroSchema,
];