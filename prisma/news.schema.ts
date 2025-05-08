import { z } from "zod";

export const NewsInputSchema = z.object({
  title: z.string().max(120, "Title must be less than 120 characters"),
  slug: z.string().min(3, "Title must be at least 3 characters"),
  briefDetails: z
    .string()
    .max(90, "Brief details must be less than 90 characters"),
  category: z.string().min(2, "Category is required"),
  image: z.string().url().or(z.string().startsWith("/images/")),
  content: z.string(),
});
