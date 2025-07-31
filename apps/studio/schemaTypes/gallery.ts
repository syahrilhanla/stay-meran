import { defineType } from 'sanity';

export const gallerySchema = defineType({
  name: 'gallery',
  title: 'Gallery Section',
  type: 'document',
  fields: [
    {
      name: 'en_title',
      title: 'en_Title',
      type: 'string',
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    },
    {
      name: 'it_title',
      title: 'it_Title',
      type: 'string',
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    },
    {
      name: 'de_title',
      title: 'de_Title',
      type: 'string',
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    },
    {
      name: 'en_description',
      title: 'en_Description',
      type: 'text',
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    },
    {
      name: 'it_description',
      title: 'it_Description',
      type: 'text',
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    },
    {
      name: 'de_description',
      title: 'de_Description',
      type: 'text',
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    },
    {
      name: 'images',
      title: 'Images',
      type: 'image',
      options: {
        hotspot: true,
      },
    }
  ],
});

export const schemaTypes = [
  gallerySchema,
  // Add other schema types here as needed
];