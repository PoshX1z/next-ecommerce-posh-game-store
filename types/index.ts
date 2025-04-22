import { z } from "zod";
import { ProductInputSchema } from "../prisma/product.schema";
import { LoginUserSchema, RegisterUserSchema } from "@/prisma/user.schema";
export type IProductInput = z.infer<typeof ProductInputSchema>;
export type IRegisterUser = z.infer<typeof RegisterUserSchema>;
export type ILoginInUser = z.infer<typeof LoginUserSchema>;

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
