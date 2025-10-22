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

export const collections = {
  blogs: blogCollection,
};
