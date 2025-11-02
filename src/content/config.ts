import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/blogs" }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(5),
      description: z.string(),
      category: z.string().min(5),
      images: z.array(image()),
    }),
});

const workCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/works" }),
  schema: ({ image }) =>
    z.object({
      company: z.string(),
      category: z.string(),
      cover: image(),
      images: z.array(image()),
      text: z.string(),
      info: z.object({
        title: z.string(),
        text: z.string(),
      }),
      aditionalInfo: z.object({
        title: z.string(),
        text: z.string(),
      }),
      aditionalText: z.string(),
    }),
});

export const collections = {
  blogs: blogCollection,
  works: workCollection,
};
