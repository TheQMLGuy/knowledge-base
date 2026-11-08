import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every .md file in src/content/kb is one Knowledge Base entry.
// Files starting with "_" are ignored (use them for drafts or notes to self).
const kb = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/kb' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { kb };
