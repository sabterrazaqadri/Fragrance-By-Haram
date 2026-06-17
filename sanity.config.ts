'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { apiVersion, dataset, projectId } from './src/sanity/env';
import { schema } from './src/sanity/schemaTypes';

export default defineConfig({
  name: 'fragrances-by-haram',
  title: 'Fragrances by Haram',
  basePath: '/studio',
  projectId: projectId || 'placeholder',
  dataset,
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});
