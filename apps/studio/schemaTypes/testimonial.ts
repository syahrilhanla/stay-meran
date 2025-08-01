import { defineType } from 'sanity';

// Top-level testimonial document schema
export const testimonialSchema = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'reviewer', title: 'Reviewer', type: 'string', validation: Rule => Rule.required() },
    { name: 'en_text', title: 'English Text', type: 'text', validation: Rule => Rule.required() },
    { name: 'it_text', title: 'Italian Text', type: 'text', validation: Rule => Rule.required() },
    { name: 'de_text', title: 'German Text', type: 'text', validation: Rule => Rule.required() },
    { name: 'avatar', title: 'Avatar Image', type: 'image', options: { hotspot: true } },
  ],
});

export const sectionHeaderSchema = defineType({
  name: 'testimonialSectionHeader',
  title: 'Testimonial Section Header',
  type: 'document',
  fields: [
    {
      name: 'en_title',
      title: 'English Title',
      type: 'string',
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    },
    {
      name: 'it_title',
      title: 'Italian Title',
      type: 'string',
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    },
    {
      name: 'de_title',
      title: 'German Title',
      type: 'string',
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    },
    {
      name: 'en_description',
      title: 'English Description',
      type: 'text',
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    },
    {
      name: 'it_description',
      title: 'Italian Description',
      type: 'text',
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    },
    {
      name: 'de_description',
      title: 'German Description',
      type: 'text',
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    },
  ]
}
);

export const schemaTypes = [
  testimonialSchema,
  sectionHeaderSchema,
];