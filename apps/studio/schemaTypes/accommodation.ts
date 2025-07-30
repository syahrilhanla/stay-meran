import { defineField, defineType } from "sanity";

export const accommodationSchema = defineType({
  name: 'accommodation',
  title: 'Accommodation',
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
      name: 'description',
      title: 'Description',
      type: 'string',
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      placeholder: '£0',
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
});