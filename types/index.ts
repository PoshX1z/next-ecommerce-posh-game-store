import { ProductInputSchema } from "@/lib/validator";
import { z } from "zod";

export type IProductInput = z.infer<typeof ProductInputSchema>;

export type DataType = {
  products: IProductInput[];
  headerMenus: { name: string; href: string }[];
  homeCarousels: {
    name: string;
    image: string;
    href: string;
    buttonCaption: string;
  }[];
};
