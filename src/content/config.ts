import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    screenshots: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    role: z.string().optional(),
    date: z.string().optional(),
    links: z
      .object({
        github: z.string().url().optional(),
        live: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };

