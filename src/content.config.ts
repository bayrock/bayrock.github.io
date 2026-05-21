import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { url, z } from 'astro/zod';

// Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    backlink: z.object({
      url: z.string(),
      name: z.string()
    }),
  }),
});

const blurb = defineCollection({
  loader: glob({ base: './src/content/blurb', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    citation: z.object({
      url: z.string(),
      name: z.string()
    }),
    backlink: z.object({
      url: z.string(),
      name: z.string()
    })
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    projImage1: z.object({
      url: z.string(),
      alt: z.string()
    }),
    projImage2: z.object({
      url: z.string(),
      alt: z.string()
    }),
    platform: z.string(),
    stack: z.string(),
    website: z.string(),
    github: z.string(),
    backlink: z.object({
      url: z.string(),
      name: z.string()
    }),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = { blog, blurb, projects };
