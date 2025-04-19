import { z } from "zod";
import { ProductInputSchema } from "../prisma/product.schema";
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
