// Type validation on product.
import { z } from "zod";

export const ProductInputSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Name must be at least 3 characters"),
  image: z.string().url().or(z.string().startsWith("/images/")),
  platform: z.string().min(2, "Platform is required"),
  platformImageIcon: z
    .string()
    .url()
    .or(z.string().startsWith("/images/icons/")),
  edition: z.string().min(1, "Edition is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.coerce.number().positive("Price must be a positive number"),
  countInStock: z.coerce
    .number()
    .int()
    .nonnegative("Stock count must be non-negative"),
  numSales: z.coerce
    .number()
    .int()
    .nonnegative("Sales count must be non-negative"),
  releaseDate: z
    .string()
    .regex(/^\d{2}-\d{2}-\d{4}$/, "Release date must be in DD-MM-YYYY format"),
  developer: z.string().min(1, "Developer is required"),
  review: z.coerce
    .number()
    .int()
    .min(0, "Review score must be at least 0")
    .max(100, "Review score must be at most 100"),
  publisher: z.string().min(1, "Publisher is required"),
  delivery: z.string().min(1, "Delivery type is required"),
  tag: z.string().min(1, "Must be at least 2").optional(),
});
