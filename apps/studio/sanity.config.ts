import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { documentInternationalization } from '@sanity/document-internationalization'

import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'stay-meran-studio',

  projectId: String(process.env.SANITY_STUDIO_PROJECT_ID),
  dataset: String(process.env.SANITY_STUDIO_DATASET),

  plugins: [structureTool(), visionTool(), documentInternationalization({
    // Required configuration
    supportedLanguages: [
      { id: 'en', title: 'English' },
      { id: 'it', title: 'Italian' },
      { id: 'de', title: 'German' },
    ],
    schemaTypes: [
      'hero', 'accommodation'
      // 'testimonial', 'info'
    ],
  })],

  schema: {
    types: schemaTypes,
  },
})
