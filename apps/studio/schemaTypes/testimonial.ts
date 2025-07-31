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

export const schemaTypes = [
  testimonialSchema,
];