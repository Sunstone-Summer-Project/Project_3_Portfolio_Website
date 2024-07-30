import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import blog from './schemaTypes/blog'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'viv3sflq',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [...schemaTypes, blog],  
  }
});